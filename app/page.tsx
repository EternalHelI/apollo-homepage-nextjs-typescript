import Link from "next/link";

const SITE_VERSION = "0.0.1" as const;

export default function HomePage() {
  return (
    <div className="page">
      <div className="page-shell">
        <header className="navbar">
          <Link href="/" className="logo">
            <div className="logo-mark" aria-hidden="true">
              <span>AH</span>
            </div>
            <div className="logo-text">
              <span className="logo-title">Apollo Hub</span>
              <span className="logo-subtitle">Team home</span>
            </div>
          </Link>

          <nav className="nav" aria-label="Primary">
            <ul className="nav-list">
              <li>
                <Link href="/" className="nav-link nav-link-primary">
                  Home
                </Link>
              </li>
              <li>
                <button type="button" className="nav-link" aria-disabled="true">
                  Our Team
                </button>
              </li>
              <li className="nav-dropdown">
                <button
                  type="button"
                  className="nav-link nav-link-with-caret"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Apps
                  <span className="nav-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div className="nav-dropdown-menu" role="menu">
                  <button
                    type="button"
                    className="nav-dropdown-item"
                    aria-disabled="true"
                  >
                    Documents
                  </button>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link nav-link-outline"
                  aria-disabled="true"
                >
                  Signup / Login
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <section className="hero">
            <div className="hero-main">
              <p className="hero-kicker">
                Dark, minimal starting point for your team’s work.
              </p>
              <h1 className="hero-title">
                Keep internal docs and links aligned in one calm place.
              </h1>
              <p className="hero-subtitle">
                Apollo Hub gives your team a simple home screen for documents,
                key links, and internal tools—without feeds, timelines, or
                clutter. Open your day to the same clear starting point, every
                time.
              </p>

              <div className="hero-cta">
                <button
                  type="button"
                  className="btn btn-primary"
                  aria-disabled="true"
                >
                  Preview the hub
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  aria-disabled="true"
                >
                  Get in touch
                </button>
              </div>

              <div className="hero-meta-row">
                <span className="hero-meta-item">
                  Built for product, engineering, and ops
                </span>
                <span className="hero-meta-item">
                  Optimized for long, focused sessions
                </span>
                <span className="hero-meta-item">
                  Designed for docs first, apps next
                </span>
              </div>
            </div>

            <div className="hero-aside" aria-label="Apollo Hub overview">
              <div className="hero-aside-shell">
                <div className="hero-aside-header">
                  <span className="hero-aside-label">At a glance</span>
                  <span className="hero-aside-version">
                    Apollo Hub · v{SITE_VERSION}
                  </span>
                </div>
                <ul className="hero-aside-list">
                  <li>
                    <p className="hero-aside-heading">What Apollo Hub is</p>
                    <p className="hero-aside-text">
                      A centered home view that holds the docs and internal
                      links your team actually uses daily.
                    </p>
                  </li>
                  <li>
                    <p className="hero-aside-heading">What it is not</p>
                    <p className="hero-aside-text">
                      Not a social feed, chat client, or “workspace OS”—just a
                      deliberately small surface for important work.
                    </p>
                  </li>
                  <li>
                    <p className="hero-aside-heading">Where it starts</p>
                    <p className="hero-aside-text">
                      With Apollo Documents and a small set of apps that you
                      pin to the hub as your source of truth.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Who Apollo Hub is for</h2>
              <p className="section-subtitle">
                Designed for teams who want a calm, predictable place to start
                their day.
              </p>
            </div>

            <div className="audience-grid">
              <div className="audience-item">
                <h3 className="audience-title">Product &amp; operations</h3>
                <p className="audience-text">
                  Centralize specs, runbooks, and templates so the team is not
                  hunting through chats and folders.
                </p>
              </div>
              <div className="audience-item">
                <h3 className="audience-title">Engineering &amp; data</h3>
                <p className="audience-text">
                  Keep docs, decision records, and dashboards close together so
                  context is always one click away.
                </p>
              </div>
              <div className="audience-item">
                <h3 className="audience-title">Leaders &amp; ICs</h3>
                <p className="audience-text">
                  Give everyone the same quiet home screen, whether they are
                  planning, writing, or just catching up.
                </p>
              </div>
            </div>
          </section>

          <section className="section section-tight">
            <div className="section-header">
              <h2 className="section-title">How teams use Apollo Hub</h2>
            </div>

            <div className="usage-grid">
              <div className="usage-item">
                <h3 className="usage-title">Start the day from one page</h3>
                <p className="usage-text">
                  Open to the same calm starting view: today’s docs, key links,
                  and the apps your team relies on.
                </p>
              </div>
              <div className="usage-item">
                <h3 className="usage-title">Keep docs front and center</h3>
                <p className="usage-text">
                  Use Apollo Documents as the default surface for writing,
                  documentation, and internal notes.
                </p>
              </div>
              <div className="usage-item">
                <h3 className="usage-title">Grow into more apps over time</h3>
                <p className="usage-text">
                  Start with docs and a few pinned tools, then layer in more
                  apps as your hub becomes the obvious home screen.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-left">
            <span className="footer-brand">Apollo Hub</span>
            <span className="footer-dot">·</span>
            <span className="footer-version">Version {SITE_VERSION}</span>
          </div>
          <div className="footer-right">
            <span className="footer-note">A dark, minimal home for your team.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
