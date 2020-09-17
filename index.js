// animation for the side menu bar

const sidenav = document.getElementById("mysidenav");
const menuicon = document.getElementById('menuicon');
const closemenuicon = document.getElementById('closemenuicon');

document.getElementById('menuicon').addEventListener('click', function(){
    sidenav.style.width = "20vw";
    TweenMax.to('#mysidenav', 0.5, {ease: Power2.easeInOut});
    TweenMax.to('.sidenavlinks', 0.5, {delay: '0.3s', display: 'flex'});
    TweenMax.to('.sidenavlinks', 0.5, {delay: '0.3s', opacity: 1});
    closemenuicon.style.display = 'block';
    menuicon.style.display = 'none';
    // TweenMax.to('.navbar', 0.5, {opacity: 0.5});
})

document.getElementById('closemenuicon').addEventListener('click', function(){
    sidenav.style.width = "0vw";
    TweenMax.to('#mysidenav', 0.7, {ease: Power1.easeOut});
    TweenMax.to('.sidenavlinks', 0.5, {delay: '0.3s', display: 'none'});
    TweenMax.to('.sidenavlinks', 0.3, {delay: '0.3s', opacity: 0});
    // TweenMax.to('#menuIcon', 0, {delay: '0.5s', display: 'block'});
    // TweenMax.to('#closeMenuIcon', 0, {delay: '0.7s', display: 'none'})
    closemenuicon.style.display = 'none';
    menuicon.style.display = 'block';
})
