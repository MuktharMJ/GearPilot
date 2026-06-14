import { Laptop } from '../types';

export const laptops: Laptop[] = [
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air 13" (M3)',
    brand: 'Apple',
    price: 1099,
    useCases: ['college', 'coding', 'editing'],
    batteryLife: 18,
    weight: 2.7,
    portability: 'high',
    specs: {
      cpu: 'Apple M3 (8-core CPU)',
      gpu: '10-core Unified GPU',
      ram: '16GB Unified Memory',
      storage: '512GB SSD',
      display: '13.6" Liquid Retina (2560 x 1664)'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
    description: 'The ultimate ultraportable laptop for students and mobile developers. Powered by the M3 chip, it offers amazing speed, silent fanless operation, and outstanding battery life in a razor-thin lightweight chassis.',
    buyUrl: 'https://www.apple.com/macbook-air/',
    pros: ['Incredible 18-hour battery life', 'Sleek, lightweight, fanless design', 'Excellent display and trackpad'],
    cons: ['Limited to two USB-C ports', 'Cannot upgrade RAM or storage after purchase']
  },
  {
    id: 'dell-xps-14',
    name: 'XPS 14 Laptop',
    brand: 'Dell',
    price: 1499,
    useCases: ['coding', 'editing', 'college'],
    batteryLife: 12,
    weight: 3.7,
    portability: 'high',
    specs: {
      cpu: 'Intel Core Ultra 7 155H',
      gpu: 'Intel Arc Graphics',
      ram: '16GB LPDDR5X',
      storage: '512GB PCIe Gen4 SSD',
      display: '14.5" FHD+ (1920 x 1200) InfinityEdge'
    },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600',
    description: 'Designed for modern productivity, the XPS 14 features cutting-edge Intel Ultra processing power, seamless premium materials, and a vibrant edge-to-edge InfinityEdge screen that looks phenomenal.',
    buyUrl: 'https://www.dell.com/en-us/shop/dell-laptops/xps-14/spd/xps-14-9440-laptop',
    pros: ['Stunning design and premium aluminium build', 'High-accuracy display for creators', 'Comfortable keyboard with seamless haptic trackpad'],
    cons: ['Relatively expensive', 'Limited port selection (uses dongle for USB-A)']
  },
  {
    id: 'asus-rog-zephyrus-g14',
    name: 'ROG Zephyrus G14 OLED',
    brand: 'ASUS',
    price: 1599,
    useCases: ['gaming', 'editing', 'coding'],
    batteryLife: 8,
    weight: 3.3,
    portability: 'high',
    specs: {
      cpu: 'AMD Ryzen 9 8945HS',
      gpu: 'NVIDIA GeForce RTX 4060 8GB',
      ram: '16GB LPDDR5X',
      storage: '1TB PCIe 4.0 NVMe SSD',
      display: '14" 3K OLED (2880 x 1800) 120Hz'
    },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600',
    description: 'An absolute masterpiece of a compact gaming notebook. The Zephyrus G14 pairs a gorgeous 120Hz OLED screen with AMD Ryzen processing and NVIDIA RTX graphics, proving you do not have to sacrifice battery or size for high-end gaming and 3D modeling.',
    buyUrl: 'https://rog.asus.com/us/laptops/rog-zephyrus/rog-zephyrus-g14-2024/',
    pros: ['Unparalleled 3K OLED high-refresh screen', 'Heavy-duty gaming and editing performance', 'Lightweight aluminum build with premium audio'],
    cons: ['Runs hot under intensive gaming sessions', 'Soldered RAM limits future upgrades']
  },
  {
    id: 'lenovo-thinkpad-x1-carbon',
    name: 'ThinkPad X1 Carbon Gen 12',
    brand: 'Lenovo',
    price: 1899,
    useCases: ['coding', 'college'],
    batteryLife: 13,
    weight: 2.4,
    portability: 'high',
    specs: {
      cpu: 'Intel Core Ultra 7 155U',
      gpu: 'Intel Graphics',
      ram: '32GB LPDDR5X',
      storage: '1TB SSD PCIe Gen4',
      display: '14" WUXGA (1920 x 1200) IPS Anti-glare'
    },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600',
    description: 'The golden standard of professional typing and enterprise programming. Made with carbon fiber, it weighs next to nothing yet passes military-grade durability certifications, completed by 32GB of RAM for seamless containerized software development.',
    buyUrl: 'https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-gen-12/',
    pros: ['World-class legendary typing feel', 'Extremely robust, feather-light carbon fiber chassis', 'Generous 32GB modern RAM capacity'],
    cons: ['Premium price premium tax', 'GPU is unsuitable for real gaming']
  },
  {
    id: 'acer-aspire-5',
    name: 'Aspire 5 Slim Laptop',
    brand: 'Acer',
    price: 499,
    useCases: ['college', 'coding'],
    batteryLife: 9,
    weight: 3.8,
    portability: 'medium',
    specs: {
      cpu: 'AMD Ryzen 5 7520U',
      gpu: 'AMD Radeon 610M',
      ram: '8GB LPDDR5',
      storage: '512GB NVMe SSD',
      display: '15.6" FHD (1920 x 1080) IPS SlimBezel'
    },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=600',
    description: 'An exceptional entry-level choice that provides solid performance for high schoolers, college students, and starter developers. Delivering comfortable processing with dynamic storage capabilities without breaking the bank.',
    buyUrl: 'https://www.acer.com/us-en/laptops/aspire/aspire-5',
    pros: ['Very budget-friendly', 'Full-size keyboard layout', 'Good range of standard I/O ports'],
    cons: ['Plastic-heavy materials', '8GB RAM is tight for heavy multitasking']
  },
  {
    id: 'hp-victus-15',
    name: 'HP Victus 15 Gaming',
    brand: 'HP',
    price: 799,
    useCases: ['gaming', 'editing', 'college'],
    batteryLife: 6,
    weight: 5.0,
    portability: 'low',
    specs: {
      cpu: 'Intel Core i5-13420H',
      gpu: 'NVIDIA GeForce RTX 3050 4GB',
      ram: '16GB DDR4',
      storage: '512GB PCIe NVMe SSD',
      display: '15.6" FHD (1920 x 1080) 144Hz IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600',
    description: 'An absolute bargain for budget gamers and novice video editors. It brings dedicated Nvidia ray-tracing capabilities and a fluid 144Hz screen down to an incredibly competitive sub-$800 price tag.',
    buyUrl: 'https://www.hp.com/us-en/shop/pdp/hp-victus-gaming-laptop-15-fa1093dx',
    pros: ['Dedicated GPU at an affordable price', '144Hz display for smooth competitive gaming', 'Upgrade-friendly internal slots'],
    cons: ['Short battery life', 'Bulky weight (5.0 lbs)']
  },
  {
    id: 'lenovo-loq-15',
    name: 'LOQ 15 Gaming Laptop',
    brand: 'Lenovo',
    price: 949,
    useCases: ['gaming', 'editing', 'coding'],
    batteryLife: 5.5,
    weight: 5.2,
    portability: 'low',
    specs: {
      cpu: 'AMD Ryzen 7 7840HS',
      gpu: 'NVIDIA GeForce RTX 4050 6GB',
      ram: '16GB DDR5 5600MHz',
      storage: '512GB PCIe 4.0 SSD',
      display: '15.6" FHD (1920 x 1080) 144Hz IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=600',
    description: 'LOQ represents Lenovo\'s elite entry into budget-friendly pro gaming. Blending high-speed Ryzen processors and high TDP GeForce RTX 40-series cards, it lets creators render 3D scenes and players run AAA titles beautifully.',
    buyUrl: 'https://www.lenovo.com/us/en/p/laptops/loq-laptops/lenovo-loq-15aph8/',
    pros: ['RTX 4050 supports modern DLSS 3.0 frame generation', 'Excellent cooling hardware and exhaust vent layout', 'Very sturdy, resilient construction'],
    cons: ['Power adapter is large and heavy', 'Battery loses charge quickly on high-performance mode']
  },
  {
    id: 'asus-zenbook-14-oled',
    name: 'Zenbook 14 OLED',
    brand: 'ASUS',
    price: 849,
    useCases: ['college', 'coding', 'editing'],
    batteryLife: 15,
    weight: 2.82,
    portability: 'high',
    specs: {
      cpu: 'Intel Core Ultra 5 125H',
      gpu: 'Intel Arc Graphics',
      ram: '16GB LPDDR5X',
      storage: '512GB PCIe Gen4 SSD',
      display: '14" 2.8K OLED (2880 x 1800) 120Hz'
    },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=600',
    description: 'A stellar value option offering a true cinema-grade OLED screen, high-capacity battery, and an sleek all-metal modern chassis. Perfect for students and web programmers who value screen quality and long-lasting off-the-grid usage.',
    buyUrl: 'https://www.asus.com/us/laptops/for-home/zenbook/asus-zenbook-14-oled-ux3405/',
    pros: ['Stunning 120Hz 2.8K OLED screen', 'Outstanding 15-hour battery life', 'Chic and ultraportable design'],
    cons: ['Glossy screen reflects sunlight outdoors', 'Audio system is clear but lacks deep bass']
  }
];
