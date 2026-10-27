import bowlsomeMockup from '../assets/bowlsome-mockup.webp'
import campWoofsMockup from '../assets/camp-woofs-mockup.webp'
import elephaidMockup from '../assets/elephaid/card-mockup.webp'

// shown on the homepage in this order (and case study "next" links follow it)
const projects = [
  {
    id: 1,
    title: 'Elephaid',
    category: 'Nonprofit Mobile Redesign',
    description: 'A mobile redesign for an elephant conservation nonprofit, making its mission easier to explore and giving supporters clear ways to donate or volunteer.',
    tags: ['UX/UI Design', 'Accessibility', 'Figma'],
    image: elephaidMockup,
    // two-phone mockup on flat teal: shown whole, with the same teal
    // filling the rest of the card so the edges disappear
    imageFit: 'fill',
    imageBg: '#186F78',
    slug: 'elephaid',
  },
  {
    id: 2,
    title: 'Bowlsome Smoothie',
    category: 'Ordering Kiosk App',
    description: 'An ordering kiosk app designed to make the smoothie bowl experience fast, intuitive, and fun — from customization to checkout.',
    tags: ['UX Design', 'Interaction Design', 'Figma'],
    image: bowlsomeMockup,
    slug: 'bowlsome-smoothie',
  },
  {
    id: 3,
    title: 'Camp Woofs & Wiggles',
    category: 'Dog Boarding Website',
    description: 'A coded website for a dog boarding business, designed to help pet owners browse services, build trust, and book with confidence.',
    tags: ['UI Design', 'HTML/CSS', 'Web Design'],
    image: campWoofsMockup,
    // wide website screenshot: show it whole instead of cropping to fill
    imageFit: 'contain',
    slug: 'camp-woofs-wiggles',
  },
]

export default projects
