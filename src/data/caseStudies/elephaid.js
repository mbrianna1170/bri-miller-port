import originalHome from '../../assets/elephaid/original-home.webp'
import splash from '../../assets/elephaid/splash.png'
import home from '../../assets/elephaid/home.png'
import homePhone from '../../assets/elephaid/home-phone.png'
import about from '../../assets/elephaid/about.png'
import howToHelp from '../../assets/elephaid/how-to-help.png'
import donation from '../../assets/elephaid/donation.webp'
import donationConfirmation from '../../assets/elephaid/donation-confirmation.png'
import volunteer from '../../assets/elephaid/volunteer.png'
import logo from '../../assets/elephaid/logo.png'
import amountCard from '../../assets/elephaid/ui-amount-card.png'
import volunteerCard from '../../assets/elephaid/ui-volunteer-card.png'
import ctaButtons from '../../assets/elephaid/ui-buttons.png'
import navBar from '../../assets/elephaid/ui-nav-bar.png'
import photoKesi from '../../assets/elephaid/photo-kesi.png'
import photoHerd from '../../assets/elephaid/photo-herd.png'
import photoTusks from '../../assets/elephaid/photo-tusks.png'

// elephaid case study. screens, colors, fonts and ui pieces come from bri's
// Elephaid 2 figma file ("Portfolio •" frames); the original home screen
// was supplied by bri.

// phone screens cropped to their top
const PHONE = '9 / 19'
// whole phone screens side by side in the before/after
const TRIO = '9 / 19.5'

