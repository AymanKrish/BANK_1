function register() {
    acc_no = acc_no.value
    user = user.value
    pass = pass.value

    if (acc_no in localStorage){
        alert("Already registered")
        window.location = index.html
    }
    else {
        user_1 = {acc_no, user, pass}
        localStorage.setItem(acc_no,JSON.stringify(user_1))
                                        // converts js object into JSON.
        alert ("Added succesfully")
    }
    window.location = 'index.html'
}

function login() {
    acc_no = acc_no.value
    pass = pass.value
    if (acc_no in localStorage) {
        user_2 = JSON.parse(localStorage.getItem(acc_no))
        if (pass == user_2.pass){
            window.location = 'home.html'
        }
        else {
            alert("Incorrect Password")
        }
    }
    else {
        alert("Incorrect Account Number")
    }
}