
document.addEventListener('DOMContentLoaded', function() {
  // Filter selectors
  const genderFilter = document.getElementById('gender-filter');
  const brandFilter = document.getElementById('brand-filter');
  const priceFilter = document.getElementById('price-filter');
  const sortBy = document.getElementById('sort-by');
  
  // All product cards
  const productCards = document.querySelectorAll('.product-card');
  
  // Apply filters when any filter changes
  const filters = [genderFilter, brandFilter, priceFilter, sortBy];
  filters.forEach(filter => {
    if (filter) {
      filter.addEventListener('change', applyFilters);
    }
  });
  
  // Check URL params for initial filtering
  const urlParams = new URLSearchParams(window.location.search);
  const genderParam = urlParams.get('gender');
  
  if (genderParam && genderFilter) {
    genderFilter.value = genderParam;
    applyFilters();
  }
  
  function applyFilters() {
    const selectedGender = genderFilter ? genderFilter.value : 'all';
    const selectedBrand = brandFilter ? brandFilter.value : 'all';
    const selectedPriceRange = priceFilter ? priceFilter.value : 'all';
    const selectedSort = sortBy ? sortBy.value : 'popular';
    
    // Filter products
    productCards.forEach(card => {
      // Get product data attributes
      const gender = card.getAttribute('data-gender');
      const brand = card.getAttribute('data-brand');
      const price = parseInt(card.getAttribute('data-price'));
      
      // Check if product matches all selected filters
      const matchesGender = selectedGender === 'all' || gender === selectedGender;
      const matchesBrand = selectedBrand === 'all' || brand === selectedBrand;
      
      // Price range filtering
      let matchesPrice = true;
      if (selectedPriceRange === 'under50') {
        matchesPrice = price < 50;
      } else if (selectedPriceRange === '50-100') {
        matchesPrice = price >= 50 && price <= 100;
      } else if (selectedPriceRange === '100-150') {
        matchesPrice = price > 100 && price <= 150;
      } else if (selectedPriceRange === 'over150') {
        matchesPrice = price > 150;
      }
      
      // Show/hide based on filters
      if (matchesGender && matchesBrand && matchesPrice) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Apply sorting
    sortProducts(selectedSort);
    
    // Update section visibility
    updateSectionVisibility();
  }
  
  function sortProducts(sortMethod) {
    const womenSection = document.querySelector('.product-grid:first-of-type');
    const menSection = document.querySelector('.product-grid:last-of-type');
    
    if (!womenSection || !menSection) return;
    
    // Get and sort products
    sortProductsInContainer(womenSection, sortMethod);
    sortProductsInContainer(menSection, sortMethod);
  }
  
  function sortProductsInContainer(container, sortMethod) {
    const products = Array.from(container.querySelectorAll('.product-card'));
    
    products.sort((a, b) => {
      const priceA = parseInt(a.getAttribute('data-price'));
      const priceB = parseInt(b.getAttribute('data-price'));
      
      if (sortMethod === 'price-low') {
        return priceA - priceB;
      } else if (sortMethod === 'price-high') {
        return priceB - priceA;
      }
      
      // For other sorting methods, maintain current order
      // In a real application, we would implement more sorting options
      return 0;
    });
    
    // Remove current products
    container.innerHTML = '';
    
    // Add sorted products back
    products.forEach(product => {
      container.appendChild(product);
    });
  }
  
  function updateSectionVisibility() {
    const womenSection = document.querySelector('.product-grid:first-of-type');
    const menSection = document.querySelector('.product-grid:last-of-type');
    const womenHeading = document.querySelector('.section-heading:not(.men-section)');
    const menHeading = document.querySelector('.men-section');
    
    if (!womenSection || !menSection || !womenHeading || !menHeading) return;
    
    // Check if any women's products are visible
    const visibleWomenProducts = Array.from(womenSection.querySelectorAll('.product-card')).filter(card => {
      return card.style.display !== 'none';
    });
    
    // Check if any men's products are visible
    const visibleMenProducts = Array.from(menSection.querySelectorAll('.product-card')).filter(card => {
      return card.style.display !== 'none';
    });
    
    // Show/hide sections based on visible products
    womenHeading.style.display = visibleWomenProducts.length > 0 ? 'block' : 'none';
    womenSection.style.display = visibleWomenProducts.length > 0 ? 'grid' : 'none';
    
    menHeading.style.display = visibleMenProducts.length > 0 ? 'block' : 'none';
    menSection.style.display = visibleMenProducts.length > 0 ? 'grid' : 'none';
  }
});
