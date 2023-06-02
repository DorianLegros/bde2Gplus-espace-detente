function onBarButtonClick(contentName) {
    console.log(contentName);
    $("#main-content").innerHTML = "";
    $("#main-content").load("pages/" + contentName + "/" + contentName + ".html");
}

$(document).ready(function() {
    $("#main-content").innerHTML = "";
    $("#main-content").load("pages/principal/principal.html");
})