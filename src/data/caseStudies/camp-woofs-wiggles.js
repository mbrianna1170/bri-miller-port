import heroMockup from '../../assets/camp-woofs-mockup.png'
import homeDesktop from '../../assets/camp-woofs/index-desktop.png'
import aboutDesktop from '../../assets/camp-woofs/about-desktop.png'
import servicesDesktop from '../../assets/camp-woofs/services-desktop.png'
import contactDesktop from '../../assets/camp-woofs/contact-desktop.png'
import homeMobile from '../../assets/camp-woofs/index-mobile.png'
import servicesMobile from '../../assets/camp-woofs/services-mobile.png'
import contactMobile from '../../assets/camp-woofs/contact-mobile.png'
import heroSection from '../../assets/camp-woofs/hero-section.png'
import servicesOverview from '../../assets/camp-woofs/services-overview.png'
import uiNav from '../../assets/camp-woofs/ui-nav.png'
import uiButtons from '../../assets/camp-woofs/ui-hero-buttons.png'
import uiServiceCard from '../../assets/camp-woofs/ui-service-card.png'
import logo from '../../assets/camp-woofs/logo.svg'
import photoPaw from '../../assets/camp-woofs/photo-paw.jpg'
import photoTug from '../../assets/camp-woofs/photo-tug.jpg'
import photoCorgi from '../../assets/camp-woofs/photo-corgi.jpg'

