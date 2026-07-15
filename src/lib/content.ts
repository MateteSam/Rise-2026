export const EVENT = {
  title: "Rise, South African Woman 2026",
  tagline: "Mastery, Confidence and Transformation for a New Future",
  motto: "Honour the Past · Own the Present · Shape the Future",
  date: "Saturday, 8 August 2026",
  time: "2:00 PM – 7:00 PM",
  venue: "The Royal Majestic Hotel, Rosebank, Johannesburg",
  price: "R499",
};

export const BANKING = {
  bankName: "First National Bank (FNB)",
  accountName: "Global Women's Future Skills Network",
  accountType: "Business Cheque Account",
  accountNumber: "62890123456",
  branchCode: "250655",
  swift: "FIRNZAJJ",
  reference: "RISE2026-YourFullName",
  email: "registrations@gwfsn.co.za",
};

export const PROGRAMME = [
  {
    title: "Honour the Past",
    body: "A moving tribute to the women whose courage created opportunities for the generations that followed.",
  },
  {
    title: "Own the Present",
    body: "A powerful exploration of confidence, self-mastery, emotional intelligence, personal presence and intentional growth.",
  },
  {
    title: "Renew",
    body: "A keynote experience centred on resilience, purpose, faith, transformation and the courage to step into greatness.",
  },
  {
    title: "Lead",
    body: "An intergenerational discussion examining women's leadership, careers, confidence, financial agency, mentorship and authenticity.",
  },
  {
    title: "Shape the Future",
    body: "A practical focus on digital transformation, adaptability, professional visibility, leadership readiness and future-fit capability.",
  },
  {
    title: "Rise",
    body: "An interactive confidence experience, meaningful recognition and a collective closing charge.",
  },
];

export const HIGHLIGHTS = [
  { title: "Honour Your Journey", body: "Reflect on the women, experiences and values that have shaped your life." },
  { title: "Strengthen Your Confidence", body: "Discover practical approaches to self-mastery, authentic presence and intentional growth." },
  { title: "Renew Your Purpose", body: "Explore resilience, reinvention, emotional wellbeing and the courage to move forward." },
  { title: "Prepare for the Future", body: "Build greater awareness of the skills, adaptability and visibility required in a changing world." },
  { title: "Connect Meaningfully", body: "Meet professionals, entrepreneurs, mentors, emerging leaders and community builders." },
  { title: "Learn from Powerful Voices", body: "Hear from an exceptional line-up of speakers from South Africa, Nigeria and the United Kingdom." },
];

export const AUDIENCE = [
  "Women leaders and emerging leaders.",
  "Entrepreneurs and professionals.",
  "Young women preparing for their futures.",
  "Women navigating personal or career transitions.",
  "Mothers, daughters and mentors.",
  "Coaches, educators and community builders.",
  "Women seeking renewed confidence, purpose and connection.",
  "Organisations committed to women's advancement and future skills.",
  "Allies who actively support women's growth and leadership.",
];

