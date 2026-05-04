function myFunction() {
    if(document.getElementById("pesan").value == "instagram"){
        window.open("https://www.instagram.com/msyuniarto/", "_blank");
    }else{
        window.open("https://www.linkedin.com/in/muhammad-sofi-yuniarto-99634899/", "_blank");
    }
    document.getElementById("pesan").value = "";
}

// Scroll to Top Button Functionality
window.onscroll = function() {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
};

document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};