
function loadUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users); 
    let tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    
    users.forEach((user, index) => {
        let row = `<tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.address}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${index})" class="btn btn-sm">Edit</button>
                <button onclick="deleteUser(${index})" class="btn btn-sm">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}


function editUser(id) {
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users[id];

    document.getElementById('fname').value = user.fname;
    document.getElementById('lname').value = user.lname;
    document.getElementById('address').value = user.address;
    document.getElementById('email').value = user.email;

    document.getElementById('updateBtn').style.display = 'inline';
    document.getElementById('updateBtn').dataset.id = id;
}


function deleteUser(id) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(id, 1); 
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers(); 
}


window.onload = function() {
    loadUsers();
};

function editUser(id) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users[id];

    
    let newFname = prompt("Edit First Name:", user.fname);
    let newLname = prompt("Edit Last Name:", user.lname);
    let newAddress = prompt("Edit Address:", user.address);
    let newEmail = prompt("Edit Email:", user.email);

    
    user.fname = newFname !== null ? newFname : user.fname;
    user.lname = newLname !== null ? newLname : user.lname;
    user.address = newAddress !== null ? newAddress : user.address;
    user.email = newEmail !== null ? newEmail : user.email;

    
    localStorage.setItem('users', JSON.stringify(users));

   
    loadUsers();
}