"use client";

import Link from "next/link";
import { useState } from "react";

const SITE_VERSION = "0.0.5" as const;

export default function HomePage() {
  const [whoOpen, setWhoOpen] = useState(false);
  const [howOpen, setHowOpen] = useState(false);

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
              <li className="nav-dropdown nav-dropdown-settings">
                <button
                  type="button"
                  className="nav-icon-button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Settings"
                >
                  <img src="/icons/gear.svg" alt="" className="nav-icon" />
                </button>
                <div
                  className="nav-dropdown-menu nav-dropdown-menu-right"
                  role="menu"
                >
                  <button
                    type="button"
                    className="nav-dropdown-item"
                    aria-disabled="true"
                  >
                    Settings (coming soon)
                  </button>
                </div>
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
                Apollo Hub is an open-source productivity suite designed to deliver
                high-performance tools without compromising user security. It offers
                a privacy-first ecosystem where speed and transparency empower users
                to manage their workflows with total peace of mind.
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
            </div>

            <div className="hero-right" aria-label="Apollo Hub summary">
              <div className="hero-summary">
                <div className="hero-summary-header">
                  <span className="hero-summary-title">How Apollo Hub fits in</span>
                </div>

                <div className="hero-summary-row">
                  <p className="hero-summary-heading">What it is</p>
                  <p className="hero-summary-text">
                    Apollo Hub is a high-performance, open-source productivity suite
                    built to give you total data sovereignty.
                  </p>
                </div>
                <div className="hero-summary-row">
                  <p className="hero-summary-heading">Where it starts</p>
                  <p className="hero-summary-text">
                    The platform launches with a streamlined, privacy-focused
                    document system designed for secure and rapid content creation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <button
              type="button"
              className="section-toggle"
              onClick={() => setWhoOpen((open) => !open)}
              aria-expanded={whoOpen}
            >
              <div className="section-toggle-text">
                <h2 className="section-title">Who uses Apollo Hub</h2>
              </div>
              <img
                src={whoOpen ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"}
                alt={whoOpen ? "Collapse section" : "Expand section"}
                className="section-toggle-icon"
              />
            </button>

            <div
              className={`section-collapse ${
                whoOpen ? "section-collapse-open" : ""
              }`}
            >
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
            </div>
          </section>

          <section className="section section-tight">
            <button
              type="button"
              className="section-toggle"
              onClick={() => setHowOpen((open) => !open)}
              aria-expanded={howOpen}
            >
              <div className="section-toggle-text">
                <h2 className="section-title">How Apollo Hub shows up day to day</h2>
              </div>
              <img
                src={howOpen ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"}
                alt={howOpen ? "Collapse section" : "Expand section"}
                className="section-toggle-icon"
              />
            </button>

            <div
              className={`section-collapse ${
                howOpen ? "section-collapse-open" : ""
              }`}
            >
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
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-left">
            <span className="footer-brand">Apollo Hub</span>
            <span className="footer-note">Open-source productivity suite.</span>
          </div>
          <div className="footer-right">
            <span className="footer-version-pill">v{SITE_VERSION}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
