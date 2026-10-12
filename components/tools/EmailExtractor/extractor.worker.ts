// Background worker for EmailExtractorTool. It is a real module that webpack
// bundles with its imports, so it keeps working after the production build
// renames functions. The old version rebuilt the worker from
// extractEmails.toString(), which broke once the names were minified.
import { extractEmails, type ExtractorOptions } from '@/lib/tools/emailExtractorCore'

// The project's TS lib is "dom", so `self` is typed as Window. Cast it to the
// worker side of the message API.
const ctx = self as unknown as Worker

ctx.onmessage = (e: MessageEvent<{ id: number; rawText: string; options: ExtractorOptions }>) => {
  const { id, rawText, options } = e.data
  try {
    ctx.postMessage({ id, success: true, result: extractEmails(rawText, options) })
  } catch (err) {
    ctx.postMessage({ id, success: false, error: String(err) })
  }
}
