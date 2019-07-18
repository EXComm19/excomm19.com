window.onload = function () {    
    if (document.cookie !== 'status=logged') {
        window.location = '/login'
    } else {
        document.getElementById('overlay').style.display = "none";
    }

    window.addEventListener("beforeunload", (e) => {
        document.cookie = "status=notLogged; expires=9999; path=/";
    })
}