/**
 * STEP UP ATELIER — HAUTE MAROQUINERIE & LUXURY FOOTWEAR
 * Client-side Master Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA STORE — LUXURY FOOTWEAR CATALOG
  // =========================================================================
  const products = [
    {
      id: 'p1',
      title: 'The Gulberg Horsebit Loafer Pump',
      category: 'loafers',
      categoryLabel: 'Bespoke Loafer',
      gender: 'women',
      priceEUR: 980,
      image: 'assets/products/p1.png',
      badge: 'Atelier Icon',
      badgeType: 'craft',
      materials: 'Full-grain Italian Nappa Calfskin, Brushed Gold Horsebit',
      description: 'Handcrafted in Lahore with buttery cream calfskin and an architectural block heel, finished with artisanal brushed gold horsebit hardware.',
      construction: 'Blake Stitch Leather Sole',
      origin: 'Lahore, Pakistan',
      colors: ['#ede8df', '#c5a880', '#1c1b1a']
    },
    {
      id: 'p2',
      title: 'The Belladonna Crystal Bow Stiletto',
      category: 'heels',
      categoryLabel: 'Haute Evening',
      gender: 'women',
      priceEUR: 1280,
      image: 'assets/products/p2.png',
      badge: 'Runway Exclusive',
      badgeType: 'limited',
      materials: 'Satin Noir, Hand-Set Baguette Crystal Bow, Silk Slingback',
      description: 'A showstopping evening pump sculpted in lustrous noir silk satin, centered with a dual-loop Austrian crystal ribbon and 100mm cigarette heel.',
      construction: 'Bespoke Haute Evening Last',
      origin: 'Karachi, Pakistan',
      colors: ['#111113', '#e4e4e7']
    },
    {
      id: 'p3',
      title: 'The Aurelia Champagne Stardust Pump',
      category: 'heels',
      categoryLabel: 'Gala Silhouette',
      gender: 'women',
      priceEUR: 1350,
      image: 'assets/products/p3.png',
      badge: 'Limited Edition',
      badgeType: 'limited',
      materials: 'Micro-Crystal Glitter Fabric, Mirrored Pale Gold Metal Stiletto',
      description: 'Reflecting luminous brilliance from every angle, the Aurelia combines hand-applied glitter tesserae with an ultra-fine mirrored metallic stem.',
      construction: 'Hand-Carved Hornbeam Last',
      origin: 'Lahore, Pakistan',
      colors: ['#dfc89d', '#ffffff', '#bfa168']
    },
    {
      id: 'p4',
      title: 'The Seta Nude Pointed Pump',
      category: 'heels',
      categoryLabel: 'Classic Stiletto',
      gender: 'women',
      priceEUR: 890,
      image: 'assets/products/p4.png',
      badge: 'Maison Classic',
      badgeType: 'craft',
      materials: 'French Box Calfskin in Blush Nude, Leather Insole',
      description: 'The quintessential pointed stiletto pump, cut from single-piece French calfskin with seamless arch contouring and memory foam cushioning.',
      construction: 'Blake-Stitched Leather Outsole',
      origin: 'Karachi, Pakistan',
      colors: ['#e7cfba', '#1a1918']
    },
    {
      id: 'p5',
      title: 'The Nocturne Ankle-Strap Block Heel',
      category: 'heels',
      categoryLabel: 'Architectural Pump',
      gender: 'women',
      priceEUR: 920,
      image: 'assets/products/p5.png',
      badge: 'New Silhouette',
      badgeType: 'limited',
      materials: 'Polished Boxcalf Noir, Gold Buckle Ankle Wrap',
      description: 'Sculptural silhouette combining clean geometric lines, an empowering flared block heel, and a delicate ankle strap for poise and stability.',
      construction: 'Cemented & Hand-Stitched Welt',
      origin: 'Lahore, Pakistan',
      colors: ['#141416', '#e7cfba']
    },
    {
      id: 'p6',
      title: 'The Imperial Cognac Wingtip Brogue',
      category: 'loafers',
      categoryLabel: 'Bespoke Oxford',
      gender: 'men',
      priceEUR: 1480,
      image: 'assets/products/p6.png',
      badge: 'Master Bottier',
      badgeType: 'craft',
      materials: 'Full-Grain French Museum Calf, Hand-Burnished Patina',
      description: 'A triumph of traditional shoemaking. Features hand-punched medallion broguing, seven days of natural alcohol patina, and Goodyear-welted soles.',
      construction: 'Hand-Stitched Goodyear Welt',
      origin: 'Lahore, Pakistan',
      colors: ['#8b4513', '#3d2314', '#1f1610']
    },
    {
      id: 'p7',
      title: 'The Riviera Midnight Penny Loafer',
      category: 'loafers',
      categoryLabel: 'Bespoke Slip-On',
      gender: 'men',
      priceEUR: 1050,
      image: 'assets/products/p7.png',
      badge: 'Artisan Classic',
      badgeType: 'craft',
      materials: 'Deep Indigo French Calfskin, Hand-Sewn Apron',
      description: 'Impeccably balanced unlined penny loafer in rich deep navy leather, designed for effortless Mediterranean elegance with custom stacked heel.',
      construction: 'Ultra-Flex Blake Welt',
      origin: 'Karachi, Pakistan',
      colors: ['#131e33', '#1c1a17']
    },
    {
      id: 'p8',
      title: 'The Sovereign Noir Oxford',
      category: 'loafers',
      categoryLabel: 'Formal Dress',
      gender: 'men',
      priceEUR: 1250,
      image: 'assets/products/p8.png',
      badge: 'Atelier Reserve',
      badgeType: 'craft',
      materials: 'Mirror-Finished French Box Calf, Closed Channel Leather Sole',
      description: 'The ultimate black-tie cap-toe oxford. Hand-waxed to an immaculate mirror shine with closed-channel Goodyear stitching and beveled waists.',
      construction: 'Goodyear Welt with Beveled Waist',
      origin: 'Lahore, Pakistan',
      colors: ['#0c0c0e']
    },
    {
      id: 'p9',
      title: 'The Crescent Monogram Evening Loafer',
      category: 'loafers',
      categoryLabel: 'Cocktail Slip-On',
      gender: 'men',
      priceEUR: 1120,
      image: 'assets/products/p9.png',
      badge: 'Limited Run',
      badgeType: 'limited',
      materials: 'Velour Suede Noir, Brushed Gold Monogram Buckle',
      description: 'A tailored evening slip-on featuring rich black velvet suede, piped silk grosgrain trim, and an engraved gold-finish maison crest.',
      construction: 'Bespoke Blake Welt',
      origin: 'Karachi, Pakistan',
      colors: ['#111113', '#c5a880']
    },
    {
      id: 'p10',
      title: 'The Palazzo Double Monk Strap',
      category: 'loafers',
      categoryLabel: 'Bespoke Monk',
      gender: 'men',
      priceEUR: 1390,
      image: 'assets/products/p10.png',
      badge: 'Artisan Edition',
      badgeType: 'craft',
      materials: 'Burnished Museum Calf, Solid Brass Buckles',
      description: 'Characterized by clean twin buckled straps and a sweeping chisel toe, cut from hand-selected Tuscan hides aged in oak barrels.',
      construction: 'Goodyear Storm Welt',
      origin: 'Lahore, Pakistan',
      colors: ['#231c17', '#0f0e0d']
    },
    {
      id: 'p12',
      title: 'The Alabaster Court Sneaker',
      category: 'sneakers',
      categoryLabel: 'Minimalist Sneaker',
      gender: 'unisex',
      priceEUR: 790,
      image: 'assets/products/p12.png',
      badge: 'Essential',
      badgeType: 'craft',
      materials: 'Italian Full-Grain Nappa, Margom Rubber Cupsole',
      description: 'Pure minimalist luxury. Italian nappa leather sneakers with waxed organic cotton laces and an ultra-durable stitched Margom rubber sole.',
      construction: 'Stitched Rubber Cupsole',
      origin: 'Islamabad, Pakistan',
      colors: ['#f4f1ea', '#ded9cf']
    },
    {
      id: 'p13',
      title: 'The Stratus 01 Cream Runner',
      category: 'sneakers',
      categoryLabel: 'Runway Sneaker',
      gender: 'men',
      priceEUR: 980,
      image: 'assets/products/p13.png',
      badge: 'Campaign Icon',
      badgeType: 'limited',
      materials: 'French Suede, Technical Knit, Ripple Gum Sole',
      description: 'As worn in our campaign film. Architectural silhouette featuring a carbon-fiber arch shank and an aggressive ripple gum outsole for urban grip.',
      construction: 'Blake-Welted Runner Construction',
      origin: 'Lahore, Pakistan',
      colors: ['#dfd7cb', '#8b5a2b', '#1e2430']
    },
    {
      id: 'p14',
      title: 'The Cloud Platform Trainer',
      category: 'sneakers',
      categoryLabel: 'Sculptural Trainer',
      gender: 'unisex',
      priceEUR: 920,
      image: 'assets/products/p14.png',
      badge: 'New Arrival',
      badgeType: 'limited',
      materials: 'Chalk White Calfskin, Cloud EVA Ergonomic Sole',
      description: 'Engineered with ultra-lightweight high-rebound cushioning encased in supple Italian leather uppers, providing all-day cloud-like elevation.',
      construction: 'Ergonomic Molded Platform',
      origin: 'Karachi, Pakistan',
      colors: ['#ffffff', '#eae6de']
    },
    {
      id: 'p15',
      title: 'The Phantom Shadow Runner',
      category: 'sneakers',
      categoryLabel: 'Avant-Garde Sneaker',
      gender: 'men',
      priceEUR: 1080,
      image: 'assets/products/p15.png',
      badge: 'Runway Capsule',
      badgeType: 'limited',
      materials: 'Matte Noir Calfskin, Sculptural Chrome Shank',
      description: 'An aggressive, futuristic design infused with avant-garde atelier flair. Finished with reflective gunmetal accents and padded collar.',
      construction: 'Carbon-Fiber Stabilizer Soling',
      origin: 'Lahore, Pakistan',
      colors: ['#121214', '#55555c']
    },
    {
      id: 'p16',
      title: 'The Obsidian Chelsea Boot',
      category: 'boots',
      categoryLabel: 'Haute Boot',
      gender: 'men',
      priceEUR: 1380,
      image: 'assets/products/p16.png',
      badge: 'Masterpiece',
      badgeType: 'craft',
      materials: 'Single-Piece French Box Calf, Ebony Stacked Heel',
      description: 'Cut from a seamless whole-cut hide with deep obsidian mirror finish. Built over an elongated almond last with Blake-stitched Italian outsoles.',
      construction: 'Handcrafted Blake Welt',
      origin: 'Lahore, Pakistan',
      colors: ['#09090b', '#261f1d']
    },
    {
      id: 'p17',
      title: 'The Slip-On Knit Blush Sneaker',
      category: 'sneakers',
      categoryLabel: 'Comfort Luxe',
      gender: 'women',
      priceEUR: 850,
      image: 'assets/products/p17.png',
      badge: 'Best Seller',
      badgeType: 'craft',
      materials: '3D Engineered Rose Knit, Anatomical Memory Arch Footbed',
      description: 'Seamless sock-like comfort meets designer elegance. Knitted from breathable rose yarns with a sculptural wave sole and leather pull tab.',
      construction: 'Slip-On Sock Construction',
      origin: 'Islamabad, Pakistan',
      colors: ['#e8b4b8', '#ffffff']
    },
    {
      id: 'p18',
      title: 'The Metro Platinum Runner',
      category: 'sneakers',
      categoryLabel: 'Runway Sneaker',
      gender: 'men',
      priceEUR: 990,
      image: 'assets/products/p18.png',
      badge: 'Limited Edition',
      badgeType: 'limited',
      materials: 'Silver Metallic Calfskin, Off-White Suede Panels',
      description: 'Capturing metropolitan skylines with platinum silver paneling, geometric lace cages, and dual-density shock absorbing midsoles.',
      construction: 'Technical Athletic Welt',
      origin: 'Karachi, Pakistan',
      colors: ['#e2e8f0', '#ffffff', '#71717a']
    },
    {
      id: 'p19',
      title: 'The Stealth Speed Trainer',
      category: 'sneakers',
      categoryLabel: 'Technical Runner',
      gender: 'men',
      priceEUR: 1020,
      image: 'assets/products/p19.png',
      badge: 'New Silhouette',
      badgeType: 'limited',
      materials: 'Technical Ballistic Mesh, Rubberized Armor Panels',
      description: 'Designed for high velocity urban mobility. Lightweight, weather-resistant materials paired with a high-traction lug outsole.',
      construction: 'Direct-Injected Polyurethane Sole',
      origin: 'Sialkot, Pakistan',
      colors: ['#18181b', '#3f3f46']
    },
    {
      id: 'p20',
      title: 'The Alpine Winter Fur Sneaker',
      category: 'boots',
      categoryLabel: 'Winter Capsule',
      gender: 'unisex',
      priceEUR: 1180,
      image: 'assets/products/p20.png',
      badge: 'Winter Exclusive',
      badgeType: 'limited',
      materials: 'Waterproof White Nappa, Shearling Lambswool Lining',
      description: 'Lined with plush Italian shearling lambswool to withstand winter cold in total comfort, finished with an ice-grip commando tread.',
      construction: 'Norwegian Storm Welt',
      origin: 'Gilgit, Pakistan',
      colors: ['#ffffff', '#f1ede6', '#3b2f2f']
    }
  ];

  // Currency Exchange Rates (Base: EUR)
  const currencies = {
    PKR: { symbol: '₨ ', rate: 295.0 },
    USD: { symbol: '$', rate: 1.08 },
    EUR: { symbol: '€', rate: 1.0 },
    GBP: { symbol: '£', rate: 0.85 }
  };
  let currentCurrency = 'PKR';

  // Shopping Bag State
  let cart = [
    {
      productId: 'p13',
      size: 'EU 42 / US 9',
      quantity: 1,
      monogram: 'S.U.'
    }
  ];

  // Wishlist State
  let wishlist = new Set(['p17', 'p16']);

  // =========================================================================
  // 2. HERO MEDIA CONTROLLER (PC/MOBILE & SMOOTH VIDEO-TO-IMAGE TRANSITION)
  // =========================================================================
  const heroContainer = document.getElementById('heroMediaContainer');
  const videoDesktop = document.getElementById('heroVideoDesktop');
  const videoMobile = document.getElementById('heroVideoMobile');

  function isMobileViewport() {
    return window.innerWidth <= 768;
  }

  function getActiveVideo() {
    return isMobileViewport() ? videoMobile : videoDesktop;
  }

  function getInactiveVideo() {
    return isMobileViewport() ? videoDesktop : videoMobile;
  }

  function onVideoEnded() {
    // When video completes, cross-fade to static image
    if (heroContainer) {
      heroContainer.classList.add('media-finished');
      heroContainer.classList.remove('video-playing');
    }
  }

  function setupVideoEvents(videoEl) {
    if (!videoEl) return;
    videoEl.addEventListener('play', () => {
      if (heroContainer) {
        heroContainer.classList.add('video-playing');
      }
    });
    videoEl.addEventListener('playing', () => {
      if (heroContainer) {
        heroContainer.classList.add('video-playing');
      }
    });
    videoEl.addEventListener('pause', () => {
      if (heroContainer && (videoEl.ended || videoEl.currentTime > 0)) {
        heroContainer.classList.remove('video-playing');
      }
    });
    videoEl.addEventListener('ended', onVideoEnded);
    
    // Safety check: in case 'ended' doesn't fire due to browser sleep/stall, listen to timeupdate
    videoEl.addEventListener('timeupdate', () => {
      if (videoEl.duration > 0 && videoEl.currentTime >= videoEl.duration - 0.2) {
        onVideoEnded();
      }
    });
  }

  setupVideoEvents(videoDesktop);
  setupVideoEvents(videoMobile);

  function startActiveMediaPlayback() {
    const active = getActiveVideo();
    const inactive = getInactiveVideo();

    if (inactive) {
      inactive.pause();
    }

    if (active) {
      // Un-finish state if playing again
      active.currentTime = 0;
      const playPromise = active.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented by browser policy, show image smoothly
          if (heroContainer) {
            heroContainer.classList.add('media-finished');
          }
        });
      }
    }
  }

  // Initial Play
  startActiveMediaPlayback();

  // Handle Resize: seamlessly activate correct video if switching viewports
  let lastWasMobile = isMobileViewport();
  window.addEventListener('resize', () => {
    const currentIsMobile = isMobileViewport();
    if (currentIsMobile !== lastWasMobile) {
      lastWasMobile = currentIsMobile;
      if (heroContainer && !heroContainer.classList.contains('media-finished')) {
        startActiveMediaPlayback();
      }
    }
  });

  // =========================================================================
  // 3. SYNCHRONIZED NAVIGATION BAR
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const trackedSections = document.querySelectorAll('section[id], header[id]');

  function handleNavbarScroll() {
    const scrollPos = window.scrollY || window.pageYOffset;
    const heroHeight = document.getElementById('hero')?.offsetHeight || 700;

    // Transition from transparent hero state to frosted glass obsidian navbar
    if (scrollPos > heroHeight - 120) {
      siteHeader.classList.remove('nav-hero');
      siteHeader.classList.add('nav-scrolled');
    } else {
      siteHeader.classList.remove('nav-scrolled');
      siteHeader.classList.add('nav-hero');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ScrollSpy with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const target = link.getAttribute('href')?.replace('#', '');
          if (target === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('section[id]').forEach(sec => sectionObserver.observe(sec));

  // Mobile Menu Drawer Toggling
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('is-active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNavDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('is-open');
        mobileMenuBtn.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }

  // =========================================================================
  // 4. CURRENCY SWITCHER
  // =========================================================================
  const currencyBtn = document.getElementById('currencySelectorBtn');
  const currencyKeys = Object.keys(currencies);

  function formatPrice(eurAmount) {
    const curr = currencies[currentCurrency];
    const converted = Math.round(eurAmount * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  }

  function updateAllPricesInDom() {
    document.querySelectorAll('[data-eur-price]').forEach(el => {
      const eur = parseFloat(el.getAttribute('data-eur-price'));
      el.textContent = formatPrice(eur);
    });
    renderCart();
  }

  if (currencyBtn) {
    currencyBtn.addEventListener('click', () => {
      const idx = currencyKeys.indexOf(currentCurrency);
      currentCurrency = currencyKeys[(idx + 1) % currencyKeys.length];
      currencyBtn.querySelector('span').textContent = currentCurrency;
      updateAllPricesInDom();
      showToast(`Currency changed to ${currentCurrency} (${currencies[currentCurrency].symbol})`);
    });
  }

  // =========================================================================
  // 5. PRODUCT CATALOG RENDERING, FILTERING & SORTING (20 PIECES)
  // =========================================================================
  const productsContainer = document.getElementById('productsGridContainer');
  const collectionTabs = document.querySelectorAll('.collection-filter-tabs .tab-btn');
  const sortSelect = document.getElementById('catalogSortSelect');
  let currentFilter = 'all';
  let currentSort = 'featured';

  function getFilteredProducts(filter) {
    switch (filter) {
      case 'sneakers':
        return products.filter(p => p.category === 'sneakers');
      case 'loafers':
        return products.filter(p => p.category === 'loafers');
      case 'heels':
        return products.filter(p => p.category === 'heels');
      case 'boots':
        return products.filter(p => p.category === 'boots');
      case 'casual':
        return products.filter(p => ['p1', 'p7', 'p9', 'p12', 'p14', 'p17'].includes(p.id));
      case 'formal':
        return products.filter(p => ['p2', 'p3', 'p4', 'p5', 'p6', 'p8', 'p10'].includes(p.id));
      case 'sandals':
        return products.filter(p => p.category === 'heels');
      case 'women':
        return products.filter(p => p.gender === 'women' || p.gender === 'unisex');
      case 'men':
        return products.filter(p => p.gender === 'men' || p.gender === 'unisex');
      case 'all':
      default:
        return [...products];
    }
  }

  function getSortedProducts(list, sort) {
    const sorted = [...list];
    switch (sort) {
      case 'price-asc':
        return sorted.sort((a, b) => a.priceEUR - b.priceEUR);
      case 'price-desc':
        return sorted.sort((a, b) => b.priceEUR - a.priceEUR);
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'featured':
      default:
        return sorted;
    }
  }

  function renderProducts(filter = currentFilter, sort = currentSort) {
    if (!productsContainer) return;
    currentFilter = filter;
    currentSort = sort;
    productsContainer.innerHTML = '';

    const filtered = getFilteredProducts(currentFilter);
    const sorted = getSortedProducts(filtered, currentSort);

    if (sorted.length === 0) {
      productsContainer.innerHTML = `
        <div class="empty-catalog-state">
          <p>No bespoke silhouettes found matching this selection.</p>
          <button class="cta-luxury-btn" style="margin-top:1rem;" onclick="renderProducts('all')">VIEW ALL 20 STYLES</button>
        </div>
      `;
      return;
    }

    sorted.forEach(p => {
      const isWishlisted = wishlist.has(p.id);
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-id', p.id);

      card.innerHTML = `
        <div class="card-media-wrapper" data-action="quickview" data-id="${p.id}">
          <div class="card-badges">
            <span class="badge-tag ${p.badgeType}">${p.badge}</span>
          </div>
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${p.id}" aria-label="Add to Wishlist" title="Save to Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <div class="card-img-container">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
          </div>
          <div class="card-quick-actions">
            <button class="quick-view-btn" data-action="quickview" data-id="${p.id}">Inspect Details</button>
            <button class="quick-add-btn" data-action="quickadd" data-id="${p.id}">+ Quick Bag</button>
          </div>
        </div>
        <div class="card-details">
          <div class="card-category-row">
            <span class="card-category">${p.categoryLabel}</span>
            <span class="card-origin-tag">${p.origin.split(',')[0]}</span>
          </div>
          <h3 class="card-title" data-action="quickview" data-id="${p.id}">${p.title}</h3>
          <p class="card-materials">${p.materials}</p>
          <div class="card-footer">
            <span class="card-price" data-eur-price="${p.priceEUR}">${formatPrice(p.priceEUR)}</span>
            <div class="card-swatches" title="${p.colors.length} Artisanal finishes">
              ${p.colors.map(c => `<span class="swatch-dot" style="background-color: ${c}"></span>`).join('')}
            </div>
          </div>
        </div>
      `;

      productsContainer.appendChild(card);
    });

    // Update filter tab active classes
    collectionTabs.forEach(tab => {
      const tabFilter = tab.getAttribute('data-filter');
      if (tabFilter === currentFilter) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  window.renderProducts = renderProducts;

  // Collection Tabs Click Handler
  collectionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter') || 'all';
      renderProducts(filter, currentSort);
    });
  });

  // Sort Dropdown Change Handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      renderProducts(currentFilter, e.target.value);
    });
  }

  // =========================================================================
  // 5B. HOMEPAGE ARCHED SHOWCASE DYNAMIC CATEGORY SWITCHER
  // =========================================================================
  const archCardsRow = document.getElementById('archCardsRow');
  const showcaseEyebrow = document.getElementById('showcaseEyebrow');
  const showcaseWatermark = document.getElementById('showcaseWatermark');
  const showcaseTitle = document.getElementById('showcaseTitle');
  const showcaseDesc = document.getElementById('showcaseDesc');
  const showcaseViewAllBtn = document.getElementById('showcaseViewAllBtn');
  const showcaseViewAllText = document.getElementById('showcaseViewAllText');
  const showcaseEditorialTitle = document.getElementById('showcaseEditorialTitle');
  const showcaseEditorialSub = document.getElementById('showcaseEditorialSub');

  const showcaseCategories = {
    sneakers: {
      watermark: '01',
      eyebrow: 'FEATURED SNEAKERS',
      title: 'Our<br>Favorites',
      desc: 'Handpicked styles for every journey. Comfort, quality and timeless design.',
      editorialTitle: 'More Than<br>Footwear',
      editorialSub: '01 / ESSENTIALS IN EVERY STEP',
      viewAllText: 'VIEW SNEAKERS',
      productIds: ['p13', 'p17', 'p15', 'p12']
    },
    casual: {
      watermark: '02',
      eyebrow: 'CASUAL EDIT',
      title: 'Casual<br>Essentials',
      desc: 'Relaxed luxury loafers, slip-on knit silhouettes, and understated court shoes for effortless everyday elegance.',
      editorialTitle: 'Everyday<br>Poise',
      editorialSub: '02 / TIMELESS LIVING',
      viewAllText: 'VIEW CASUAL',
      productIds: ['p1', 'p7', 'p12', 'p17']
    },
    formal: {
      watermark: '03',
      eyebrow: 'BESPOKE FORMAL',
      title: 'Formal<br>Sartorial',
      desc: 'Goodyear-welted oxford brogues, double monk straps, and mirror-finished dress shoes for commanding occasions.',
      editorialTitle: 'The Sartorial<br>Code',
      editorialSub: '03 / BLACK TIE & GALA',
      viewAllText: 'VIEW FORMAL',
      productIds: ['p6', 'p8', 'p10', 'p9']
    },
    boots: {
      watermark: '04',
      eyebrow: 'THE BOOT VAULT',
      title: 'Haute<br>Boots',
      desc: 'Whole-cut Chelsea boots, shearling alpine designs, and storm-welted silhouettes crafted to endure seasons in total luxury.',
      editorialTitle: 'Unyielding<br>Elegance',
      editorialSub: '04 / AUTUMN & WINTER VAULT',
      viewAllText: 'VIEW BOOTS',
      productIds: ['p16', 'p20', 'p10', 'p6']
    },
    heels: {
      watermark: '05',
      eyebrow: 'HAUTE SOIREE',
      title: 'Heels &<br>Stilettos',
      desc: 'Austrian crystal slingbacks, architectural block pumps, and champagne stardust stems hand-carved in Lahore and Karachi.',
      editorialTitle: 'Starlit<br>Evenings',
      editorialSub: '05 / HAUTE COUTURE SOIREE',
      viewAllText: 'VIEW HEELS',
      productIds: ['p2', 'p3', 'p4', 'p5']
    },
    women: {
      watermark: '06',
      eyebrow: 'WOMEN\'S ATELIER',
      title: 'Feminine<br>Silhouettes',
      desc: 'Sculptural evening stilettos, butter-soft horsebit loafer pumps, and featherlight engineered knit runners.',
      editorialTitle: 'Feminine<br>Grace',
      editorialSub: '06 / SCULPTED IN LAHORE',
      viewAllText: 'VIEW WOMEN\'S',
      productIds: ['p2', 'p1', 'p4', 'p3']
    },
    men: {
      watermark: '07',
      eyebrow: 'MEN\'S BESPOKE',
      title: 'Men\'s<br>Repertoire',
      desc: 'Cognac museum-calf wingtips, black-tie closed-channel oxfords, obsidian Chelsea boots, and campaign runners.',
      editorialTitle: 'Modern<br>Gentleman',
      editorialSub: '07 / BESPOKE EXCELLENCE',
      viewAllText: 'VIEW MEN\'S',
      productIds: ['p6', 'p8', 'p16', 'p13']
    }
  };

  function updateShowcaseCategory(catKey) {
    const config = showcaseCategories[catKey] || showcaseCategories.sneakers;

    // Update introductory text
    if (showcaseEyebrow) showcaseEyebrow.textContent = config.eyebrow;
    if (showcaseWatermark) showcaseWatermark.textContent = config.watermark;
    if (showcaseTitle) showcaseTitle.innerHTML = config.title;
    if (showcaseDesc) showcaseDesc.textContent = config.desc;
    if (showcaseViewAllBtn) showcaseViewAllBtn.href = `collection.html?style=${encodeURIComponent(catKey)}`;
    if (showcaseViewAllText) showcaseViewAllText.textContent = config.viewAllText;
    if (showcaseEditorialTitle) showcaseEditorialTitle.innerHTML = config.editorialTitle;
    if (showcaseEditorialSub) showcaseEditorialSub.textContent = config.editorialSub;

    if (!archCardsRow) return;

    // Trigger smooth fade out
    const existingCards = archCardsRow.querySelectorAll('.arch-card-wrapper');
    existingCards.forEach(c => c.classList.add('card-animating'));

    setTimeout(() => {
      archCardsRow.innerHTML = '';

      config.productIds.forEach((id, idx) => {
        const p = products.find(prod => prod.id === id);
        if (!p) return;

        const genderLabel = p.gender === 'women' ? 'Women' : (p.gender === 'men' ? 'Men' : 'Unisex');
        const finishesCount = (p.colors && p.colors.length) ? p.colors.length : 2;

        const card = document.createElement('article');
        card.className = 'arch-card-wrapper card-animating';
        card.setAttribute('data-id', p.id);

        card.innerHTML = `
          <div class="arch-image-frame" onclick="openQuickViewModal('${p.id}')">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <button class="arch-quick-add-btn" data-action="quickadd" data-id="${p.id}" aria-label="Add ${p.title} to Bag">+</button>
          </div>
          <div class="arch-card-meta">
            <h3 class="arch-product-name" onclick="openQuickViewModal('${p.id}')">${p.title}</h3>
            <span class="arch-product-subtitle">${genderLabel} &nbsp;|&nbsp; ${finishesCount} Finishes</span>
            <div class="arch-color-swatches">
              ${p.colors.map(c => `<span class="color-swatch-dot" style="background-color: ${c}"></span>`).join('')}
            </div>
          </div>
        `;

        archCardsRow.appendChild(card);

        // Staggered reveal animation
        setTimeout(() => {
          card.classList.remove('card-animating');
        }, 50 * (idx + 1));
      });
    }, 180);
  }

  // Style Capsules Filtering & Dynamic Showcase Update
  const styleCapsules = document.querySelectorAll('.style-capsule');
  styleCapsules.forEach(capsule => {
    capsule.addEventListener('click', (e) => {
      e.preventDefault();
      styleCapsules.forEach(c => c.classList.remove('active'));
      capsule.classList.add('active');
      const styleName = capsule.getAttribute('data-style') || 'sneakers';
      
      // If on homepage with the arched showcase, dynamically update the showcase
      if (archCardsRow) {
        updateShowcaseCategory(styleName);
        showToast(`Showing ${styleName.toUpperCase()} in Featured Showcase`);
        return;
      }

      // If on collection page with the master catalog container, filter the catalog
      if (productsContainer) {
        let targetFilter = styleName;
        if (styleName === 'sandals') targetFilter = 'heels';
        renderProducts(targetFilter, currentSort);
        showToast(`Browsing ${styleName.toUpperCase()} Collection`);
      }
    });
  });

  // Global click delegate for product cards (quick view, quick add, wishlist)
  document.addEventListener('click', (e) => {
    // Quick Add Button
    const qaBtn = e.target.closest('[data-action="quickadd"]');
    if (qaBtn) {
      e.stopPropagation();
      e.preventDefault();
      const id = qaBtn.getAttribute('data-id') || 'p13';
      const prod = products.find(p => p.id === id);
      const defaultSize = (prod && (prod.category === 'heels' || prod.gender === 'women')) 
        ? 'EU 38 / US 7.5' 
        : 'EU 42 / US 9';
      addToBag(id, defaultSize);
      return;
    }

    // Quick View Trigger (button, card media, or card title)
    const qvBtn = e.target.closest('[data-action="quickview"]');
    if (qvBtn) {
      // Don't trigger if clicking child wishlist button or quickadd button
      if (e.target.closest('.card-wishlist-btn') || e.target.closest('.quick-add-btn') || e.target.closest('.arch-quick-add-btn')) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      const id = qvBtn.getAttribute('data-id');
      if (id) openQuickViewModal(id);
      return;
    }

    // Wishlist Toggle Button
    const wlBtn = e.target.closest('[data-wishlist-id]');
    if (wlBtn) {
      e.stopPropagation();
      e.preventDefault();
      const id = wlBtn.getAttribute('data-wishlist-id');
      if (id) toggleWishlist(id, wlBtn);
      return;
    }
  });

  // =========================================================================
  // 6. WISHLIST MANAGEMENT
  // =========================================================================
  const wishlistCounter = document.getElementById('wishlistCounter');

  function updateWishlistBadge() {
    if (wishlistCounter) {
      wishlistCounter.textContent = wishlist.size;
      wishlistCounter.classList.add('badge-pulse');
      setTimeout(() => wishlistCounter.classList.remove('badge-pulse'), 400);
    }
  }

  function toggleWishlist(productId, btnEl) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    if (wishlist.has(productId)) {
      wishlist.delete(productId);
      btnEl.classList.remove('active');
      btnEl.querySelector('svg').setAttribute('fill', 'none');
      showToast(`Removed ${prod.title} from Wishlist`);
    } else {
      wishlist.add(productId);
      btnEl.classList.add('active');
      btnEl.querySelector('svg').setAttribute('fill', 'currentColor');
      showToast(`Added ${prod.title} to Private Wishlist`);
    }
    updateWishlistBadge();
  }

  updateWishlistBadge();

  // =========================================================================
  // 7. PRODUCT QUICK VIEW MODAL
  // =========================================================================
  const quickViewModal = document.getElementById('quickViewModal');
  const modalCloseBtn = document.getElementById('closeQuickViewBtn');
  let selectedSize = 'EU 42 / US 9';
  let activeModalProductId = null;

  function openQuickViewModal(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod || !quickViewModal) return;

    activeModalProductId = productId;

    document.getElementById('modalProductImage').src = prod.image;
    document.getElementById('modalProductImage').alt = prod.title;
    document.getElementById('modalProductCategory').textContent = prod.categoryLabel;
    document.getElementById('modalProductTitle').textContent = prod.title;
    
    const priceEl = document.getElementById('modalProductPrice');
    priceEl.setAttribute('data-eur-price', prod.priceEUR);
    priceEl.textContent = formatPrice(prod.priceEUR);

    document.getElementById('modalProductDesc').textContent = prod.description;
    document.getElementById('modalProductOrigin').textContent = prod.origin;
    document.getElementById('modalProductConstruction').textContent = prod.construction;

    // Dynamic luxury sizing options based on silhouette category
    const isWomenOnly = (prod.category === 'heels' || prod.gender === 'women');
    const availableSizes = isWomenOnly
      ? [
          { eu: '36', us: 'US 5.5' },
          { eu: '37', us: 'US 6.5' },
          { eu: '38', us: 'US 7.5' },
          { eu: '39', us: 'US 8.5' },
          { eu: '40', us: 'US 9' },
          { eu: '41', us: 'US 10' }
        ]
      : [
          { eu: '40', us: 'US 7' },
          { eu: '41', us: 'US 8' },
          { eu: '42', us: 'US 9' },
          { eu: '43', us: 'US 10' },
          { eu: '44', us: 'US 11' },
          { eu: '45', us: 'US 12' },
          { eu: '46', us: 'US 13' }
        ];

    const defaultPick = availableSizes[Math.min(2, availableSizes.length - 1)];
    selectedSize = `EU ${defaultPick.eu} / ${defaultPick.us}`;

    const sizeContainer = document.querySelector('.size-pill-grid');
    if (sizeContainer) {
      sizeContainer.innerHTML = availableSizes.map(s => {
        const fullSize = `EU ${s.eu} / ${s.us}`;
        const isActive = fullSize === selectedSize;
        return `
          <div class="size-pill ${isActive ? 'active' : ''}" data-size="${fullSize}">
            <span class="size-eu">${s.eu}</span>
            <span class="size-us">${s.us}</span>
          </div>
        `;
      }).join('');

      sizeContainer.querySelectorAll('.size-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          sizeContainer.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          selectedSize = pill.getAttribute('data-size');
        });
      });
    }

    quickViewModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  window.openQuickViewModal = openQuickViewModal;
  window.addToBag = addToBag;

  function closeQuickViewModal() {
    if (quickViewModal) {
      quickViewModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeQuickViewModal);
  }

  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) {
        closeQuickViewModal();
      }
    });
  }

  // Modal "Add to Bag" Button
  const modalAddBagBtn = document.getElementById('modalAddBagBtn');
  if (modalAddBagBtn) {
    modalAddBagBtn.addEventListener('click', () => {
      if (activeModalProductId) {
        const monogramInput = document.getElementById('modalMonogramInput');
        const monogram = monogramInput ? monogramInput.value.trim() : '';
        addToBag(activeModalProductId, selectedSize, monogram);
        closeQuickViewModal();
      }
    });
  }

  // =========================================================================
  // 8. SLIDE-OUT LUXURY SHOPPING BAG (CART DRAWER)
  // =========================================================================
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const openBagBtns = document.querySelectorAll('[data-action="open-bag"]');
  const closeBagBtn = document.getElementById('closeCartDrawerBtn');
  const bagCounter = document.getElementById('bagCounter');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotalEl = document.getElementById('cartSubtotalAmount');
  const cartTotalEl = document.getElementById('cartTotalAmount');

  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartOverlay.classList.add('is-open');
      cartDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartOverlay.classList.remove('is-open');
      cartDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  openBagBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  if (closeBagBtn) closeBagBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function addToBag(productId, size = 'EU 42 / US 9', monogram = '') {
    const existing = cart.find(item => item.productId === productId && item.size === size);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        productId,
        size,
        quantity: 1,
        monogram
      });
    }

    renderCart();
    openCart();
    
    const prod = products.find(p => p.id === productId);
    showToast(`Added ${prod?.title || 'Footwear'} to Shopping Bag`);
  }

  function updateBagBadge() {
    if (!bagCounter) return;
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    bagCounter.textContent = totalCount;
    bagCounter.classList.add('badge-pulse');
    setTimeout(() => bagCounter.classList.remove('badge-pulse'), 400);
  }

  function renderCart() {
    updateBagBadge();
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h4>Your Shopping Bag is Empty</h4>
          <p style="font-size:0.85rem; margin-top:0.5rem; color:var(--platinum-muted);">Explore our Florentine collections to select a silhouette.</p>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(0);
      if (cartTotalEl) cartTotalEl.textContent = formatPrice(0);
      return;
    }

    cartItemsContainer.innerHTML = '';
    let subtotalEUR = 0;

    cart.forEach((item, index) => {
      const prod = products.find(p => p.id === item.productId);
      if (!prod) return;

      const itemTotalEUR = prod.priceEUR * item.quantity;
      subtotalEUR += itemTotalEUR;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img class="cart-item-img" src="${prod.image}" alt="${prod.title}">
        <div class="cart-item-info">
          <div>
            <h4 class="cart-item-title">${prod.title}</h4>
            <div class="cart-item-meta">${item.size}${item.monogram ? ` • Foil Monogram: [${item.monogram}]` : ''}</div>
          </div>
          <div class="cart-item-bottom">
            <div class="cart-qty-ctrl">
              <button class="qty-btn" data-cart-action="dec" data-index="${index}">−</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" data-cart-action="inc" data-index="${index}">+</button>
            </div>
            <div>
              <span class="cart-item-price">${formatPrice(itemTotalEUR)}</span>
              <button class="cart-item-remove" data-cart-action="remove" data-index="${index}">Remove</button>
            </div>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotalEUR);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(subtotalEUR);
  }

  // Cart quantity & remove actions
  if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cart-action]');
      if (!btn) return;

      const action = btn.getAttribute('data-cart-action');
      const idx = parseInt(btn.getAttribute('data-index'), 10);

      if (action === 'inc') {
        cart[idx].quantity += 1;
      } else if (action === 'dec') {
        if (cart[idx].quantity > 1) {
          cart[idx].quantity -= 1;
        } else {
          cart.splice(idx, 1);
        }
      } else if (action === 'remove') {
        cart.splice(idx, 1);
      }

      renderCart();
    });
  }

  // Initial Cart Render
  renderCart();

  // Checkout Button
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your shopping bag is empty.');
        return;
      }
      showToast('Initiating private client checkout...');
      setTimeout(() => {
        alert('Maison Step Up Atelier — Private Client Order Received.\n\nThank you for choosing Step Up. Our private client concierge in Gulberg, Lahore will contact you via WhatsApp shortly with your nationwide TCS Express tracking details.');
        cart = [];
        renderCart();
        closeCart();
      }, 700);
    });
  }

  // =========================================================================
  // 9. BESPOKE SALON VIP BOOKING
  // =========================================================================
  const bespokeForm = document.getElementById('bespokeBookingForm');
  if (bespokeForm) {
    bespokeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const salon = document.getElementById('salonSelect').value;
      const clientName = document.getElementById('clientName').value;
      const clientEmail = document.getElementById('clientEmail').value;
      const date = document.getElementById('bookingDate').value;
      const passId = 'VIP-' + Math.floor(100000 + Math.random() * 900000);

      showToast(`Appointment Confirmed for ${clientName}`);
      
      setTimeout(() => {
        alert(`✦ MAISON STEP UP ATELIER — BESPOKE SALON PASS ✦\n\nClient: ${clientName}\nSalon: ${salon}\nDate: ${date}\nPass ID: ${passId}\n\nA formal invitation package with your private fitting advisor has been dispatched to ${clientEmail}.`);
        bespokeForm.reset();
      }, 500);
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      showToast(`Welcome to the Private Client List: ${email}`);
      newsletterForm.reset();
    });
  }

  // =========================================================================
  // 10. SEARCH MODAL OVERLAY
  // =========================================================================
  const searchBtn = document.getElementById('openSearchBtn');
  const searchModal = document.getElementById('searchModal');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const searchInput = document.getElementById('catalogSearchInput');
  const searchResults = document.getElementById('searchResultsList');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('is-open');
      searchInput?.focus();
    });

    closeSearchBtn?.addEventListener('click', () => {
      searchModal.classList.remove('is-open');
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) searchModal.classList.remove('is-open');
    });

    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResults.innerHTML = '<div style="color:var(--platinum-dim); padding:1rem;">Type a silhouette name, leather, or style...</div>';
        return;
      }

      const matches = products.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.materials.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<div style="color:var(--platinum-dim); padding:1rem;">No matching bespoke silhouettes found.</div>';
        return;
      }

      searchResults.innerHTML = matches.map(m => `
        <div class="search-result-item" data-search-id="${m.id}">
          <img class="search-result-thumb" src="${m.image}" alt="${m.title}">
          <div style="flex:1;">
            <div style="font-size:0.7rem; color:var(--gold-warm); text-transform:uppercase;">${m.categoryLabel}</div>
            <div style="font-family:var(--font-display); font-size:1rem; color:#fff;">${m.title}</div>
            <div style="font-size:0.8rem; color:var(--platinum-dim);">${m.materials}</div>
          </div>
          <div style="font-weight:600; color:var(--gold-champagne);">${formatPrice(m.priceEUR)}</div>
        </div>
      `).join('');
    });

    searchResults?.addEventListener('click', (e) => {
      const item = e.target.closest('[data-search-id]');
      if (item) {
        const id = item.getAttribute('data-search-id');
        searchModal.classList.remove('is-open');
        openQuickViewModal(id);
      }
    });
  }

  // =========================================================================
  // 11. TOAST NOTIFICATION SYSTEM
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'luxury-toast';
    toast.innerHTML = `
      <span style="color:var(--gold-primary);">✦</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // Initial render: parse URL parameters (e.g., collection.html?style=sneakers)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const initialStyleParam = urlParams.get('style');
    if (initialStyleParam) {
      let targetFilter = initialStyleParam;
      if (initialStyleParam === 'sandals') targetFilter = 'heels';
      renderProducts(targetFilter, 'featured');
    } else {
      renderProducts('all', 'featured');
    }
  } catch (err) {
    renderProducts('all', 'featured');
  }

  window.showToast = showToast;
  window.updateShowcaseCategory = updateShowcaseCategory;
});
