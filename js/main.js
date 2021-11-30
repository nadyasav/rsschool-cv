/*--Menu START--*/
    //Mobile menu

    let menuBtn = document.querySelector('.menu-btn');
    let closeBtn = document.querySelector('.close-btn');
    let menu = document.querySelector('.header__box');

    if(menuBtn != null){
        menuBtn.addEventListener('click', menuOpen);
    }
    if(closeBtn != null){
        closeBtn.addEventListener('click', closeMenu);
    }

    function menuOpen(){
        //ShowMenu
        menu.classList.add('active');
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    function closeMenu(){
        //HideMenu
        menu.classList.remove('active');
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }