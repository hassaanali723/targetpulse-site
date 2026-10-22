// Background worker for EmailExtractorTool. It is a real module that webpack
// bundles with its imports, so it keeps working after the production build
// renames functions. The old version rebuilt the worker from
// extractEmails.toString(), which broke once the names were minified.
import { extractEmails, type ExtractionResult, type ExtractorOptions } from '@/lib/tools/emailExtractorCore'

export interface ExtractorWorkerRequest {
  id: number
  rawText: string
  options: ExtractorOptions
}

/**
 * The worker's reply. It carries no user-facing text: a failure has a stable
 * code plus the raw error for debugging, and the tool decides what to show in
 * the page's language (today it reruns the extraction on the main thread).
 */
export type ExtractorWorkerResponse =
  | { id: number; success: true; result: ExtractionResult }
  | { id: number; success: false; code: 'extract-failed'; detail: string }

// The project's TS lib is "dom", so `self` is typed as Window. Cast it to the
// worker side of the message API.
const ctx = self as unknown as Worker

ctx.onmessage = (e: MessageEvent<ExtractorWorkerRequest>) => {
  const { id, rawText, options } = e.data
  try {
    const ok: ExtractorWorkerResponse = { id, success: true, result: extractEmails(rawText, options) }
    ctx.postMessage(ok)
  } catch (err) {
    const failed: ExtractorWorkerResponse = { id, success: false, code: 'extract-failed', detail: String(err) }
    ctx.postMessage(failed)
  }
}
