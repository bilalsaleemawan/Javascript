document.addEventListener("DOMContentLoaded", function () {
  // Selecting the container where all cards will be appended
  const employeeContainer = document.querySelector(".main-container");

  // Fetching data from the API
  fetch("https://opencollective.com/webpack/members.json?limit=10&offset=0")
    .then((response) => response.json()) // Parsing the JSON data
    .then((data) => {
      // Iterate over each member in the data
      data.forEach((member) => {
        // Create the employee-info div
        const employeeInfoDiv = document.createElement("div");
        employeeInfoDiv.classList.add("sub-container"); // Applying the class name for styling

        // Set the innerHTML with the provided HTML structure and replace placeholders
        employeeInfoDiv.innerHTML = `
                     <div class="back-image">
                       <img src="/assets/images/api_image.png" alt="back-image">
                    </div>
                    <div class="profile-image">
                         <img id="profileImage" src="${
                           member.image || "/path/to/default/profile.png"
                         }" alt="Profile Image">
                    </div>
                    <div id="employee-info">
                     <h3 id="name">${member.name || "Name: Not Provided"}</h3>
                        <p id="email">${
                          member.email
                            ? `<span style="font-weight:bold;">Email:</span> ${member.email}`
                            : '<span style="font-weight:bold;">Email:</span> Not Provided'
                        }</p>
                        <p id="location">${
                          member.company
                            ? `<span style="font-weight:bold;">Location:</span> ${member.company}`
                            : '<span style="font-weight:bold;">Location:</span> Not Provided'
                        }</p>
                        <p id="occupation">${
                          member.role
                            ? `<span style="font-weight:bold;">&nbsp;Occupation:</span> ${member.role}`
                            : `<span style="font-weight:bold;">&nbsp;Occupation:</span> Not Provided`
                        }</p>
                        <p id="about-me">${
                          member.description
                            ? `<span style="font-weight:bold;">About Me:</span> ${member.description}`
                            : '<span style="font-weight:bold;">About Me:</span> Not Provided'
                        }</p>
                    </div>
                `;

        // Append the newly created employeeInfoDiv to the main container
        employeeContainer.appendChild(employeeInfoDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
