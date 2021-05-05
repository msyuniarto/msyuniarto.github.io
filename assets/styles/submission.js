function myFunction() {
    if(document.getElementById("pesan").value == "instagram"){
        window.open("https://www.instagram.com/msyuniarto/", "_blank");
    }else{
        window.open("https://www.linkedin.com/in/muhammad-sofi-yuniarto-99634899/", "_blank");
    }
    document.getElementById("pesan").value = "";
}