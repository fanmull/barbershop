var menubtn = document.getElementById("menubtn")
 var mobmenu = document.getElementById("mobmenu")
 var menu = document.getElementById("menu")
   menubtn.onclick= function() {
    if(mobmenu.style.right=="-250px"){
    mobmenu.style.right="0";
    menu.src="assets/closes.png";
   }   
   else{
     mobmenu.style.right="-250px";
     menu.src="assets/open.png";
   }}
