function yes(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "homepage.html";
}
function no(){
    localStorage.removeItem("username");
    window.location = "homepage.html";
}