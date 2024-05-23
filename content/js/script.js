document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Register function
    function register(event) {

        try {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                throw new Error('Password tidak sesuai');
            }

            // Validasi username
            let users = JSON.parse(localStorage.getItem('users') || '[]');

            if (users.find(user => user.username === username)) {
                throw new Error('Username sudah pernah digunakan');
            } else {
                users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registrasi berhasil');
                window.location.href = 'index.html';
            }

        } catch (error) {
            alert(error.message);
        }
    };
    function login(event) {

        // Login function

        try {
            event.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            if (password == "" || username == "") {
                throw new Error('Username atau password tidak boleh kosong');
            }

            // ambil data users
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
    };
    registerForm.addEventListener('submit', register);
    loginForm.addEventListener('submit', login);
});



