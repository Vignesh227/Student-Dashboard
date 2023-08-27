year = document.getElementById('year');

document.addEventListener("DOMContentLoaded", () => {

    /* Fetching current Year*/
    var d = new Date();
    year.innerHTML = d.getFullYear(); 
});

