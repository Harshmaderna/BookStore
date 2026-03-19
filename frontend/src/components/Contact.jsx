// import React from 'react'
// import Navbar from './Navbar'

// const Contact = () => {
//   return (
//    <>
//    <Navbar />
//    </>
//   )
// }

// export default Contact


import React, { useState } from 'react'
import Navbar from './Navbar'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message cannot be empty.'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1600)
  }

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

        .contact-root {
          font-family: 'Lato', sans-serif;
          background-color: #faf8f4;
          min-height: 100vh;
          color: #2c1f14;
        }

        /* ── Hero ── */
        .contact-hero {
          position: relative;
          background: linear-gradient(135deg, #2c1f14 0%, #5c3d2e 60%, #8b5e3c 100%);
          color: #f5ede0;
          text-align: center;
          padding: 90px 20px 70px;
          overflow: hidden;
        }
        .contact-hero::before {
          content: '@';
          font-family: 'Playfair Display', serif;
          font-size: 380px;
          color: rgba(255,255,255,0.04);
          position: absolute;
          top: -60px;
          right: -20px;
          line-height: 1;
          pointer-events: none;
        }
        .contact-hero-badge {
          display: inline-block;
          border: 1px solid rgba(245,237,224,0.35);
          border-radius: 20px;
          padding: 6px 18px;
          font-size: 12px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 22px;
          color: #e8c99a;
        }
        .contact-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .contact-hero p {
          max-width: 520px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(245,237,224,0.72);
          font-weight: 300;
        }

        /* ── Layout ── */
        .contact-body {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 680px) {
          .contact-body { grid-template-columns: 1fr; }
        }

        /* ── Info Panel ── */
        .info-panel {}
        .section-tag {
          display: inline-block;
          background: #f5ede0;
          color: #8b5e3c;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 14px;
          margin-bottom: 14px;
          font-weight: 700;
        }
        .info-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          margin: 0 0 14px;
          line-height: 1.2;
        }
        .info-desc {
          font-size: 0.97rem;
          line-height: 1.85;
          color: #5a4a3a;
          font-weight: 300;
          margin-bottom: 32px;
        }
        .contact-cards { display: flex; flex-direction: column; gap: 16px; }
        .contact-card {
          background: #fff;
          border: 1px solid #ede5d8;
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: box-shadow 0.22s;
        }
        .contact-card:hover { box-shadow: 0 6px 24px rgba(139,94,60,0.1); }
        .card-icon {
          font-size: 1.6rem;
          width: 46px;
          height: 46px;
          background: #f5ede0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .card-label {
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9a8878;
          margin-bottom: 2px;
        }
        .card-value { font-size: 0.95rem; font-weight: 700; color: #2c1f14; }

        /* ── Form Panel ── */
        .form-panel {
          background: #fff;
          border: 1px solid #ede5d8;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 8px 40px rgba(139,94,60,0.08);
        }
        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .form-sub {
          font-size: 0.88rem;
          color: #9a8878;
          margin-bottom: 28px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
        .form-group { margin-bottom: 18px; }
        .form-label {
          display: block;
          font-size: 0.78rem;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #8b5e3c;
          margin-bottom: 7px;
          font-weight: 700;
        }
        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 12px 15px;
          border: 1.5px solid #ede5d8;
          border-radius: 10px;
          font-size: 0.95rem;
          font-family: 'Lato', sans-serif;
          color: #2c1f14;
          background: #faf8f4;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
          outline: none;
        }
        .form-input:focus, .form-textarea:focus, .form-select:focus {
          border-color: #8b5e3c;
          box-shadow: 0 0 0 3px rgba(139,94,60,0.12);
          background: #fff;
        }
        .form-input.error, .form-textarea.error { border-color: #c0392b; }
        .form-textarea { height: 130px; resize: vertical; }
        .error-msg { font-size: 0.78rem; color: #c0392b; margin-top: 5px; }
        .submit-btn {
          width: 100%;
          background: #2c1f14;
          color: #f5ede0;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-size: 0.97rem;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: background 0.22s, transform 0.2s;
          margin-top: 6px;
        }
        .submit-btn:hover:not(:disabled) { background: #8b5e3c; transform: translateY(-2px); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* ── Success ── */
        .success-box {
          text-align: center;
          padding: 40px 20px;
        }
        .success-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
          animation: pop 0.4s ease;
        }
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .success-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #2c1f14;
        }
        .success-desc { font-size: 0.95rem; color: #7a6a5a; line-height: 1.7; }
        .reset-btn {
          margin-top: 22px;
          background: none;
          border: 1.5px solid #8b5e3c;
          color: #8b5e3c;
          padding: 10px 28px;
          border-radius: 40px;
          cursor: pointer;
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          transition: background 0.2s, color 0.2s;
        }
        .reset-btn:hover { background: #8b5e3c; color: #fff; }

        /* ── Map strip ── */
        .map-strip {
          background: #2c1f14;
          color: #f5ede0;
          text-align: center;
          padding: 50px 24px;
        }
        .map-strip h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        .map-strip p { font-size: 0.92rem; color: rgba(245,237,224,0.65); }
        .hours-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 30px;
        }
        .hour-pill {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 14px 22px;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .hour-day { color: #e8c99a; font-weight: 700; font-size: 0.78rem; letter-spacing: 1px; text-transform: uppercase; }
      `}</style>

      <div className="contact-root">

        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-badge">We'd Love to Hear From You</div>
          <h1>Get in <em>Touch</em></h1>
          <p>
            Have a question about an order, a book recommendation, or just
            want to talk about your favourite read? We're all ears.
          </p>
        </section>

        {/* Body */}
        <div className="contact-body">

          {/* Info */}
          <div className="info-panel">
            <span className="section-tag">Contact Info</span>
            <h2 className="info-title">Let's start a conversation</h2>
            <p className="info-desc">
              Our team typically responds within 24 hours. Feel free to reach
              out through any of the channels below.
            </p>

            <div className="contact-cards">
              {[
                { icon: '📍', label: 'Visit Us', value: 'fetehpur sikri, Agra, Uttar Pradesh' },
                { icon: '📧', label: 'Email', value: 'bhanuchaudhary20@gmail.com' },
                { icon: '📞', label: 'Phone', value: '+91 8077543106' },
                { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
              ].map(c => (
                <div key={c.label} className="contact-card">
                  <div className="card-icon">{c.icon}</div>
                  <div>
                    <div className="card-label">{c.label}</div>
                    <div className="card-value">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="form-panel">
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✉️</div>
                <div className="success-title">Message Sent!</div>
                <p className="success-desc">
                  Thank you for reaching out. We've received your message and
                  will get back to you within 24 hours.
                </p>
                <button className="reset-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-title">Send a Message</div>
                <div className="form-sub">All fields marked with * are required.</div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        className={`form-input${errors.name ? ' error' : ''}`}
                        type="text"
                        name="name"
                        placeholder="Aryan Sharma"
                        value={form.name}
                        onChange={handleChange}
                      />
                      {errors.name && <div className="error-msg">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        className={`form-input${errors.email ? ' error' : ''}`}
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="error-msg">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      className="form-select"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a topic…</option>
                      <option>Book Recommendation</option>
                      <option>Order Inquiry</option>
                      <option>Partnership / Bulk Order</option>
                      <option>Technical Issue</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className={`form-textarea${errors.message ? ' error' : ''}`}
                      name="message"
                      placeholder="Tell us what's on your mind…"
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div className="error-msg">{errors.message}</div>}
                  </div>

                  <button className="submit-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>

        {/* Hours Strip */}
        <div className="map-strip">
          <h3>Store Hours</h3>
          <p>Come visit us in Jaipur — we'd love to meet you in person.</p>
          <div className="hours-grid">
            {[
              { day: 'Mon – Fri', time: '9:00 AM – 8:00 PM' },
              { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
              { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
            ].map(h => (
              <div key={h.day} className="hour-pill">
                <div className="hour-day">{h.day}</div>
                <div>{h.time}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact