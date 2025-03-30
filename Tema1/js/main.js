
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const appPromoPopup = document.getElementById('app-promo-popup');
  const closePopupBtn = document.getElementById('close-popup');
  const signupForm = document.getElementById('signup-form');

  // Sticky Header on Scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // App Promo Popup
  if (appPromoPopup && closePopupBtn) {
    // Show popup after 5 seconds
    setTimeout(function() {
      appPromoPopup.classList.add('show');
    }, 5000);

    // Close popup when clicking the close button
    closePopupBtn.addEventListener('click', function() {
      appPromoPopup.classList.remove('show');
      // Save to localStorage to prevent showing again in this session
      localStorage.setItem('appPromoSeen', 'true');
    });

    // Check if popup has already been shown
    if (localStorage.getItem('appPromoSeen') === 'true') {
      appPromoPopup.style.display = 'none';
    }
  }

  // Account Signup Form
  if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const newsletter = document.getElementById('newsletter').checked;
      
      // Simple validation
      if (!name || !email || !password) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Form submitted with:', { name, email, password, newsletter });
      
      // Show success message
      alert('Account created successfully! You\'ve received a 10% discount code for your first order.');
      
      // Reset form
      signupForm.reset();
    });
  }

  // Quick View and Add to Cart functionality
  const quickViewBtns = document.querySelectorAll('.quick-view-btn');
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      const productName = this.closest('.product-card').querySelector('h3').textContent;
      alert(`Quick view for ${productName}`);
    });
  });
  
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      
      alert(`${productName} added to cart - ${productPrice}`);
    });
  });
});
