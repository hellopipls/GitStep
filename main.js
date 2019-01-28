
document.getElementById('nav').onmouseover= function(event) {
    var targ = event.target; // где был клик?
    if (targ.className == 'menu-item') {
        var s=targ.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmousemove=function(event) {
    var targ = event.target; // где был клик?    
    if (targ.className!='menu-item' && targ.className!='submenu') {
        closeMenu();
    }
}

function closeMenu(){
    var menu=document.getElementById('nav');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}
