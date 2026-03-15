// BURGER MENU
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
// GUESTS DROPDOWN
const guestsToggle = document.getElementById('guestsToggle');
const guestsDropdown = document.getElementById('guestsDropdown');
const guestsText = document.getElementById('guestsText');
const applyGuests = document.getElementById('applyGuests');
guestsToggle.addEventListener('click', () => {
  guestsDropdown.classList.toggle('show');
});
applyGuests.addEventListener('click', () => {
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;
  guestsText.textContent = `${adults} adults, ${children} children`;
  guestsDropdown.classList.remove('show');
});
// CLOSE DROPDOWN ON OUTSIDE CLICK
document.addEventListener('click', (e) => {
  if (!e.target.closest('.guests')) {
    guestsDropdown.classList.remove('show');
  }
});