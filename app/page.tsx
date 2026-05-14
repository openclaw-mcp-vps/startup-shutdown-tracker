export default function Home() {
  const faqs = [
    {
      q: "What signals does the tracker monitor?",
      a: "We track funding gaps, layoff announcements, leadership changes, social media sentiment, and news coverage to compute a health score for each startup."
    },
    {
      q: "How quickly are alerts delivered?",
      a: "Alerts are sent in real-time via email and webhook as soon as a significant health signal is detected — typically within minutes of the source event."
    },
    {
      q: "Can I monitor specific startups or industries?",
      a: "Yes. You can build a custom watchlist by company name, industry vertical, funding stage, or geography and receive targeted alerts for only what matters to you."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Startup Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Early Warning System for<br />
          <span className="text-[#58a6ff]">Startup Shutdowns & Acquisitions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor funding gaps, layoffs, and leadership changes across thousands of startups.
          Get real-time alerts before the news breaks — so you can act first.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Signal badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["Funding Gaps", "Layoff Signals", "Leadership Changes", "Acquisition Alerts", "Sentiment Analysis", "Webhook Notifications"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-8">Everything you need to stay ahead</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor unlimited startups",
              "Real-time email & webhook alerts",
              "ML-powered health score dashboard",
              "Funding gap & layoff detection",
              "Leadership change tracking",
              "Custom watchlists & filters",
              "CSV & API data export"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Startup Shutdown Tracker. All rights reserved.
      </footer>
    </main>
  );
}
