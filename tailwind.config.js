/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgNavbar: "#0f252a",
      },
      backgroundImage: {
        bghero: "url('/src/assets/Home1/hero-bg.avif')",
        bgfooter: "url(/src/assets/Home1/footer-bg.avif)",
        bgabouthero: "url(/src/assets/Home1/about-bg.webp)",
        subfooter: "url(/src/assets/Home1/subfooter.webp)",
        coursesbg: "url(/src/assets/Home1/courses-bg.webp)",
        Faqbg: "url(/src/assets/Home1/FAQ-bg.webp)",
        Pricingbg: "url(/src/assets/Home1/price-1.webp)",
        Eventbg: "url(/src/assets/Home1/event-bg.webp)",
        teambg: "url(/src/assets/Home1/team-bg.webp)",
      },
    },
  },
  plugins: [],
};
