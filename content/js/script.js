document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Register function
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            try {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                if (password !== confirmPassword) {
                    throw new Error('Password tidak sesuai');
                }

                let users = JSON.parse(localStorage.getItem('users') || '[]');
                if (users.find(user => user.username === username)) {
                    throw new Error('Username sudah pernah digunakan');
                } else {
                    users.push({ username, password });
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Registrasi berhasil');
                    window.location.href = 'login.html';
                }
            } catch (error) {
                alert(error.message);
            }
        });
    }

    // Login function
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            try {
                const username = document.getElementById('login-username').value;
                const password = document.getElementById('login-password').value;
                if (password == "" || username == "") {
                    throw new Error('Username atau password tidak boleh kosong');
                }

                let users = JSON.parse(localStorage.getItem('users') || '[]');
                if (users.find(user => user.username === username && user.password === password)) {
                    localStorage.setItem('loggedIn', 'true');
                    alert('Login berhasil');
                    window.location.href = 'index.html';
                } else {
                    throw new Error('Username atau password salah');
                }
            } catch (error) {
                alert(error.message);
            }
        });
    }
});


