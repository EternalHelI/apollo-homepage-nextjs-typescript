import Link from "next/link";

const SITE_VERSION = "0.0.0" as const;

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
              <span className="logo-subtitle">Workspace OS</span>
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
            <div className="hero-content">
              <div className="hero-pill">
                <span className="hero-pill-indicator" />
                <span className="hero-pill-text">
                  Speed-first, privacy-first workspace hub
                </span>
              </div>

              <h1 className="hero-title">
                Bring your work into
                <span className="hero-title-gradient"> one focused hub.</span>
              </h1>

              <p className="hero-subtitle">
                Apollo Hub connects your documents, apps, and workflows into a
                single, distraction-light workspace. Built for teams that move
                fast and care about security, control, and clarity.
              </p>

              <div className="hero-cta">
                <button
                  type="button"
                  className="btn btn-primary"
                  aria-disabled="true"
                >
                  Explore Apollo Hub
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  aria-disabled="true"
                >
                  Talk to our team
                </button>
              </div>

              <div className="hero-meta">
                <span className="hero-meta-item">
                  • Unified workspace for teams
                </span>
                <span className="hero-meta-item">
                  • Opinionated for focus, not noise
                </span>
                <span className="hero-meta-item">
                  • Designed for privacy-sensitive organizations
                </span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-header">
                <span className="hero-panel-label">Snapshot</span>
                <span className="hero-panel-tag">Apollo Hub · v{SITE_VERSION}</span>
              </div>

              <div className="hero-panel-grid">
                <div className="hero-card">
                  <h3 className="hero-card-title">What it is</h3>
                  <p className="hero-card-body">
                    A central hub that keeps your documents, tasks, and
                    knowledge in one place—without turning into an endless feed
                    of noise.
                  </p>
                </div>

                <div className="hero-card">
                  <h3 className="hero-card-title">What it replaces</h3>
                  <p className="hero-card-body">
                    Sprawling folders, scattered tools, and “where is that
                    link?” threads. Apollo Hub gives you a single home for work
                    that matters.
                  </p>
                </div>

                <div className="hero-card">
                  <h3 className="hero-card-title">How it feels</h3>
                  <p className="hero-card-body">
                    Fast, calm, and predictable. Dark UI by default, tuned for
                    long work sessions and teams that live in their tools.
                  </p>
                </div>

                <div className="hero-card">
                  <h3 className="hero-card-title">Where it starts</h3>
                  <p className="hero-card-body">
                    With Apollo Documents—our opinionated editor for
                    focus-heavy writing, documentation, and internal knowledge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Who Apollo Hub is for</h2>
              <p className="section-subtitle">
                Built for teams that need a reliable internal system of record,
                not another social feed.
              </p>
            </div>

            <div className="audience-grid">
              <div className="audience-card">
                <h3 className="audience-title">Product &amp; ops teams</h3>
                <p className="audience-body">
                  Centralize specs, runbooks, and internal docs so your team
                  always knows where to look and what is current.
                </p>
              </div>
              <div className="audience-card">
                <h3 className="audience-title">Engineering &amp; data orgs</h3>
                <p className="audience-body">
                  Keep technical knowledge, decisions, and documentation in a
                  hub that respects structure, ownership, and version history.
                </p>
              </div>
              <div className="audience-card">
                <h3 className="audience-title">Security-minded companies</h3>
                <p className="audience-body">
                  For organizations that care where data lives, who can see it,
                  and how it flows between tools.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Why teams choose Apollo Hub</h2>
            </div>

            <div className="value-grid">
              <div className="value-card">
                <h3 className="value-title">Designed for focus</h3>
                <p className="value-body">
                  A calm, dark interface tuned for deep work—not for passive
                  consumption. Less chrome, more content.
                </p>
              </div>
              <div className="value-card">
                <h3 className="value-title">Structured by default</h3>
                <p className="value-body">
                  Opinionated information architecture helps teams avoid chaos
                  while still staying flexible enough to grow with you.
                </p>
              </div>
              <div className="value-card">
                <h3 className="value-title">Ready to extend</h3>
                <p className="value-body">
                  Apollo Hub starts with docs and gradually expands to apps,
                  automations, and integrations—on your timeline.
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
            <span className="footer-note">Focused work, one hub.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
