import Link from "next/link";

const SITE_VERSION = "0.0.2" as const;

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
              <span className="logo-subtitle">Home for docs & links</span>
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
            <div className="hero-left">
              <p className="hero-label">Apollo Hub · Overview</p>
              <h1 className="hero-title">
                A calm starting point for your team’s internal work.
              </h1>
              <p className="hero-subtitle">
                Apollo Hub gives you a single, dark home screen for the
                documents and internal links your team relies on every day. No
                feeds, no timelines—just a predictable place to start and
                resume work.
              </p>

              <div className="hero-actions">
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
                  Learn about Apollo Documents
                </button>
              </div>

              <div className="hero-pills">
                <span className="hero-pill">Docs first, apps next</span>
                <span className="hero-pill">Minimal, dark interface</span>
                <span className="hero-pill">Built for focused teams</span>
              </div>
            </div>

            <div className="hero-right" aria-label="Apollo Hub summary">
              <div className="hero-summary">
                <div className="hero-summary-header">
                  <span className="hero-summary-title">How Apollo Hub fits in</span>
                  <span className="hero-summary-version">
                    v{SITE_VERSION}
                  </span>
                </div>

                <div className="hero-summary-row">
                  <p className="hero-summary-heading">What it is</p>
                  <p className="hero-summary-text">
                    A simple, opinionated home for your documents and the small
                    set of internal apps you pin to it.
                  </p>
                </div>
                <div className="hero-summary-row">
                  <p className="hero-summary-heading">What it is not</p>
                  <p className="hero-summary-text">
                    Not a workspace OS or chat client—Apollo Hub stays narrow,
                    so it stays calm and reliable.
                  </p>
                </div>
                <div className="hero-summary-row">
                  <p className="hero-summary-heading">Where it starts</p>
                  <p className="hero-summary-text">
                    With Apollo Documents as the primary surface for writing,
                    documenting, and sharing internal knowledge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Who uses Apollo Hub</h2>
              <p className="section-subtitle">
                Teams that want a consistent, low-noise home screen instead of
                yet another busy dashboard.
              </p>
            </div>

            <div className="section-columns">
              <div className="section-column">
                <h3 className="section-column-title">Product &amp; operations</h3>
                <p className="section-column-text">
                  Keep specs, runbooks, and templates where everyone expects to
                  find them—one click from the home view.
                </p>
              </div>
              <div className="section-column">
                <h3 className="section-column-title">Engineering &amp; data</h3>
                <p className="section-column-text">
                  Keep docs, decision records, and key dashboards at the top of
                  the stack, instead of buried in chat history.
                </p>
              </div>
              <div className="section-column">
                <h3 className="section-column-title">Leaders &amp; ICs</h3>
                <p className="section-column-text">
                  Give everyone—from execs to ICs—the same starting point for
                  planning, writing, and catching up.
                </p>
              </div>
            </div>
          </section>

          <section className="section section-tight">
            <div className="section-header">
              <h2 className="section-title">How Apollo Hub shows up day to day</h2>
            </div>

            <div className="section-rows">
              <div className="section-row">
                <h3 className="section-row-title">Start from the same page</h3>
                <p className="section-row-text">
                  Open your day directly into the hub: pinned docs, primary
                  links, and the core apps your team agreed on.
                </p>
              </div>
              <div className="section-row">
                <h3 className="section-row-title">Keep docs front and center</h3>
                <p className="section-row-text">
                  Make Apollo Documents the default for writing, documentation,
                  and internal notes, visible from the home view.
                </p>
              </div>
              <div className="section-row">
                <h3 className="section-row-title">Grow the hub gradually</h3>
                <p className="section-row-text">
                  Start with documents and a small set of links. Add more apps
                  only when they genuinely earn a place on the home screen.
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
            <span className="footer-note">
              Styled to sit next to Apollo Documents.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