const elephaid = {
  slug: 'elephaid',
  title: 'Elephaid',
  category: 'UX/UI Case Study · Nonprofit Mobile Redesign',
  headline: 'making it easier to care, connect, and',
  highlight: 'contribute.',
  intro:
    'Elephaid is a fictional nonprofit organization dedicated to elephant conservation. For this project, I redesigned its mobile experience to make information easier to find and give supporters clearer ways to get involved. My focus was on improving navigation, readability, and accessibility while creating a more approachable experience for people looking to donate, volunteer, or learn more about the organization’s mission.',
  hero: {
    ratio: PHONE,
    stack: [
      { src: howToHelp, alt: 'Elephaid How to Help screen', fit: 'top' },
      { src: home, alt: 'Elephaid Home screen', fit: 'top' },
      { src: donation, alt: 'Elephaid Make a Donation screen', fit: 'top' },
    ],
  },
  details: [
    { label: 'My Role', value: 'UX/UI Designer' },
    { label: 'Project Type', value: 'Academic UX/UI Redesign' },
    { label: 'Tools', value: 'Figma' },
    { label: 'Focus', value: 'User Personas, Navigation, Accessibility, Visual Design, Interaction Design' },
  ],
  sections: [
    {
      label: 'The Challenge',
      headline: 'a meaningful mission deserves a',
      highlight: 'clearer experience.',
      body: [
        'Elephaid’s original experience presented usability concerns around navigation, readability, and the clarity of important actions.',
        'The challenge was to rethink how visitors interact with the organization, making it easier to understand its mission and find meaningful ways to contribute. I wanted the redesign to feel approachable while helping visitors move confidently between learning about the cause and taking action.',
        // DRAFT: from bri's description of the before/after
        'The original combined the brand introduction and the home page into a single screen. The redesign splits them in two: a splash screen that introduces the brand, and a personalized home screen that greets supporters by name and shares updates on elephants their donations have helped.',
      ],
      layout: 'split',
      visual: {
        kind: 'pair',
        items: [
          { src: originalHome, alt: 'Original Elephaid home screen: Help Us Help Them headline over an elephant photo, Learn More button', caption: 'original', fit: 'contain', ratio: TRIO },
          { src: splash, alt: 'Redesigned Elephaid splash screen', caption: 'redesign · splash', fit: 'contain', ratio: TRIO },
          { src: homePhone, alt: 'Redesigned Elephaid home screen greeting Jenna by name', caption: 'redesign · home', fit: 'contain', ratio: TRIO },
        ],
      },
    },
    {
      label: 'Understanding the Users',
      headline: 'one mission. different ways to',
      highlight: 'make a difference.',
      body: [
        'The project included two user personas representing different motivations for supporting elephant conservation.',
      ],
      layout: 'personas',
      personas: [
        {
          tag: 'the active advocate · 29 · server',
          title: 'jenna hernandez',
          groups: [
            { label: 'Motivations', items: ['passionate about animal welfare', 'wants to volunteer, educate and spread awareness'] },
            { label: 'Needs', items: ['meaningful ways to get involved that don’t rely only on money'] },
            { label: 'Frustrations', items: ['limited financial resources'] },
          ],
        },
        {
          tag: 'the efficient donor · 35 · it specialist',
          title: 'edward su',
          groups: [
            { label: 'Motivations', items: ['wants to support elephant conservation financially'] },
            { label: 'Needs', items: ['a straightforward donation process', 'clear information on how his contributions are used'] },
            { label: 'Frustrations', items: ['limited time to dedicate to volunteering'] },
          ],
        },
      ],
      takeaway: {
        label: 'design takeaway',
        text: 'Not every supporter contributes in the same way. I wanted to give visitors clear paths to both donating and volunteering without making either option feel less important.',
      },
    },
    {
      label: 'Rethinking Navigation',
      headline: 'less searching.',
      highlight: 'more doing.',
      body: [
        'I focused on making the experience easier to navigate by organizing information around the actions visitors would most likely want to complete. I used clear navigation labels and consistent interaction patterns to help visitors understand where they were and where to go next.',
      ],
      layout: 'process',
      site: 'Splash Screen',
      // the five tabs in the redesign's nav bar
      pages: [
        { name: 'Home', notes: ['urgent rescue story', 'recent impact', 'community stories'] },
        { name: 'About', notes: ['who we are', 'what we do'] },
        { name: 'How to Help', notes: ['donate', 'volunteer', 'spread awareness'] },
        { name: 'Donate', notes: ['make a donation', 'confirmation'] },
        { name: 'Volunteer', notes: ['ways to volunteer', 'sign-up form'] },
      ],
      gallery: [
        {
          title: 'the nav bar, on every screen',
          ratio: 'auto',
          maxWidth: '560px',
          items: [{ src: navBar, alt: 'Elephaid nav bar: Home, About, Help, Donate, Volunteer, with Home highlighted' }],
        },
        {
          title: 'home & how to help',
          ratio: '3 / 4',
          items: [
            { src: home, alt: 'Elephaid Home screen', fit: 'top', caption: 'home: the mission through an urgent rescue story' },
            { src: howToHelp, alt: 'Elephaid How to Help screen', fit: 'top', caption: 'how to help: donate, volunteer, spread awareness' },
          ],
        },
      ],
    },
    {
      label: 'Designing for Different Supporters',
      headline: 'different motivations.',
      highlight: 'clear paths forward.',
      body: [
        'I wanted the redesign to support both people who could contribute financially and people who preferred to donate their time.',
      ],
      layout: 'decisions',
      items: [
        {
          title: 'giving, made simple',
          text: 'For visitors interested in donating, I created a donation screen with preset amounts, a custom donation option, and the ability to select recurring contributions.',
          visual: { src: amountCard, alt: 'Donation amount card with preset amounts, custom amount and monthly option' },
        },
        {
          title: 'a real path to volunteer',
          text: 'For those interested in volunteering, the How to Help page introduces opportunities to participate and provides a clear Volunteer Now call to action.',
          visual: { src: volunteerCard, alt: 'Volunteer card from the How to Help screen with a Volunteer Now button' },
        },
        {
          title: 'two choices, side by side',
          text: 'This approach gives visitors options and helps them choose how they want to support the organization.',
          visual: { src: ctaButtons, alt: 'Donate and Volunteer buttons side by side' },
        },
      ],
    },
    {
      label: 'Visual Design & Accessibility',
      headline: 'a little more clarity.',
      highlight: 'a lot more purpose.',
      body: [
        'The redesign follows Elephaid’s provided brand direction while focusing on readability and consistency. I used the brand’s colors, typography, and imagery to establish a recognizable identity throughout the experience.',
        'I also incorporated instructor feedback by increasing spacing between text, images, buttons, and other components. This helped the pages feel less crowded and easier to read.',
      ],
      layout: 'design',
      notes: [
        'clear headings and readable body text',
        'strong contrast between text and backgrounds',
        'consistent button and navigation styles',
        'well-organized content sections',
        'clear labels on forms and calls to action',
        'room between interactive elements',
      ],
      design: {
        // the color styles defined in the figma file
        palette: [
          { hex: '#E76F51', use: 'soft coral · buttons & icons' },
          { hex: '#1F707A', use: 'deep teal · active nav & confirmation' },
          { hex: '#E3F5F7', use: 'pale teal · nav highlight & info cards' },
          { hex: '#1A1A1A', use: 'rich black · headings' },
          { hex: '#54545A', use: 'charcoal' },
          { hex: '#6B6B6B', use: 'medium gray' },
          { hex: '#F5F5F5', use: 'light gray · backgrounds' },
        ],
        fontsHref: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&family=Inter:wght@600&display=swap',
        specimenColor: '#1A1A1A',
        type: [
          { family: 'Nunito Sans', use: 'page titles, section headings, body text', weight: 700 },
          { family: 'Inter', use: 'card headings & small text', weight: 600 },
        ],
        logo: { src: logo, alt: 'Elephaid logo' },
        imagery: [
          { src: photoKesi, alt: 'Young elephant resting in the grass' },
          { src: photoHerd, alt: 'Elephant family by the water' },
          { src: photoTusks, alt: 'Close-up of an elephant with tusks' },
        ],
        ui: [
          { src: ctaButtons, alt: 'Donate and Volunteer buttons', caption: 'buttons' },
          { src: amountCard, alt: 'Donation amount selector', caption: 'form controls' },
          { src: navBar, alt: 'Nav bar', caption: 'navigation' },
        ],
      },
    },
    {
      label: 'The Final Redesign',
      headline: 'turning compassion',
      highlight: 'into action.',
      body: [
        'The final designs bring together a more organized mobile experience that introduces Elephaid’s mission and provides clear ways to support it. Visitors can explore the organization, read about its conservation work, discover ways to help, sign up to volunteer, and move through a donation to its confirmation screen.',
        'The donation screen includes preset donation amounts, a custom amount option, monthly contribution selection, and payment details. Content about elephant rescue and conservation impact helps visitors understand why their contributions matter.',
      ],
      layout: 'showcase',
      stagger: [
        { src: splash, alt: 'Elephaid splash screen', caption: 'splash' },
        { src: home, alt: 'Elephaid Home screen', caption: 'home', size: 'lg' },
        { src: about, alt: 'About Elephaid screen', caption: 'about' },
        { src: howToHelp, alt: 'How to Help screen', caption: 'how to help', size: 'lg' },
        { src: donation, alt: 'Make a Donation screen', caption: 'make a donation' },
        { src: donationConfirmation, alt: 'Donation confirmation screen: Thank you for helping elephants', caption: 'confirmation' },
        { src: volunteer, alt: 'Volunteer screen with ways to volunteer and a sign-up form', caption: 'volunteer', size: 'lg' },
      ],
    },
    {
      label: 'Reflection',
      headline: 'designing for more than',
      highlight: 'one way to help.',
      body: [
        'One of the biggest lessons from Elephaid was recognizing that users can share the same goal while having very different needs.',
      ],
      layout: 'cards',
      items: [
        { title: 'same goal, different needs', text: 'Jenna and Edward both wanted to support elephant conservation, but their motivations and available resources were different. Designing for both helped me think beyond a single user journey and consider how navigation, content, and calls to action could support different types of engagement.' },
        { title: 'assumptions vs. research', text: 'I also learned the importance of balancing assumptions with research. While the client brief and secondary research helped inform my personas, additional user interviews and testing would have strengthened those decisions.' },
        { title: 'next time', text: 'If I revisited this project, I would test the redesigned navigation and donation flow with actual users, validate accessibility more thoroughly, and continue refining the experience based on feedback.' },
      ],
    },
  ],
}

export default elephaid
