var navbar = document.querySelector(".topnav-right");
var icon=document.querySelector('.icon');
icon.addEventListener('click',function(){
    if(navbar.classList.contains('show-mobile')){
        navbar.classList.remove('show-mobile').add('desktop-only')
    } 
    else{
        navbar.classList.add('show-mobile').remove('desktop-only')
    }
    
})
