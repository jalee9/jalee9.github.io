// MOBILE MENU TOGGLE
// This controls the "Menu" button for smaller screens.
// It shows and hides the navigation links when clicked.

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Only run this code if both elements exist on the page
if (menuBtn && navLinks) {

  // When the menu button is clicked...
  menuBtn.addEventListener('click', () => {

    // Toggle the "open" class on the nav (adds/removes it)
    const isOpen = navLinks.classList.toggle('open');

    // Update accessibility attribute (important for screen readers)
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // When any navigation link is clicked...
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {

      // Close the menu (useful for mobile navigation)
      navLinks.classList.remove('open');

      // Reset accessibility state
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}


// FOOTER YEAR AUTO-UPDATE
// This automatically updates the year in the footer
// so you don't have to manually change it each year.

const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
