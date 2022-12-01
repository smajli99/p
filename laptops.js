const users = [
  {
    "title": "(EBAY CERTIFIED REFURB) Acer Swift X SFX14-41G-R1S6 Creator Laptop | 14\" Full HD 100% sRGB | AMD Ryzen 7 5800U | NVIDIA RTX 3050Ti Laptop GPU | 16GB LPDDR4X | 512GB SSD | Wi-Fi 6 | Backlit KB |Windows 10 Home - FOR $679 AFTER 23%+15% OFF",
    "url": "https://allelectrodeals.com/product/ebay-certified-refurb-acer-swift-x-sfx14-41g-r1s6-creator-laptop-14-full-hd-100-srgb-amd-ryzen-7-5800u-nvidia-rtx-3050ti-laptop-gpu-16gb-lpddr4x-512gb-ssd-wi-fi-6-backlit-kb-windows/"
  },
  {
    "title": "(Ebay, CERTIFIED REFURB) Acer Aspire 5 A515-45-R74Z Slim Laptop | 15.6\" Full HD IPS | AMD Ryzen 5 5500U Hexa-Core Mobile Processor | AMD Radeon Graphics | 8GB DDR4 | 256GB NVMe SSD | WiFi 6 | Backlit KB | Windows 11 Home - for $297 after 34%+15% off",
    "url": "https://allelectrodeals.com/product/acer-aspire-5-a515-45-r74z-slim-laptop-15-6-full-hd-ips-amd-ryzen-5-5500u-hexa-core-mobile-processor-amd-radeon-graphics-8gb-ddr4-256gb-nvme-ssd-wifi-6-backlit-kb-windows-11-home-16/"
  },
  {
    "title": "[eBay, Further Price Drop] Gigabyte A7 17\" Laptop: Ryzen 7 5800H, RTX 3060 (Max 130W), 16 GB RAM, 512 GB SSD, 1080p 17.3\" 144Hz IPS Display. Now: $847.65 After $187.34 Off 🔥",
    "url": "https://www.ebay.com/itm/304642676209?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338849294&customid=GameChanger&toolid=10001&mkevt=1"
  },
  {
    "title": "(EBAY, CERTIFIED REFURB) Acer Swift 3 Thin & Light Laptop | 14\" Full HD IPS 100% sRGB Display | AMD Ryzen 7 5700U Octa-Core Processor | 8GB LPDDR4X | 512GB NVMe SSD | WiFi 6 | Backlit KB | FPR - FOR $382 AFTER 36%+15% OFF",
    "url": "https://allelectrodeals.com/product/acer-swift-3-thin-light-laptop-14-full-hd-ips-100-srgb-display-amd-ryzen-7-5700u-octa-core-processor-8gb-lpddr4x-512gb-nvme-ssd-wifi-6-backlit-kb-fpr/"
  },
  {
    "title": "[eBay] LENOVO IDEAPAD GAMING 3 - 15.6\" FHD IPS 120Hz display- Ryzen 5 5600H - 8GB MEMORY - NVIDIA GeForce RTX 3050 TI - 256GB SSD - SHADOW BLACK - Now: $549 After 39% Off 🔥",
    "url": "https://www.ebay.com/itm/195446235537?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338849294&customid=GameChanger&toolid=10001&mkevt=1"
  },
  {
    "title": "[Newegg] HP Pavilion 15-eg2010nr; 15.6\" 1080p touchscreen display, i5-1235U CPU, 8GB DDR4 RAM, 512GB PCIe SSD with $330 off w/ coupon code \"Affirm\", FOR $424.15",
    "url": "https://twitter.com/ElectroDeals1/status/1598048889386725376?s=20&t=qFbi60n3wCN3f1og70qrKQ"
  },
  {
    "title": "[Lenovo Store] Lenovo ThinkPad P16s Laptop: Ryzen 5 Pro 6650U, 32 GB RAM, 1 TB SSD, FHD+ 16\" IPS 300 Nit Display for $949 after coupon codes WSDEAL13 & HOLIDAYSURPRISE",
    "url": "https://lenovo.vzew.net/4eb3g3"
  },
  {
    "title": "[eBay] Acer Nitro 5 17\" Laptop: i5-12500H, RTX 3050 (Max 95W), 8 GB RAM, 256 GB SSD, 1080p 17.3\" 144Hz IPS Display. Now: $649.99 After $150 Off",
    "url": "https://www.ebay.com/itm/325390754928?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338849294&customid=GameChanger&toolid=10001&mkevt=1"
  },
  {
    "title": "[Amazon] Acer Aspire 5 15\" Laptop: i5-1235U, 8 GB RAM, 512 GB SSD, 1080p 15.6\" IPS Display. Now: $449.99 After 22% Off",
    "url": "https://progamerstech.com/product/acer-aspire-5-a515-57-53t2-slim-laptop-15-6-full-hd-ips-display-12th-gen-intel-core-i5-1235u-8gb-ddr4-512gb-nvme-ssd-802-11ax-wi-fi-6-thunderbolt-4-backlit-keyboard-windows-11-home/"
  },
  {
    "title": "(EBAY) Lenovo IdeaPad 5 Pro 16ARH7 laptop - 16\" 2.5K (2560x1600) IPS 350nits Anti-glare, 120Hz, 100% sRGB display - 16GB LPDDR5 RAM - 512GB SSD - AMD Ryzen 5 6600HS - NVIDIA GeForce RTX 3050 - FOR $784 AFTER 35% OFF🔥",
    "url": "https://allelectrodeals.com/product/lenovo-ideapad-5-pro-16arh7-laptop-16-2-5k-2560x1600-ips-350nits-anti-glare-120hz-100-srgb-display-16gb-lpddr5-ram-512gb-ssd-amd-ryzen-5-6600hs-nvidia-geforce-rtx-3050/"
  },
  {
    "title": "(B&H PHOTO VIDEO) Lenovo IdeaPad Flex 5 - 14\" 1920x1080 IPS Touchscreen IPS Display - 16GB DDR4 RAM - AMD Ryzen 7 5700U - 512GB M.2 NVMe PCIe SSD - FOR $569 AFTER $370 OFF",
    "url": "https://www.bhphotovideo.com/c/product/1737072-REG/lenovo_82hu0158us_ideapad_flex_5_full.html"
  },
  {
    "title": "[eBay] MSI - Sword 15.6\" 144hz Gaming Laptop - Intel Core i7 - NVIDIA GeForce RTX 3060 - 1TB SSD - 16GB Memory - Black with $350 off for $999",
    "url": "https://www.ebay.com/itm/204086955936?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338535836&customid=buck&toolid=10001&mkevt=1"
  },
  {
    "title": "[Amazon] MSI Pulse GL66 15.6\" FHD 144Hz Gaming Laptop: Intel Core i7-12700H RTX 3070 16GB 512GB NVMe SSD, Type-C USB 3.2 Gen 1, RGB Gaming Keyboard, Cooler Boost 5, Win11 Home: Black 12UGKV-464 with $300 off for $1149",
    "url": "https://www.rapiddeal.net/product/msi-pulse-gl66-12ugkv-464/"
  },
  {
    "title": "[eBay] MSI Laptop Modern 15 A5M-288 Laptop - 15.6\" FHD IPS Display - AMD Ryzen 7 5700U - AMD Radeon Graphics - 8GB DDR4 RAM - 512GB SSD Windows 11 Home - Now: $499 After $300 (38% Off)",
    "url": "https://www.ebay.com/itm/294897442504?amdata=enc%3AAQAHAAAAkCyzqloWcqMDFjitt6HIqXL4tKR4BJ7kndtkGeZxADCTx6bhdMv%2BZldOMCb19As3Yds4kd7%2BbyB4PFofdpz79cidC2kJ7ZmT9IhyrNlahUMQm3w4JyC6gjXhKcE2aHtYxdmopYMPy9LyeDunHU9mv6QF3kIFNB4hru1pp%2BA5QDbBrURxAIlF1R%2BfWr%2BGS4CdzQ%3D%3D&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338849294&customid=GameChanger&toolid=10001&mkevt=1"
  },
  {
    "title": "[Amazon] MSI Katana GF66 15.6\" 144Hz 3ms FHD Gaming Laptop Intel Core i7-11800H RTX 3060 16GB 512GB NVMe SSD Win11, Now: $999.99 ($350 OFF)",
    "url": "https://www.facebook.com/100068536350215/posts/pfbid02UkA9CMTKqZUjYFzHf8ALBS8zdob3Zz93x2PK9Tgb64PLskgwdxNjaBt3MEn1qydbl/?sfnsn=mo&mibextid=6aamW6"
  },
  {
    "title": "[Dell] new XPS 13 Plus premium 3.4K OLED ultrabook - 13.4\" 2160p OLED touch display / Intel i7-1260P CPU / 16 GB DDR5 RAM / 512 GB Gen 4 PCIe SSD / aluminum chassis (silver) - on sale for $1400 after $400 off, $1220 after Rakuten sign up and 10% rebate",
    "url": "https://deals.dell.com/en-us/productdetail/fq3j"
  },
  {
    "title": "[eBay] ASUS ROG Zephyrus G14 Laptop: Ryzen 9 6900HS, RX 6800S, 16 GB RAM, 1 TB SSD, 1440p 14\" 120Hz IPS Display. Now: $1,399.99 After $500 Off",
    "url": "https://www.ebay.com/itm/195482243566?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338849293&customid=ALTECH50&toolid=10001&mkevt=1"
  },
  {
    "title": "[Lenovo] Thinkbook 15 Gen 4 / 15.6\" FHD (1920 x 1080) IPS, 300 nits, 60Hz / i5-1235U Processor / 16GB DDR4 / 512GB SSD - $648.92 after coupon SUPERTHINKHOLIDAYS and HOLIDAYSURPRISE - $544 after Rakuten cashback",
    "url": "https://www.lenovo.com/us/en/p/laptops/thinkbook/thinkbook-series/thinkbook-15-gen-4-(15-inch-intel)/21dj0015us"
  },
  {
    "title": "[Newegg] ASUS Vivobook S 14X Laptop: i7-12700H, 12 GB RAM, 512 GB SSD, 2.8K 14.5\" OLED 120Hz Display. Now: $699.99 After $400 (36% Off)",
    "url": "https://altechelectronics.org/product/asus-vivobook-s-14x-oled-laptop-14-5-oled-display-2-8k-1610-120hz-hdr-intel-evo-platform-intel-core-i7-12700h-cpu-12gb-ram-512gb-ssd-windows-11-home-midnight-black-s5402za-is74/"
  },
  {
    "title": "[Walmart, Price Drop] MSI Katana GF66 Laptop: i9-12900H, RTX 3070 Ti Max 105W, 16 GB RAM, 1 TB SSD, 1080p 15.6\" 144Hz IPS Display for $1,249 after $550 off",
    "url": "https://goto.walmart.com/c/1883484/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2Fseort%2F1118880621"
  },
  {
    "title": "[Ebay] Lenovo IdeaPad 3 14\" Laptop: i5-1135G7, 8 GB RAM, 512 GB SSD, 1080p 14\" Display for $379.99 after $320 off",
    "url": "https://www.ebay.com/itm/125446298122?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338636961&customid=&toolid=10001&mkevt=1"
  },
  {
    "title": "[Amazon] MSI Prestige 15 Laptop: i7-1260P, RTX 3050 Ti, 32 GB RAM, 512 GB SSD, 1080p 15.6″ IPS Display, Thunderbolt 4 for $1,299 after $300 off",
    "url": "https://laptopsdeals.net/product/msi-prestige-15-laptop-i7-1260p-rtx-3050-ti-32-gb-ram-512-gb-ssd-1080p-15-6-ips-display-thunderbolt-4/"
  },
  {
    "title": "[eBay, Price Drop] GIGABYTE AORUS 5 SE4 Gaming Laptop - 15.6\" FHD IPS 360 Hz display - Intel Core i7-12700H - NVIDIA GeForce RTX 3070 (Max 130W) - 16GB DDR4 RAM - 512GB SSD - Now: $1,099.99 After $500 (31% Off) 🔥",
    "url": "https://www.ebay.com/itm/295291031612?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338849293&customid=ALTECH50&toolid=10001&mkevt=1"
  },
  {
    "title": "[Ebay] Refurbished Acer Swift 3 14\" Laptop: i5-1240P, 16 GB RAM, 512 GB SSD, 1080p 14\" IPS Display for $382.49 after $400 off + additional 15% off at checkout",
    "url": "https://www.ebay.com/itm/275387257518?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338636961&customid=&toolid=10001&mkevt=1"
  },
  {
    "title": "[eBay] GIGABYTE AORUS 15.6 240Hz Gaming Laptop i7-11800H, 16GB RAM, 1TB SSD, RTX 3070 (130W), Now: $1,099.99 After $551 (33% Off)",
    "url": "https://www.ebay.com/itm/125534677240?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338904340&customid=briibrii&toolid=10001&mkevt=1"
  }
]


