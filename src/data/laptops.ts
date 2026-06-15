import { Laptop } from '../types';

export const laptops: Laptop[] = [
  // --- LENOVO (15 Models) ---
  {
    id: 'lenovo-loq-15-i5', brand: 'Lenovo', name: 'Lenovo LOQ 15 (Intel i5)', price: 62990, useCases: ['gaming', 'coding'], batteryLife: 5, weight: 5.2, portability: 'low',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 3050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: '/lenovo.svg',
    description: 'Budget gaming laptop with RTX 3050 6GB and 144Hz display. Decent cooling for the price range.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+LOQ+Intel+i5',
    hasVerifiedBuyLink: false,
    pros: ['High TGP GPU for the price', 'DDR5 memory at this budget'], cons: ['~5 hrs battery on light use', 'Large 230W adapter']
  },
  {
    id: 'lenovo-loq-15-r7', brand: 'Lenovo', name: 'Lenovo LOQ 15 (Ryzen 7)', price: 78990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.1, portability: 'low',
    specs: { cpu: 'Ryzen 7 7435HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: '/lenovo.svg',
    description: 'RTX 4050 under ₹80K with DLSS 3 support. Good for both gaming and dev work.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+LOQ+Ryzen+7',
    hasVerifiedBuyLink: false,
    pros: ['DLSS 3 and ray tracing capable', 'Strong multi-threaded CPU'], cons: ['Battery drops fast under GPU load', 'Trackpad feels cheap']
  },
  {
    id: 'lenovo-legion-slim-5', brand: 'Lenovo', name: 'Lenovo Legion Slim 5', price: 114990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 7, weight: 4.8, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16" WQXGA 165Hz IPS' },
    imageUrl: '/lenovo.svg',
    description: 'Slim gaming laptop with 1600p 165Hz display and RTX 4060. Metal build, 80Wh battery.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+Legion+Slim+5',
    hasVerifiedBuyLink: false,
    pros: ['Sharp 2560x1600 screen', 'Solid metal build quality'], cons: ['₹1.15L is steep for 16GB RAM', 'Fans get loud in performance mode']
  },
  {
    id: 'lenovo-legion-pro-5i', brand: 'Lenovo', name: 'Lenovo Legion Pro 5i', price: 149990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.5, portability: 'low',
    specs: { cpu: 'Core i7-14700HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16" WQXGA 240Hz IPS' },
    imageUrl: '/lenovo.svg',
    description: 'Desktop-replacement class with 14th gen HX chip and 240Hz panel. Best for stationary use.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+Legion+Pro+5i',
    hasVerifiedBuyLink: false,
    pros: ['240Hz display for competitive gaming', '20-core HX processor'], cons: ['2.5 kg — not portable', 'High power consumption']
  },
  {
    id: 'lenovo-legion-pro-7i', brand: 'Lenovo', name: 'Lenovo Legion Pro 7i (AI Ready)', price: 284990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4.5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB NVMe SSD', display: '16" WQXGA 240Hz IPS' },
    imageUrl: '/lenovo.svg',
    description: 'Top-spec Legion with i9-14900HX, RTX 4080 12GB, and 32GB RAM. Built for ML training and AAA gaming.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+Legion+Pro+7i',
    hasVerifiedBuyLink: false,
    pros: ['12GB VRAM handles large models', '32GB RAM — no upgrade needed'], cons: ['2.8 kg + heavy charger', '₹2.85L price tag']
  },
  {
    id: 'lenovo-ideapad-slim-3-ryzen5', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 3 Ryzen 5', price: 44990, useCases: ['college', 'coding'], batteryLife: 7.5, weight: 3.5, portability: 'high',
    specs: { cpu: 'Ryzen 5 7520U', gpu: 'Radeon 610M Graphics', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD Anti-Glare' },
    imageUrl: '/lenovo.svg',
    description: '16GB RAM under ₹45K — hard to beat for college. Light enough at 1.6 kg for daily carry.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+IdeaPad+Slim+3+Ryzen+5',
    hasVerifiedBuyLink: false,
    pros: ['16GB RAM at this price is rare', '~7.5 hrs real-world battery'], cons: ['Plastic keyboard feels flimsy', 'No discrete GPU — can\'t game']
  },
  {
    id: 'lenovo-ideapad-slim-3-i3', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 3 i3', price: 34990, useCases: ['college'], batteryLife: 7, weight: 3.5, portability: 'high',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: '/lenovo.svg',
    description: 'Basic i3 laptop for notes, browsing, and online classes. Gets the job done at ₹35K.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+IdeaPad+Slim+3+i3',
    hasVerifiedBuyLink: false,
    pros: ['Under ₹35K with FHD IPS', 'Light at 1.6 kg'], cons: ['Only 8GB RAM — will feel slow with many tabs', 'No gaming, no heavy workloads']
  },
  {
    id: 'lenovo-ideapad-slim-5-r7', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 5 Ryzen 7', price: 65990, useCases: ['coding', 'college'], batteryLife: 9, weight: 3.5, portability: 'high',
    specs: { cpu: 'Ryzen 7 7730U', gpu: 'Radeon Graphics', ram: '16GB DDR4', storage: '512GB NVMe SSD', display: '14" WUXGA OLED' },
    imageUrl: '/lenovo.svg',
    description: 'OLED display with 100% DCI-P3 color at ₹66K. 9-hour battery makes it a strong daily driver.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+IdeaPad+Slim+5+OLED',
    hasVerifiedBuyLink: false,
    pros: ['100% DCI-P3 OLED screen', '9 hrs battery — good for lectures'], cons: ['DDR4 RAM, not DDR5', 'Glossy OLED reflects in sunlight']
  },
  {
    id: 'lenovo-ideapad-slim-5-i5', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 5 Ultra 5', price: 72990, useCases: ['coding', 'college', 'editing'], batteryLife: 10, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" WUXGA OLED 120Hz' },
    imageUrl: '/lenovo.svg',
    description: 'Intel Core Ultra with Arc GPU, 120Hz OLED, and 1TB storage. Handles light creative work.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+IdeaPad+Slim+5+Intel+Ultra',
    hasVerifiedBuyLink: false,
    pros: ['Arc GPU handles casual editing', '120Hz OLED is buttery smooth'], cons: ['Gets warm during sustained loads', 'RAM is soldered — can\'t upgrade']
  },
  {
    id: 'lenovo-ideapad-pro-5', brand: 'Lenovo', name: 'Lenovo IdeaPad Pro 5', price: 102990, useCases: ['coding', 'editing'], batteryLife: 11, weight: 3.3, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" 2.8K OLED 120Hz' },
    imageUrl: '/lenovo.svg',
    description: 'Lightweight workstation with 32GB RAM and 2.8K OLED. Great for Docker, VMs, and editing.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+IdeaPad+Pro+5',
    hasVerifiedBuyLink: false,
    pros: ['32GB RAM out of the box', '2.8K OLED — sharp for its size'], cons: ['Speakers are underwhelming', 'No discrete GPU — integrated only']
  },
  {
    id: 'lenovo-thinkpad-e14', brand: 'Lenovo', name: 'Lenovo ThinkPad E14', price: 59990, useCases: ['coding', 'college'], batteryLife: 10, weight: 3.3, portability: 'high',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '14" WUXGA IPS' },
    imageUrl: '/lenovo.svg',
    description: 'Classic ThinkPad keyboard and MIL-STD durability. The default choice for CS students who type a lot.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+ThinkPad+E14',
    hasVerifiedBuyLink: false,
    pros: ['Best keyboard in this price range', 'MIL-STD 810H tested chassis'], cons: ['Plain, boxy design', '60Hz display only']
  },
  {
    id: 'lenovo-thinkpad-e16', brand: 'Lenovo', name: 'Lenovo ThinkPad E16', price: 64990, useCases: ['coding', 'college'], batteryLife: 9.5, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '16" WQXGA IPS 16:10' },
    imageUrl: '/lenovo.svg',
    description: '16-inch 16:10 ThinkPad with numpad. More screen real estate for code and spreadsheets.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+ThinkPad+E16',
    hasVerifiedBuyLink: false,
    pros: ['Tall 16:10 aspect — great for coding', 'Has a number pad'], cons: ['Heavier at 1.77 kg', 'Screen brightness is average (~300 nits)']
  },
  {
    id: 'lenovo-thinkpad-t14', brand: 'Lenovo', name: 'Lenovo ThinkPad T14', price: 118990, useCases: ['coding', 'college'], batteryLife: 12, weight: 2.9, portability: 'high',
    specs: { cpu: 'Core i7-1355U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '14" WUXGA Low Power IPS' },
    imageUrl: '/lenovo.svg',
    description: 'Enterprise-grade ThinkPad. 12-hour battery, whisper-quiet fans, and rock-solid build.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+ThinkPad+T14',
    hasVerifiedBuyLink: false,
    pros: ['Near-silent thermals', '12 hrs battery — lasts a full day'], cons: ['₹1.19L for integrated graphics', 'Conservative design']
  },
  {
    id: 'lenovo-yoga-slim-7x', brand: 'Lenovo', name: 'Lenovo Yoga Slim 7x Copilot+', price: 139990, useCases: ['coding', 'college'], batteryLife: 16, weight: 2.8, portability: 'high',
    specs: { cpu: 'Snapdragon X Elite', gpu: 'Qualcomm Adreno GPU', ram: '16GB LPDDR5X', storage: '1TB NVMe SSD', display: '14.5" 3K OLED 90Hz' },
    imageUrl: '/lenovo.svg',
    description: 'ARM-based Snapdragon X Elite with 16-hour battery. 3K OLED, 1.28 kg. Runs Windows on ARM.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+Yoga+Slim+7x',
    hasVerifiedBuyLink: false,
    pros: ['16 hrs battery — best in class', '1.28 kg aluminium body'], cons: ['ARM app compatibility gaps', 'Can\'t run most PC games']
  },
  {
    id: 'lenovo-yoga-9i-dual', brand: 'Lenovo', name: 'Lenovo Yoga 9i Dual Screen', price: 239990, useCases: ['editing', 'coding', 'college'], batteryLife: 8, weight: 3.0, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: 'Dual 13.3" 2.8K OLED' },
    imageUrl: '/lenovo.svg',
    description: 'Dual 13.3" OLED screens with detachable Bluetooth keyboard and stylus. Unique form factor.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+Yoga+9i+Dual',
    hasVerifiedBuyLink: false,
    pros: ['Two 2.8K OLED displays', 'Includes stylus pen'], cons: ['₹2.4L for no discrete GPU', 'Hinge balance takes getting used to']
  },

  // --- HP (13 Models) ---
  {
    id: 'hp-victus-15-r5', brand: 'HP', name: 'HP Victus 15 (Ryzen 5)', price: 54990, useCases: ['gaming', 'college'], batteryLife: 6, weight: 5.0, portability: 'low',
    specs: { cpu: 'Ryzen 5 5600H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: '/hp.svg',
    description: 'Cheapest RTX 3050 laptop from HP. 144Hz screen, 16GB RAM. Good for casual gaming between classes.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Victus+15+Ryzen+5',
    hasVerifiedBuyLink: false,
    pros: ['RTX 3050 under ₹55K', 'Full-size keyboard with numpad'], cons: ['Screen hinge wobbles when typing', 'DDR4 — not DDR5']
  },
  {
    id: 'hp-victus-15-i5', brand: 'HP', name: 'HP Victus 15 (Intel i5)', price: 58990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.1, portability: 'low',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: '/hp.svg',
    description: 'Intel variant of the Victus 15. Slightly better single-core than the Ryzen 5 model.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Victus+15+Intel+i5',
    hasVerifiedBuyLink: false,
    pros: ['Good single-core performance', 'Clean, non-gamer look'], cons: ['Runs warm during extended gaming', '1080p panel — no HDR']
  },
  {
    id: 'hp-victus-16-r7', brand: 'HP', name: 'HP Victus 16 (Ryzen 7)', price: 79990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 6.5, weight: 5.2, portability: 'low',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '16.1" FHD 144Hz IPS' },
    imageUrl: '/hp.svg',
    description: 'RTX 4050 with Ryzen 7 7840HS — strong for compiling and light 3D rendering at ₹80K.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Victus+16+RTX+4050',
    hasVerifiedBuyLink: false,
    pros: ['Ryzen 7 7840HS is very efficient', '6GB VRAM for editing tasks'], cons: ['Speakers sound muffled', 'All-plastic bottom panel']
  },
  {
    id: 'hp-omen-16-r7', brand: 'HP', name: 'HP Omen 16 (Ryzen 7)', price: 104990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 7, weight: 5.1, portability: 'low',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16.1" WQHD 165Hz IPS' },
    imageUrl: '/hp.svg',
    description: 'QHD 165Hz display with 100% sRGB. RTX 4060 with good thermals. 1TB SSD included.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Omen+16+Ryzen+7',
    hasVerifiedBuyLink: false,
    pros: ['100% sRGB QHD display', '8GB VRAM RTX 4060'], cons: ['Costs ₹1.05L', 'Charger is bulky']
  },
  {
    id: 'hp-omen-16-i7', brand: 'HP', name: 'HP Omen 16 (Intel i7)', price: 144990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 6, weight: 5.3, portability: 'low',
    specs: { cpu: 'Core i7-14700HX', gpu: 'NVIDIA RTX 4070 8GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '16.1" QHD 240Hz IPS' },
    imageUrl: '/hp.svg',
    description: 'RTX 4070 with 240Hz QHD panel. 14th gen HX processor for heavy multi-threaded workloads.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Omen+16+Core+i7+4070',
    hasVerifiedBuyLink: false,
    pros: ['240Hz for competitive gaming', 'RTX 4070 handles 1440p well'], cons: ['High power draw', 'Fingerprint magnet chassis']
  },
  {
    id: 'hp-omen-transcend-14', brand: 'HP', name: 'HP Omen Transcend 14', price: 164990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 8, weight: 3.6, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" 2.8K OLED 120Hz' },
    imageUrl: '/hp.svg',
    description: 'Thin gaming laptop with 2.8K OLED and RTX 4060. Under 1.65 kg — actually portable.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Omen+Transcend+14',
    hasVerifiedBuyLink: false,
    pros: ['2.8K OLED in a gaming laptop', 'Only 1.63 kg'], cons: ['RAM is soldered', 'Bass is weak on built-in speakers']
  },
  {
    id: 'hp-pavilion-15-i5', brand: 'HP', name: 'HP Pavilion 15 (Core i5)', price: 62990, useCases: ['college', 'coding'], batteryLife: 8, weight: 3.8, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Micro-Edge' },
    imageUrl: '/hp.svg',
    description: 'Metal-lid everyday laptop. 16GB RAM, FHD IPS, and 8-hour battery for lectures and coding.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Pavilion+15+Intel+i5',
    hasVerifiedBuyLink: false,
    pros: ['Comfortable keyboard', 'Silver metal finish looks clean'], cons: ['DDR4 memory', 'Screen brightness is average indoors']
  },
  {
    id: 'hp-pavilion-plus-14', brand: 'HP', name: 'HP Pavilion Plus 14 OLED', price: 79990, useCases: ['editing', 'coding', 'college'], batteryLife: 8.5, weight: 3.1, portability: 'high',
    specs: { cpu: 'Core i5-13500H', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" 2.8K OLED 90Hz' },
    imageUrl: '/hp.svg',
    description: '2.8K OLED with 100% DCI-P3 at ₹80K. Good for design students who need accurate colors.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Pavilion+Plus+14+OLED',
    hasVerifiedBuyLink: false,
    pros: ['2.8K OLED with accurate colors', 'Compact at 1.4 kg'], cons: ['Speakers lack volume', 'Glossy screen reflects overhead lights']
  },
  {
    id: 'hp-pavilion-aero-13', brand: 'HP', name: 'HP Pavilion Aero 13', price: 67990, useCases: ['college', 'coding'], batteryLife: 10, weight: 2.1, portability: 'high',
    specs: { cpu: 'Ryzen 5 7535U', gpu: 'AMD Radeon Graphics', ram: '16GB LPDDR5', storage: '512GB Gen4 SSD', display: '13.3" WUXGA IPS' },
    imageUrl: '/hp.svg',
    description: 'Magnesium-alloy chassis weighing just 970g. 10-hour battery. Built to be carried everywhere.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Pavilion+Aero+13',
    hasVerifiedBuyLink: false,
    pros: ['Only 970g — lightest in its class', '10 hrs battery life'], cons: ['13.3" screen feels small', 'Chassis flexes slightly under pressure']
  },
  {
    id: 'hp-15s-i3', brand: 'HP', name: 'HP 15s (Intel i3)', price: 36990, useCases: ['college'], batteryLife: 7, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: '/hp.svg',
    description: 'Basic HP laptop for notes and browsing. FHD IPS display at ₹37K with 512GB SSD.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+15s+Core+i3',
    hasVerifiedBuyLink: false,
    pros: ['Trusted HP brand under ₹37K', 'Decent keyboard feedback'], cons: ['Only 8GB RAM', 'No USB-C charging']
  },
  {
    id: 'hp-15s-r5', brand: 'HP', name: 'HP 15s (Ryzen 5)', price: 44990, useCases: ['college', 'coding'], batteryLife: 7.5, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD Anti-Glare' },
    imageUrl: '/hp.svg',
    description: '6-core Ryzen 5 with 16GB RAM under ₹45K. Handles multi-tab browsing and light IDEs well.',
    buyUrl: 'https://www.amazon.in/s?k=HP+15s+Ryzen+5',
    hasVerifiedBuyLink: false,
    pros: ['6-core CPU at this price', 'Has a numpad'], cons: ['Full plastic build', 'Display colors are washed out']
  },
  {
    id: 'hp-envy-x360-14', brand: 'HP', name: 'HP Envy x360 14', price: 94990, useCases: ['editing', 'college'], batteryLife: 11, weight: 3.1, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '14" 2.2K IPS 2-in-1 Touch' },
    imageUrl: '/hp.svg',
    description: '2-in-1 convertible with 2.2K touch display and pen support. Aluminium body, 11-hour battery.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Envy+x360+14',
    hasVerifiedBuyLink: false,
    pros: ['360° hinge + stylus included', '11 hrs battery'], cons: ['Heavier than a regular 14"', 'Touchscreen is reflective']
  },
  {
    id: 'hp-spectre-x360-14', brand: 'HP', name: 'HP Spectre x360 14', price: 164990, useCases: ['coding', 'editing', 'college'], batteryLife: 13, weight: 2.9, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '32GB LPDDR5X', storage: '1TB SSD Gen4', display: '14" 2.8K OLED Touch 120Hz' },
    imageUrl: '/hp.svg',
    description: 'Premium 2-in-1 with 32GB RAM, 2.8K OLED touch, and gem-cut metal edges. 13-hour battery.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Spectre+x360+14',
    hasVerifiedBuyLink: false,
    pros: ['32GB RAM + 2.8K OLED touch', 'Best-looking laptop on this list'], cons: ['₹1.65L is steep', 'Repair parts are expensive']
  },

  // --- ASUS (14 Models) ---
  {
    id: 'asus-tuf-a15-r7', brand: 'ASUS', name: 'ASUS TUF Gaming A15', price: 76990, useCases: ['gaming', 'coding'], batteryLife: 7.5, weight: 4.8, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7735HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz 100% sRGB' },
    imageUrl: '/asus.svg',
    description: 'MIL-STD rated gaming laptop with 90Wh battery — unusually long battery for a gaming machine.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+TUF+A15+RTX+4050',
    hasVerifiedBuyLink: false,
    pros: ['90Wh battery — ~7.5 hrs', '100% sRGB display'], cons: ['Plastic keycaps', 'Speakers lack bass']
  },
  {
    id: 'asus-tuf-f15-i5', brand: 'ASUS', name: 'ASUS TUF Gaming F15', price: 59990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.0, portability: 'low',
    specs: { cpu: 'Core i5-11400H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: '/asus.svg',
    description: 'Budget gaming option with 11th gen i5 and RTX 3050. Durable build, lots of ports.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+TUF+F15+RTX+3050',
    hasVerifiedBuyLink: false,
    pros: ['Wide port selection', 'Tough chassis'], cons: ['11th gen CPU is aging', 'Fan noise is noticeable']
  },
  {
    id: 'asus-tuf-f17-i7', brand: 'ASUS', name: 'ASUS TUF Gaming F17', price: 84990, useCases: ['gaming', 'editing'], batteryLife: 6, weight: 5.7, portability: 'low',
    specs: { cpu: 'Core i7-12700H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '17.3" FHD 144Hz IPS' },
    imageUrl: '/asus.svg',
    description: '17.3" screen for those who want maximum visibility. RTX 4050 with upgradeable RAM slots.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+TUF+F17',
    hasVerifiedBuyLink: false,
    pros: ['Large 17.3" display', 'RAM and storage are upgradeable'], cons: ['Heavy — 2.6 kg', 'Screen brightness is mediocre']
  },
  {
    id: 'asus-tuf-a16-adv', brand: 'ASUS', name: 'ASUS TUF Gaming A16', price: 89990, useCases: ['gaming', 'coding'], batteryLife: 8, weight: 4.9, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7735HS', gpu: 'AMD Radeon RX 7600S 8GB', ram: '16GB DDR5', storage: '512GB SSD', display: '16" FHD+ IPS 165Hz 16:10' },
    imageUrl: '/asus.svg',
    description: 'All-AMD setup with RX 7600S (8GB). Good Linux compatibility and long battery on Ryzen.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+TUF+A16+Advantage',
    hasVerifiedBuyLink: false,
    pros: ['8GB VRAM on AMD GPU', '8 hrs battery — good for gaming laptop'], cons: ['No DLSS — AMD FSR only', 'Plain design']
  },
  {
    id: 'asus-rog-strix-g16', brand: 'ASUS', name: 'ASUS ROG Strix G16', price: 119990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 6, weight: 5.5, portability: 'low',
    specs: { cpu: 'Core i7-13650HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB SSD Gen4', display: '16" FHD+ 165Hz ROG Nebula' },
    imageUrl: '/asus.svg',
    description: 'Triple-fan liquid metal cooling with ROG Nebula display. RGB light-bar on chassis.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+ROG+Strix+G16',
    hasVerifiedBuyLink: false,
    pros: ['Liquid metal cooling works well', 'Distinctive gaming design'], cons: ['Bulky — not for carrying around', 'No numpad']
  },
  {
    id: 'asus-rog-scar-16', brand: 'ASUS', name: 'ASUS ROG Strix SCAR 16', price: 289990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB Gen4 SSD', display: '16" mini-LED QHD+ 240Hz' },
    imageUrl: '/asus.svg',
    description: 'Flagship ROG with mini-LED 240Hz display, i9-14900HX, and RTX 4080 12GB. No compromises.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+ROG+SCAR+16',
    hasVerifiedBuyLink: false,
    pros: ['Mini-LED display with HDR 1000', '12GB VRAM RTX 4080'], cons: ['Heavy charger', 'Aggressive gamer aesthetic']
  },
  {
    id: 'asus-rog-zephyrus-g14', brand: 'ASUS', name: 'ASUS ROG Zephyrus G14 OLED', price: 147990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 8.5, weight: 3.3, portability: 'high',
    specs: { cpu: 'Ryzen 9 8945HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB LPDDR5X', storage: '1TB SSD', display: '14" 3K OLED 120Hz ROG Nebula' },
    imageUrl: '/asus.svg',
    description: 'Compact 14" gaming laptop with 3K OLED and RTX 4060. 1.5 kg — genuinely portable for a gaming laptop.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+ROG+Zephyrus+G14',
    hasVerifiedBuyLink: false,
    pros: ['3K OLED at 120Hz', 'Only 1.5 kg with RTX 4060'], cons: ['RAM is soldered', 'Top of chassis gets warm under load']
  },
  {
    id: 'asus-rog-zephyrus-g16', brand: 'ASUS', name: 'ASUS ROG Zephyrus G16 OLED', price: 219990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 7.5, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4070 8GB', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: '16" 2.5K OLED 240Hz' },
    imageUrl: '/asus.svg',
    description: '16" OLED at 240Hz with RTX 4070 and 32GB RAM. Slim body with AI noise cancellation.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+ROG+Zephyrus+G16',
    hasVerifiedBuyLink: false,
    pros: ['Slim profile for an RTX 4070', '240Hz OLED is rare'], cons: ['₹2.2L price', 'Gets hot during sustained loads']
  },
  {
    id: 'asus-vivobook-14', brand: 'ASUS', name: 'ASUS Vivobook 14 (Ryzen 5)', price: 39990, useCases: ['college'], batteryLife: 7, weight: 3.1, portability: 'high',
    specs: { cpu: 'Ryzen 5 7520U', gpu: 'AMD Radeon 610M', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" FHD IPS Panel' },
    imageUrl: '/asus.svg',
    description: '16GB RAM under ₹40K in a 1.4 kg body. Solid for Chrome-heavy workflows and college work.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+14+Ryzen+5',
    hasVerifiedBuyLink: false,
    pros: ['16GB at ₹40K — great value', 'Compact 1.4 kg body'], cons: ['Radeon 610M can\'t game', 'Display colors are average']
  },
  {
    id: 'asus-vivobook-15', brand: 'ASUS', name: 'ASUS Vivobook 15 (Core i3)', price: 34990, useCases: ['college'], batteryLife: 6.5, weight: 3.6, portability: 'medium',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD Anti-Glare' },
    imageUrl: '/asus.svg',
    description: 'Budget 15.6" with i3 and 512GB SSD. Fine for assignments, PDFs, and light browsing.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+Vivobook+15+i3',
    hasVerifiedBuyLink: false,
    pros: ['15.6" screen at ₹35K', 'Quiet fans'], cons: ['Only 8GB RAM', 'Plastic body']
  },
  {
    id: 'asus-vivobook-16-oled', brand: 'ASUS', name: 'ASUS Vivobook 16 OLED', price: 54990, useCases: ['college', 'editing'], batteryLife: 7, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i5-12500H', gpu: 'Intel Iris Xe', ram: '16GB DDR4', storage: '512GB SSD', display: '16" 4K OLED 60Hz 16:10' },
    imageUrl: '/asus.svg',
    description: '4K OLED at ₹55K — one of the cheapest ways to get a 4K panel. Good for design coursework.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+16+OLED',
    hasVerifiedBuyLink: false,
    pros: ['4K OLED at this price is rare', '16:10 tall aspect ratio'], cons: ['60Hz only — no high refresh', '12th gen CPU is older now']
  },
  {
    id: 'asus-vivobook-s15-elite', brand: 'ASUS', name: 'ASUS Vivobook S 15 OLED (ARM)', price: 124990, useCases: ['coding', 'college'], batteryLife: 18, weight: 3.1, portability: 'high',
    specs: { cpu: 'Snapdragon X Elite', gpu: 'Qualcomm Adreno GPU', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '15.6" 3K OLED 120Hz' },
    imageUrl: '/asus.svg',
    description: 'ARM-based Copilot+ PC with 18-hour battery and 3K OLED. 1.42 kg. Runs Windows on ARM.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+Vivobook+S15+OLED',
    hasVerifiedBuyLink: false,
    pros: ['18 hrs battery life', 'Premium metal build at 1.42 kg'], cons: ['ARM app emulation has gaps', 'Most games won\'t run natively']
  },
  {
    id: 'asus-vivobook-pro-15', brand: 'ASUS', name: 'ASUS Vivobook Pro 15 OLED', price: 84990, useCases: ['editing', 'coding', 'gaming'], batteryLife: 8, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7735HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" 2.8K OLED 120Hz' },
    imageUrl: '/asus.svg',
    description: '2.8K OLED + RTX 4050 under ₹85K. Budget creator laptop that can also game.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+Pro+15+OLED',
    hasVerifiedBuyLink: false,
    pros: ['RTX 4050 + OLED combo', '120Hz OLED is smooth'], cons: ['Some chassis flex when pressed', 'Power brick is chunky']
  },
  {
    id: 'asus-zenbook-14-oled', brand: 'ASUS', name: 'ASUS Zenbook 14 OLED', price: 94990, useCases: ['coding', 'college', 'editing'], batteryLife: 15, weight: 2.8, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '1TB SSD Gen4', display: '14" 3K OLED 120Hz Touch' },
    imageUrl: '/asus.svg',
    description: '3K OLED touch display, 15-hour battery, 1.28 kg. A premium ultrabook for daily carry.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+Zenbook+14+OLED',
    hasVerifiedBuyLink: false,
    pros: ['3K 120Hz OLED with touch', '15 hrs battery — lasts all day'], cons: ['RAM is soldered', 'Limited color options']
  },

  // --- ACER (11 Models) ---
  {
    id: 'acer-aspire-lite-15', brand: 'Acer', name: 'Acer Aspire Lite 15', price: 32990, useCases: ['college', 'coding'], batteryLife: 7, weight: 3.5, portability: 'high',
    specs: { cpu: 'Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: '/acer.svg',
    description: '16GB dual-channel RAM at ₹33K. One of the best value-for-money college laptops in India.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Aspire+Lite+15',
    hasVerifiedBuyLink: false,
    pros: ['16GB RAM at ₹33K — best value', 'Lightweight at 1.59 kg'], cons: ['Speakers are quiet', 'Plastic keyboard deck']
  },
  {
    id: 'acer-aspire-lite-14', brand: 'Acer', name: 'Acer Aspire Lite 14', price: 29990, useCases: ['college'], batteryLife: 6, weight: 3.1, portability: 'high',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB LPDDR5', storage: '512GB SSD', display: '14" WUXGA 16:10 screen' },
    imageUrl: '/acer.svg',
    description: 'Under ₹30K with a modern 16:10 display. Handles basic college tasks and note-taking.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Aspire+Lite+14',
    hasVerifiedBuyLink: false,
    pros: ['16:10 aspect ratio at this price', 'Under ₹30K'], cons: ['Weak integrated graphics', 'Key travel is shallow']
  },
  {
    id: 'acer-aspire-5-i5', brand: 'Acer', name: 'Acer Aspire 5', price: 49990, useCases: ['college', 'coding'], batteryLife: 8, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD ComfortView IPS' },
    imageUrl: '/acer.svg',
    description: 'Solid mid-range laptop with 16GB LPDDR5 and FHD IPS. Quiet fans, good port selection.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Aspire+5',
    hasVerifiedBuyLink: false,
    pros: ['16GB LPDDR5 memory', 'Good variety of ports'], cons: ['Boring design', 'Average display contrast']
  },
  {
    id: 'acer-nitro-v15', brand: 'Acer', name: 'Acer Nitro V 15 (RTX 4050)', price: 69990, useCases: ['gaming', 'editing'], batteryLife: 5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Core i5-13420H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS panel' },
    imageUrl: '/acer.svg',
    description: 'RTX 4050 at ₹70K with dual-fan cooling. One of the best-selling budget gaming laptops in India.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Nitro+V+15',
    hasVerifiedBuyLink: false,
    pros: ['RTX 4050 under ₹70K', 'DDR5 memory'], cons: ['Display colors are dull (~60% sRGB)', '~5 hrs battery life']
  },
  {
    id: 'acer-nitro-v15-r5', brand: 'Acer', name: 'Acer Nitro V 15 (Ryzen 5)', price: 56990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Ryzen 5 7535HS', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: '/acer.svg',
    description: 'Entry gaming laptop with RTX 3050 and DDR5 at ₹57K. Good for esports titles.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Nitro+V+15+Ryzen+5',
    hasVerifiedBuyLink: false,
    pros: ['DLSS support for better FPS', 'Good value at ₹57K'], cons: ['Plastic build throughout', 'Weak speakers']
  },
  {
    id: 'acer-nitro-16', brand: 'Acer', name: 'Acer Nitro 16', price: 94990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 6, weight: 5.9, portability: 'low',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '512GB SSD', display: '16" WUXGA 165Hz IPS screen' },
    imageUrl: '/acer.svg',
    description: 'RTX 4060 with liquid metal on the CPU. 16" 165Hz display. Good thermals for sustained workloads.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Nitro+16+RTX+4060',
    hasVerifiedBuyLink: false,
    pros: ['Liquid metal cooling keeps temps low', 'Good keyboard with clear feedback'], cons: ['Heavy at 2.6 kg', 'Only 512GB default storage']
  },
  {
    id: 'acer-predator-neo-16', brand: 'Acer', name: 'Acer Helios Neo 16', price: 119990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.7, portability: 'low',
    specs: { cpu: 'Core i7-13700HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB SSD', display: '16" WQXGA 165Hz sRGB IPS' },
    imageUrl: '/acer.svg',
    description: '16-core HX chip with RTX 4060 and 100% sRGB display. Dual-fan system runs consistently.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Helios+Neo+16',
    hasVerifiedBuyLink: false,
    pros: ['16-core HX CPU for compiling', '100% sRGB screen for creators'], cons: ['Bulky 230W adapter', 'Plastic keyboard surround']
  },
  {
    id: 'acer-predator-16-i9', brand: 'Acer', name: 'Acer Predator Helios 16', price: 249990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4, weight: 5.9, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB Gen4 SSD', display: '16" WQXGA 240Hz screen' },
    imageUrl: '/acer.svg',
    description: 'i9-14900HX + RTX 4080 12GB + 32GB DDR5 + 2TB. For CUDA workloads and maxed-out gaming.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Predator+Helios+16+i9',
    hasVerifiedBuyLink: false,
    pros: ['i9 + RTX 4080 — raw power', '2TB SSD included'], cons: ['2.7 kg — very heavy', 'Loud fans under load']
  },
  {
    id: 'acer-swift-go-14', brand: 'Acer', name: 'Acer Swift Go 14 OLED', price: 59990, useCases: ['coding', 'editing'], batteryLife: 9.5, weight: 2.7, portability: 'high',
    specs: { cpu: 'Core i5-13500H', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" 2.8K OLED 90Hz' },
    imageUrl: '/acer.svg',
    description: '2.8K OLED under ₹60K with metal chassis. 1.25 kg. Great value for photo/design students.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Swift+Go+14+OLED',
    hasVerifiedBuyLink: false,
    pros: ['2.8K OLED at ₹60K is a steal', 'Metal body, 1.25 kg'], cons: ['Glossy screen has reflections', 'RAM is soldered']
  },
  {
    id: 'acer-swift-go-14-ultra7', brand: 'Acer', name: 'Acer Swift Go 14 Intelligent OLED', price: 84990, useCases: ['coding', 'editing', 'college'], batteryLife: 10.5, weight: 2.8, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" 2.8K OLED 120Hz' },
    imageUrl: '/acer.svg',
    description: 'Core Ultra 7 with Arc GPU, 120Hz 2.8K OLED, and 1TB SSD. 10.5 hrs battery.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Swift+Go+14+Intel+Ultra',
    hasVerifiedBuyLink: false,
    pros: ['Arc GPU handles light GPU tasks', '120Hz OLED is fluid'], cons: ['Gets warm during rendering', 'Speaker bass is weak']
  },
  {
    id: 'acer-extensa-15', brand: 'Acer', name: 'Acer Extensa 15', price: 27990, useCases: ['college'], batteryLife: 6.5, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Core i3-1115G4', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD anti-glare screen' },
    imageUrl: '/acer.svg',
    description: 'Cheapest laptop on this list at ₹28K. 512GB SSD, FHD screen. For basic college needs.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Extensa+15',
    hasVerifiedBuyLink: false,
    pros: ['₹28K entry price', '512GB SSD at this price'], cons: ['Basic plastic build', 'Older 11th gen CPU']
  },

  // --- DELL (12 Models) ---
  {
    id: 'dell-15-i3', brand: 'Dell', name: 'Dell 15 Laptop (Intel i3)', price: 34990, useCases: ['college'], batteryLife: 6, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD 120Hz IPS Screen' },
    imageUrl: '/dell.svg',
    description: 'Dell budget laptop with 120Hz panel — smoother scrolling than most i3 laptops at this price.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+15+i3+laptop',
    hasVerifiedBuyLink: false,
    pros: ['120Hz display at ₹35K', 'Numpad included'], cons: ['Plastic build', 'No keyboard backlight']
  },
  {
    id: 'dell-inspiron-15-i5', brand: 'Dell', name: 'Dell Inspiron 15', price: 53990, useCases: ['college', 'coding'], batteryLife: 7.5, weight: 3.6, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD Narrow Border screen' },
    imageUrl: '/dell.svg',
    description: 'Reliable everyday Dell with 16GB LPDDR5 and lift-hinge design for better typing angle.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Inspiron+15+i5',
    hasVerifiedBuyLink: false,
    pros: ['Lift hinge improves ergonomics', 'LPDDR5 memory'], cons: ['720p webcam', 'Screen is dim (~250 nits)']
  },
  {
    id: 'dell-inspiron-14', brand: 'Dell', name: 'Dell Inspiron 14', price: 47990, useCases: ['college', 'coding'], batteryLife: 8.5, weight: 3.2, portability: 'high',
    specs: { cpu: 'Ryzen 5 7530U', gpu: 'AMD Radeon Graphics', ram: '8GB LPDDR4X', storage: '512GB SSD', display: '14" FHD+ 16:10 display' },
    imageUrl: '/dell.svg',
    description: 'Compact 14" with 16:10 display and 8.5-hour battery. Good for students who commute.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+Inspiron+14+Ryzen+5',
    hasVerifiedBuyLink: false,
    pros: ['16:10 aspect shows more content', '8.5 hrs battery'], cons: ['Only 8GB RAM — can\'t upgrade', 'Quiet speakers']
  },
  {
    id: 'dell-inspiron-16', brand: 'Dell', name: 'Dell Inspiron 16', price: 79990, useCases: ['college', 'coding'], batteryLife: 9, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i7-1355U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '16" FHD+ IPS display' },
    imageUrl: '/dell.svg',
    description: 'Metal 16" Dell with i7, 1TB SSD, and top-firing speakers. 9-hour battery.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Inspiron+16+i7',
    hasVerifiedBuyLink: false,
    pros: ['Aluminium body looks premium', '1TB SSD out of the box'], cons: ['No numpad despite 16" size', 'Slightly reflective screen']
  },
  {
    id: 'dell-inspiron-14-touch', brand: 'Dell', name: 'Dell Inspiron 2-in-1', price: 69990, useCases: ['college', 'editing'], batteryLife: 8.5, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" FHD+ Touch screen 2-in-1' },
    imageUrl: '/dell.svg',
    description: 'Foldable touchscreen with pen support. 14" 16:10 display. Good for annotating notes.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+Inspiron+14+2-in-1',
    hasVerifiedBuyLink: false,
    pros: ['360° hinge with touch', 'Solid hinge mechanism'], cons: ['Heavy for a 14" at 1.54 kg', 'Screen is dim outdoors']
  },
  {
    id: 'dell-vostro-3520', brand: 'Dell', name: 'Dell Vostro 3520 Workspace', price: 46990, useCases: ['college', 'coding'], batteryLife: 7, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i5-1235U', gpu: 'Intel UHD Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 120Hz IPS' },
    imageUrl: '/dell.svg',
    description: 'Business-oriented Dell with 120Hz display and 16GB RAM. Easy to open and upgrade.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+Vostro+3520+i5',
    hasVerifiedBuyLink: false,
    pros: ['Quiet fans', 'Easy to upgrade RAM/SSD'], cons: ['All-plastic shell', 'UHD graphics — very basic']
  },
  {
    id: 'dell-g15-i5', brand: 'Dell', name: 'Dell G15 Gaming Laptop', price: 67990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.7, portability: 'low',
    specs: { cpu: 'Core i5-13450HX', gpu: 'NVIDIA RTX 3050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 120Hz screen' },
    imageUrl: '/dell.svg',
    description: '13th gen HX processor with RTX 3050 6GB. Good multi-threaded performance at ₹68K.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+G15+RTX+3050',
    hasVerifiedBuyLink: false,
    pros: ['HX chip — strong multi-core', 'Upgradeable RAM/storage'], cons: ['Heavy at 2.6 kg', 'Keyboard feels mushy']
  },
  {
    id: 'dell-g15-i7', brand: 'Dell', name: 'Dell G15 Intel i7 Heavy Duty', price: 89990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i7-13650HX', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '15.6" FHD 120Hz' },
    imageUrl: '/dell.svg',
    description: 'i7 HX + RTX 4050 + 1TB SSD at ₹90K. Decent for heavy compiling and gaming.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+G15+Core+i7+4050',
    hasVerifiedBuyLink: false,
    pros: ['1TB SSD included', 'Desktop-class multi-core CPU'], cons: ['Bulky charger', 'Dust collects in vents quickly']
  },
  {
    id: 'dell-xps-13', brand: 'Dell', name: 'Dell XPS 13 Elite', price: 139990, useCases: ['coding', 'college'], batteryLife: 15, weight: 2.6, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '13.4" FHD+ InfiniteEdge IPS' },
    imageUrl: '/dell.svg',
    description: 'Minimalist ultrabook with near-borderless display and glass touchpad. 1.17 kg, 15-hour battery.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+XPS+13+laptop',
    hasVerifiedBuyLink: false,
    pros: ['Premium build at 1.17 kg', 'Very bright display (~500 nits)'], cons: ['Only 2 USB-C ports', 'RAM can\'t be upgraded']
  },
  {
    id: 'dell-xps-14', brand: 'Dell', name: 'Dell XPS 14 Workstation', price: 199990, useCases: ['coding', 'editing'], batteryLife: 12, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14.5" 3.2K OLED Touch 120Hz' },
    imageUrl: '/dell.svg',
    description: 'Compact creator machine with 3.2K OLED touch, RTX 4050, and 12-hour battery. Flat-edge design.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+XPS+14',
    hasVerifiedBuyLink: false,
    pros: ['3.2K OLED touchscreen', 'Good mix of power and portability'], cons: ['₹2L for 16GB RAM', 'New keyboard layout has a learning curve']
  },
  {
    id: 'dell-xps-16', brand: 'Dell', name: 'Dell XPS 16 Flagship', price: 279990, useCases: ['coding', 'editing', 'gaming'], batteryLife: 10, weight: 4.8, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4060 8GB', ram: '32GB LPDDR5X', storage: '1TB SSD Gen4', display: '16.3" 4K OLED Touch display' },
    imageUrl: '/dell.svg',
    description: '4K OLED touch with borderless display, RTX 4060, and 32GB RAM. For ML and video production.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+XPS+16',
    hasVerifiedBuyLink: false,
    pros: ['4K OLED borderless screen', '32GB RAM standard'], cons: ['Heavy charger', '₹2.8L is very expensive']
  },
  {
    id: 'dell-alienware-m16', brand: 'Dell', name: 'Dell Alienware m16 Flagship', price: 299990, useCases: ['gaming', 'editing'], batteryLife: 4, weight: 6.2, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB NVMe SSD', display: '16" QHD+ 240Hz screen' },
    imageUrl: '/dell.svg',
    description: 'Alienware with i9 + RTX 4080 + 32GB + 2TB. Full desktop replacement. Not portable at all.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Alienware+m16',
    hasVerifiedBuyLink: false,
    pros: ['RTX 4080 with full TGP', '32GB DDR5 + 2TB SSD'], cons: ['2.8 kg — genuinely heavy', '~4 hrs battery']
  },

  // --- MSI (9 Models) ---
  {
    id: 'msi-modern-14', brand: 'MSI', name: 'MSI Modern 14', price: 34990, useCases: ['college'], batteryLife: 7, weight: 3.1, portability: 'high',
    specs: { cpu: 'Ryzen 5 7530U', gpu: 'AMD Radeon Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '14" FHD IPS panel' },
    imageUrl: '/msi.svg',
    description: '14" travel laptop at ₹35K with backlit keyboard and 1.4 kg weight.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Modern+14',
    hasVerifiedBuyLink: false,
    pros: ['Backlit keyboard at this price', '1.4 kg — very portable'], cons: ['Weak speakers', '8GB single-channel RAM']
  },
  {
    id: 'msi-modern-15', brand: 'MSI', name: 'MSI Modern 15', price: 42990, useCases: ['college', 'coding'], batteryLife: 6.5, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i5-1235U', gpu: 'Intel Iris Xe', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: '/msi.svg',
    description: 'Metal-look 15.6" with 16GB RAM. Full-size keyboard. Good for daily coding and browsing.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Modern+15+i5',
    hasVerifiedBuyLink: false,
    pros: ['16GB RAM for multi-tab work', 'Full-size keyboard'], cons: ['Touch buttons feel cheap', 'Average color accuracy']
  },
  {
    id: 'msi-cyborg-15-4050', brand: 'MSI', name: 'MSI Cyborg 15 (RTX 4050)', price: 57990, useCases: ['gaming', 'coding'], batteryLife: 4.5, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz screen' },
    imageUrl: '/msi.svg',
    description: 'Cheapest RTX 4050 laptop in India. Translucent chassis design. 144Hz display.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Cyborg+15+RTX+4050',
    hasVerifiedBuyLink: false,
    pros: ['Cheapest RTX 4050 in India', 'Unique translucent design'], cons: ['Small 54Wh battery', 'Limited color gamut']
  },
  {
    id: 'msi-cyborg-15-4060', brand: 'MSI', name: 'MSI Cyborg 15 (RTX 4060)', price: 74990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4.5, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i7-12650H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz' },
    imageUrl: '/msi.svg',
    description: 'Most affordable 8GB RTX 4060 laptop at ₹75K. Good for 1080p gaming and rendering.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Cyborg+15+RTX+4060',
    hasVerifiedBuyLink: false,
    pros: ['8GB VRAM at ₹75K', 'DDR5 memory'], cons: ['Single-fan cooling can throttle', 'Small trackpad']
  },
  {
    id: 'msi-thin-15', brand: 'MSI', name: 'MSI Thin 15 Gaming', price: 49990, useCases: ['gaming', 'coding'], batteryLife: 5, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz panel' },
    imageUrl: '/msi.svg',
    description: 'RTX 3050 under ₹50K in a 1.86 kg body. Brushed aluminium lid. Entry gaming laptop.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Thin+15+gaming',
    hasVerifiedBuyLink: false,
    pros: ['Under 1.9 kg for a gaming laptop', 'Metal lid looks clean'], cons: ['Gets hot during long sessions', 'DDR4 — not DDR5']
  },
  {
    id: 'msi-katana-15', brand: 'MSI', name: 'MSI Katana 15', price: 84990, useCases: ['gaming', 'editing'], batteryLife: 5, weight: 5.0, portability: 'low',
    specs: { cpu: 'Core i7-13620H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '15.6" FHD 144Hz IPS 4-Zone RGB' },
    imageUrl: '/msi.svg',
    description: 'RTX 4060 with 1TB SSD and 4-zone RGB keyboard. 13th gen i7 with P-core boost to 4.9 GHz.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Katana+15+i7',
    hasVerifiedBuyLink: false,
    pros: ['Strong single-core performance', '4-zone RGB keyboard'], cons: ['Heavy charger', 'Plastic bezels']
  },
  {
    id: 'msi-katana-17', brand: 'MSI', name: 'MSI Katana 17 Big Screen', price: 139990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 4.5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i9-13900H', gpu: 'NVIDIA RTX 4070 8GB', ram: '16GB DDR5', storage: '1TB SSD Gen4', display: '17.3" QHD 240Hz screen' },
    imageUrl: '/msi.svg',
    description: '17.3" QHD 240Hz with RTX 4070 and i9. Desktop-class performance. Not built for carrying.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Katana+17',
    hasVerifiedBuyLink: false,
    pros: ['240Hz QHD — smooth and sharp', 'i9 for heavy workloads'], cons: ['Not portable at 2.6 kg', '~4.5 hrs battery']
  },
  {
    id: 'msi-sword-16', brand: 'MSI', name: 'MSI Sword 16 HX', price: 99990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 5, weight: 5.3, portability: 'low',
    specs: { cpu: 'Core i7-14700HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16" WQXGA 165Hz IPS' },
    imageUrl: '/msi.svg',
    description: '14th gen HX chip with RTX 4060 at ₹1L. White chassis option. 1600p 165Hz display.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Sword+16+HX',
    hasVerifiedBuyLink: false,
    pros: ['HX processor for compile-heavy work', 'Clean white chassis option'], cons: ['Heavy charger', 'Low-contrast keyboard labels']
  },
  {
    id: 'msi-stealth-16', brand: 'MSI', name: 'MSI Stealth 16 AI Studio', price: 219990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 8, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4070 8GB', ram: '32GB LPDDR5X', storage: '2TB Gen4 SSD', display: '16" 4K OLED 120Hz' },
    imageUrl: '/msi.svg',
    description: '4K OLED 120Hz with RTX 4070, 32GB RAM, and 2TB SSD in a magnesium alloy chassis.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Stealth+16+AI',
    hasVerifiedBuyLink: false,
    pros: ['4K OLED at 120Hz', 'Magnesium alloy — lighter than it looks'], cons: ['₹2.2L price', 'RAM is soldered']
  },

  // --- APPLE (10 Models) ---
  {
    id: 'apple-macbook-air-m1', brand: 'Apple', name: 'Apple MacBook Air 13" (M1)', price: 69900, useCases: ['coding', 'college'], batteryLife: 15, weight: 2.8, portability: 'high',
    specs: { cpu: 'Apple M1 Chip (8-Core)', gpu: '7-Core Integrated GPU', ram: '8GB Unified Memory', storage: '256GB Unified SSD', display: '13.3" Retina Display (2560x1600)' },
    imageUrl: '/apple.svg',
    description: 'Fanless, silent, 15-hour battery. Still the best trackpad in any laptop. Aging but capable.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Air+M1',
    hasVerifiedBuyLink: false,
    pros: ['Completely silent — no fans', '15 hrs real-world battery'], cons: ['Old design without notch', 'RAM and storage can\'t be upgraded']
  },
  {
    id: 'apple-macbook-air-m2', brand: 'Apple', name: 'Apple MacBook Air 13" (M2)', price: 89900, useCases: ['coding', 'college'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M2 Chip (8-Core)', gpu: '8-Core Integrated GPU', ram: '8GB Unified RAM', storage: '256GB SSD', display: '13.6" Liquid Retina Notch' },
    imageUrl: '/apple.svg',
    description: 'Redesigned Air with MagSafe charging, notch display, and flat edges. 18-hour battery.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M2',
    hasVerifiedBuyLink: false,
    pros: ['MagSafe charging is back', 'Modern flat-edge design'], cons: ['Base 256GB SSD is slow (single NAND)', 'RAM can\'t be upgraded']
  },
  {
    id: 'apple-macbook-air-m3-13', brand: 'Apple', name: 'Apple MacBook Air M3 13-inch', price: 104900, useCases: ['coding', 'college'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (8-Core)', gpu: '8-Core Integrated GPU', ram: '8GB Unified RAM', storage: '256GB SSD', display: '13.6" Liquid Retina' },
    imageUrl: '/apple.svg',
    description: 'M3 chip with dual external monitor support. Same body as M2 Air with faster GPU.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M3+13',
    hasVerifiedBuyLink: false,
    pros: ['Supports 2 external monitors', 'Good keyboard feel'], cons: ['256GB base storage fills fast', 'No upgradeable parts']
  },
  {
    id: 'apple-macbook-air-m3-13-16', brand: 'Apple', name: 'Apple MacBook Air M3 13" (16GB)', price: 134900, useCases: ['coding', 'college', 'editing'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (10-Core)', gpu: '10-Core Integrated GPU', ram: '16GB Unified RAM', storage: '512GB SSD', display: '13.6" Liquid Retina' },
    imageUrl: '/apple.svg',
    description: 'The recommended M3 Air config. 16GB handles Docker, Xcode, and multiple IDEs without swapping.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Air+M3+16GB',
    hasVerifiedBuyLink: false,
    pros: ['16GB — runs Docker smoothly', '18 hrs battery still'], cons: ['No active cooling fans', '13.6" screen is compact']
  },
  {
    id: 'apple-macbook-air-m3-15', brand: 'Apple', name: 'Apple MacBook Air M3 15-inch', price: 154900, useCases: ['coding', 'college', 'editing'], batteryLife: 18, weight: 3.3, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (10-Core)', gpu: '10-Core Integrated', ram: '16GB Unified RAM', storage: '512GB SSD', display: '15.3" Liquid Retina panel' },
    imageUrl: '/apple.svg',
    description: 'Bigger 15.3" screen with 6-speaker sound system. Same M3 chip, more screen real estate.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M3+15',
    hasVerifiedBuyLink: false,
    pros: ['Large 15.3" display', '6-speaker system with bass'], cons: ['Only 2 USB-C ports', '₹1.55L is a lot for an Air']
  },
  {
    id: 'apple-macbook-air-m4', brand: 'Apple', name: 'Apple MacBook Air 13" (M4)', price: 114900, useCases: ['coding', 'college', 'editing'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M4 Chip (10-Core)', gpu: '10-Core GPU', ram: '16GB Unified RAM', storage: '512GB SSD', display: '13.6" Liquid Retina' },
    imageUrl: '/apple.svg',
    description: 'Latest M4 chip on 3nm. ~40% faster than M3. 16GB base RAM. Best current all-rounder Air.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Air+M4',
    hasVerifiedBuyLink: false,
    pros: ['M4 single-core is class-leading', '16GB base RAM finally'], cons: ['No touchscreen', 'Only silver and space black']
  },
  {
    id: 'apple-macbook-pro-14-m3', brand: 'Apple', name: 'Apple MacBook Pro 14" (M3)', price: 147900, useCases: ['coding', 'college', 'editing'], batteryLife: 22, weight: 3.4, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (8-Core)', gpu: '10-Core GPU (Ray Tracing)', ram: '8GB Unified RAM', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 120Hz' },
    imageUrl: '/apple.svg',
    description: '120Hz XDR display with 1600 nits peak brightness. 22-hour battery. Pro ports (HDMI, SD, MagSafe).',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Pro+14+M3',
    hasVerifiedBuyLink: false,
    pros: ['XDR display — 1600 nits peak', '22 hrs battery — insane'], cons: ['Base model only has 8GB RAM', 'Thicker than the Air']
  },
  {
    id: 'apple-macbook-pro-14-m3pro', brand: 'Apple', name: 'Apple MacBook Pro 14" (M3 Pro)', price: 179900, useCases: ['coding', 'editing', 'gaming'], batteryLife: 18, weight: 3.5, portability: 'high',
    specs: { cpu: 'Apple M3 Pro Chip (11-Core)', gpu: '14-Core GPU', ram: '18GB Unified RAM', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 120Hz' },
    imageUrl: '/apple.svg',
    description: 'M3 Pro with 18GB RAM and 14-core GPU. Active fans for sustained workloads. Space Black option.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Pro+14+M3+Pro',
    hasVerifiedBuyLink: false,
    pros: ['18GB high-bandwidth memory', 'Space Black color option'], cons: ['Expensive upgrade tiers', 'Slightly heavier than base model']
  },
  {
    id: 'apple-macbook-pro-16-m3max', brand: 'Apple', name: 'Apple MacBook Pro 16" (M3 Max)', price: 349900, useCases: ['coding', 'editing'], batteryLife: 22, weight: 4.7, portability: 'medium',
    specs: { cpu: 'Apple M3 Max Chip (14-Core)', gpu: '30-Core GPU (High Speed)', ram: '36GB Unified Memory', storage: '1TB Pro SSD', display: '16.2" Liquid Retina XDR 120Hz' },
    imageUrl: '/apple.svg',
    description: 'M3 Max with 30-core GPU and 36GB RAM. For local ML training, 8K video editing, and 3D rendering.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Pro+16+M3+Max',
    hasVerifiedBuyLink: false,
    pros: ['30-core GPU for ML/rendering', '16.2" XDR — best laptop display'], cons: ['2.14 kg — heavy for a Mac', '₹3.5L starting price']
  },
  {
    id: 'apple-macbook-pro-14-m4', brand: 'Apple', name: 'Apple MacBook Pro 14" (M4 Pro)', price: 199900, useCases: ['coding', 'editing'], batteryLife: 22, weight: 3.5, portability: 'high',
    specs: { cpu: 'Apple M4 Pro Chip (12-Core)', gpu: '16-Core GPU', ram: '24GB Unified Memory', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 120Hz' },
    imageUrl: '/apple.svg',
    description: 'M4 Pro with 24GB RAM baseline and Thunderbolt 5. Fastest single-core in any laptop right now.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Pro+M4+Pro',
    hasVerifiedBuyLink: false,
    pros: ['Thunderbolt 5 ports', '24GB baseline RAM'], cons: ['Glossy screen shows glare outdoors', 'Very limited repairability']
  },

  // --- SAMSUNG (7 Models) ---
  {
    id: 'samsung-galaxy-book2-go', brand: 'Samsung', name: 'Samsung Galaxy Book2 Go', price: 31990, useCases: ['college'], batteryLife: 14, weight: 3.1, portability: 'high',
    specs: { cpu: 'Snapdragon 7c+ Gen 3', gpu: 'Qualcomm Adreno GPU', ram: '8GB LPDDR4X', storage: '256GB eMMC storage', display: '14" FHD Anti-Glare display' },
    imageUrl: '/samsung.svg',
    description: 'ARM-based budget laptop for basic tasks only. 14-hour battery. Not for heavy apps.',
    buyUrl: 'https://www.amazon.in/s?k=Samsung+Galaxy+Book2+Go',
    hasVerifiedBuyLink: false,
    pros: ['14 hrs battery', 'Light at 1.38 kg'], cons: ['Many Windows apps won\'t run', 'Only 256GB eMMC storage']
  },
  {
    id: 'samsung-galaxy-book3', brand: 'Samsung', name: 'Samsung Galaxy Book3', price: 56990, useCases: ['college', 'coding'], batteryLife: 10, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR4X', storage: '512GB SSD', display: '15.6" FHD IPS aluminium panel' },
    imageUrl: '/samsung.svg',
    description: 'Samsung aluminium laptop with Galaxy ecosystem integration. Works well with Galaxy phones.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book3',
    hasVerifiedBuyLink: false,
    pros: ['Galaxy phone integration (Quick Share, etc.)', 'Aluminium build'], cons: ['Display contrast is low', 'RAM is soldered']
  },
  {
    id: 'samsung-galaxy-book4-i3', brand: 'Samsung', name: 'Samsung Galaxy Book4 (Core i3)', price: 39990, useCases: ['college'], batteryLife: 9, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core i3-1315U', gpu: 'Intel UHD Graphics', ram: '8GB LPDDR5X', storage: '512GB SSD', display: '15.6" FHD anti-glare IPS' },
    imageUrl: '/samsung.svg',
    description: 'Entry-level metal-body Samsung with LPDDR5X memory. 9-hour battery for full-day classes.',
    buyUrl: 'https://www.amazon.in/s?k=Samsung+Galaxy+Book4+i3',
    hasVerifiedBuyLink: false,
    pros: ['Metal body at ₹40K', 'LPDDR5X memory'], cons: ['No keyboard backlight', 'Only 8GB RAM']
  },
  {
    id: 'samsung-galaxy-book4-ultra5', brand: 'Samsung', name: 'Samsung Galaxy Book4 (Ultra 5)', price: 69990, useCases: ['college', 'coding'], batteryLife: 12, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125U', gpu: 'Intel Graphics', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: '/samsung.svg',
    description: 'Core Ultra 5 with 12-hour battery and 16GB RAM. Thin, quiet, and multi-port setup.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Ultra+5',
    hasVerifiedBuyLink: false,
    pros: ['Near-silent operation', 'Bright screen (~350 nits)'], cons: ['No OLED — standard IPS', 'Webcam is average']
  },
  {
    id: 'samsung-galaxy-book4-ultra7', brand: 'Samsung', name: 'Samsung Galaxy Book4 (Ultra 7)', price: 82990, useCases: ['coding', 'college', 'editing'], batteryLife: 11.5, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155U', gpu: 'Intel Graphics', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '15.6" FHD IPS screen' },
    imageUrl: '/samsung.svg',
    description: 'Core Ultra 7 variant with better multi-thread performance. Same thin design.',
    buyUrl: 'https://www.amazon.in/s?k=Samsung+Galaxy+Book4+Ultra+7',
    hasVerifiedBuyLink: false,
    pros: ['Good multi-thread speed', 'Light enough for daily carry'], cons: ['Premium price for FHD screen', 'No dedicated GPU']
  },
  {
    id: 'samsung-galaxy-book4-pro', brand: 'Samsung', name: 'Samsung Galaxy Book4 Pro Premium', price: 121990, useCases: ['coding', 'editing', 'college'], batteryLife: 15, weight: 2.7, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '14" 3K Dynamic AMOLED 120Hz' },
    imageUrl: '/samsung.svg',
    description: '3K Dynamic AMOLED at 120Hz. Samsung\'s answer to the MacBook Air. 1.23 kg, 15-hour battery.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Pro',
    hasVerifiedBuyLink: false,
    pros: ['Dynamic AMOLED — vibrant colors', '1.23 kg — featherweight'], cons: ['Limited ports', 'Expensive for integrated GPU']
  },
  {
    id: 'samsung-galaxy-book4-ultragame', brand: 'Samsung', name: 'Samsung Galaxy Book4 Ultra Flagship', price: 239990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 11, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4070 8GB', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: '16" 3K Touch AMOLED 120Hz' },
    imageUrl: '/samsung.svg',
    description: 'Samsung\'s top-end with RTX 4070, 3K AMOLED touch, and 32GB RAM. Thin for its specs.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Ultra',
    hasVerifiedBuyLink: false,
    pros: ['RTX 4070 in a slim body', 'Galaxy ecosystem features'], cons: ['₹2.4L price tag', 'Shallow key travel']
  },

  // --- LG GRAM (5 Models) ---
  {
    id: 'lg-gram-14', brand: 'LG', name: 'LG Gram 14 Ultra-light', price: 74990, useCases: ['coding', 'college'], batteryLife: 14, weight: 2.2, portability: 'high',
    specs: { cpu: 'Core i5-1340P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB Gen4 SSD', display: '14" WUXGA IPS 16:10 Panel' },
    imageUrl: '/lg.svg',
    description: 'Only 999g. 14-hour battery. MIL-STD tested. The lightest 14" laptop you can buy in India.',
    buyUrl: 'https://www.amazon.in/s?k=LG+Gram+14+laptop',
    hasVerifiedBuyLink: false,
    pros: ['999g — lightest laptop on this list', '14 hrs battery'], cons: ['Keyboard deck flexes under pressure', 'Plain design']
  },
  {
    id: 'lg-gram-14-i7', brand: 'LG', name: 'LG Gram 14 (Intel i7)', price: 92990, useCases: ['coding', 'college'], batteryLife: 13.5, weight: 2.2, portability: 'high',
    specs: { cpu: 'Core i7-1360P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" WUXGA IPS 16:10' },
    imageUrl: '/lg.svg',
    description: 'i7 variant of the Gram 14. More processing power, same 999g weight.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+14+i7',
    hasVerifiedBuyLink: false,
    pros: ['i7 performance at 999g', 'Good port selection for its size'], cons: ['Speakers are tinny', 'Premium price for what you get']
  },
  {
    id: 'lg-gram-15', brand: 'LG', name: 'LG Gram 15 Workspace', price: 79990, useCases: ['college', 'coding'], batteryLife: 14, weight: 2.5, portability: 'high',
    specs: { cpu: 'Core i5-1340P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD IPS Anti-Glare' },
    imageUrl: '/lg.svg',
    description: '15.6" with numpad at only 1.13 kg. Anti-glare display. 14-hour battery.',
    buyUrl: 'https://www.amazon.in/s?k=LG+Gram+15+laptop',
    hasVerifiedBuyLink: false,
    pros: ['15.6" with numpad at 1.13 kg', '14 hrs battery'], cons: ['Screen reflects in bright rooms', 'Plastic-like feel on body']
  },
  {
    id: 'lg-gram-16-i7', brand: 'LG', name: 'LG Gram 16 Big Screen', price: 104990, useCases: ['coding', 'college', 'editing'], batteryLife: 15, weight: 2.6, portability: 'high',
    specs: { cpu: 'Core i7-1360P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '16" WQXGA IPS 16:10 matte' },
    imageUrl: '/lg.svg',
    description: '16" 2560x1600 matte display at 1.19 kg. 15-hour battery. 1TB SSD. Great coding screen.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+16',
    hasVerifiedBuyLink: false,
    pros: ['2K anti-glare 16" at 1.19 kg', '15 hrs battery life'], cons: ['Chassis flexes slightly', 'Expensive for integrated graphics']
  },
  {
    id: 'lg-gram-pro-16', brand: 'LG', name: 'LG Gram Pro 16 (RTX 3050)', price: 139990, useCases: ['editing', 'coding', 'college'], batteryLife: 12, weight: 2.8, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '16" WQXGA OLED 144Hz' },
    imageUrl: '/lg.svg',
    description: 'RTX 3050 in a 1.29 kg magnesium alloy body with 144Hz OLED. For creators who travel.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+Pro+16',
    hasVerifiedBuyLink: false,
    pros: ['144Hz OLED at 1.29 kg', 'RTX 3050 for light GPU work'], cons: ['₹1.4L is steep', 'Fans audible during GPU loads']
  },

  // --- ALTERNATIVE & BRAND COMPETITORS (4 Models) ---
  {
    id: 'xiaomi-notebook-pro-120g', brand: 'Xiaomi', name: 'Xiaomi Notebook Pro 120G', price: 49990, useCases: ['coding', 'college', 'editing'], batteryLife: 8.5, weight: 3.2, portability: 'high',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA GeForce MX550 2GB', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" 2.5K TrueLife 120Hz' },
    imageUrl: '/xiaomi.svg',
    description: '2.5K 120Hz display with MX550 GPU under ₹50K. Metal body. Strong value for the spec sheet.',
    buyUrl: 'https://www.amazon.in/s?k=Xiaomi+Notebook+Pro+120G',
    hasVerifiedBuyLink: false,
    pros: ['2.5K 120Hz at this price', 'Metal build quality'], cons: ['MX550 is very entry-level GPU', '12th gen CPU is older']
  },
  {
    id: 'infinix-gt-book', brand: 'Infinix', name: 'Infinix GT Book Gaming laptop', price: 54990, useCases: ['gaming', 'coding'], batteryLife: 6, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '16" 16:10 FHD+ 120Hz' },
    imageUrl: '/infinix.svg',
    description: 'RTX 4050 at ₹55K from a newer brand. RGB LED on the lid. Aggressive pricing.',
    buyUrl: 'https://www.flipkart.com/search?q=Infinix+GT+Book',
    hasVerifiedBuyLink: false,
    pros: ['Cheapest RTX 4050 laptop overall', '120Hz FHD+ display'], cons: ['New brand — limited service network', 'Fans get loud quickly']
  },
  {
    id: 'gigabyte-g5', brand: 'Gigabyte', name: 'Gigabyte G5 Gaming Laptop', price: 54990, useCases: ['gaming', 'coding'], batteryLife: 4.5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Core i5-12500H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz panel' },
    imageUrl: '/gigabyte.svg',
    description: 'RTX 4050 + i5-12500H at ₹55K. Good keyboard feel. Budget gaming competitor.',
    buyUrl: 'https://www.flipkart.com/search?q=Gigabyte+G5+RTX+4050',
    hasVerifiedBuyLink: false,
    pros: ['RTX 4050 at ₹55K', 'Good keyboard with clear feedback'], cons: ['Weak speakers', 'Runs warm under heavy load']
  },
  {
    id: 'gigabyte-aorus-15', brand: 'Gigabyte', name: 'Gigabyte Aorus 15 Gaming', price: 89990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.3, portability: 'low',
    specs: { cpu: 'Core i7-13620H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '15.6" QHD 165Hz IPS' },
    imageUrl: '/gigabyte.svg',
    description: 'QHD 165Hz display with RTX 4060 and 1TB SSD at ₹90K. Upgradeable RAM and storage.',
    buyUrl: 'https://www.amazon.in/s?k=Gigabyte+Aorus+15',
    hasVerifiedBuyLink: false,
    pros: ['QHD display at this price', 'RAM and SSD are upgradeable'], cons: ['Bulky charger', 'Plastic bottom panel']
  }
];
