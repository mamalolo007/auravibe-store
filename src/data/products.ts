export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  supplierUrl: string;
  valueProposition: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ergonomic Adjustable Laptop Stand',
    description: 'Foldable aluminum laptop riser with 6 adjustable height levels. Promotes better posture and airflow.',
    category: 'Home-Office Ergonomics',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-adjustable-laptop-stand-aluminum.html',
    valueProposition: 'Improve your posture and keep your laptop cool with this sleek aluminum stand.'
  },
  {
    id: '2',
    name: 'LED Desk Lamp with Wireless Charging',
    description: 'Touch-controlled LED lamp with 3 color modes and a built-in 15W Qi wireless charging pad.',
    category: 'Smart Lighting',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.cjdropshipping.com/',
    valueProposition: 'Declutter your desk with a lamp that lights your work and charges your phone simultaneously.'
  },
  {
    id: '3',
    name: 'Adjustable Gas Spring Monitor Arm',
    description: 'Dual monitor arm mount for 17-32" screens. VESA compatible with integrated cable management.',
    category: 'Monitor Accessories',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-gas-spring-dual-monitor-arm.html',
    valueProposition: 'Free up desk space and find the perfect viewing angle for your dual-monitor setup.'
  },
  {
    id: '4',
    name: 'Ergonomic Mouse Pad with Gel Rest',
    description: 'Large extended desk pad (31"x12") with a memory-foam gel wrist rest and non-slip base.',
    category: 'Home-Office Ergonomics',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1631098083937-3c1d0793df2a?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-ergonomic-mouse-pad-wrist-rest-extended.html',
    valueProposition: 'Protect your wrists during long work sessions with this premium gel-cushioned desk pad.'
  },
  {
    id: '5',
    name: 'Standing Desk Converter',
    description: 'Gas spring sit-stand riser. Dual tier design for monitors and keyboard. Supports up to 35 lbs.',
    category: 'Standing Desks',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.cjdropshipping.com/',
    valueProposition: 'Transform any desk into a standing desk and stay active throughout your workday.'
  },
  {
    id: '6',
    name: 'Cable Management Organizer Box',
    description: 'Minimalist box to hide power strips and messy cords. Available in bamboo or ABS plastic.',
    category: 'Organization',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-cable-management-box-desk.html',
    valueProposition: 'Eliminate cord clutter and achieve a clean, professional desk aesthetic.'
  },
  {
    id: '7',
    name: 'Monitor Light Bar',
    description: 'USB-powered screen bar with asymmetrical optical design to prevent screen glare.',
    category: 'Smart Lighting',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1624948465027-6f9b51067557?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-monitor-light-bar-screen-bar.html',
    valueProposition: 'Reduce eye strain and save desk space with a light bar that clips right onto your monitor.'
  },
  {
    id: '8',
    name: 'Bamboo Desk Organizer',
    description: 'Multi-compartment organizer with built-in phone stand and small supplies drawer.',
    category: 'Organization',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1585435465945-bef5a93f8849?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-bamboo-desk-organizer.html',
    valueProposition: 'Keep your essential tools organized in an eco-friendly, stylish bamboo holder.'
  },
  {
    id: '9',
    name: 'Laptop Bed Tray with Cushion',
    description: 'Portable lap desk with memory-foam bottom, built-in mouse pad, and device slot.',
    category: 'Lifestyle',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.aliexpress.us/w/wholesale-laptop-bed-tray-cushion.html',
    valueProposition: 'Work comfortably from your couch or bed with this ergonomic cushioned lap desk.'
  },
  {
    id: '10',
    name: 'Portable White Noise Machine',
    description: 'Compact device with 10+ sound options. USB-C rechargeable with auto-off timer.',
    category: 'Wellness',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    supplierUrl: 'https://www.cjdropshipping.com/',
    valueProposition: 'Improve your focus and sleep quality with soothing ambient sounds in a pocket-sized device.'
  }
];
