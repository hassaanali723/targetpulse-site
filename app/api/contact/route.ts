import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send notification email using Nodemailer if SMTP env vars are set
    try {
      const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SUPPORT_TO_EMAIL } = process.env
      
      if (SMTP_HOST && SMTP_PORT && (SMTP_USER || SMTP_PASS)) {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT) || 587,
          secure: false,
          auth: SMTP_USER || SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
        })

        const to = SUPPORT_TO_EMAIL || 'info@targetpulse.net'
        const html = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap">${message}</pre>
          
          <hr>
          <p><em>This message was sent from the TargetPulse website contact form.</em></p>
        `

        await transporter.sendMail({
          from: SMTP_USER || 'no-reply@targetpulse.net',
          to,
          subject: `New Contact Form Submission from ${name}`,
          html,
        })
      } else {
        console.warn('SMTP not configured; contact email not sent')
      }
    } catch (emailError) {
      console.error('Failed to send contact email:', emailError)
      // Don't fail the entire request if email fails
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}