import bowlsomeMockup from '../assets/bowlsome-mockup.png'
import campWoofsMockup from '../assets/camp-woofs-mockup.png'

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
    // PLACEHOLDER: swap in the real project details and image when ready
    id: 3,
    title: 'Project Three',
    category: 'Project Type',
    description: 'A short summary of the project goes here: who it was for, the problem it solved, and what you designed.',
    tags: ['Skill One', 'Skill Two', 'Tool'],
    image: null,
    slug: 'project-three',
  },
]

export default projects
