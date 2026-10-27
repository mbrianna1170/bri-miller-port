import userFlow from '../../assets/bowlsome/user-flow.webp'
import wireStartOrder from '../../assets/bowlsome/wire-start-order.webp'
import wireBowlSize from '../../assets/bowlsome/wire-bowl-size.webp'
import wireFruits from '../../assets/bowlsome/wire-fruits.webp'
import wireCartReview from '../../assets/bowlsome/wire-cart-review.webp'
import hifiStart from '../../assets/bowlsome/hifi-start-order.webp'
import hifiBowlSize from '../../assets/bowlsome/hifi-bowl-size.webp'
import hifiBowlSizeSelected from '../../assets/bowlsome/hifi-bowl-size-selected.webp'
import hifiFruits from '../../assets/bowlsome/hifi-fruits.webp'
import hifiToppings from '../../assets/bowlsome/hifi-toppings.webp'
import hifiCartReview from '../../assets/bowlsome/hifi-cart-review.webp'
import hifiPayment from '../../assets/bowlsome/hifi-payment-processing.webp'
import hifiConfirmation from '../../assets/bowlsome/hifi-confirmation.webp'
import logo from '../../assets/bowlsome/logo.png'
import illoStrawberry from '../../assets/bowlsome/illo-strawberry.png'
import illoBlueberries from '../../assets/bowlsome/illo-blueberries.png'
import illoGranola from '../../assets/bowlsome/illo-granola.png'
import uiStepPill from '../../assets/bowlsome/ui-step-pill.png'
import uiCheckbox from '../../assets/bowlsome/ui-checkbox.png'
import uiCartCard from '../../assets/bowlsome/ui-cart-card.png'
import uiBackNext from '../../assets/bowlsome/ui-back-next.png'

// bowlsome smoothie case study. same template as camp woofs, with extra room
// for the process: step flow, wireframes, testing findings, before/after.
// any visual without a `src` shows up as a labeled placeholder frame:
// import the real screenshot above and add `src` (and `alt`) to swap it in.
// screens are bri's adobe xd exports; logo, illustrations and ui pieces are
// cropped from them, and the palette was sampled from their pixels.

// kiosk artboards are tall portrait screens
const SCREEN = '5 / 7'

