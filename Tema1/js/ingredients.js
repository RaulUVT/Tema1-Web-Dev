
document.addEventListener('DOMContentLoaded', function() {
  // Tabs Functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding tab pane
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // FAQ Accordion Functionality
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', function() {
      // Close all other accordion items
      accordionItems.forEach(i => {
        if (i !== item && i.classList.contains('active')) {
          i.classList.remove('active');
        }
      });
      
      // Toggle active class on clicked item
      item.classList.toggle('active');
      
      // Update icon
      const icon = this.querySelector('.accordion-icon');
      if (item.classList.contains('active')) {
        icon.textContent = '×';
      } else {
        icon.textContent = '+';
      }
    });
  });
});
