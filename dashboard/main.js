window.onload = function () {
    console.log(document.cookie);
    
    if (document.cookie !== 'status=logged') {
        window.location = '/login'
    }

    window.addEventListener("beforeunload", (e) => {
        document.cookie = "status=notLogged; expires=9999; path=/";
    })

}