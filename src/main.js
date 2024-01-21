function adicionarBotaoAoMenu() {
    var menu = document.getElementsByClassName('x6s0dn4 xrvj5dj x1o61qjw')[0];
    var menu1 = document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0];


    if (menu != undefined ) {
        menu.appendChild(buttonDowload);
    } 

    if (menu1 != undefined) {
         menu1.appendChild(buttonDowload);
    }
} 

setInterval(adicionarBotaoAoMenu, 4000);

buttonDowload.addEventListener('click', ()=>{
    //var linkImage = document.getElementsByClassName('_aagu _aa20')[0].firstChild.firstChild.src
    var linkImageElement = document.querySelectorAll('.x1cy8zhl.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl')[0];
    var linkImage = linkImageElement ? linkImageElement.querySelectorAll('img')[0].src : null;

    var linkImage2Element = document.querySelectorAll('._aagv')[0];
    var linkImage2 = linkImage2Element ? linkImage2Element.querySelectorAll('img')[0].src : null;

    if (linkImage) {
        downloadImage(linkImage, 'InstagramImage.png');
    } else if (linkImage2) {
        downloadImage(linkImage2, 'InstagramImage.png');
    }
    
});