const bowlsome = {
  slug: 'bowlsome-smoothie',
  title: 'Bowlsome Smoothie',
  category: 'UX/UI Case Study · Self-Service Kiosk',
  headline: 'good food. your bowl. your',
  highlight: 'way.',
  intro:
    'Bowlsome Smoothie is a fictional smoothie bowl business looking to make ordering faster and more customizable through a self-service kiosk. I designed an interactive touchscreen experience that guides customers through building their own smoothie bowl, exploring nutritional information, and completing checkout at their own pace. From early wireframes to usability testing and final prototype revisions, I focused on making the experience approachable, intuitive, and easy to navigate.',
  hero: {
    ratio: SCREEN,
    stack: [
      { src: hifiFruits, alt: 'Select Your Fruits kiosk screen' },
      { src: hifiStart, alt: 'Bowlsome Smoothie Tap to Start screen' },
      { src: hifiCartReview, alt: 'Review Your Order kiosk screen' },
    ],
  },
  details: [
    { label: 'My Role', value: 'UX/UI Designer' },
    { label: 'Project Type', value: 'Academic Project · Self-Service Kiosk' },
    { label: 'Tools', value: 'Adobe XD, ChatGPT (AI-Assisted Visual Asset Creation)' },
    { label: 'Focus', value: 'User Flows, Interaction Design, Prototyping, Usability Testing' },
  ],
  sections: [
    {
      label: 'The Challenge',
      headline: 'custom orders shouldn’t feel',
      highlight: 'complicated.',
      body: [
        'Bowlsome Smoothie wanted to reduce wait times while giving customers more control over their orders.',
        'The challenge was creating a self-service experience for a 27-inch vertical touchscreen that allowed customers to customize ingredients, review nutritional information, and complete checkout without feeling overwhelmed.',
        'The goal was to make ordering convenient while still giving customers the flexibility to build a bowl that fit their preferences.',
      ],
      layout: 'split',
      visual: {
        kind: 'note',
        tag: 'the brief',
        title: 'a self-service ordering kiosk',
        groups: [
          { label: 'Goals', items: ['reduce wait times', 'give customers more control over their orders'] },
          { label: 'Customers need to', items: ['customize ingredients', 'review nutritional information', 'complete checkout'] },
          { label: 'Screen', items: ['27-inch vertical touchscreen'] },
        ],
      },
    },
    {
      label: 'Understanding the User',
      headline: 'healthy choices.',
      highlight: 'busy schedules.',
      body: [
        'The project included a user persona called the Fitness Enthusiast. This user valued nutritious meals, customization, and convenience. They wanted to understand what went into their food without spending unnecessary time navigating an ordering system.',
        'I used those needs to guide several design decisions, particularly the inclusion of calorie information during customization and a nutritional breakdown in the cart.',
      ],
      layout: 'split',
      visual: {
        kind: 'note',
        tag: 'user persona',
        title: 'the fitness enthusiast',
        groups: [
          { label: 'Values', items: ['nutritious meals', 'customization', 'convenience'] },
          { label: 'Wants', items: ['to know what goes into their food', 'to order without extra navigating'] },
          { label: 'So the kiosk has', items: ['calorie info while customizing', 'a nutritional breakdown in the cart'] },
        ],
      },
    },
    {
      label: 'Mapping the Experience',
      headline: 'from craving',
      highlight: 'to checkout.',
      body: [
        'I began with hand-drawn sketches and developed low-fidelity wireframes in Adobe XD. The ordering flow was organized into individual steps so users could focus on one decision at a time, with a progress indicator for the seven primary ordering steps.',
      ],
      layout: 'process',
      flow: [
        'Start Order',
        'Select Bowl Size',
        'Choose Smoothie Base',
        'Select Fruits',
        'Select Toppings',
        'Choose Optional Add-Ins',
        'Review Cart',
        'Checkout',
        'Order Confirmation',
      ],
      notes: [
        'large touch targets',
        'consistent back & next buttons',
        'controls toward the middle or bottom, within easy reach',
        'one decision per screen',
      ],
      gallery: [
        {
          title: 'user flow',
          ratio: SCREEN,
          maxWidth: '440px',
          items: [{ src: userFlow, alt: 'User flow from Home Screen through Order Confirmation, listing the controls on each screen' }],
        },
        {
          title: 'low-fidelity wireframes',
          ratio: SCREEN,
          items: [
            { src: wireStartOrder, alt: 'Start Order wireframe', caption: 'start order' },
            { src: wireBowlSize, alt: 'Select Your Bowl Size wireframe', caption: 'bowl size' },
            { src: wireFruits, alt: 'Select Your Fruits wireframe', caption: 'fruits' },
            { src: wireCartReview, alt: 'Review Your Order wireframe', caption: 'cart review' },
          ],
        },
      ],
    },
    {
      label: 'Visual Design',
      headline: 'fresh, bright, and',
      highlight: 'easy to navigate.',
      body: [
        'I created a design system using atomic design principles, starting with typography, colors, spacing, and individual UI elements. I used Quicksand for its friendly appearance, a bright green palette to reflect the brand’s fresh and energetic personality, and dark neutral text for readability.',
        'Reusable components included ingredient cards, buttons, checkboxes, and selection states. The fruit and topping screens shared consistent component layouts, which made the interface easier to maintain and kept the interaction patterns familiar.',
      ],
      layout: 'design',
      design: {
        // sampled from the exported screens, so each hex may be a shade off the xd file
        palette: [
          { hex: '#0CCC4B', use: 'bright green · header & buttons' },
          { hex: '#384A4B', use: 'dark slate · text & step pill' },
          { hex: '#F8A637', use: 'orange · bowl illustrations' },
          { hex: '#E3DFDA', use: 'warm gray · cart cards' },
          { hex: '#FAF8F6', use: 'off-white · backgrounds' },
        ],
        fontsHref: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap',
        specimenColor: '#384A4B',
        type: [
          { family: 'Quicksand', use: 'friendly, rounded, readable', weight: 700 },
        ],
        logo: { src: logo, alt: 'Bowlsome Smoothie logo' },
        imageryLabel: 'Ingredient Illustrations',
        imagery: [
          { src: illoStrawberry, alt: 'Strawberry illustration' },
          { src: illoBlueberries, alt: 'Blueberries illustration' },
          { src: illoGranola, alt: 'Granola illustration' },
        ],
        ui: [
          { src: uiBackNext, alt: 'Back and Next buttons', caption: 'back & next' },
          { src: uiStepPill, alt: 'Step 1 of 7 progress pill', caption: 'progress' },
          { src: uiCheckbox, alt: 'Ingredient checkbox', caption: 'checkbox' },
          { src: uiCartCard, alt: 'Bowl card with Edit and Remove buttons', caption: 'cart card' },
        ],
        screens: {
          ratio: SCREEN,
          items: [
            { src: hifiBowlSize, alt: 'Select Your Bowl Size kiosk screen', caption: 'bowl size' },
            { src: hifiFruits, alt: 'Select Your Fruits kiosk screen', caption: 'fruits' },
            { src: hifiToppings, alt: 'Select Your Toppings kiosk screen', caption: 'toppings' },
          ],
        },
      },
    },
    {
      label: 'Usability Testing',
      headline: 'the little things make a',
      highlight: 'big difference.',
      body: [
        'I conducted scenario-based usability testing with two participants. Both participants were generally able to navigate the ordering flow and responded positively to the visual layout, but testing revealed several usability issues.',
      ],
      layout: 'findings',
      ratio: SCREEN,
      meta: ['scenario-based testing', 'two participants', 'adobe xd prototype'],
      // the task list from the usability test sheet
      tasks: {
        title: 'The Scenario',
        items: [
          'Start from the welcome screen and begin your order',
          'Choose a smoothie bowl size that fits your needs',
          'Select your preferred base for the bowl',
          'Pick strawberries, bananas, pineapples, and blueberries',
          'Add toppings like granola or coconut flakes',
          'Add something like protein or vitamins for a nutritional boost',
          'Add your bowl to the cart',
          'Order a second bowl',
          'Remove a bowl from your cart',
          'Complete your order and pay with a credit card',
          'Find where to get a receipt',
        ],
      },
      items: [
        {
          title: 'bowl selection feedback',
          notes: [
            { label: 'What happened', text: 'When one participant wanted to change her bowl size, she first had to unselect her original choice before she could pick a new one. Nothing on the screen told her that, and it added an unnecessary step.' },
            { label: 'What changed', text: 'I revised the selection interaction using component states so the highlight moves to whichever bowl is tapped. Only one size can be active at a time, and switching sizes takes a single tap.' },
          ],
          // original screen, an arrow, then the revised one with a size selected
          arrow: true,
          visuals: [
            { src: hifiBowlSize, alt: 'Original Select Your Bowl Size screen', caption: 'before: unselect, then choose again' },
            { src: hifiBowlSizeSelected, alt: 'Revised bowl size screen with Medium highlighted', caption: 'after: one tap switches the size' },
          ],
        },
        {
          title: 'unclear cart navigation',
          notes: [
            { label: 'What happened', text: 'One participant expected an explicit Add to Cart action but encountered a Next button instead. She eventually reached the cart review screen but wasn’t sure what would happen.' },
            { label: 'What I learned', text: 'This highlighted an opportunity to make button labels more descriptive.' },
          ],
          visuals: [
            { src: uiBackNext, alt: 'Back and Next buttons from the kiosk', ratio: 'auto', caption: 'the shared Back / Next buttons: she expected “Add to Cart”' },
          ],
        },
        {
          title: 'missing and unnecessary steps',
          notes: [
            { label: 'What happened', text: 'Some elements were not fully aligned with the testing scenario. For example, a required topping was initially missing, and certain extra steps created confusion.' },
            { label: 'What changed', text: 'Based on feedback, I simplified the prototype by removing unnecessary options, including the separate base selection and order-name entry.' },
          ],
          visuals: [
            {
              kind: 'flow',
              steps: [
                'Start Order',
                'Select Bowl Size',
                { name: 'Choose Smoothie Base', removed: true },
                'Select Fruits',
                'Select Toppings',
                'Choose Optional Add-Ins',
                'Review Cart',
                'Checkout',
                'Order Confirmation',
              ],
              note: 'the original flow: the crossed-out step was cut, along with the order-name field on cart review',
            },
            { src: wireCartReview, alt: 'Cart review wireframe with an Enter Name for Order field', caption: 'before: order-name field' },
            { src: hifiCartReview, alt: 'Final cart review screen without the order-name field', caption: 'after: field removed' },
          ],
        },
      ],
    },
    {
      label: 'Final Solution',
      headline: 'made to order,',
      highlight: 'by you.',
      body: [
        'The final prototype brings together a guided customization experience, nutritional information, clear cart controls, and visual feedback during checkout. Customers can select a bowl size, choose ingredients, review their selections, edit or remove bowls, and move through the simulated payment process.',
      ],
      layout: 'showcase',
      ratio: SCREEN,
      feature: { src: hifiFruits, alt: 'Select Your Fruits kiosk screen', caption: 'build your bowl' },
      screens: [
        { src: hifiStart, alt: 'Tap to Start welcome screen', caption: 'welcome' },
        { src: hifiCartReview, alt: 'Review Your Order screen with Edit and Remove buttons', caption: 'cart review' },
        { src: hifiPayment, alt: 'Checkout screen showing Payment Processing', caption: 'checkout' },
        { src: hifiConfirmation, alt: 'Order Confirmation screen', caption: 'confirmation' },
      ],
    },
    {
      label: 'Reflection',
      headline: 'good design means knowing',
      highlight: 'when to simplify.',
      body: [
        'One of my biggest takeaways from Bowlsome Smoothie was learning that more features don’t necessarily create a better experience.',
      ],
      layout: 'cards',
      items: [
        { title: 'less can do more', text: 'I initially included options that seemed helpful but ended up adding unnecessary complexity. Usability testing showed me how important it is to focus on what users actually need to accomplish.' },
        { title: 'components & states', text: 'I also gained experience building reusable components and working through interaction states in Adobe XD.' },
        { title: 'next time', text: 'If I revisited this project, I’d conduct user testing earlier in the process and complete another round after making revisions.' },
        { title: 'finding the balance', text: 'The project reinforced the importance of balancing visual design, functionality, and user feedback.' },
      ],
    },
  ],
}

export default bowlsome
