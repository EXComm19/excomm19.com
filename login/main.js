window.onload = function () {
    document.cookie = "status=notLogged; expires=9999; path=/";

    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault()
        password = document.getElementById('password').value
        if (password == 'Xrmxkh1928') {
            document.cookie = "status=logged; expires=9999; path=/"
            window.location = "/dashboard"
        }

    })
}