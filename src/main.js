setTimeout(function() {
    var menu = document.getElementsByClassName('x6s0dn4 xrvj5dj x1o61qjw')[0];
    var menu1 = document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0];

    if (menu) {
        menu.appendChild(buttonDowload);
    } else {
        console.error("Elemento menu não encontrado!");
    }

    if (menu1) {
        menu1.appendChild(buttonDowload);
    } else {
        console.error("Elemento menu1 não encontrado!");
    }

}, 1000); 


