
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let user = {
        email: email,
        password: password
    };
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    
    const isUpdate = document.getElementById('updateBtn').dataset.id !== undefined;

    if (!isUpdate) {
        
        users.push(user);
    } else {
        
        const userId = parseInt(document.getElementById('updateBtn').dataset.id, 10);
        users[userId] = user;
        document.getElementById('updateBtn').style.display = 'none';
        delete document.getElementById('updateBtn').dataset.id; 
    }
    
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('userForm').reset(); 
    alert('Registered successfully!');
});
