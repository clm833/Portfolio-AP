
banner__img.style.backgroundImage = "url('Maquetado/src/img/4.jpg')";
banner__avatar.style.backgroundImage = "url('Maquetado/src/img/p1.jpg')";


loginBtn = document.getElementById('login-btn');
editBtns = document.getElementsByClassName('edit-btn');
console.log(editBtns);
loginBtn.addEventListener('click', (e) => {
    if (loginBtn.classList.contains('fa-sign-in-alt')) {
        loginBtn.classList.replace('fa-sign-in-alt', 'fa-sign-out-alt');

        for (let i = 0; i < editBtns.length; i++) {
            const element = editBtns[i];
            element.classList.add('active');
        }
    }
    else if (loginBtn.classList.contains('fa-sign-out-alt')) {
        loginBtn.classList.replace('fa-sign-out-alt', 'fa-sign-in-alt');

        for (let i = 0; i < editBtns.length; i++) {
            const element = editBtns[i];
            element.classList.remove('active');
        }
    }
});