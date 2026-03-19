
const guestsToggle = document.getElementById("guestsToggle");
const guestsDropdown = document.getElementById("guestsDropdown");

guestsToggle.addEventListener("click", () => {
  if (guestsDropdown.style.display === "block") {
    guestsDropdown.style.display = "none";
  } else {
    guestsDropdown.style.display = "block";
  }
});


const applyBtn = document.getElementById("applyGuests");
const adultsInput = document.getElementById("adults");
const childrenInput = document.getElementById("children");
const guestsText = document.getElementById("guestsText");

applyBtn.addEventListener("click", () => {
  const adults = adultsInput.value;
  const children = childrenInput.value;

  guestsText.textContent = `${adults} adults, ${children} children`;
  guestsDropdown.style.display = "none";
});


const checkInInput = document.getElementById("checkin");
const checkOutInput = document.getElementById("checkout");

checkInInput.addEventListener("change", () => {
  checkOutInput.min = checkInInput.value;
});


const bookBtn = document.querySelector(".book-btn");

bookBtn.addEventListener("click", () => {
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const adults = adultsInput.value;
  const children = childrenInput.value;

 
  if (!checkIn || !checkOut) {
    alert("Please select both dates");
    return;
  }

  if (new Date(checkIn) >= new Date(checkOut)) {
    alert("Check-out must be later than Check-in");
    return;
  }

  
  alert(
    `Booking confirmed!\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${adults} adults, ${children} children`
  );
});