// one case study = one file like this. the page template reads it top to bottom.
// any visual without a `src` shows up as a labeled placeholder frame,
// so swap in a real image by importing it above and adding `src`.
// lines marked DRAFT are starter copy for bri to rewrite in her own words.
// screens and crops were captured from the live site.
const LIVE = 'https://mbrianna1170.github.io/camp_woofs_and_wiggles/'
const campWoofs = {
  slug: 'camp-woofs-wiggles',
  title: 'Camp Woofs & Wiggles',
  category: 'UX/UI Case Study · Website Design & Development',
  headline: 'a little less worry. a lot more',
  highlight: 'wagging.',
  intro:
    'Camp Woofs & Wiggles is a fictional dog boarding business looking to reach more pet owners through its first website. I designed and developed a playful, easy-to-navigate experience that introduces its services, builds familiarity with the business, and makes it easier for visitors to take the next step.',
  live: LIVE,
  hero: { src: heroMockup, alt: 'Camp Woofs & Wiggles homepage', fit: 'contain' },
  details: [
    { label: 'My Role', value: 'UX/UI Design, Front-End Development' },
    { label: 'Project Type', value: 'Academic Project · Fictional Business' },
    { label: 'Tools & Tech', value: 'HTML, CSS, JavaScript, Bootstrap, ChatGPT (AI-Assisted Development)' },
    { label: 'Design Focus', value: 'Information Architecture, Visual Design, Website Usability' },
  ],
  sections: [
    {
      label: 'The Problem',
      headline: 'a great place for dogs.',
      highlight: 'harder to find online.',
      body: [
        'Camp Woofs & Wiggles needed a way to reach pet owners beyond word of mouth and traditional advertising. Without a website, the fictional business risked missing customers who began their search for dog boarding and daycare services online.',
        'The goal was to establish an online presence that would introduce the business, showcase its services, and encourage potential customers to get in touch.',
      ],
      layout: 'split',
      visual: { src: photoTug, alt: 'Two dogs playing tug of war', caption: 'photography from the finished site' },
    },
    {
      label: 'Understanding the Audience',
      headline: 'pet parents want',
      highlight: 'peace of mind.',
      body: [
        'I designed with a hypothetical audience of dog owners ages 35–55 in mind, particularly those balancing busy schedules who wanted a convenient way to explore dependable pet care.',
        'When someone is trusting a business with their dog, first impressions matter. I approached the experience around a few simple questions: What services are available? What does the business look and feel like? And how easy is it to contact someone?',
        "These questions shaped the website's navigation, photography, content organization, and calls to action.",
      ],
      layout: 'split',
      visual: { src: photoPaw, alt: 'A girl holding a dog’s paw', caption: 'photography from the finished site' },
    },
    {
      label: 'Information Architecture',
      headline: 'everything',
      highlight: 'in its place.',
      body: [
        // DRAFT
        'Four pages, each with one job. Home introduces the camp and points visitors toward the next step, About builds familiarity, Services lays out what’s offered and what it costs, and Contact makes reaching out simple. The same navigation sits at the top of every page, so nothing is ever more than one click away.',
      ],
      layout: 'sitemap',
      pages: [
        { name: 'Home', notes: ['welcome', 'what we offer'] },
        { name: 'About', notes: ['our company', 'our mission', 'why choose us'] },
        { name: 'Services', notes: ['day camp', 'overnight camp', 'grooming'] },
        { name: 'Contact', notes: ['message form', 'hours & location'] },
      ],
    },
    {
      label: 'Visual Design',
      headline: 'playful by nature.',
      highlight: 'practical by design.',
      body: [
        'The visual direction combined elements from a provided style guide with my own design choices.',
      ],
      layout: 'design',
      design: {
        // pulled from the site's own stylesheet and logo
        palette: [
          { hex: '#8B5E3C', use: 'headings & hover states' },
          { hex: '#C49A6C', use: 'nav bar & buttons' },
          { hex: '#ECAC58', use: 'icons & accents' },
          { hex: '#9CA9B0', use: 'logo' },
          { hex: '#FBD3DF', use: 'logo' },
          { hex: '#FFFFFF', use: 'backgrounds' },
        ],
        fontsHref: 'https://fonts.googleapis.com/css2?family=Grandstander:wght@600&family=Roboto:wght@400&display=swap',
        specimenColor: '#8B5E3C',
        type: [
          { family: 'Grandstander', use: 'headings & navigation', weight: 600 },
          { family: 'Roboto', use: 'body text', weight: 400 },
        ],
        logo: { src: logo, alt: 'Camp Woofs & Wiggles logo' },
        imagery: [
          { src: photoCorgi, alt: 'A corgi playing fetch in a pool' },
          { src: photoTug, alt: 'Two dogs playing tug of war' },
          { src: photoPaw, alt: 'A girl holding a dog’s paw' },
        ],
        ui: [
          { src: uiNav, alt: 'Camp Woofs & Wiggles nav bar with logo', caption: 'navigation' },
          { src: uiButtons, alt: 'Explore Our Services and Book Now buttons', caption: 'buttons' },
          { src: uiServiceCard, alt: 'Day Camp service card', caption: 'service card' },
        ],
      },
    },
    {
      label: 'Design Decisions',
      headline: 'making the next step',
      highlight: 'easy.',
      layout: 'decisions',
      items: [
        {
          // DRAFT
          title: 'services at a glance',
          text: 'Day camp, overnight camp and grooming each get their own card on the homepage, with a starting price and a “learn more” button, so visitors can compare options before digging in.',
          visual: { src: servicesOverview, alt: 'What We Offer section with day camp, overnight camp and grooming cards' },
        },
        {
          // DRAFT
          title: 'two clear calls to action',
          text: 'The homepage opens with two buttons: “Explore Our Services” for people still browsing, and “Book Now” for people who are ready.',
          visual: { src: heroSection, alt: 'Homepage hero with Explore Our Services and Book Now buttons' },
        },
        {
          // DRAFT
          title: 'one place to reach out',
          text: 'The contact page puts a short message form, phone number, email, hours and address together, so getting in touch never means hunting.',
          visual: { src: contactDesktop, alt: 'Contact page with message form and business details' },
        },
      ],
    },
    {
      label: 'Final Solution',
      headline: 'a new home',
      highlight: 'on the web.',
      layout: 'showcase',
      desktop: [
        { src: homeDesktop, alt: 'Camp Woofs & Wiggles homepage on desktop', caption: 'home' },
        { src: aboutDesktop, alt: 'About page on desktop', caption: 'about' },
        { src: servicesDesktop, alt: 'Services page on desktop', caption: 'services' },
        { src: contactDesktop, alt: 'Contact page on desktop', caption: 'contact' },
      ],
      mobile: [
        { src: homeMobile, alt: 'Homepage on a phone', caption: 'home' },
        { src: servicesMobile, alt: 'Services page on a phone', caption: 'services' },
        { src: contactMobile, alt: 'Contact page on a phone', caption: 'contact' },
      ],
      links: [
        { text: 'visit the live site', href: LIVE },
        { text: 'view the code on github', href: 'https://github.com/mbrianna1170/camp_woofs_and_wiggles' },
      ],
    },
    {
      label: 'Reflection',
      headline: 'what i’d take into',
      highlight: 'the next project.',
      layout: 'cards',
      items: [
        { title: 'lessons learned', placeholder: 'what surprised you, or what you’d do differently' },
        { title: 'front-end development', placeholder: 'what it was like building the site yourself with html, css and bootstrap' },
        { title: 'ai-assisted coding', placeholder: 'how you used chatgpt, where it helped, and where you stepped in' },
        { title: 'future improvements', placeholder: 'what you’d add or change with more time' },
      ],
    },
  ],
}

export default campWoofs
