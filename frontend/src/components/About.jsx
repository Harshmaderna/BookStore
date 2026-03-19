// import React from 'react'
// import Navbar from './Navbar'

// const About = () => {
//   return (
//     <>
//     <Navbar />
//     </>
//   )
// }

// export default About;

import React from 'react'
import Navbar from './Navbar'

const About = () => {
  const teamMembers = [
    {
      name: "Aryan Sharma",
      role: "Founder & Curator",
      emoji: "🧠",
      desc: "Passionate reader with 10+ years in literary curation.",
    },
    {
      name: "Priya Mehta",
      role: "Head of Collections",
      emoji: "📖",
      desc: "Expert in rare and academic book sourcing.",
    },
    {
      name: "Rohan Das",
      role: "Tech & Experience Lead",
      emoji: "💻",
      desc: "Building seamless digital reading experiences.",
    },
  ]

  const stats = [
    { value: "12,000+", label: "Books Available" },
    { value: "8,500+", label: "Happy Readers" },
    { value: "150+", label: "Authors Featured" },
    { value: "15+", label: "Genres Covered" },
  ]

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

        .about-root {
          font-family: 'Lato', sans-serif;
          background-color: #faf8f4;
          min-height: 100vh;
          color: #2c1f14;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          background: linear-gradient(135deg, #2c1f14 0%, #5c3d2e 60%, #8b5e3c 100%);
          color: #f5ede0;
          text-align: center;
          padding: 100px 20px 80px;
          overflow: hidden;
        }
        .about-hero::before {
          content: '"';
          font-family: 'Playfair Display', serif;
          font-size: 420px;
          color: rgba(255,255,255,0.04);
          position: absolute;
          top: -80px;
          left: -30px;
          line-height: 1;
          pointer-events: none;
        }
        .about-hero-badge {
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
        .about-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 700;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .about-hero p {
          max-width: 560px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(245,237,224,0.75);
          font-weight: 300;
        }
        .about-hero-scroll {
          margin-top: 48px;
          font-size: 22px;
          animation: bounce 1.8s infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* ── Stats ── */
        .about-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
          background: #fff;
          border-bottom: 1px solid #ede5d8;
        }
        .stat-item {
          flex: 1 1 160px;
          text-align: center;
          padding: 36px 20px;
          border-right: 1px solid #ede5d8;
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #8b5e3c;
        }
        .stat-label {
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9a8878;
          margin-top: 6px;
        }

        /* ── Section Wrapper ── */
        .about-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 70px 24px;
        }
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
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 700;
          margin: 0 0 20px;
          line-height: 1.2;
        }
        .section-body {
          font-size: 1.02rem;
          line-height: 1.85;
          color: #5a4a3a;
          font-weight: 300;
        }
        .section-body + .section-body { margin-top: 16px; }

        /* ── Story Grid ── */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 640px) { .story-grid { grid-template-columns: 1fr; } }
        .story-visual {
          background: linear-gradient(145deg, #f5ede0, #ede0c8);
          border-radius: 16px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 90px;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(139,94,60,0.12);
        }

        /* ── Values ── */
        .values-bg {
          background: #2c1f14;
          color: #f5ede0;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }
        .value-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 28px 24px;
          transition: background 0.25s;
        }
        .value-card:hover { background: rgba(255,255,255,0.1); }
        .value-icon { font-size: 2rem; margin-bottom: 14px; }
        .value-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #e8c99a;
        }
        .value-desc { font-size: 0.92rem; line-height: 1.7; color: rgba(245,237,224,0.65); }

        /* ── Team ── */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }
        .team-card {
          background: #fff;
          border: 1px solid #ede5d8;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .team-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(139,94,60,0.12); }
        .team-avatar {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #f5ede0, #e8c99a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 16px;
        }
        .team-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .team-role {
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8b5e3c;
          margin-bottom: 12px;
        }
        .team-desc { font-size: 0.9rem; line-height: 1.65; color: #7a6a5a; }

        /* ── CTA ── */
        .about-cta {
          text-align: center;
          padding: 70px 24px;
          background: linear-gradient(135deg, #f5ede0, #faf8f4);
          border-top: 1px solid #ede5d8;
        }
        .cta-btn {
          display: inline-block;
          background: #2c1f14;
          color: #f5ede0;
          padding: 14px 36px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 0.95rem;
          letter-spacing: 1px;
          margin-top: 24px;
          cursor: pointer;
          border: none;
          transition: background 0.22s, transform 0.22s;
        }
        .cta-btn:hover { background: #8b5e3c; transform: translateY(-2px); }
        .divider {
          border: none;
          border-top: 1px solid #ede5d8;
          margin: 0;
        }
      `}</style>

      <div className="about-root">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-badge">Est. 2024 · Jaipur, India</div>
          <h1>Stories That<br /><em>Change Lives</em></h1>
          <p>
            We're a passionate team of book lovers building the most welcoming
            bookstore experience — from timeless classics to cutting-edge reads.
          </p>
          <div className="about-hero-scroll">↓</div>
        </section>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <section className="about-section">
          <div className="story-grid">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">Born from a love of books</h2>
              <p className="section-body">
                What began as a small shelf of hand-picked favourites has grown into
                a curated collection of over 12,000 titles. We started BookStore
                because we believed that finding the perfect book should feel like
                an adventure, not a chore.
              </p>
              <p className="section-body" style={{ marginTop: 16 }}>
                Our platform is built in React and designed with care — so whether
                you're hunting for a midnight thriller or a gentle poetry collection,
                the experience feels seamless and joyful.
              </p>
            </div>
            <div className="story-visual">📚</div>
          </div>
        </section>

        <hr className="divider" />

        {/* Values */}
        <div className="values-bg">
          <section className="about-section" style={{ color: '#f5ede0' }}>
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#e8c99a' }}>What We Believe</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              {[
                { icon: '🌍', title: 'Accessibility', desc: 'Great books should be available to everyone, regardless of location or budget.' },
                { icon: '🔍', title: 'Curation', desc: 'Every title is hand-picked. We value quality over quantity in every genre.' },
                { icon: '🤝', title: 'Community', desc: 'We foster a community of readers who share, discuss, and grow together.' },
                { icon: '🌱', title: 'Growth', desc: 'We believe reading is one of the most powerful tools for personal growth.' },
              ].map(v => (
                <div key={v.title} className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Team */}
        <section className="about-section">
          <span className="section-tag">The People</span>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-body">
            We're a small but mighty crew driven by curiosity, coffee, and a
            deep love for the written word.
          </p>
          <div className="team-grid">
            {teamMembers.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.emoji}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="about-cta">
          <span className="section-tag">Start Reading</span>
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to find your next favourite book?
          </h2>
          <button className="cta-btn">Browse the Collection →</button>
        </div>

      </div>
    </>
  )
}

export default About