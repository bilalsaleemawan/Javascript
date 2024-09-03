// Selecting elements
const subContainer = document.querySelector(".sub-container");
const searchButton = document.querySelector(".search-btn");
const jobTitleInput = document.getElementById("search-icon"); // Cache element
const cityInput = document.getElementById("search-city"); // Cache element

// Sample job data
const jobsData = [
  {
    logo: "/assets/images/google.svg",
    title: "Backend Developer",
    company: "Google",
    tags: ["Fullstack", "Angular", "Azure", "C#"],
    salary: "$13k/month",
    postedTime: "0 minutes ago",
    location: "Karachi" // Single city location
  },
  {
    logo: "/assets/images/amazon-icon.svg",
    title: "Frontend Developer",
    company: "Amazon",
    tags: ["React", "JavaScript", "AWS", "CSS"],
    salary: "$12k/month",
    postedTime: "10 minutes ago",
    location: "Lahore" // Single city location
  },
  {
    logo: "/assets/images/microsoft-logo-svgrepo-com.svg",
    title: "DevOps Engineer",
    company: "Microsoft",
    tags: ["Docker", "Kubernetes", "Azure", "CI/CD"],
    salary: "$15k/month",
    postedTime: "30 minutes ago",
    location: "Islamabad" // Single city location
  },
  {
    logo: "/assets/images/apple-logo-svgrepo-com.svg",
    title: "iOS Developer",
    company: "Apple",
    tags: ["Swift", "iOS", "Xcode", "Objective-C"],
    salary: "$14k/month",
    postedTime: "1 hour ago",
    location: "Rawalpindi" // Single city location
  }
  // Add more job objects as needed
];

// Function to create job cards
function createJobCard(job) {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-cards");
  
    jobCard.innerHTML = `
      <div class="wrapper">
        <div class="logo">
          <img src="${job.logo}" alt="${job.company}-logo">
        </div>
        <div class="job-title">
          <h6>${job.title}</h6>
          <p>${job.company}</p>
        </div>
      </div>
      <div class="job-tags">
        ${job.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
      <div class="salary">
        <div class="items">
          <i class="fa-solid fa-wallet"></i>
          <h6>${job.salary}</h6>
        </div>
        <p>${job.postedTime}</p>
      </div>
    `;
  
    subContainer.appendChild(jobCard);
  }

  function displayFilteredJobs() {
    // Clear previous results
    subContainer.innerHTML = '';
  
    // Filter jobs based on user input
    const filteredJobs = jobsData.filter(job => {
      // Convert job title, location, and tags to lowercase
      const jobTitleLower = job.title.toLowerCase();
      const jobLocationLower = job.location.toLowerCase();
      const jobTagsLower = job.tags.map(tag => tag.toLowerCase());
    
      // Convert user inputs to lowercase
      const userTitleInput = jobTitleInput.value.toLowerCase();
      const userLocationInput = cityInput.value.toLowerCase();
    
      // Check for matches
      const titleMatch = jobTitleLower.includes(userTitleInput);
      const locationMatch = jobLocationLower.includes(userLocationInput);
      const tagMatch = jobTagsLower.some(tag => tag.includes(userTitleInput));
    
      // Return true if the title or tags match and the location matches
      return (titleMatch || tagMatch) && locationMatch;
    });
    
    // Display filtered jobs
    filteredJobs.forEach(createJobCard);
    
    const resultHeading = document.querySelector(".result-heading p"); // Select the <p> element within .result-heading
    // Update the result text
    function updateResultHeading(filteredJobsLength) {
        resultHeading.textContent = `${filteredJobsLength} Result(s) Found`;
    }
    
    // Example usage
    const filteredJobsLength = 5; // This would be dynamically determined based on your logic
    updateResultHeading(filteredJobsLength);
    
  }

// Add event listener to the search button
searchButton.addEventListener("click", displayFilteredJobs);

// Clear input fields on page load
window.onload = () => {
  jobTitleInput.value = '';
  cityInput.value = '';
};
