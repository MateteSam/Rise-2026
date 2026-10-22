import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GWFSN_INFO } from "../lib/content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      {
        title: "Contact GWFSN — Global Women's Future Skills Network",
      },
      {
        name: "description",
        content:
          "Contact the GWFSN team for magazine enquiries, event questions or proposals for collaboration. Email: rise@gwfsn.org, Phone: +27 83 209 1905.",
      },
      { property: "og:title", content: "Contact GWFSN" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
    consentMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#ff7836]">
            Get In Touch / Direct Communications
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Contact <span className="text-[#9da7ff]">GWFSN.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            For magazine enquiries, event questions or proposals for collaboration, contact the
            GWFSN team. Please include a clear subject and a brief explanation of your enquiry so it
            can be directed appropriately.
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Direct Details Column */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
                Official Channels
              </p>
              <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.03em]">
                Direct Contacts
              </h2>
            </div>

            <div className="border-2 border-[#101010] bg-white divide-y-2 divide-[#101010]">
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#293dff]">
                  Email
                </p>
                <a
                  href={`mailto:${GWFSN_INFO.email}`}
                  className="mt-2 block text-lg font-bold text-[#17161c] hover:text-[#293dff]"
                >
                  {GWFSN_INFO.email}
                </a>
                <p className="mt-1 text-xs text-[#545454]">
                  Magazine submissions, Barometer & general enquiries
                </p>
              </div>

              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff7836]">
                  Telephone
                </p>
                <a
                  href={`tel:${GWFSN_INFO.phone.replace(/\s+/g, "")}`}
                  className="mt-2 block text-lg font-bold text-[#17161c] hover:text-[#ff7836]"
                >
                  {GWFSN_INFO.phone}
                </a>
                <p className="mt-1 text-xs text-[#545454]">
                  Johannesburg, South Africa
                </p>
              </div>

              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8548ff]">
                  Postal & Physical Address
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#17161c]">
                  {GWFSN_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Form Column in Original Brutalist Box */}
          <div className="lg:col-span-7">
            <div className="border-2 border-[#101010] bg-white p-8 sm:p-12">
              {submitted ? (
                <div className="py-12 text-center">
                  <span className="inline-block border-2 border-[#101010] bg-[#293dff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                    Message Sent
                  </span>
                  <h3 className="mt-6 text-3xl font-semibold uppercase">
                    Thank you for contacting GWFSN
                  </h3>
                  <p className="mt-3 text-sm text-[#545454]">
                    Your enquiry has been received and directed to the appropriate team member.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
                      Enquiry Form
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold uppercase tracking-[-0.03em]">
                      Send a message
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 w-full border-2 border-[#101010] bg-[#f8f8f8] px-4 py-3 text-sm text-[#17161c] outline-none focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 w-full border-2 border-[#101010] bg-[#f8f8f8] px-4 py-3 text-sm text-[#17161c] outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                      Enquiry Subject *
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="mt-2 w-full border-2 border-[#101010] bg-[#f8f8f8] px-4 py-3 text-sm text-[#17161c] outline-none focus:bg-white"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="RISE AFRICAN WOMAN Magazine">RISE AFRICAN WOMAN Magazine</option>
                      <option value="Barometer Collaboration">Barometer Collaboration & Evidence</option>
                      <option value="RISE AFRICA WOMAN 2027">RISE AFRICA WOMAN 2027 Gathering</option>
                      <option value="Programme Proposal">Programme Development Proposal</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                      Brief explanation of your enquiry *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include a clear subject and explanation so it can be directed appropriately..."
                      className="mt-2 w-full border-2 border-[#101010] bg-[#f8f8f8] px-4 py-3 text-sm text-[#17161c] outline-none focus:bg-white"
                    />
                  </div>

                  {/* Optional marketing consent kept separate per PDF note */}
                  <div className="border border-[#101010] p-4 text-xs text-[#545454]">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentMarketing}
                        onChange={(e) =>
                          setFormData({ ...formData, consentMarketing: e.target.checked })
                        }
                        className="mt-0.5 rounded border-[#101010] text-[#293dff]"
                      />
                      <span>
                        (Optional) I consent to receiving updates regarding GWFSN research publications
                        and event announcements.
                      </span>
                    </label>
                  </div>

                  {/* Privacy notice beside form per PDF note */}
                  <div className="border border-[#101010] p-4 text-xs text-[#545454] leading-relaxed">
                    <strong>Privacy notice:</strong> We respect your communication privacy. Information
                    submitted here is used solely to respond to your specific query.
                  </div>

                  <button
                    type="submit"
                    className="bg-[#293dff] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 transition-transform"
                  >
                    Send enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
