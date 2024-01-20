// setTimeout(function() {
//     var menu = document.getElementsByClassName('x6s0dn4 xrvj5dj x1o61qjw')[0];
//     var menu1 = document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0];


//     if (menu) {
//         menu.appendChild(buttonDowload);
//     } else {
//         console.error("Elemento menu não encontrado!");
//     }

//     if (menu1) {
//         menu1.appendChild(buttonDowload);
//     } else {
//         console.error("Elemento menu1 não encontrado!");
//     }

// }, 2000); 

function adicionarBotaoAoMenu() {
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
}

setInterval(adicionarBotaoAoMenu, 4000);





buttonDowload.addEventListener('click', ()=>{
    downloadImage('https://scontent.cdninstagram.com/v/t51.2885-15/419491091_1029576231438357_587397148654668927_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3MjUuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=6HwgrA8moegAX8afnAy&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4MzQ4NDUyNDI4ODA4Njk0OQ%3D%3D.2-ccb7-5&oh=00_AfD_she74P1UvZxZr1R2kF5XADK_aMOBxYJjfP9POp-4YQ&oe=65AFBA4E&_nc_sid=10d13b','teste.png');
});
