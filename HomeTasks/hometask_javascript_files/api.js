document.addEventListener('DOMContentLoaded', function () {
    // Selecting the HTML elements
    const employeeName = document.getElementById('name');
    const employeeImage = document.getElementById('profileImage');
    const employeeEmail = document.getElementById('email');
    const employeeLocation = document.getElementById('location');
    const employeeOccupation = document.getElementById('occupation');
    const employeeAboutMe = document.getElementById('about-me');
    // Fetching data from the API
    fetch('https://opencollective.com/webpack/members.json?limit=10&offset=0')
        .then(response => response.json()) // Parsing the JSON data
        .then(data => {
            let index = 0; // Initialize index to keep track of the current member

            // Function to update the content based on the current index
            function updateContent() {
                const member = data[index];

                // Update HTML elements with the fetched data
                employeeName.textContent = member.name || 'Name: Not Provided';
                employeeImage.src = member.image || ''; // Set image source
                employeeEmail.innerHTML = member.email
                    ? `<span style="font-weight:bold;">Email:</span> ${member.email}`
                    : '<span style="font-weight:bold;">Email:</span> Not Provided';
                employeeLocation.innerHTML = member.company
                    ? `<span style="font-weight:bold;">Location:</span> ${member.company}`
                    : '<span style="font-weight:bold;">Location:</span> Not Provided';
                employeeOccupation.innerHTML = member.role
                    ? `<span style="font-weight:bold;">&nbsp;Occupation:</span> ${member.role}`
                    : `<span style="font-weight:bold;">&nbsp;Occupation:</span> Not Provided`;

                employeeAboutMe.innerHTML = member.description
                    ? `<span style="font-weight:bold;">About Me:</span> ${member.description}`
                    : '<span style="font-weight:bold;">About Me:</span> Not Provided';


                // Increment the index, and reset to 0 if it exceeds the length of the array
                index = (index + 1) % data.length;
            }

            // Update the content immediately, then continue every 3 seconds
            updateContent();
            setInterval(updateContent, 3000); // Change the content every 3 seconds
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
