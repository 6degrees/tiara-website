// Language Switcher for Tiara Beauty Website
(function() {
  'use strict';
  
  // Get current language from localStorage or default to 'en'
  let currentLang = localStorage.getItem('tiara-language') || 'en';
  
  // Initialize language on page load
  function initLanguage() {
    setLanguage(currentLang);
    // Ensure visibility is updated immediately
    setTimeout(function() {
      updateLanguageSwitcher(currentLang);
    }, 50);
  }
  
  // Set language and update page
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tiara-language', lang);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Add/remove RTL class
    if (lang === 'ar') {
      document.documentElement.classList.add('rtl');
      document.body.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
      document.body.classList.remove('rtl');
    }
    
    // Close menu overlay if open (especially important on mobile)
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.remove('w--open');
      menu.style.removeProperty('display'); // Let CSS control visibility so menu can open again
    }
    
    // Remove any Webflow menu open classes
    document.body.classList.remove('w-nav-menu-open');
    document.documentElement.classList.remove('w-nav-menu-open');
    
    // Ensure page content is visible after language change
    const pageIn = document.querySelector('.page-in');
    if (pageIn) {
      pageIn.style.opacity = '1';
      pageIn.style.visibility = 'visible';
      // Don't override display - let CSS handle it
    }
    
    // Update all translatable elements
    updateTranslations(lang);
    
    // Update language switcher buttons
    updateLanguageSwitcher(lang);
    
    // Force visibility of main content sections (only opacity/visibility, preserve display)
    setTimeout(function() {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
        // Don't override display - let CSS handle it
      }
      
      // Ensure all sections are visible
      document.querySelectorAll('section').forEach(function(section) {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        // Don't override display - let CSS handle it
      });
      
      // Ensure header is visible
      const header = document.querySelector('.header');
      if (header) {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
        // Don't override display - let CSS handle it
      }
      
      // Ensure footer is visible
      const footer = document.querySelector('.footer');
      if (footer) {
        footer.style.opacity = '1';
        footer.style.visibility = 'visible';
        // Don't override display - let CSS handle it
      }
    }, 10);
  }
  
  // Update all translatable content
  function updateTranslations(lang) {
    const t = window.translations && window.translations[lang] ? window.translations[lang] : (typeof translations !== 'undefined' ? translations[lang] : null);
    if (!t) return;
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (t[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = t[key];
        } else if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });

    // Update page title when this page has a title key (e.g. team page)
    var titleKey = document.body.getAttribute('data-page-title-key');
    if (titleKey && t[titleKey]) {
      document.title = t[titleKey];
    }
  }
  
  // Update language switcher UI
  function updateLanguageSwitcher(lang) {
    const switchers = document.querySelectorAll('.lang-switcher');
    if (switchers.length === 0) {
      return; // No switchers found yet
    }
    
    switchers.forEach(switcher => {
      const buttons = switcher.querySelectorAll('.lang-btn');
      buttons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
          // Hide the button for current language
          btn.style.setProperty('display', 'none', 'important');
          btn.style.setProperty('visibility', 'hidden', 'important');
          btn.classList.add('active');
        } else {
          // Show the button for opposite language
          btn.style.setProperty('display', 'inline-block', 'important');
          btn.style.setProperty('visibility', 'visible', 'important');
          btn.classList.remove('active');
        }
      });
      
      // Hide separator - always hide since we only show one button
      const separator = switcher.querySelector('.lang-separator');
      if (separator) {
        separator.style.setProperty('display', 'none', 'important');
      }
    });
  }
  
  // Create language switcher HTML
  function createLanguageSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
      <span class="lang-separator">|</span>
      <button class="lang-btn" data-lang="ar" aria-label="العربية">العربية</button>
    `;
    
    // Add click handlers
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
    
    return switcher;
  }
  
  // Function to initialize existing switcher in HTML
  function initExistingSwitcher() {
    const switchers = document.querySelectorAll('.lang-switcher');
    switchers.forEach(switcher => {
      // Add click handlers to existing buttons (always re-add to ensure they work)
      switcher.querySelectorAll('.lang-btn').forEach(btn => {
        // Remove any existing listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
          e.preventDefault();
          const lang = this.getAttribute('data-lang');
          setLanguage(lang);
        });
      });
      
      // Mark as initialized
      switcher.setAttribute('data-initialized', 'true');
      
      // Set initial visibility based on current language - use setTimeout to ensure DOM is ready
      setTimeout(function() {
        updateLanguageSwitcher(currentLang);
      }, 10);
    });
  }
  
  // Function to add switcher to menu (fallback if not in HTML)
  function addSwitcherToMenu() {
    const menuRight = document.querySelector('.menu-right');
    if (menuRight) {
      // Check if switcher already exists
      const existingSwitcher = menuRight.querySelector('.lang-switcher');
      if (existingSwitcher) {
        initExistingSwitcher();
        return; // Already exists, just initialize handlers
      }
      
      const switcher = createLanguageSwitcher();
      // Add after menu links, before copyright
      const menuRightLabel = menuRight.querySelector('.menu-right-label');
      if (menuRightLabel) {
        menuRight.insertBefore(switcher, menuRightLabel);
      } else {
        menuRight.appendChild(switcher);
      }
    }
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLanguage();
      initExistingSwitcher();
      addSwitcherToMenu();
      
      // Also try after a short delay in case menu is dynamically loaded
      setTimeout(function() {
        initExistingSwitcher();
        addSwitcherToMenu();
      }, 100);
    });
  } else {
    initLanguage();
    initExistingSwitcher();
    addSwitcherToMenu();
    
    // Also try after a short delay in case menu is dynamically loaded
    setTimeout(function() {
      initExistingSwitcher();
      addSwitcherToMenu();
    }, 100);
  }
  
  // Also initialize when menu is opened (if using Webflow interactions)
  document.addEventListener('click', function(e) {
    // Check if menu button was clicked
    if (e.target.closest('.menu-link')) {
      setTimeout(function() {
        initExistingSwitcher();
        addSwitcherToMenu();
      }, 300);
    }
  });

  // Ensure menu opens on mobile: Webflow interaction may only bind to desktop trigger.
  // Any .menu-link click (including mobile hamburger) opens the overlay.
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.menu-link');
    if (!trigger) return;
    var menu = document.querySelector('.menu');
    if (!menu) return;
    if (!menu.classList.contains('w--open')) {
      e.preventDefault();
      menu.classList.add('w--open');
      document.body.classList.add('w-nav-menu-open');
    }
  }, true);
  
  // Expose setLanguage for external use
  window.TiaraLanguage = {
    setLanguage: setLanguage,
    getLanguage: function() { return currentLang; }
  };
})();

