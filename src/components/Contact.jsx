import React, { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

/**
 * Contact.jsx (updated)
 * - Removed Facebook
 * - Added WhatsApp, Instagram, LinkedIn with icons (react-icons)
 * - Existing form + validation + /api/contact POST preserved
 */

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success'|'error', text: '' }

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function validate(){
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim()) return 'Please enter your email.'
    // basic email check
    const re = /\S+@\S+\.\S+/
    if (!re.test(form.email)) return 'Please enter a valid email.'
    if (!form.message.trim()) return 'Please enter a message.'
    return null
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus(null)
    const err = validate()
    if (err){
      setStatus({ type: 'error', text: err })
      return
    }

    setLoading(true)
    try {
      // change this URL to your actual serverless/Express endpoint if needed
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (res.ok){
        setStatus({ type: 'success', text: 'Thanks — your message has been sent. We will reply soon.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        let msg = 'Something went wrong. Please try again later.'
        try {
          const data = await res.json()
          if (data?.message) msg = data.message
        } catch {}
        setStatus({ type: 'error', text: msg })
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Network error. Please check your connection.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-12">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <div>
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="text-gray-600 mt-2">Questions, catering requests, or partnership inquiries — we'd love to hear from you.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-describedby="contact-form-desc">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Your name"
                aria-required="true"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="you@domain.com"
                type="email"
                aria-required="true"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-2 w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Tell us about your request"
                aria-required="true"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className={`inline-flex items-center px-5 py-3 rounded-md text-white bg-indigo-600 hover:opacity-95 disabled:opacity-60`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <a
                href="mailto:hello@satvify.example?subject=Contact%20from%20website"
                className="text-sm text-indigo-600 hover:underline"
                aria-label="Send email"
              >
                Or email us directly
              </a>
            </div>

            {status && (
              <div
                role="status"
                className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
              >
                {status.text}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <aside className="p-6 border rounded-lg bg-gray-50">
          <div className="font-semibold">Visit us</div>
          <div className="text-sm text-gray-600 mt-2">B1/702, Vijaipur Colony, DLF Mypad, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</div>

          <div className="mt-4">
            <div className="font-semibold">Opening hours</div>
            <div className="text-sm text-gray-600">Mon–Sun: 8:00 AM — 11:00 PM</div>
          </div>

          <div className="mt-4">
            <div className="font-semibold">Phone</div>
            <div className="text-sm text-gray-600">
              <a href="tel:+919971890508" className="hover:underline">+91 99718 90508</a>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
            <a
              href="https://wa.me/919971890508?text=Hi%20Satvify"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-green-50"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="text-green-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/satvify_your_soul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // replace with actual handle
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-pink-50"
              aria-label="Visit Instagram"
            >
              <FaInstagram className="text-pink-500" />
              <span className="hidden sm:inline">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/company/satvify/posts/?feedView=all" // replace with actual page
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-blue-50"
              aria-label="Visit LinkedIn"
            >
              <FaLinkedin className="text-blue-700" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            <div><strong>Pro tip:</strong> For catering inquiries, tell us the date, number of people, and any dietary needs in the message.</div>
          </div>
        </aside>
      </div>
    </section>
  )
}
