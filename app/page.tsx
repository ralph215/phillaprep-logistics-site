export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.06),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_24%),linear-gradient(to_bottom,_#f8fafc,_#f5f7fb_38%,_#ffffff_100%)] text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-10 lg:px-16">
          <div className="md:hidden">
            <div className="rounded-2xl border border-neutral-200 bg-white/95 px-3 py-2.5 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src="data:image/webp;base64,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"
                  alt="PhilaPrep Logistics LLC logo"
                  className="h-7 w-auto shrink-0 rounded-xl bg-white p-1 ring-1 ring-neutral-200"
                />
                <div className="min-w-0">
                  <p className="text-[0.72rem] font-bold leading-tight tracking-[0.14em] text-neutral-900">
                    PHILAPREP LOGISTICS
                  </p>
                  <p className="mt-0.5 text-[0.72rem] leading-snug text-neutral-500">
                    Philadelphia, PA · FBA prep support
                  </p>
                </div>
              </div>

              <a
                href="#quote"
                className="mt-2.5 block w-full rounded-2xl bg-black px-4 py-3 text-center text-sm font-medium text-white shadow-[0_12px_24px_rgba(15,23,42,0.16)] transition hover:opacity-90"
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify-between md:gap-6">
            <div className="flex min-w-0 items-center gap-4">
              <img
                src="data:image/webp;base64,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"
                alt="PhilaPrep Logistics LLC logo"
                className="h-10 w-auto shrink-0 rounded-lg bg-white p-1 ring-1 ring-neutral-200"
              />
              <div className="min-w-0">
                <p className="text-sm font-bold tracking-[0.16em] text-neutral-900">
                  PHILAPREP LOGISTICS
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Philadelphia, PA · FBA prep support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-700 lg:flex">
                <a href="#services" className="hover:text-neutral-600">
                  Services
                </a>
                <a href="#process" className="hover:text-neutral-600">
                  How It Works
                </a>
                <a href="#quote" className="hover:text-neutral-600">
                  Quote
                </a>
              </nav>

              <a
                href="#quote"
                className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_rgba(255,255,255,0.9),_rgba(248,250,252,0.96)_45%,_rgba(241,245,249,0.95)_100%)] px-6 py-12 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-7rem] h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute bottom-[-7rem] left-1/3 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] xl:gap-16">
          <div className="max-w-2xl xl:max-w-[40rem]">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/85 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                PhilaPrep Logistics LLC · Philadelphia, PA
              </p>
            </div>

            <h1 className="max-w-3xl text-[2.75rem] font-bold tracking-tight leading-[0.98] text-neutral-950 [text-wrap:balance] sm:text-6xl lg:text-[4.25rem] lg:leading-[0.97] xl:text-[4.75rem] xl:leading-[0.96]">
              Reliable prep support for Amazon brands
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-700 sm:text-xl">
              We help Amazon brands stay organized with reliable receiving, labeling, bundling, inspection, and prep support.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="rounded-2xl bg-black px-6 py-3.5 text-center text-white shadow-[0_14px_30px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-neutral-300 bg-white/80 px-6 py-3.5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  eyebrow: "01",
                  title: "Fast turnaround",
                  description: "Built to keep prep moving without losing organization.",
                },
                {
                  eyebrow: "02",
                  title: "Clean handling",
                  description: "Detail-focused receiving, prep, and product handling.",
                },
                {
                  eyebrow: "03",
                  title: "Clear updates",
                  description: "Straightforward communication and next steps when needed.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.92))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.14)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-neutral-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.95))] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur lg:max-w-[42rem]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Trusted workflow
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-neutral-950 xl:text-[2rem]">
              A straightforward prep workflow for sellers who need consistency
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">{["Receiving","Labeling","Bundling","Outbound-ready"].map((tag) => (<span key={tag} className="rounded-full border border-slate-300 bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">{tag}</span>))}</div>

            <div className="mt-6 space-y-4">
              {[
                "Inventory is received, checked in, and organized",
                "Products move through inspection and prep requirements",
                "Labeling, bundling, and packaging are handled with care",
                "Finished units are organized for clean outbound movement",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/75 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur"
                >
                  <p className="text-sm font-medium text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-neutral-200 px-6 py-16 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "FBA Prep",
                description:
                  "Amazon-bound inventory prep support for sellers who need organized handling before inventory moves out.",
              },
              {
                title: "Labeling",
                description:
                  "Product, bag, bundle, and shipment labeling handled according to your prep requirements.",
              },
              {
                title: "Poly Bagging",
                description:
                  "Poly bagging support to help protect units, improve presentation, and support prep compliance.",
              },
              {
                title: "Bundling",
                description:
                  "Bundle prep for multi-item offers so grouped products stay organized, consistent, and ready to move.",
              },
              {
                title: "Inspection",
                description:
                  "Basic visual inspection support to help catch visible issues before inventory continues through prep.",
              },
              {
                title: "Inventory Receiving",
                description:
                  "Receiving and check-in support that keeps incoming inventory organized from the start of the prep process.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-t border-neutral-200 px-6 py-16 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Send your inventory details",
                description:
                  "Share the product type, prep requirements, and service details so the scope is clear from the start.",
              },
              {
                title: "We confirm the workflow",
                description:
                  "We review the request, confirm the prep workflow, and make sure both sides are aligned before work starts.",
              },
              {
                title: "We receive and process inventory",
                description:
                  "Inventory is received, organized, and moved through the prep process based on the agreed requirements.",
              },
              {
                title: "We prepare it for outbound movement",
                description:
                  "Once prep is finished, units are organized for the next step in outbound movement.",
              },
            ].map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-neutral-50 p-6">
                <p className="text-sm font-semibold text-neutral-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Why sellers choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Built to keep prep organized, clear, and dependable
            </h2>
            <p className="mt-4 text-neutral-600">
              Our process is built around organized handling, clear updates, and dependable prep support for sellers who need consistency.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Careful handling",
                description:
                  "Products are handled with attention so receiving, prep, and outbound steps stay organized.",
              },
              {
                title: "Clear communication",
                description:
                  "Clients get straightforward communication so next steps and prep expectations stay clear.",
              },
              {
                title: "Organized workflow",
                description:
                  "Inventory moves through a repeatable workflow instead of a rushed, improvised process.",
              },
              {
                title: "Turnaround-focused",
                description:
                  "The workflow is designed to keep prep moving and help outbound steps stay on track.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="border-t border-neutral-200 px-6 py-16 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Request a quote</h2>
          <p className="mt-4 text-neutral-600">
            Tell us about your products, prep requirements, and expected volume so we can review the request and follow up with the right next steps.
          </p>

          <form
            className="mt-8 grid gap-4"
            action="https://formspree.io/f/xlgollko"
            method="POST"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Business name"
                name="businessName"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-300 bg-white px-4 py-4">
                <p className="text-sm font-medium text-neutral-900">Services needed</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Select all services that apply.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "FBA Prep",
                    "Labeling",
                    "Poly Bagging",
                    "Bundling",
                    "Inspection",
                    "Inventory Receiving",
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-3 text-sm text-neutral-700">
                      <input
                        type="checkbox"
                        name="servicesNeeded"
                        value={service}
                        className="h-4 w-4 rounded border-neutral-300 text-black focus:ring-black"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              <input
                type="text"
                placeholder="Estimated monthly volume"
                name="monthlyVolume"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <textarea
              placeholder="Tell us about your products, prep requirements, and anything else we should know."
              rows={6}
              name="message"
              className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
            />

            <button
              type="submit"
              className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-[linear-gradient(180deg,_rgba(248,250,252,0.96),_rgba(255,255,255,1))] px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="data:image/webp;base64,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"
                alt="PhilaPrep Logistics LLC logo"
                className="h-10 w-auto rounded-lg bg-white p-1 ring-1 ring-neutral-200"
              />
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-neutral-800">
                  PHILAPREP LOGISTICS
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Organized prep support for Amazon brands.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Reliable receiving, labeling, bundling, inspection, and inventory prep support built around clean handling and straightforward communication.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.94))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <a href="#services" className="hover:text-neutral-900">
                Services
              </a>
              <a href="#process" className="hover:text-neutral-900">
                How It Works
              </a>
              <a href="#quote" className="hover:text-neutral-900">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.94))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-neutral-600">
              <p>Philadelphia, PA</p>
              <p>Phone: 609-360-6554</p>
              <p>Email: burgosrafael2026@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-neutral-200/80 pt-6">
          <p className="text-sm text-neutral-500">
            © 2026 PhilaPrep Logistics LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}