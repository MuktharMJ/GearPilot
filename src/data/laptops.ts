import { Laptop } from '../types';

export const laptops: Laptop[] = [
  // --- LENOVO (15 Models) ---
  {
    id: 'lenovo-loq-15-i5', brand: 'Lenovo', name: 'Lenovo LOQ 15 (Intel i5)', price: 62990, useCases: ['gaming', 'coding'], batteryLife: 5, weight: 5.2, portability: 'low',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 3050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Outstanding value entry-point student gamer notebook with robust cooling.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+LOQ+Intel+i5',
    pros: ['High TGP GPU', 'DDR5 memory'], cons: ['Short unplugged backup', 'Heavy adapter brick']
  },
  {
    id: 'lenovo-loq-15-r7', brand: 'Lenovo', name: 'Lenovo LOQ 15 (Ryzen 7)', price: 78990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.1, portability: 'low',
    specs: { cpu: 'Ryzen 7 7435HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Unbeatable price-to-performance RTX 4050 option for budget creators and developers.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+LOQ+Ryzen+7',
    pros: ['Excellent DLSS 3 gaming', 'Superb performance'], cons: ['Battery drains on heavy load', 'Average trackpad']
  },
  {
    id: 'lenovo-legion-slim-5', brand: 'Lenovo', name: 'Lenovo Legion Slim 5', price: 114990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 7, weight: 4.8, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16" WQXGA 165Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Premium student workstation balance with large battery life, sleek metal lid.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+Legion+Slim+5',
    pros: ['Stunning 1600p screen', 'Robust build quality'], cons: ['Premium pricing', 'Fans loud in beast mode']
  },
  {
    id: 'lenovo-legion-pro-5i', brand: 'Lenovo', name: 'Lenovo Legion Pro 5i', price: 149990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.5, portability: 'low',
    specs: { cpu: 'Core i7-14700HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16" WQXGA 240Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'High-end desktop replacement ideal for heavy engineering programs and 3D modeling.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+Legion+Pro+5i',
    pros: ['Blazing fast HX processor', '240Hz pro display'], cons: ['Poor portability design', 'High power intake']
  },
  {
    id: 'lenovo-legion-pro-7i', brand: 'Lenovo', name: 'Lenovo Legion Pro 7i (AI Ready)', price: 284990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4.5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB NVMe SSD', display: '16" WQXGA 240Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'The ultimate AI & Machine Learning student machine with 12GB VRAM RTX 4080.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+Legion+Pro+7i',
    pros: ['Extreme ML training capability', 'Massive 32GB RAM'], cons: ['Excessively heavy', 'Prohibitive price point']
  },
  {
    id: 'lenovo-ideapad-slim-3-ryzen5', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 3 Ryzen 5', price: 44990, useCases: ['college', 'coding'], batteryLife: 7.5, weight: 3.5, portability: 'high',
    specs: { cpu: 'Ryzen 5 7520U', gpu: 'Radeon 610M Graphics', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD Anti-Glare' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Excellent affordable productivity laptop with high portability and lightweight frame.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+IdeaPad+Slim+3+Ryzen+5',
    pros: ['Reliable battery longevity', 'Generous 16GB RAM for multitasking'], cons: ['Plastic keycaps', 'Not for modern games']
  },
  {
    id: 'lenovo-ideapad-slim-3-i3', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 3 i3', price: 34990, useCases: ['college'], batteryLife: 7, weight: 3.5, portability: 'high',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Perfect low-cost companion for daily typing, spreadsheets, and online lectures.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+IdeaPad+Slim+3+i3',
    pros: ['Very light budget laptop', 'Clean simplistic design'], cons: ['Limited to 8GB RAM', 'No gaming support']
  },
  {
    id: 'lenovo-ideapad-slim-5-r7', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 5 Ryzen 7', price: 65990, useCases: ['coding', 'college'], batteryLife: 9, weight: 3.5, portability: 'high',
    specs: { cpu: 'Ryzen 7 7730U', gpu: 'Radeon Graphics', ram: '16GB DDR4', storage: '512GB NVMe SSD', display: '14" WUXGA OLED' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Premium thin-and-light laptop featuring a majestic 100% DCI-P3 OLED screen.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+IdeaPad+Slim+5+OLED',
    pros: ['Stunning OLED vividness', 'Excellent battery duration'], cons: ['Soldered DDR4 memory', 'Slightly reflective screen']
  },
  {
    id: 'lenovo-ideapad-slim-5-i5', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 5 Ultra 5', price: 72990, useCases: ['coding', 'college', 'editing'], batteryLife: 10, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" WUXGA OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Next-gen Intel Core Ultra model equipped with AI acceleration and high graphics.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+IdeaPad+Slim+5+Intel+Ultra',
    pros: ['Very capable Arc Graphics', 'Super fast 120Hz action'], cons: ['Chassis warm under load', 'Soldered RAM limits']
  },
  {
    id: 'lenovo-ideapad-pro-5', brand: 'Lenovo', name: 'Lenovo IdeaPad Pro 5', price: 102990, useCases: ['coding', 'editing'], batteryLife: 11, weight: 3.3, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" 2.8K OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Top-tier lightweight workstation with 32GB RAM and gorgeous high-resolution display.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+IdeaPad+Pro+5',
    pros: ['Massive 32GB RAM onboard', 'Phenomenal 2.8K resolution'], cons: ['Speakers are average', 'Pricey for integrated graphics']
  },
  {
    id: 'lenovo-thinkpad-e14', brand: 'Lenovo', name: 'Lenovo ThinkPad E14', price: 59990, useCases: ['coding', 'college'], batteryLife: 10, weight: 3.3, portability: 'high',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '14" WUXGA IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'The legendary durable programming tool with standard typing comfort.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+ThinkPad+E14',
    pros: ['Industry leading keyboard feel', 'Sturdy military grade chassis'], cons: ['Basic visual appearance', 'No high refresh display']
  },
  {
    id: 'lenovo-thinkpad-e16', brand: 'Lenovo', name: 'Lenovo ThinkPad E16', price: 64990, useCases: ['coding', 'college'], batteryLife: 9.5, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '16" WQXGA IPS 16:10' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Large-screen durable choice with dedicated numpad for data computation students.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+ThinkPad+E16',
    pros: ['Spacious 16:10 coding surface', 'Includes numpad'], cons: ['Heavier footprint', 'Moderate screen brightness']
  },
  {
    id: 'lenovo-thinkpad-t14', brand: 'Lenovo', name: 'Lenovo ThinkPad T14', price: 118990, useCases: ['coding', 'college'], batteryLife: 12, weight: 2.9, portability: 'high',
    specs: { cpu: 'Core i7-1355U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '14" WUXGA Low Power IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Elite executive-grade robust computing device built for programmers and business majors.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+ThinkPad+T14',
    pros: ['Whisper-quiet thermals', 'Outstanding durability'], cons: ['High price ceiling', 'Conservative visual layout']
  },
  {
    id: 'lenovo-yoga-slim-7x', brand: 'Lenovo', name: 'Lenovo Yoga Slim 7x Copilot+', price: 139990, useCases: ['coding', 'college'], batteryLife: 16, weight: 2.8, portability: 'high',
    specs: { cpu: 'Snapdragon X Elite', gpu: 'Qualcomm Adreno GPU', ram: '16GB LPDDR5X', storage: '1TB NVMe SSD', display: '14.5" 3K OLED 90Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'All-day battery life champion with next-gen AI processing capabilities built in.',
    buyUrl: 'https://www.amazon.in/s?k=Lenovo+Yoga+Slim+7x',
    pros: ['Astonishing 16hr stamina', 'Thin aluminium chassis'], cons: ['ARM compatibility limits', 'No gaming performance']
  },
  {
    id: 'lenovo-yoga-9i-dual', brand: 'Lenovo', name: 'Lenovo Yoga 9i Dual Screen', price: 239990, useCases: ['editing', 'coding', 'college'], batteryLife: 8, weight: 3.0, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: 'Dual 13.3" 2.8K OLED' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Futuristic dual screen laptop with detachable bluetooth keyboard and active stylus.',
    buyUrl: 'https://www.flipkart.com/search?q=Lenovo+Yoga+9i+Dual',
    pros: ['Dual OLED multi-view layouts', 'Includes stylus pen'], cons: ['Extremely high expense', 'Average hinge balance']
  },

  // --- HP (13 Models) ---
  {
    id: 'hp-victus-15-r5', brand: 'HP', name: 'HP Victus 15 (Ryzen 5)', price: 54990, useCases: ['gaming', 'college'], batteryLife: 6, weight: 5.0, portability: 'low',
    specs: { cpu: 'Ryzen 5 5600H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Highly accessible gaming notebook with clean visual elements ideal for lectures.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Victus+15+Ryzen+5',
    pros: ['Very cheap RTX options', 'Full numeric keypad'], cons: ['Wobbly screen hinge', 'DDR4 memory generation']
  },
  {
    id: 'hp-victus-15-i5', brand: 'HP', name: 'HP Victus 15 (Intel i5)', price: 58990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.1, portability: 'low',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Reliable programming framework matched with hardware-accelerated RTX gaming graphics.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Victus+15+Intel+i5',
    pros: ['Good single-core power', 'Clean presentation'], cons: ['Thermals warm up on fast runs', 'Standard 1080p panel']
  },
  {
    id: 'hp-victus-16-r7', brand: 'HP', name: 'HP Victus 16 (Ryzen 7)', price: 79990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 6.5, weight: 5.2, portability: 'low',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '16.1" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'High-TGP RTX 4050 option for entry 3D rendering and fast compilation.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Victus+16+RTX+4050',
    pros: ['Exceptional Ryzen efficiency', 'Solid graphics speed'], cons: ['Subdued speaker sound', 'Fully plastic panel base']
  },
  {
    id: 'hp-omen-16-r7', brand: 'HP', name: 'HP Omen 16 (Ryzen 7)', price: 104990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 7, weight: 5.1, portability: 'low',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16.1" WQHD 165Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Premium gaming build boasting exceptional temperature controls and 100% sRGB screen.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Omen+16+Ryzen+7',
    pros: ['Impeccable structural rigidity', 'Large 8GB VRAM'], cons: ['Slightly premium markups', 'Heavy multi-pin adapter']
  },
  {
    id: 'hp-omen-16-i7', brand: 'HP', name: 'HP Omen 16 (Intel i7)', price: 144990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 6, weight: 5.3, portability: 'low',
    specs: { cpu: 'Core i7-14700HX', gpu: 'NVIDIA RTX 4070 8GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '16.1" QHD 240Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'High-TGP RTX 4070 option with stellar multi-thread capabilities for data pipelines.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Omen+16+Core+i7+4070',
    pros: ['Blistering speed', 'Fabulous 240Hz screen'], cons: ['Heavy power usage', 'Prone to fingerprint marks']
  },
  {
    id: 'hp-omen-transcend-14', brand: 'HP', name: 'HP Omen Transcend 14', price: 164990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 8, weight: 3.6, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" 2.8K OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Ultra-thin, light premium metal gaming studio laptop designed for active campus life.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Omen+Transcend+14',
    pros: ['Incredible 2.8K OLED screen', 'Extremely lightweight'], cons: ['Memory cannot be upgraded', 'Slightly muted bass audio']
  },
  {
    id: 'hp-pavilion-15-i5', brand: 'HP', name: 'HP Pavilion 15 (Core i5)', price: 62990, useCases: ['college', 'coding'], batteryLife: 8, weight: 3.8, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Micro-Edge' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'The standard metal deck laptop for daily lectures and multi-tab exploration.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Pavilion+15+Intel+i5',
    pros: ['Comfortable keyboard surface', 'Classy silver finish'], cons: ['Older DDR4 memory slots', 'Average indoor screen depth']
  },
  {
    id: 'hp-pavilion-plus-14', brand: 'HP', name: 'HP Pavilion Plus 14 OLED', price: 79990, useCases: ['editing', 'coding', 'college'], batteryLife: 8.5, weight: 3.1, portability: 'high',
    specs: { cpu: 'Core i5-13500H', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" 2.8K OLED 90Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'High-res OLED lifestyle laptop targeted at video production/design classes.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Pavilion+Plus+14+OLED',
    pros: ['Stunning 2.8K color accuracy', 'Ultra-portable layout'], cons: ['Average audio volume', 'Glossy panel reflections']
  },
  {
    id: 'hp-pavilion-aero-13', brand: 'HP', name: 'HP Pavilion Aero 13', price: 67990, useCases: ['college', 'coding'], batteryLife: 10, weight: 2.1, portability: 'high',
    specs: { cpu: 'Ryzen 5 7535U', gpu: 'AMD Radeon Graphics', ram: '16GB LPDDR5', storage: '512GB Gen4 SSD', display: '13.3" WUXGA IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Feather-light magnesium alloy chassis weighing under 1 kg for great mobility.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Pavilion+Aero+13',
    pros: ['Phenomenally lightweight (970g)', 'Long battery duration'], cons: ['Small display boundary', 'Chassis has active flex']
  },
  {
    id: 'hp-15s-i3', brand: 'HP', name: 'HP 15s (Intel i3)', price: 36990, useCases: ['college'], batteryLife: 7, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Sleek entry-level computing deck for basic documentation and web services.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+15s+Core+i3',
    pros: ['Affordable brand security', 'Satisfactory keypad feedback'], cons: ['Restricted 8GB allocation', 'No modern Type-C charging']
  },
  {
    id: 'hp-15s-r5', brand: 'HP', name: 'HP 15s (Ryzen 5)', price: 44990, useCases: ['college', 'coding'], batteryLife: 7.5, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD Anti-Glare' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Budget-friendly workhorse with 6 computing cores to execute light compilers smoothly.',
    buyUrl: 'https://www.amazon.in/s?k=HP+15s+Ryzen+5',
    pros: ['Excellent multi-threaded value', 'Very comfortable numpad'], cons: ['Build is entirely plastic', 'Average standard display range']
  },
  {
    id: 'hp-envy-x360-14', brand: 'HP', name: 'HP Envy x360 14', price: 94990, useCases: ['editing', 'college'], batteryLife: 11, weight: 3.1, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '14" 2.2K IPS 2-in-1 Touch' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Versatile aluminium convertible with active pen support for annotations.',
    buyUrl: 'https://www.flipkart.com/search?q=HP+Envy+x360+14',
    pros: ['Convertible 360 hinge structure', 'Includes digital stylus'], cons: ['Heavier in tablet profile', 'Slightly reflective screen glass']
  },
  {
    id: 'hp-spectre-x360-14', brand: 'HP', name: 'HP Spectre x360 14', price: 164990, useCases: ['coding', 'editing', 'college'], batteryLife: 13, weight: 2.9, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '32GB LPDDR5X', storage: '1TB SSD Gen4', display: '14" 2.8K OLED Touch 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Ultimate hand-crafted luxury notebook featuring exceptional metal beveling and 32GB RAM.',
    buyUrl: 'https://www.amazon.in/s?k=HP+Spectre+x360+14',
    pros: ['Fanciest design on campus', 'Massive 32GB system memory'], cons: ['Premium pricing tier', 'Repair parts can be costly']
  },

  // --- ASUS (14 Models) ---
  {
    id: 'asus-tuf-a15-r7', brand: 'ASUS', name: 'ASUS TUF Gaming A15', price: 76990, useCases: ['gaming', 'coding'], batteryLife: 7.5, weight: 4.8, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7735HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz 100% sRGB' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Extremely rugged military-grade device matching high battery capacity and accurate colours.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+TUF+A15+RTX+4050',
    pros: ['Exceptional 90Wh capacity battery', '100% sRGB color output'], cons: ['Plastic key lids', 'Speakers lack heavy bass']
  },
  {
    id: 'asus-tuf-f15-i5', brand: 'ASUS', name: 'ASUS TUF Gaming F15', price: 59990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.0, portability: 'low',
    specs: { cpu: 'Core i5-11400H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Tough, reliable budget champion optimized for standard college software compilation.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+TUF+F15+RTX+3050',
    pros: ['Extensive port diversity', 'Highly durable chassis'], cons: ['11th Gen processor is older', 'Moderate fan acoustics']
  },
  {
    id: 'asus-tuf-f17-i7', brand: 'ASUS', name: 'ASUS TUF Gaming F17', price: 84990, useCases: ['gaming', 'editing'], batteryLife: 6, weight: 5.7, portability: 'low',
    specs: { cpu: 'Core i7-12700H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '17.3" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Immersive large 17.3-inch screen for enhanced development visibility and CAD usage.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+TUF+F17',
    pros: ['Large displays format', 'Upgradable RAM & storage'], cons: ['Heavier travel load', 'Moderate screen brightness']
  },
  {
    id: 'asus-tuf-a16-adv', brand: 'ASUS', name: 'ASUS TUF Gaming A16', price: 89990, useCases: ['gaming', 'coding'], batteryLife: 8, weight: 4.9, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7735HS', gpu: 'AMD Radeon RX 7600S 8GB', ram: '16GB DDR5', storage: '512GB SSD', display: '16" FHD+ IPS 165Hz 16:10' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'All-AMD hardware platform yielding great Linux developer setups and long battery backup.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+TUF+A16+Advantage',
    pros: ['Amazing battery scaling', '8GB graphics frame buffer'], cons: ['Lacks Nvidia DLSS features', 'Relatively sparse styling']
  },
  {
    id: 'asus-rog-strix-g16', brand: 'ASUS', name: 'ASUS ROG Strix G16', price: 119990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 6, weight: 5.5, portability: 'low',
    specs: { cpu: 'Core i7-13650HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB SSD Gen4', display: '16" FHD+ 165Hz ROG Nebula' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Elite gaming rig showcasing dynamic triple-fan liquid metal coolings and 3-zone RGB light-bars.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+ROG+Strix+G16',
    pros: ['Stellar liquid metal heat management', 'Highly distinctive gaming looks'], cons: ['Distinctly bulky chassis profile', 'Keyboard lacks classic numpad']
  },
  {
    id: 'asus-rog-scar-16', brand: 'ASUS', name: 'ASUS ROG Strix SCAR 16', price: 289990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB Gen4 SSD', display: '16" mini-LED QHD+ 240Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Absolutely extreme compilation speed and hardware power for deep neural net pipelines.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+ROG+SCAR+16',
    pros: ['Stunning Mini-LED display spec', '12GB VRAM RTX 4080'], cons: ['Substantial charger weight', 'Ultra extravagant styling']
  },
  {
    id: 'asus-rog-zephyrus-g14', brand: 'ASUS', name: 'ASUS ROG Zephyrus G14 OLED', price: 147990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 8.5, weight: 3.3, portability: 'high',
    specs: { cpu: 'Ryzen 9 8945HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB LPDDR5X', storage: '1TB SSD', display: '14" 3K OLED 120Hz ROG Nebula' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'The standard premium portable compact gaming device with majestic OLED display and metal design.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+ROG+Zephyrus+G14',
    pros: ['Phenomenally sharp 3K visual', 'Slim aluminium styling'], cons: ['Soldered RAM setup', 'Upper chassis gets slightly hot']
  },
  {
    id: 'asus-rog-zephyrus-g16', brand: 'ASUS', name: 'ASUS ROG Zephyrus G16 OLED', price: 219990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 7.5, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4070 8GB', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: '16" 2.5K OLED 240Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'High-end 16-inch creator slate with AI Core accelerators and 32GB RAM memory buffers.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+ROG+Zephyrus+G16',
    pros: ['Ultra-sleek profile design', 'Stellar 240Hz response time'], cons: ['Relatively premium pricing', 'Higher structural heat points']
  },
  {
    id: 'asus-vivobook-14', brand: 'ASUS', name: 'ASUS Vivobook 14 (Ryzen 5)', price: 39990, useCases: ['college'], batteryLife: 7, weight: 3.1, portability: 'high',
    specs: { cpu: 'Ryzen 5 7520U', gpu: 'AMD Radeon 610M', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" FHD IPS Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Inexpensive standard daily notebook with rich 16GB memory footprint for chrome workload.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+14+Ryzen+5',
    pros: ['Exceptional value scaling', 'Compact, ergonomic model'], cons: ['Radeon graphics are rudimentary', 'Standard display palette']
  },
  {
    id: 'asus-vivobook-15', brand: 'ASUS', name: 'ASUS Vivobook 15 (Core i3)', price: 34990, useCases: ['college'], batteryLife: 6.5, weight: 3.6, portability: 'medium',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD Anti-Glare' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Budget-centric student screen for basic home or hostel study applications.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+Vivobook+15+i3',
    pros: ['Good screen dimensions', 'Very quiet fan implementation'], cons: ['Limited RAM expansion', 'Plastic chassis framework']
  },
  {
    id: 'asus-vivobook-16-oled', brand: 'ASUS', name: 'ASUS Vivobook 16 OLED', price: 54990, useCases: ['college', 'editing'], batteryLife: 7, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i5-12500H', gpu: 'Intel Iris Xe', ram: '16GB DDR4', storage: '512GB SSD', display: '16" 4K OLED 60Hz 16:10' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Unheard-of affordability for a massive 4K OLED display panel perfect for design classes.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+16+OLED',
    pros: ['Magnificent 4K screen clarity', 'Tall 16:10 visual aspect'], cons: ['Only 60Hz native rate', 'Older internal processor core']
  },
  {
    id: 'asus-vivobook-s15-elite', brand: 'ASUS', name: 'ASUS Vivobook S 15 OLED (ARM)', price: 124990, useCases: ['coding', 'college'], batteryLife: 18, weight: 3.1, portability: 'high',
    specs: { cpu: 'Snapdragon X Elite', gpu: 'Qualcomm Adreno GPU', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '15.6" 3K OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Ultra-advanced Copilot+ PC featuring a legendary 18+ hour real-world battery runtime.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+Vivobook+S15+OLED',
    pros: ['Incredible longevity limits', 'Sublime premium construction'], cons: ['Standard emulation limits', 'Restricted gaming suite support']
  },
  {
    id: 'asus-vivobook-pro-15', brand: 'ASUS', name: 'ASUS Vivobook Pro 15 OLED', price: 84990, useCases: ['editing', 'coding', 'gaming'], batteryLife: 8, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Ryzen 7 7735HS', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" 2.8K OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Ultimate budget powerhouse merging deep OLED blacks with real RTX gaming graphics.',
    buyUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+Pro+15+OLED',
    pros: ['RTX productivity acceleration', 'Breathtaking 120Hz screen feel'], cons: ['Moderate frame flexibility', 'Power-brick remains chunky']
  },
  {
    id: 'asus-zenbook-14-oled', brand: 'ASUS', name: 'ASUS Zenbook 14 OLED', price: 94990, useCases: ['coding', 'college', 'editing'], batteryLife: 15, weight: 2.8, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '1TB SSD Gen4', display: '14" 3K OLED 120Hz Touch' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Supreme metal shell matching awesome visual capabilities with light portability.',
    buyUrl: 'https://www.flipkart.com/search?q=ASUS+Zenbook+14+OLED',
    pros: ['Amazing 120Hz OLED touch', 'Splendid battery stamina'], cons: ['Soldered motherboard memory', 'Subdued color options']
  },

  // --- ACER (11 Models) ---
  {
    id: 'acer-aspire-lite-15', brand: 'Acer', name: 'Acer Aspire Lite 15', price: 32990, useCases: ['college', 'coding'], batteryLife: 7, weight: 3.5, portability: 'high',
    specs: { cpu: 'Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=300',
    description: 'Mindblowing 16GB dual channel RAM system at an extremely appealing price layout.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Aspire+Lite+15',
    pros: ['Superb 16GB pricing segment', 'Extremely light body shell'], cons: ['Relatively quiet speakers', 'Plastic deck keycaps']
  },
  {
    id: 'acer-aspire-lite-14', brand: 'Acer', name: 'Acer Aspire Lite 14', price: 29990, useCases: ['college'], batteryLife: 6, weight: 3.1, portability: 'high',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB LPDDR5', storage: '512GB SSD', display: '14" WUXGA 16:10 screen' },
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=300',
    description: 'Modern 16:10 format ultra-compact laptop for daily text reading and basic typing.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Aspire+Lite+14',
    pros: ['Ergonomic 16:10 screen aspect', 'Very easy budget target'], cons: ['Restricted internal graphics', 'Key travel feels slightly short']
  },
  {
    id: 'acer-aspire-5-i5', brand: 'Acer', name: 'Acer Aspire 5', price: 49990, useCases: ['college', 'coding'], batteryLife: 8, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD ComfortView IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Decent, durable, mid-range family laptop providing very quiet background operations.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Aspire+5',
    pros: ['Generous 16GB DDR5 layout', 'Extensive external connections'], cons: ['Subdued visual theme design', 'Moderate contrast levels']
  },
  {
    id: 'acer-nitro-v15', brand: 'Acer', name: 'Acer Nitro V 15 (RTX 4050)', price: 69990, useCases: ['gaming', 'editing'], batteryLife: 5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Core i5-13420H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS panel' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Best-selling mid-tier gaming platform in India utilizing dual-fan fast thermals.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Nitro+V+15',
    pros: ['Very cheap RTX 4050 option', 'High-speed DDR5 memory tech'], cons: ['Color output is slightly dull', 'Modest onboard battery reserve']
  },
  {
    id: 'acer-nitro-v15-r5', brand: 'Acer', name: 'Acer Nitro V 15 (Ryzen 5)', price: 56990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Ryzen 5 7535HS', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Competitive budget-gamer entry level offering reliable DDR5 system architecture.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Nitro+V+15+Ryzen+5',
    pros: ['DLSS gaming features supported', 'Good performance at entry price'], cons: ['Plastic structural material', 'Subdued speaker quality']
  },
  {
    id: 'acer-nitro-16', brand: 'Acer', name: 'Acer Nitro 16', price: 94990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 6, weight: 5.9, portability: 'low',
    specs: { cpu: 'Ryzen 7 7840HS', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '512GB SSD', display: '16" WUXGA 165Hz IPS screen' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'High-performance model exhibiting rich liquid metal CPU coverage and spectacular thermals.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Nitro+16+RTX+4060',
    pros: ['Outstanding temperature control', 'Sublime keyboard response'], cons: ['Pronounced chassis bulk', 'Only 512GB storage default']
  },
  {
    id: 'acer-predator-neo-16', brand: 'Acer', name: 'Acer Helios Neo 16', price: 119990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.7, portability: 'low',
    specs: { cpu: 'Core i7-13700HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB SSD', display: '16" WQXGA 165Hz sRGB IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Pure gaming muscle with highly accurate color rendering screen for streamers.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Helios+Neo+16',
    pros: ['Extremely powerful dual-air thermals', 'Exceptional screen resolution color'], cons: ['Heavy power supply adapter-brick', 'Plastic frame keyboard surrounds']
  },
  {
    id: 'acer-predator-16-i9', brand: 'Acer', name: 'Acer Predator Helios 16', price: 249990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4, weight: 5.9, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB Gen4 SSD', display: '16" WQXGA 240Hz screen' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Sledgehammer workstation prepared for elite CUDA rendering & machine learning training.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Predator+Helios+16+i9',
    pros: ['Uncompromising AI compile power', 'Extreme 2TB memory capacity'], cons: ['Very heavy layout design', 'Loud fan sound profile']
  },
  {
    id: 'acer-swift-go-14', brand: 'Acer', name: 'Acer Swift Go 14 OLED', price: 59990, useCases: ['coding', 'editing'], batteryLife: 9.5, weight: 2.7, portability: 'high',
    specs: { cpu: 'Core i5-13500H', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" 2.8K OLED 90Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Ultra-bright portable OLED laptop presenting amazing contrasts for photolithography tools.',
    buyUrl: 'https://www.amazon.in/s?k=Acer+Swift+Go+14+OLED',
    pros: ['Spectacular OLED value', 'Very sleek metal shell'], cons: ['Reflecting screen glass surfaces', 'Soldered system board memory']
  },
  {
    id: 'acer-swift-go-14-ultra7', brand: 'Acer', name: 'Acer Swift Go 14 Intelligent OLED', price: 84990, useCases: ['coding', 'editing', 'college'], batteryLife: 10.5, weight: 2.8, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14" 2.8K OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Next-gen silicon configuration featuring brilliant Arc graphical capabilities.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Swift+Go+14+Intel+Ultra',
    pros: ['Outstanding integrated Arc speed', 'Spasmodic 120Hz refresh panel'], cons: ['Temps grow warm on rendering', 'Modest bass speaker output']
  },
  {
    id: 'acer-extensa-15', brand: 'Acer', name: 'Acer Extensa 15', price: 27990, useCases: ['college'], batteryLife: 6.5, weight: 3.9, portability: 'medium',
    specs: { cpu: 'Core i3-1115G4', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD anti-glare screen' },
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=300',
    description: 'Simplistic high-storage budget companion for non-tech college work.',
    buyUrl: 'https://www.flipkart.com/search?q=Acer+Extensa+15',
    pros: ['Extremely low entry cost', 'Plentiful storage allocation'], cons: ['Basic plastic structure', 'Older processor revision']
  },

  // --- DELL (12 Models) ---
  {
    id: 'dell-15-i3', brand: 'Dell', name: 'Dell 15 Laptop (Intel i3)', price: 34990, useCases: ['college'], batteryLife: 6, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i3-1215U', gpu: 'Intel UHD Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '15.6" FHD 120Hz IPS Screen' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Well-respected student laptop equipped with smooth 120Hz panel selection.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+15+i3+laptop',
    pros: ['Fluent 120Hz user experience', 'Comfortable numeric touchpad layout'], cons: ['Plentiful plastic frame parts', 'No keyboard LEDs included']
  },
  {
    id: 'dell-inspiron-15-i5', brand: 'Dell', name: 'Dell Inspiron 15', price: 53990, useCases: ['college', 'coding'], batteryLife: 7.5, weight: 3.6, portability: 'medium',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD Narrow Border screen' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Reliable everyday companion utilizing a lift hinge for typing angle improvement.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Inspiron+15+i5',
    pros: ['Convenient lifting hinge ergonomics', 'LPDDR5 memory architecture'], cons: ['Webcam resolution is mediocre', 'Relatively low peak screen nit limits']
  },
  {
    id: 'dell-inspiron-14', brand: 'Dell', name: 'Dell Inspiron 14', price: 47990, useCases: ['college', 'coding'], batteryLife: 8.5, weight: 3.2, portability: 'high',
    specs: { cpu: 'Ryzen 5 7530U', gpu: 'AMD Radeon Graphics', ram: '8GB LPDDR4X', storage: '512GB SSD', display: '14" FHD+ 16:10 display' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Compact 14-inch model suited well for travel on and around campus routes.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+Inspiron+14+Ryzen+5',
    pros: ['Ergonomic 16:10 format layout', 'Strong efficient battery runtime'], cons: ['RAM limits upgrade path', 'Quiet internal audio performance']
  },
  {
    id: 'dell-inspiron-16', brand: 'Dell', name: 'Dell Inspiron 16', price: 79990, useCases: ['college', 'coding'], batteryLife: 9, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i7-1355U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '16" FHD+ IPS display' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Charming metal silver computing panel with top firing speakers.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Inspiron+16+i7',
    pros: ['Sublime aluminium visual style', 'Outstanding storage capability'], cons: ['Numpad space omitted on deck', 'Slightly reflective screen aspect']
  },
  {
    id: 'dell-inspiron-14-touch', brand: 'Dell', name: 'Dell Inspiron 2-in-1', price: 69990, useCases: ['college', 'editing'], batteryLife: 8.5, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" FHD+ Touch screen 2-in-1' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Foldable touchscreen student laptop compatible with active writing inputs.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+Inspiron+14+2-in-1',
    pros: ['Foldable touch screen convenience', 'Solid hinges design'], cons: ['Heavier than normal tablet units', 'Slightly dimmer visual outdoors']
  },
  {
    id: 'dell-vostro-3520', brand: 'Dell', name: 'Dell Vostro 3520 Workspace', price: 46990, useCases: ['college', 'coding'], batteryLife: 7, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i5-1235U', gpu: 'Intel UHD Graphics', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 120Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Work oriented computing model showing high-performance 120Hz scrolling capabilities.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+Vostro+3520+i5',
    pros: ['Very quiet overall fan profile', 'Highly accessible upgradability'], cons: ['Plastic-only shell architecture', 'Older dual-core GPU speed']
  },
  {
    id: 'dell-g15-i5', brand: 'Dell', name: 'Dell G15 Gaming Laptop', price: 67990, useCases: ['gaming', 'coding'], batteryLife: 5.5, weight: 5.7, portability: 'low',
    specs: { cpu: 'Core i5-13450HX', gpu: 'NVIDIA RTX 3050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 120Hz screen' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Tough industrial styled server level processor matching gaming RTX graphics.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+G15+RTX+3050',
    pros: ['Superb multi-threaded speeds', 'Upgradable storage tracks'], cons: ['Noticeably heavy layout profile', 'Plastic keyboard feel basic']
  },
  {
    id: 'dell-g15-i7', brand: 'Dell', name: 'Dell G15 Intel i7 Heavy Duty', price: 89990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i7-13650HX', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '15.6" FHD 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'High performance gaming choice that effortlessly processes large compiling databases.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+G15+Core+i7+4050',
    pros: ['Huge 1TB storage array default', 'Heavy desktop performance'], cons: ['Substantial charger unit', 'Prone to picking up dust on fins']
  },
  {
    id: 'dell-xps-13', brand: 'Dell', name: 'Dell XPS 13 Elite', price: 139990, useCases: ['coding', 'college'], batteryLife: 15, weight: 2.6, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '13.4" FHD+ InfiniteEdge IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Absolute peak minimalist luxury featuring glass touchpads and near-borderless screen boundaries.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+XPS+13+laptop',
    pros: ['Stunning design elements', 'Very bright display'], cons: ['Only 2 ports on body', 'No memory upgrades available']
  },
  {
    id: 'dell-xps-14', brand: 'Dell', name: 'Dell XPS 14 Workstation', price: 199990, useCases: ['coding', 'editing'], batteryLife: 12, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '14.5" 3.2K OLED Touch 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Top-of-the-line compact creator machine blending RTX power with futuristic visual profiles.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+XPS+14',
    pros: ['Striking futuristic visual style', 'High quality OLED touchscreen'], cons: ['Expensive premium margin', 'Keyboard requires initial practice']
  },
  {
    id: 'dell-xps-16', brand: 'Dell', name: 'Dell XPS 16 Flagship', price: 279990, useCases: ['coding', 'editing', 'gaming'], batteryLife: 10, weight: 4.8, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4060 8GB', ram: '32GB LPDDR5X', storage: '1TB SSD Gen4', display: '16.3" 4K OLED Touch display' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Ultimate machine learning and video creator toolkit featuring a beautiful borderless 4K display.',
    buyUrl: 'https://www.amazon.in/s?k=Dell+XPS+16',
    pros: ['Impeccably sharp borderless 4K screen', 'Massive 32GB memory cache'], cons: ['Heavy power-adapter package', 'Highly cost prohibitive']
  },
  {
    id: 'dell-alienware-m16', brand: 'Dell', name: 'Dell Alienware m16 Flagship', price: 299990, useCases: ['gaming', 'editing'], batteryLife: 4, weight: 6.2, portability: 'low',
    specs: { cpu: 'Core i9-14900HX', gpu: 'NVIDIA RTX 4080 12GB', ram: '32GB DDR5', storage: '2TB NVMe SSD', display: '16" QHD+ 240Hz screen' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Insane space-age styled machine created for full-throttle desktop gaming on and off-campus.',
    buyUrl: 'https://www.flipkart.com/search?q=Dell+Alienware+m16',
    pros: ['Elite overclocking potential', 'Massive 12GB graphics TGP'], cons: ['Extravagantly bulky frame', 'Brief standard power cycle life']
  },

  // --- MSI (9 Models) ---
  {
    id: 'msi-modern-14', brand: 'MSI', name: 'MSI Modern 14', price: 34990, useCases: ['college'], batteryLife: 7, weight: 3.1, portability: 'high',
    specs: { cpu: 'Ryzen 5 7530U', gpu: 'AMD Radeon Graphics', ram: '8GB DDR4', storage: '512GB SSD', display: '14" FHD IPS panel' },
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=300',
    description: 'Extremely accessible 14" travel laptop with a back-lit keyboard.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Modern+14',
    pros: ['Backlit keys at bargain', 'Ultra portable (1.4kg)'], cons: ['Moderate audio bass response', 'Single channel RAM slots']
  },
  {
    id: 'msi-modern-15', brand: 'MSI', name: 'MSI Modern 15', price: 42990, useCases: ['college', 'coding'], batteryLife: 6.5, weight: 3.7, portability: 'medium',
    specs: { cpu: 'Core i5-1235U', gpu: 'Intel Iris Xe', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Sleek, lightweight all-metal panel styling for business and administrative majors.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Modern+15+i5',
    pros: ['16GB RAM for multi-tab search', 'Full keyboard size comfort'], cons: ['Plastic touch-buttons', 'Standard color spectrum panel']
  },
  {
    id: 'msi-cyborg-15-4050', brand: 'MSI', name: 'MSI Cyborg 15 (RTX 4050)', price: 57990, useCases: ['gaming', 'coding'], batteryLife: 4.5, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz screen' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Cheapest RTX 4050 gaming laptop in India with translucent cyber-keyboards.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Cyborg+15+RTX+4050',
    pros: ['Unbeatable RTX 40-series entry price', 'Dynamic translucent styling'], cons: ['Smaller battery size core', 'Limited screen color depth']
  },
  {
    id: 'msi-cyborg-15-4060', brand: 'MSI', name: 'MSI Cyborg 15 (RTX 4060)', price: 74990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 4.5, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i7-12650H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '512GB SSD', display: '15.6" FHD 144Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Most economical laptop with 8GB RTX 4060 graphic memory in the market.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Cyborg+15+RTX+4060',
    pros: ['Extensive GPU VRAM capacity', 'Fast DDR5 data tracks'], cons: ['Single-fan cooling limits', 'Average trackpad sizing']
  },
  {
    id: 'msi-thin-15', brand: 'MSI', name: 'MSI Thin 15 Gaming', price: 49990, useCases: ['gaming', 'coding'], batteryLife: 5, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz panel' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Striking brushed aluminium aesthetic and high portability under 1.9 kg.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Thin+15+gaming',
    pros: ['Lightweight budget gaming', 'Cool brushed metal aesthetics'], cons: ['Runs hot under deep load', 'Older DDR4 layout design']
  },
  {
    id: 'msi-katana-15', brand: 'MSI', name: 'MSI Katana 15', price: 84990, useCases: ['gaming', 'editing'], batteryLife: 5, weight: 5.0, portability: 'low',
    specs: { cpu: 'Core i7-13620H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '15.6" FHD 144Hz IPS 4-Zone RGB' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'High-power 13th gen model featuring customizable 4-Zone RGB keyboard setup.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Katana+15+i7',
    pros: ['Amazing processor peak output', 'Full 4-Zone RGB layouts'], cons: ['Heavy power-brick design', 'Entirely plastic bezel surfaces']
  },
  {
    id: 'msi-katana-17', brand: 'MSI', name: 'MSI Katana 17 Big Screen', price: 139990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 4.5, weight: 5.8, portability: 'low',
    specs: { cpu: 'Core i9-13900H', gpu: 'NVIDIA RTX 4070 8GB', ram: '16GB DDR5', storage: '1TB SSD Gen4', display: '17.3" QHD 240Hz screen' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Cinematic gaming & modeling laptop with large 17.3" screen, great GPU TGP limit.',
    buyUrl: 'https://www.amazon.in/s?k=MSI+Katana+17',
    pros: ['Incredible 240Hz display spec', 'Sledgehammer gaming speeds'], cons: ['Poor portability footprint', 'Relatively short battery run']
  },
  {
    id: 'msi-sword-16', brand: 'MSI', name: 'MSI Sword 16 HX', price: 99990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 5, weight: 5.3, portability: 'low',
    specs: { cpu: 'Core i7-14700HX', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB NVMe SSD', display: '16" WQXGA 165Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Highly competitive model featuring an elegant white deck trim and HX series processor.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Sword+16+HX',
    pros: ['Blazing processor compiling speeds', 'Striking clean chassis finish'], cons: ['Substantial charger box weight', 'Subdued key contrast shades']
  },
  {
    id: 'msi-stealth-16', brand: 'MSI', name: 'MSI Stealth 16 AI Studio', price: 219990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 8, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4070 8GB', ram: '32GB LPDDR5X', storage: '2TB Gen4 SSD', display: '16" 4K OLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Absolute premium carbon grey creator panel with next-gen AI processing block.',
    buyUrl: 'https://www.flipkart.com/search?q=MSI+Stealth+16+AI',
    pros: ['Incomparably sharp 4K OLED', 'Durable magnesium allow framework'], cons: ['Ultra expensive investment', 'Soldered system memory layout']
  },

  // --- APPLE (10 Models) ---
  {
    id: 'apple-macbook-air-m1', brand: 'Apple', name: 'Apple MacBook Air 13" (M1)', price: 69900, useCases: ['coding', 'college'], batteryLife: 15, weight: 2.8, portability: 'high',
    specs: { cpu: 'Apple M1 Chip (8-Core)', gpu: '7-Core Integrated GPU', ram: '8GB Unified Memory', storage: '256GB Unified SSD', display: '13.3" Retina Display (2560x1600)' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Excellent ultra-quiet computing companion presenting unmatched trackpad controls.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Air+M1',
    pros: ['Stellar fanless silent operation', 'Vast battery capacities'], cons: ['Lacks modern notch layout', 'No memory expansion options']
  },
  {
    id: 'apple-macbook-air-m2', brand: 'Apple', name: 'Apple MacBook Air 13" (M2)', price: 89900, useCases: ['coding', 'college'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M2 Chip (8-Core)', gpu: '8-Core Integrated GPU', ram: '8GB Unified RAM', storage: '256GB SSD', display: '13.6" Liquid Retina Notch' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Highly requested modern redesign containing MagSafe charging and flat styling.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M2',
    pros: ['MagSafe quick power cord safety', 'Very modern display aesthetics'], cons: ['Slow default reading SSD', 'Cannot upgrade RAM']
  },
  {
    id: 'apple-macbook-air-m3-13', brand: 'Apple', name: 'Apple MacBook Air M3 13-inch', price: 104900, useCases: ['coding', 'college'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (8-Core)', gpu: '8-Core Integrated GPU', ram: '8GB Unified RAM', storage: '256GB SSD', display: '13.6" Liquid Retina Notion' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Fast M3 silicon capability featuring native dual external monitor outputs.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M3+13',
    pros: ['Dual external monitor arrays', 'Sublime tactile keyboard feel'], cons: ['Base storage is slightly cramped', 'Soldered hardware restrictions']
  },
  {
    id: 'apple-macbook-air-m3-13-16', brand: 'Apple', name: 'Apple MacBook Air M3 13" (16GB)', price: 134900, useCases: ['coding', 'college', 'editing'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (10-Core)', gpu: '10-Core Integrated GPU', ram: '16GB Unified RAM', storage: '512GB SSD', display: '13.6" Liquid Retina' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Highly recommended student specification ensuring trouble-free Docker operations.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Air+M3+16GB',
    pros: ['Sublime coding performance', 'Very generous 16GB memory footprint'], cons: ['No cooling fans onboard', 'Screen size is compact']
  },
  {
    id: 'apple-macbook-air-m3-15', brand: 'Apple', name: 'Apple MacBook Air M3 15-inch', price: 154900, useCases: ['coding', 'college', 'editing'], batteryLife: 18, weight: 3.3, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (10-Core)', gpu: '10-Core Integrated', ram: '16GB Unified RAM', storage: '512GB SSD', display: '15.3" Liquid Retina panel' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Extra spacious travel model featuring strong bass speakers.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M3+15',
    pros: ['Vast screen viewing space', 'Deep bass-enriched audio speakers'], cons: ['Older port selection rules', 'Prehibitive premium price range']
  },
  {
    id: 'apple-macbook-air-m4', brand: 'Apple', name: 'Apple MacBook Air 13" (M4)', price: 114900, useCases: ['coding', 'college', 'editing'], batteryLife: 18, weight: 2.7, portability: 'high',
    specs: { cpu: 'Apple M4 Chip (10-Core)', gpu: '10-Core GPU', ram: '16GB Unified RAM', storage: '512GB SSD', display: '13.6" Liquid Retina Notion' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Ultra-modern 3nm processor model showing amazing single core coding speed boosts.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Air+M4',
    pros: ['Mindblowing compilation metrics', 'Generous baseline specification limits'], cons: ['Hinged viewport lacks rotation touch', 'Comes only in standard silver/black']
  },
  {
    id: 'apple-macbook-pro-14-m3', brand: 'Apple', name: 'Apple MacBook Pro 14" (M3)', price: 147900, useCases: ['coding', 'college', 'editing'], batteryLife: 22, weight: 3.4, portability: 'high',
    specs: { cpu: 'Apple M3 Chip (8-Core)', gpu: '10-Core GPU (Ray Tracing)', ram: '8GB Unified RAM', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Superior XDR contrast combined with long battery limits matching video production.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Pro+14+M3',
    pros: ['Stunning 120Hz XDR panel vividness', 'Incomparable 22hr overall backup timeline'], cons: ['Base unified memory is restrictive', 'Body feels slightly chunky']
  },
  {
    id: 'apple-macbook-pro-14-m3pro', brand: 'Apple', name: 'Apple MacBook Pro 14" (M3 Pro)', price: 179900, useCases: ['coding', 'editing', 'gaming'], batteryLife: 18, weight: 3.5, portability: 'high',
    specs: { cpu: 'Apple M3 Pro Chip (11-Core)', gpu: '14-Core GPU', ram: '18GB Unified RAM', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Professional-grade workstation equipped with extensive active fan systems for long renders.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Pro+14+M3+Pro',
    pros: ['Very capable high bandwidth memory', 'Stunning space black option'], cons: ['High upgrade price premiums', 'Marginally increased unit weight']
  },
  {
    id: 'apple-macbook-pro-16-m3max', brand: 'Apple', name: 'Apple MacBook Pro 16" (M3 Max)', price: 349900, useCases: ['coding', 'editing'], batteryLife: 22, weight: 4.7, portability: 'medium',
    specs: { cpu: 'Apple M3 Max Chip (14-Core)', gpu: '30-Core GPU (High Speed)', ram: '36GB Unified Memory', storage: '1TB Pro SSD', display: '16.2" Liquid Retina XDR 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'The absolute ruler of client-side machine learning and high end cinematography systems.',
    buyUrl: 'https://www.flipkart.com/search?q=MacBook+Pro+16+M3+Max',
    pros: ['Outstanding AI local model compiling', 'Ultra-premium 16" view space'], cons: ['Hefty physical chassis scale', 'Spectacularly expensive purchase entry']
  },
  {
    id: 'apple-macbook-pro-14-m4', brand: 'Apple', name: 'Apple MacBook Pro 14" (M4 Pro)', price: 199900, useCases: ['coding', 'editing'], batteryLife: 22, weight: 3.5, portability: 'high',
    specs: { cpu: 'Apple M4 Pro Chip (12-Core)', gpu: '16-Core GPU', ram: '24GB Unified Memory', storage: '512GB SSD', display: '14.2" Liquid Retina XDR 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300',
    description: 'Next gen layout containing blistering compiling speeds with 24GB baseline memories.',
    buyUrl: 'https://www.amazon.in/s?k=MacBook+Pro+M4+Pro',
    pros: ['Sublime Thunderbolt 5 slots', 'Spectacular baseline 24GB allocation'], cons: ['Slick screen reveals glare outdoors', 'Extremely limited replacement avenues']
  },

  // --- SAMSUNG (7 Models) ---
  {
    id: 'samsung-galaxy-book2-go', brand: 'Samsung', name: 'Samsung Galaxy Book2 Go', price: 31990, useCases: ['college'], batteryLife: 14, weight: 3.1, portability: 'high',
    specs: { cpu: 'Snapdragon 7c+ Gen 3', gpu: 'Qualcomm Adreno GPU', ram: '8GB LPDDR4X', storage: '256GB eMMC storage', display: '14" FHD Anti-Glare display' },
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=300',
    description: 'Bargain-basement cellular Snapdragon system designed strictly for lectures.',
    buyUrl: 'https://www.amazon.in/s?k=Samsung+Galaxy+Book2+Go',
    pros: ['Superb battery cycle runtimes', 'Exceptional light profiles'], cons: ['Lacks basic app capabilities', 'Compact storage drive bounds']
  },
  {
    id: 'samsung-galaxy-book3', brand: 'Samsung', name: 'Samsung Galaxy Book3', price: 56990, useCases: ['college', 'coding'], batteryLife: 10, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core i5-1335U', gpu: 'Intel Iris Xe', ram: '16GB LPDDR4X', storage: '512GB SSD', display: '15.6" FHD IPS aluminium panel' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Top grade integration within Galaxy Ecosystem matching sleek lightweight metals.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book3',
    pros: ['Excellent Galaxy Ecosystem integration', 'Splendid aluminium tactile deck'], cons: ['Muted visual contrasts', 'Soldered RAM restricts updates']
  },
  {
    id: 'samsung-galaxy-book4-i3', brand: 'Samsung', name: 'Samsung Galaxy Book4 (Core i3)', price: 39990, useCases: ['college'], batteryLife: 9, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core i3-1315U', gpu: 'Intel UHD Graphics', ram: '8GB LPDDR5X', storage: '512GB SSD', display: '15.6" FHD anti-glare IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Classy, entry-level metal companion optimized for basic reading assignments.',
    buyUrl: 'https://www.amazon.in/s?k=Samsung+Galaxy+Book4+i3',
    pros: ['Clean metal presentation deck', 'LPDDR5X memory limits lag'], cons: ['No keyboard backlight details', 'Strictly limited to 8GB']
  },
  {
    id: 'samsung-galaxy-book4-ultra5', brand: 'Samsung', name: 'Samsung Galaxy Book4 (Ultra 5)', price: 69990, useCases: ['college', 'coding'], batteryLife: 12, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core Ultra 5 125U', gpu: 'Intel Graphics', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '15.6" FHD IPS Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Thin companion incorporating multi-port inclusions and long-life power backups.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Ultra+5',
    pros: ['Whisper silent operations', 'Stretchy screen brightness scales'], cons: ['No OLED standard panel', 'Average internal webcam module']
  },
  {
    id: 'samsung-galaxy-book4-ultra7', brand: 'Samsung', name: 'Samsung Galaxy Book4 (Ultra 7)', price: 82990, useCases: ['coding', 'college', 'editing'], batteryLife: 11.5, weight: 3.4, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155U', gpu: 'Intel Graphics', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '15.6" FHD IPS screen' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'High-speed Multi-thread capability targeting complex data analytics students.',
    buyUrl: 'https://www.amazon.in/s?k=Samsung+Galaxy+Book4+Ultra+7',
    pros: ['Robust multi-thread compilation speeds', 'Lightweight for campus carrying'], cons: ['Slightly premium price lines', 'No dedicated gaming speeds']
  },
  {
    id: 'samsung-galaxy-book4-pro', brand: 'Samsung', name: 'Samsung Galaxy Book4 Pro Premium', price: 121990, useCases: ['coding', 'editing', 'college'], batteryLife: 15, weight: 2.7, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'Intel Arc Graphics', ram: '16GB LPDDR5X', storage: '512GB Gen4 SSD', display: '14" 3K Dynamic AMOLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Spectacular bright dual-AMOLED lightweight slate with high ecosystem utility.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Pro',
    pros: ['Breath-taking AMOLED screens', 'Supremely modern chassis profile'], cons: ['Limited body port selections', 'Expensive lifestyle markups']
  },
  {
    id: 'samsung-galaxy-book4-ultragame', brand: 'Samsung', name: 'Samsung Galaxy Book4 Ultra Flagship', price: 239990, useCases: ['gaming', 'editing', 'coding'], batteryLife: 11, weight: 4.1, portability: 'medium',
    specs: { cpu: 'Core Ultra 9 185H', gpu: 'NVIDIA RTX 4070 8GB', ram: '32GB LPDDR5X', storage: '1TB Gen4 SSD', display: '16" 3K Touch AMOLED 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Extreme creator notebook syncing top end Nvidia capabilities with elite tablet-thin metals.',
    buyUrl: 'https://www.flipkart.com/search?q=Samsung+Galaxy+Book4+Ultra',
    pros: ['Brilliant creator rendering power', 'Incredible ecosystem features'], cons: ['Exorbitantly priced asset', 'Keyboard keycaps run shallow']
  },

  // --- LG GRAM (5 Models) ---
  {
    id: 'lg-gram-14', brand: 'LG', name: 'LG Gram 14 Ultra-light', price: 74990, useCases: ['coding', 'college'], batteryLife: 14, weight: 2.2, portability: 'high',
    specs: { cpu: 'Core i5-1340P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB Gen4 SSD', display: '14" WUXGA IPS 16:10 Panel' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Weighs only 999g! The absolute best choice for students walking long distances.',
    buyUrl: 'https://www.amazon.in/s?k=LG+Gram+14+laptop',
    pros: ['Unbelievably light (999g)', 'Extensive battery longevity'], cons: ['Keyboard deck has noticeable flex', 'Subdued design outlines']
  },
  {
    id: 'lg-gram-14-i7', brand: 'LG', name: 'LG Gram 14 (Intel i7)', price: 92990, useCases: ['coding', 'college'], batteryLife: 13.5, weight: 2.2, portability: 'high',
    specs: { cpu: 'Core i7-1360P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" WUXGA IPS 16:10' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Extra performance in a highly mobile chassis for heavy development tasks.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+14+i7',
    pros: ['Extensive processor horsepower', 'Rich connection options onboard'], cons: ['Subdued speaker peak audio', 'Premium pricing structure']
  },
  {
    id: 'lg-gram-15', brand: 'LG', name: 'LG Gram 15 Workspace', price: 79990, useCases: ['college', 'coding'], batteryLife: 14, weight: 2.5, portability: 'high',
    specs: { cpu: 'Core i5-1340P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '512GB SSD', display: '15.6" FHD IPS Anti-Glare' },
    imageUrl: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=300',
    description: 'Lightweight 15-inch model combining a clean numpad layout for spreadsheet tracking.',
    buyUrl: 'https://www.amazon.in/s?k=LG+Gram+15+laptop',
    pros: ['Very wide displays platform', 'Numpad included on light weights'], cons: ['Reflecting display hues', 'Strict plastic casing touch']
  },
  {
    id: 'lg-gram-16-i7', brand: 'LG', name: 'LG Gram 16 Big Screen', price: 104990, useCases: ['coding', 'college', 'editing'], batteryLife: 15, weight: 2.6, portability: 'high',
    specs: { cpu: 'Core i7-1360P', gpu: 'Intel Iris Xe', ram: '16GB LPDDR5', storage: '1TB Gen4 SSD', display: '16" WQXGA IPS 16:10 matte' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Gigantic anti-glare developer coding viewport that weighs under 1.2 kg.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+16',
    pros: ['Vast 2K anti-glare screen workspace', 'Astonishing 15hr battery life'], cons: ['Subtle chassis deflection on press', 'Higher price barrier']
  },
  {
    id: 'lg-gram-pro-16', brand: 'LG', name: 'LG Gram Pro 16 (RTX 3050)', price: 139990, useCases: ['editing', 'coding', 'college'], batteryLife: 12, weight: 2.8, portability: 'high',
    specs: { cpu: 'Core Ultra 7 155H', gpu: 'NVIDIA RTX 3050 4GB', ram: '16GB LPDDR5X', storage: '1TB Gen4 SSD', display: '16" WQXGA OLED 144Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=300',
    description: 'Pro grade creator model equipped with a graphics processor in a magnesium allow frame.',
    buyUrl: 'https://www.flipkart.com/search?q=LG+Gram+Pro+16',
    pros: ['Stunning 144Hz OLED panel', 'Extremely light creator layout'], cons: ['Highly expensive pricing', 'Thermals get slightly vocal on edits']
  },

  // --- ALTERNATIVE & BRAND COMPETITORS (4 Models) ---
  {
    id: 'xiaomi-notebook-pro-120g', brand: 'Xiaomi', name: 'Xiaomi Notebook Pro 120G', price: 49990, useCases: ['coding', 'college', 'editing'], batteryLife: 8.5, weight: 3.2, portability: 'high',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA GeForce MX550 2GB', ram: '16GB LPDDR5', storage: '512GB SSD', display: '14" 2.5K TrueLife 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300',
    description: 'Remarkable student bargain featuring dedicated entry graphics and crisp 2.5K display panels.',
    buyUrl: 'https://www.amazon.in/s?k=Xiaomi+Notebook+Pro+120G',
    pros: ['Vibrant 120Hz display flow', 'Sturdy premium metal enclosure'], cons: ['Moderate discrete graphics capabilities', 'Older generation CPU core']
  },
  {
    id: 'infinix-gt-book', brand: 'Infinix', name: 'Infinix GT Book Gaming laptop', price: 54990, useCases: ['gaming', 'coding'], batteryLife: 6, weight: 4.4, portability: 'medium',
    specs: { cpu: 'Core i5-12450H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB LPDDR5X', storage: '512GB SSD', display: '16" 16:10 FHD+ 120Hz' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Inexpensive and highly styled gaming laptop with customizable cyber lights on back lid.',
    buyUrl: 'https://www.flipkart.com/search?q=Infinix+GT+Book',
    pros: ['Very cheap RTX 4050 option', 'Aesthetic 120Hz display panel'], cons: ['Relatively new brand registry', 'Fan acoustic runs loud quickly']
  },
  {
    id: 'gigabyte-g5', brand: 'Gigabyte', name: 'Gigabyte G5 Gaming Laptop', price: 54990, useCases: ['gaming', 'coding'], batteryLife: 4.5, weight: 4.6, portability: 'medium',
    specs: { cpu: 'Core i5-12500H', gpu: 'NVIDIA RTX 4050 6GB', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD 144Hz panel' },
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300',
    description: 'Highly competitive specs boasting full powered graphic chipsets for student programmers.',
    buyUrl: 'https://www.flipkart.com/search?q=Gigabyte+G5+RTX+4050',
    pros: ['Incredible price for RTX 4050', 'Satisfying keyboard tactility'], cons: ['Below average speaker depth', 'Moderate thermal exhaust temps']
  },
  {
    id: 'gigabyte-aorus-15', brand: 'Gigabyte', name: 'Gigabyte Aorus 15 Gaming', price: 89990, useCases: ['gaming', 'coding', 'editing'], batteryLife: 5, weight: 5.3, portability: 'low',
    specs: { cpu: 'Core i7-13620H', gpu: 'NVIDIA RTX 4060 8GB', ram: '16GB DDR5', storage: '1TB Gen4 SSD', display: '15.6" QHD 165Hz IPS' },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300',
    description: 'Exceptional, crisp high-res QHD screen paired with massive 8GB VRAM graphics cards.',
    buyUrl: 'https://www.amazon.in/s?k=Gigabyte+Aorus+15',
    pros: ['Fabulous QHD display accuracy', 'Full upgradable layout fields'], cons: ['Substantial charger adapter block', 'Plastic under-bottom casing']
  }
];