const getAllUsers = () => {
    return users;
  };
  
  const getUserById = (id) => {
    const findUsers = users.filter((user) => user.id == id);
    return findUsers.length > 0 ? findUsers[0] : null;
  };
  
  const getUserByUsername = (username) => {
    const findUsers = users.filter((user) => user.username == username);
    return findUsers.length > 0 ? findUsers[0] : null;
  };
  
  const getUsersByStatus = (status) => {
    const usersWithStatus = users.filter((user) => user.status == status);
    return usersWithStatus;
  };
  
  const addNewUser = (username, email, password) => {
    let isAdded = false;
  
    const newUser = {
      id: uuid.v4(),
      username,
      email,
      password,
      status: 'active',
    };
  
    const user = getUserByUsername(username);
  
    if (user == null) {
      users.push(newUser);
      isAdded = true;
    }
  
    return isAdded;
  };
  
  const changeUserPassword = (username, oldPassword, newPassword) => {
    const foundUser = users.find(user => user.username == username && user.password == oldPassword);
    if (!foundUser) {
      return false;
    }
  
    foundUser.password = newPassword;
    return true;
  };
  
  const deleteUser = (username) => {
    const userIndex = users.findIndex(user => user.username == username);
    if (userIndex == -1) {
      return false;
    }
    
    users.splice(userIndex, 1);
    return true;
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUsersByStatus,
    addNewUser,
    changeUserPassword,
    deleteUser,
  };
  