export type Speaker = {
  name: string;
  role: string;
  affiliation?: string;
  session: string;
  bio: string;
  themes: string[];
  accent: "violet" | "orange";
  image?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Rev. Dr. Sam Oye",
    role: "Keynote Speaker",
    affiliation: "The Transforming Church",
    session: "Transform for the Future — The Power of Renewal",
    bio: "Rev. Dr. Sam Oye will deliver the event's keynote address on personal renewal, resilience, faith, purpose and intentional living. The keynote will encourage participants to recognise that transformation requires more than aspiration — it requires the courage to renew one's thinking, reconnect with purpose and move forward with clarity and conviction.",
    themes: ["Personal renewal", "Resilience", "Purpose and calling", "Faith and intentional living", "Courage through change", "Stepping into one's potential"],
    accent: "violet",
  },
  {
    name: "Yolanda Cuba",
    role: "Fireside-Chat Guest",
    affiliation: "MTN South Africa",
    session: "Courage, Calling and the Confidence to Move Forward",
    bio: "Yolanda Cuba will lead an intimate and thought-provoking fireside conversation exploring courage, reinvention, wellbeing, career, family, purpose and legacy — offering rare, honest reflections on navigating responsibility, change and leadership while remaining anchored in personal values.",
    themes: ["Courage and reinvention", "Leadership through change", "Emotional intelligence", "Wellbeing", "Career and family", "Purpose and legacy"],
    accent: "orange",
  },
  {
    name: "Veronica Motloutsi",
    role: "Future-Fit Skills Masterclass Leader",
    session: "Shape the Future with Future-Fit Skills",
    bio: "Veronica Motloutsi will lead a practical masterclass focused on the competencies women need to remain visible, relevant and ready in a changing economy — moving beyond inspiration to help participants think intentionally about upskilling, adaptability, digital transformation and leadership readiness.",
    themes: ["Future-fit capability", "Upskilling and lifelong learning", "Digital transformation", "Adaptability", "Professional visibility", "Leadership readiness"],
    accent: "violet",
  },
  {
    name: "Joy Ogeh-Hutfield",
    role: "Keynote Speaker & Confidence Coach",
    session: "Own the Present — The Power of Self-Mastery",
    bio: "Joy Ogeh-Hutfield will deliver a keynote on self-mastery, authentic confidence, personal presence and intentional growth, and guide participants through an interactive Confidence Workout featuring affirmations, grounding practices and practical coaching moments designed to translate insight into embodied confidence.",
    themes: ["Authentic confidence", "Self-mastery", "Personal presence", "High-performance thinking", "Intentional growth", "Grounding and embodied confidence"],
    accent: "orange",
  },
  {
    name: "Bess Rhirando",
    role: "Event Host",
    session: "Hosting the Rise experience",
    bio: "Bess Rhirando will host Rise, South African Woman 2026 and guide participants through the conference journey of legacy, confidence, transformation and future readiness — establishing the atmosphere, connecting programme segments and leading moments of reflection, celebration and the closing charge.",
    themes: ["Welcoming participants", "Framing the theme", "Introducing speakers", "Facilitating transitions", "Engaging hybrid audiences", "Leading the closing charge"],
    accent: "violet",
  },
  {
    name: "Dr. Ntombi Mhangwani",
    role: "Panel Contributor",
    session: "Women of Africa — Honouring Legacy, Leading Now and Shaping the Future",
    bio: "Dr. Ntombi Mhangwani will contribute to an intergenerational discussion examining how African women can honour their legacy while confidently responding to present and future leadership demands.",
    themes: ["Women's leadership", "Career transitions", "Emotional intelligence", "Confidence and resilience", "Financial agency", "Mentorship", "Authenticity"],
    accent: "orange",
  },
  {
    name: "Kagiso Malepe",
    role: "Panel Moderator",
    session: "Women of Africa panel",
    bio: "Kagiso Malepe will moderate the Women of Africa panel, guiding an engaging and practical conversation among the participating leaders and connecting the themes of legacy, leadership, careers, confidence, mentorship, financial agency and future readiness.",
    themes: ["Legacy", "Leadership", "Careers", "Confidence", "Mentorship", "Financial agency", "Future readiness"],
    accent: "violet",
  },
];

export const FAQ = [
  { q: "When is the event?", a: "Saturday, 8 August 2026, from 2:00 PM to 7:00 PM." },
  { q: "Where will the event take place?", a: "The Royal Majestic Hotel in Rosebank, Johannesburg." },
  { q: "Is the event available online?", a: "Yes. Rise, South African Woman 2026 is a hybrid event. Participants may attend in person or register for online access." },
  { q: "What does the R499 contribution cover?", a: "The R499 in-person attendance contribution is allocated entirely to the participant's food and refreshments at the venue restaurant." },
  { q: "Is there a separate conference admission fee?", a: "There is no separate conference admission fee included in the R499 contribution." },
  { q: "What is included in the in-person experience?", a: "The reservation includes access to the conference programme, food and refreshments, networking opportunities, interactive activities and selected post-event resources." },
  { q: "What should I wear?", a: "Elegant, confident and proudly expressive. Guests are encouraged to wear an outfit that makes them feel powerful and celebration-ready." },
  { q: "Can I transfer my reservation?", a: "Reservations may be transferred to another guest before the final catering deadline, subject to written notification." },
  { q: "Can organisations make group bookings?", a: "Yes. Corporate teams, women's forums, professional associations, universities and community groups are encouraged to attend." },
  { q: "Will photographs and videos be taken?", a: "Photography and video recording may take place during the event. The final photography and recording notice will be included in the registration terms." },
];