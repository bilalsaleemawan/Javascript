
if (localStorage.getItem('username') == null) {
  window.location.href = '/ClassTasks/html_class_files/login.html';
}

const headingName = document.getElementById('heading');
const cityNameLists = document.getElementById('cities');
// console.log(citieNameLists);
headingName.textContent = "Top 10 Cities";

const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Hyderabad", "Peshawar", "Gujranwala", "Quetta"];

for (var i = 0; i < cities.length; i++) {

  const itemlist = document.createElement('li');
  itemlist.textContent = cities[i];
  cityNameLists.appendChild(itemlist);
  console.log(cityNameLists)


  //overwrites means print p tag 10 times with citite names
  // cityNameLists.textContent = cities; 
  // console.log(citieNameLists);

}

























  
  
  
  
  //  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Hyderabad", "Peshawar", "Gujranwala", "Quetta"];
  
  // const tableContainer = document.getElementById('tableContainer');
  // const table = document.createElement('table');
  
  
  // // Create table header
  // const tableHeader = document.createElement('thead');
  
  // const headerRow = document.createElement('tr');
  
  // const headerCell = document.createElement('th');
  
  // headerCell.textContent = 'City';
  // headerRow.appendChild(headerCell);
  // console.log(headerRow)
  // tableHeader.appendChild(headerRow);
  // table.appendChild(tableHeader);
  
  // // Create table body
  // const tableBody = document.createElement('tbody');
  // cities.forEach(city => {
  //   const row = document.createElement('tr');
  //   const cell = document.createElement('td');
  //   cell.textContent = city;
  //   row.appendChild(cell);
  //   tableBody.appendChild(row);
  // });
  // table.appendChild(tableBody);
  
  // tableContainer.appendChild(table);
