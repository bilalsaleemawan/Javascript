// Selecting elements
const subContainer = document.querySelector(".sub-container");
const searchButton = document.querySelector(".search-btn");

// Sample job data
const jobsData = [
  {
    logo: "/assets/images/google.svg",
    title: "Backend Developer",
    company: "Google",
    tags: ["Fullstack", "Angular", "Azure", "C#"],
    salary: "$13k/month",
    postedTime: "0 minutes ago",
    location: "San Francisco"
  },
  {
    logo: "/assets/images/amazon-icon.svg",
    title: "Frontend Developer",
    company: "Amazon",
    tags: ["React", "JavaScript", "AWS", "CSS"],
    salary: "$12k/month",
    postedTime: "10 minutes ago",
    location: "Seattle"
  },
  {
    logo: "/assets/images/microsoft-logo-svgrepo-com.svg",
    title: "DevOps Engineer",
    company: "Microsoft",
    tags: ["Docker", "Kubernetes", "Azure", "CI/CD"],
    salary: "$15k/month",
    postedTime: "30 minutes ago",
    location: "Redmond"
  },
  {
    logo: "/assets/images/apple-logo-svgrepo-com.svg",
    title: "iOS Developer",
    company: "Apple",
    tags: ["Swift", "iOS", "Xcode", "Objective-C"],
    salary: "$14k/month",
    postedTime: "1 hour ago",
    location: "Cupertino"
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
    const jobTitleInput = document.getElementById("search-icon"); // Cache element
    const cityInput = document.getElementById("search-city"); // Cache element
    const resultHeading = document.querySelector(".result-heading p"); // Cache element
  
    // Clear previous results
    subContainer.innerHTML = '';
  
    // Filter jobs based on user input
    const filteredJobs = jobsData.filter(job => {
      const titleMatch = job.title.toLowerCase().includes(jobTitleInput.value.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(cityInput.value.toLowerCase());
      const tagMatch = job.tags.some(tag => tag.toLowerCase().includes(jobTitleInput.value.toLowerCase()));
    
      // Return true if the title or tags match and the location matches
      return (titleMatch || tagMatch) && locationMatch;
    });
  
    // Display filtered jobs
    filteredJobs.forEach(createJobCard);
  
    // Update the result heading
    resultHeading.textContent = `${filteredJobs.length} Result(s) Found`;
  }

// Add event listener to the search button
searchButton.addEventListener("click", displayFilteredJobs);
