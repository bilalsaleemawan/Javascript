import {users} from '/database/users.js'

const usersDetails = document.getElementById('userdatabase');
users.forEach(user=> {
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.phoneNumber}</td>
    `
   usersDetails.appendChild(row);
});
