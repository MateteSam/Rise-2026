import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GWFSN_INFO } from "../lib/content";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedPage,
  head: () => ({
    meta: [
      {
        title: "Get Involved — Global Women's Future Skills Network",
      },
      {
        name: "description",
        content:
          "Bring your experience to the conversation. Contribute knowledge, explore a partnership, or stay informed on GWFSN initiatives.",
      },
      { property: "og:title", content: "Get Involved — GWFSN" },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
});

function GetInvolvedPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [interestType, setInterestType] = useState<string>("partnership");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    receiveMagazine: true,
    receiveBarometer: true,
    receiveProgrammes: true,
    receiveRise2027: true,
    consentPrivacy: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
            Engagement & Collaboration
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Bring your perspective to the <span className="text-[#9da7ff]">conversation.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            GWFSN welcomes people and organisations who want to contribute to women’s learning,
            leadership and economic participation. Whether you have a story to share, relevant
            expertise or an idea for collaboration, we would like to understand what you have in
            mind.
          </p>
        </div>
      </header>

      {/* 3 Pillars Grid */}
      <section className="border-b-2 border-[#101010] bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#101010]">
          <div className="p-8">
            <span className="text-3xl font-light text-[#293dff]">01</span>
            <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.02em]">
              Contribute knowledge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#545454]">
              Share a research source, a practical perspective or an experience that could inform
              the Barometer, the magazine or a future discussion. Tell us what the contribution
              covers and why it would be useful.
            </p>
          </div>

          <div className="p-8">
            <span className="text-3xl font-light text-[#ff7836]">02</span>
            <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.02em]">
              Explore a partnership
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#545454]">
              We welcome conversations with educators, employers, researchers, community
              organisations and other potential partners. Proposals may relate to programme
              development, events, publishing, distribution or evidence.
            </p>
          </div>

          <div className="p-8">
            <span className="text-3xl font-light text-[#8548ff]">03</span>
            <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.02em]">
              Stay informed
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#545454]">
              Choose the updates that matter to you: RISE AFRICAN WOMAN, the Barometer, programme
              announcements or RISE AFRICA WOMAN 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section in Original Brutalist Box */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="border-2 border-[#101010] bg-white p-8 sm:p-14">
          {formSubmitted ? (
            <div className="py-12 text-center">
              <span className="inline-block border-2 border-[#101010] bg-[#293dff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                Submission Received
              </span>
              <h3 className="mt-6 text-3xl font-semibold uppercase">Thank you for reaching out</h3>
              <p className="mt-3 text-sm text-[#545454] max-w-md mx-auto">
                Your details have been received by the GWFSN coordination team. We review every
                contribution and will respond directly.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-8 bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
                  Interest & Collaboration Form
                </p>
                <h3 className="mt-2 text-3xl font-semibold uppercase tracking-[-0.03em]">
                  Tell us what you have in mind
                </h3>
              </div>

              {/* Filter Tabs */}
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  { id: "partnership", label: "Explore a Partnership" },
                  { id: "knowledge", label: "Contribute Knowledge" },
                  { id: "updates", label: "Stay Informed Only" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setInterestType(t.id)}
                    className={`border-2 p-3 text-center text-xs font-bold uppercase tracking-wider transition-all ${
                      interestType === t.id
                        ? "border-[#101010] bg-[#101010] text-white"
                        : "border-[#101010] bg-white text-[#17161c] hover:bg-[#f8f8f8]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                    Full Name *
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
                <label htmlFor="org" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                  Organisation / Institution (Optional)
                </label>
                <input
                  id="org"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="mt-2 w-full border-2 border-[#101010] bg-[#f8f8f8] px-4 py-3 text-sm text-[#17161c] outline-none focus:bg-white"
                />
              </div>

              {interestType !== "updates" && (
                <div>
                  <label htmlFor="msg" className="block text-xs font-bold uppercase tracking-wider text-[#17161c]">
                    Brief summary of your idea or contribution *
                  </label>
                  <textarea
                    id="msg"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the intended audience, possible contribution, or research perspective..."
                    className="mt-2 w-full border-2 border-[#101010] bg-[#f8f8f8] px-4 py-3 text-sm text-[#17161c] outline-none focus:bg-white"
                  />
                </div>
              )}

              {/* Subscriptions */}
              <div className="border-2 border-[#101010] bg-[#f8f8f8] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#293dff]">
                  Choose the updates that matter to you:
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs font-medium text-[#17161c]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.receiveMagazine}
                      onChange={(e) =>
                        setFormData({ ...formData, receiveMagazine: e.target.checked })
                      }
                      className="rounded border-[#101010] text-[#293dff]"
                    />
                    <span>RISE AFRICAN WOMAN magazine</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.receiveBarometer}
                      onChange={(e) =>
                        setFormData({ ...formData, receiveBarometer: e.target.checked })
                      }
                      className="rounded border-[#101010] text-[#293dff]"
                    />
                    <span>African Women’s Future Skills Barometer</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.receiveProgrammes}
                      onChange={(e) =>
                        setFormData({ ...formData, receiveProgrammes: e.target.checked })
                      }
                      className="rounded border-[#101010] text-[#293dff]"
                    />
                    <span>Programme announcements</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.receiveRise2027}
                      onChange={(e) =>
                        setFormData({ ...formData, receiveRise2027: e.target.checked })
                      }
                      className="rounded border-[#101010] text-[#293dff]"
                    />
                    <span>RISE AFRICA WOMAN 2027</span>
                  </label>
                </div>
              </div>

              {/* Privacy Notice beside form per PDF note */}
              <div className="border border-[#101010] p-4 text-xs text-[#545454] leading-relaxed">
                <strong>Privacy notice:</strong> We respect your details and keep enquiry data
                strictly protected. Your contact info will only be used for direct responses and the
                specific update categories you select above. You can unsubscribe at any time by
                emailing {GWFSN_INFO.email}.
              </div>

              <button
                type="submit"
                className="bg-[#293dff] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 transition-transform"
              >
                Submit details
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
