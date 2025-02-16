document.getElementById('menu_button').addEventListener('click', function(){
    document.body.classList.toggle('menu-open');
});

let activeArticle = document.querySelector('main > article.active');

let menu = document.getElementById('menu_items');
let activeMenuItem = menu.querySelector('li.active');
let menuItems = menu.querySelectorAll('li');

Array.from(menuItems).forEach(function(menuItem){
    menuItem.querySelector('button').addEventListener('click', function(){   
        activeArticle.classList.remove('active'); 
        activeMenuItem.classList.remove('active');       

        //let article = document.getElementById(menuItem.textContent.toLowerCase());
        let article = document.getElementById(menuItem.textContent);
        
        article.classList.add('active');
        menuItem.classList.add('active');

        activeArticle = article;
        activeMenuItem = menuItem;

        document.body.classList.remove('menu-open');
    });
});