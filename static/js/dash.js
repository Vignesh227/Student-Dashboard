function openNav() {
    
    document.getElementById("dash-nav").style.width = "20%";
    
    document.getElementById("open").style.display = "none";
    document.getElementById("open").style.opacity = "0";

    
}
  
function closeNav() {
    document.getElementById("dash-nav").style.width = "0";
    document.getElementById("open").style.display = "inline";
    document.getElementById("open").style.transition = "2s";

    document.getElementById("open").style.opacity = "1";
}