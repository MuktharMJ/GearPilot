import fs from 'fs';

const filePath = './src/data/laptops.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace problematic CDNs with m.media-amazon.com which is more permissive
content = content.replace(/https:\/\/p2-ofp\.static\.pub\/ShareResource\/na\/products\/legion\/400x300\/lenovo-legion-pro-5i-gen-8-16-inch-02\.png/g, 'https://m.media-amazon.com/images/I/71LqH3D9yGL._SL1500_.jpg');
content = content.replace(/https:\/\/p2-ofp\.static\.pub\/ShareResource\/na\/products\/thinkpad\/400x300\/lenovo-thinkpad-x1-carbon-gen-10-14-inch-02\.png/g, 'https://m.media-amazon.com/images/I/51r26z2BbdL._SL1500_.jpg');
content = content.replace(/https:\/\/dlcdnwebimgs\.asus\.com\/gain\/97fdf461-9f93-4a0b-8d00-bb6cff781de6\/w800/g, 'https://m.media-amazon.com/images/I/71Y-oRymKkL._SL1500_.jpg');
content = content.replace(/https:\/\/dlcdnwebimgs\.asus\.com\/gain\/3DCE7692-7E1A-4EE1-A122-1E74FAAB0010\/w800/g, 'https://m.media-amazon.com/images/I/71gPBsWzIfL._SL1500_.jpg');
content = content.replace(/https:\/\/ssl-images-amazon\.com\/images\/I\//g, 'https://m.media-amazon.com/images/I/');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('URLs updated to use m.media-amazon.com');
