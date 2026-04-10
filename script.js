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

// BLOG SEARCH + TAG FILTERING
// This code filters blog posts on the blog index page.
// Users can search by keyword or click a tag to narrow results.

const blogSearch = document.getElementById('blogSearch');
const blogTagButtons = document.querySelectorAll('.blog-tag-button');
const blogCards = document.querySelectorAll('.blog-card');
const blogEmpty = document.getElementById('blogEmpty');

// Keep track of which tag is currently selected
let activeBlogTag = 'all';

// This function checks each blog card to see if it matches:
// 1. The current search text
// 2. The selected tag
function filterBlogPosts() {

  // If there are no blog cards on the page, stop here
  if (!blogCards.length) return;

  // Get the current search text and make it lowercase
  // Lowercase helps create a case-insensitive search
  const searchValue = blogSearch ? blogSearch.value.trim().toLowerCase() : '';

  let visibleCount = 0;

  // Look at each blog card one at a time
  blogCards.forEach((card) => {
    const title = (card.dataset.title || '').toLowerCase();
    const excerpt = (card.dataset.excerpt || '').toLowerCase();
    const tags = (card.dataset.tags || '').toLowerCase();

    // Search matches if the keyword appears in the title, excerpt, or tags
    const matchesSearch =
      title.includes(searchValue) ||
      excerpt.includes(searchValue) ||
      tags.includes(searchValue);

    // Tag matches if:
    // - "all" is selected, or
    // - the current card includes the selected tag
    const matchesTag =
      activeBlogTag === 'all' || tags.split(' ').includes(activeBlogTag);

    // Show the card only if it matches both the search and the tag filter
    const shouldShow = matchesSearch && matchesTag;

    // The hidden property removes the card from view
    card.hidden = !shouldShow;

    // Count how many posts are still visible
    if (shouldShow) {
      visibleCount += 1;
    }
  });

  // If no posts matched, show the empty-state message
  if (blogEmpty) {
    blogEmpty.hidden = visibleCount !== 0;
  }
}


// SEARCH EVENT
// Re-run the filter every time the user types in the search box
if (blogSearch) {
  blogSearch.addEventListener('input', filterBlogPosts);
}


// TAG BUTTON EVENTS
// Re-run the filter whenever a tag button is clicked
blogTagButtons.forEach((button) => {
  button.addEventListener('click', () => {

    // Remove the active style from all tag buttons
    blogTagButtons.forEach((btn) => btn.classList.remove('active'));

    // Add the active style to the button that was clicked
    button.classList.add('active');

    // Save the selected tag from the button's data-tag value
    activeBlogTag = button.dataset.tag || 'all';

    // Run the filter again using the new active tag
    filterBlogPosts();
  });
});
