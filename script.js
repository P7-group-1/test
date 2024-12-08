// Java Script

function searchProduct() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();

    if (searchInput === "redbull") {
        // Redirect to the RedBull page
        window.location.href = "products.html"; // Ensure the file path is correct
    } else {
        alert("Product not found!"); // Optional: Handle invalid searches
    }
}

//Function to redirect to the homepage
function goToHomepage() {
    window.location.href = "homepage.html";
}

// JavaScript for Carousel
const imagesContainer = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

//carousel state
let currentIndex = 0; // Keep track of the current image
const totalImages = document.querySelectorAll('.carousel-images img').length; // Total number of images
const imagesPerSlide = 3; // Show 3 images at a time

// Function to update the carousel's position
function updateCarousel() {
  const offset = -(currentIndex * (100 / imagesPerSlide)); // Calculate offset percentage
  imagesContainer.style.transform = `translateX(${offset}%)`;
}

//move to next set of images
function nextSlide() {
  if (currentIndex < totalImages - imagesPerSlide) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the beginning
  }
  updateCarousel();
}

//move to the previous set of images 
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - imagesPerSlide; // Loop back to the last full set
  }
  updateCarousel();
}

// Attach event listeners to buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Login
document.getElementById('loginButton').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simuleret login-validering
  if (username === 'demo' && password === 'password') {
      localStorage.setItem('LoggedInUser', username); //gemmer brugernavnet i local storage
      // Hvis login er korrekt, omdirigeres brugeren til en anden side
      window.location.href = 'homepage.html';
  } else {
      // Hvis login er forkert, vis en fejlbesked
      document.getElementById('loginMessage').textContent = 'Invalid username or password.';
      document.getElementById('loginMessage').style.color = 'red';
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const userArea = document.getElementById('userArea');
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (loggedInUser) {
      userArea.innerHTML = `<span>Welcome, ${loggedInUser}</span>`;
  }
});

function toggleSelection(element) {
  const isNoNeeded = element.textContent === "No needed";

  if (isNoNeeded) {
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
      disableOtherFilters(false); // Enable other filters again
    } else {
      element.classList.add("selected");
      disableOtherFilters(true); // Disable other filters
    }
  } else {
    element.classList.toggle("selected");
  }

  updateApplyButton();
}

function disableOtherFilters(disable) {
  const filters = document.querySelectorAll('.filterDiv');
  filters.forEach(filter => {
    if (filter.textContent !== "No needed") {
      filter.classList.toggle("disabled", disable);
     
    }
  }); 
}

function updateApplyButton() {
  const selected = document.querySelectorAll(".filterDiv.selected");
  const applyBtn = document.getElementById("applyBtn");
  applyBtn.classList.toggle(selected.length === 0);
}

function applyFilters() {
  const selectedFilters = Array.from(
    document.querySelectorAll(".filterDiv.selected")
  ).map(filter => filter.textContent);

  alert("Filters applied: " + selectedFilters.join(", "));
}

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to all filterDiv elements
  document.querySelectorAll(".filterDiv").forEach(filter => {
    filter.addEventListener("click", () => toggleSelection(filter));
  });

  // Attach event listener to the Apply button
  document.getElementById("applyBtn").addEventListener("click", applyFilters);
});