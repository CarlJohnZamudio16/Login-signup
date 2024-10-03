
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExists = users.some(user => user.email === email && user.password === password);

    if (userExists) {
        alert('Login successful!');
       
        window.location.href = 'form.html'; 
    } else {
        document.getElementById('loginForm').reset();
        alert('Invalid email or password. Please try again.');
    }
});
