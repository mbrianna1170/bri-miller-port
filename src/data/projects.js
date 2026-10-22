import bowlsomeMockup from '../assets/bowlsome-mockup.png'
import campWoofsMockup from '../assets/camp-woofs-mockup.png'
import elephaidSplash from '../assets/elephaid/splash.png'

const projects = [
  {
    id: 1,
    title: 'Bowlsome Smoothie',
    category: 'Ordering Kiosk App',
    description: 'An ordering kiosk app designed to make the smoothie bowl experience fast, intuitive, and fun — from customization to checkout.',
    tags: ['UX Design', 'Interaction Design', 'Figma'],
    image: bowlsomeMockup,
    slug: 'bowlsome-smoothie',
  },
  {
    id: 2,
    title: 'Camp Woofs & Wiggles',
    category: 'Dog Boarding Website',
    description: 'A coded website for a dog boarding business, designed to help pet owners browse services, build trust, and book with confidence.',
    tags: ['UI Design', 'HTML/CSS', 'Web Design'],
    image: campWoofsMockup,
    // wide website screenshot: show it whole instead of cropping to fill
    imageFit: 'contain',
    slug: 'camp-woofs-wiggles',
  },
  {
    id: 3,
    title: 'Elephaid',
    category: 'Nonprofit Mobile Redesign',
    description: 'A mobile redesign for an elephant conservation nonprofit, making its mission easier to explore and giving supporters clear ways to donate or volunteer.',
    tags: ['UX/UI Design', 'Accessibility', 'Figma'],
    image: elephaidSplash,
    // tall phone screen: show it whole on the soft backdrop
    imageFit: 'contain',
    slug: 'elephaid',
  },
]

export default projects
