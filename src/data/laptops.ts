import { Laptop } from '../types';

export const laptops: Laptop[] = [
  // --- LENOVO (12 Models) ---
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

  // --- HP (7 Models) ---
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

  // --- ASUS (8 Models) ---
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

  // --- ACER (6 Models) ---
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
    id: 'acer-nitro-v15', brand: 'Acer', name: 'Acer Nitro V 15 (RTX 4050)', price: 69990, useCases: ['gaming', 'editing'], batteryLife: 5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Core i5-13420H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS panel' },
    imageUrl: '/acer.svg',
    description: 'RTX 4050 at ₹70K with dual-fan cooling. One of the best-selling budget gaming laptops in India.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Nitro+V+15',
    hasVerifiedBuyLink: false,
    pros: ['RTX 4050 under ₹70K', 'DDR5 memory'], cons: ['Display colors are dull (~60% sRGB)', '~5 hrs battery life']
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
    id: 'acer-predator-16-i9', brand: 'Acer', name: 'Acer Predator Helios 16', price: 249990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4, weight: 5.9, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB Gen4 SSD', display: '16" WQXGA 240Hz screen' },
    imageUrl: '/acer.svg',
    description: 'i9-14900HX + RTX 4080 12GB + 32GB DDR5 + 2TB. For CUDA workloads and maxed-out gaming.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Predator+Helios+16+i9',
    hasVerifiedBuyLink: false,
    pros: ['i9 + RTX 4080 — raw power', '2TB SSD included'], cons: ['2.7 kg — very heavy', 'Loud fans under load']
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

  // --- DELL (7 Models) ---
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
    id: 'dell-inspiron-16', brand: 'Dell', name: 'Dell Inspiron 16', price: 79990, useCases: ['college', 'coding'], batteryLife: 9, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i7-1355U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '16" FHD+ IPS display' },
    imageUrl: '/dell.svg',
    description: 'Metal 16" Dell with i7, 1TB SSD, and top-firing speakers. 9-hour battery.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Inspiron+16+i7',
    hasVerifiedBuyLink: false,
    pros: ['Aluminium body looks premium', '1TB SSD out of the box'], cons: ['No numpad despite 16" size', 'Slightly reflective screen']
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

  // --- MSI (5 Models) ---
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

  // --- APPLE (5 Models) ---
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

  // --- SAMSUNG (3 Models) ---
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
    id: 'samsung-galaxy-book4-pro', brand: 'Samsung', name: 'Samsung Galaxy Book4 Pro Premium', price: 121990, useCases: ['coding', 'editing', 'college'], batteryLife: 15, weight: 2.7, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '14" 3K Dynamic AMOLED 120Hz' },
    imageUrl: '/samsung.svg',
    description: 'Samsung\'s answer to the MacBook Air. 3K Dynamic AMOLED at 120Hz. 1.23 kg, 15-hour battery.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Pro',
    hasVerifiedBuyLink: false,
    pros: ['Dynamic AMOLED — vibrant colors', '1.23 kg — featherweight'], cons: ['Limited ports', 'Expensive for integrated GPU']
  },

  // --- LG GRAM (1 Model) ---
  {
    id: 'lg-gram-16-i7', brand: 'LG', name: 'LG Gram 16 Big Screen', price: 104990, useCases: ['coding', 'college', 'editing'], batteryLife: 15, weight: 2.6, portability: 'high',
    specs: { cpu: 'Core i7-1360P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '16" WQXGA IPS 16:10 matte' },
    imageUrl: '/lg.svg',
    description: '16" 2560x1600 matte display at 1.19 kg. 15-hour battery. 1TB SSD. Great coding screen.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+16',
    hasVerifiedBuyLink: false,
    pros: ['2K anti-glare 16" at 1.19 kg', '15 hrs battery life'], cons: ['Chassis flexes slightly', 'Expensive for integrated graphics']
  },

  // --- ALTERNATIVES (1 Model) ---
  {
    id: 'infinix-gt-book', brand: 'Infinix', name: 'Infinix GT Book Gaming laptop', price: 54990, useCases: ['gaming', 'coding'], batteryLife: 6, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '16" 16:10 FHD+ 120Hz' },
    imageUrl: '/infinix.svg',
    description: 'RTX 4050 at ₹55K from a newer brand. RGB LED on the lid. Aggressive pricing.',
    buyUrl: 'https://www.flipkart.com/search?q=Infinix+GT+Book',
    hasVerifiedBuyLink: false,
    pros: ['Cheapest RTX 4050 laptop overall', '120Hz FHD+ display'], cons: ['New brand — limited service network', 'Fans get loud quickly']
  }
];
