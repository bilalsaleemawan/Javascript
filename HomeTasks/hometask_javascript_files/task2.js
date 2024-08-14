if (localStorage.getItem('username') == null) {
  window.location.href = '/ClassTasks/html_class_files/login.html';
}

const headingName = document.getElementById('heading');
const cityNameLists = document.getElementById('cities');
const signout = document.getElementById('sign-out');

// console.log(citieNameLists);
headingName.textContent = "Top 10 Cities";

const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Hyderabad", "Peshawar", "Gujranwala", "Quetta"];

for (var i = 0; i < cities.length; i++) {

  const itemlist = document.createElement('li');
  itemlist.textContent = cities[i];
  cityNameLists.appendChild(itemlist);
  // console.log(cityNameLists)
}

// array.forEach(city => {
//     const itemlist = document.createElement('li');

//     cityNameLists.appendChild(itemlist);
// });

//overwrites means print p tag 10 times with citite names
// cityNameLists.textContent = cities; 
// console.log(citieNameLists);

// Sign out functionality
signout.addEventListener('click', () => {
  // console.log('Sign out button clicked.');
  localStorage.removeItem('username'); // Remove the username from localStorage
  // console.log(`Username removed from localStorage: ${localStorage.getItem('username')}`); // Should log null
  window.location.href = '/ClassTasks/html_class_files/login.html'; // Redirect to login page
});































// Get the dropdown button and the dropdown content
const dropdownBtn = document.querySelector('.btn-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

// Add event listener to the dropdown button
dropdownBtn.addEventListener('click', () => {
    // Toggle the visibility of the dropdown content
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Optionally, close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});





