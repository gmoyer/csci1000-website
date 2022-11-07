$(document).ready(function () {

    $( ".trickButton" ).hover(function() {
        console.log("hi!");
        $( this ).css("position", "fixed");
        $( this ).css("left", Math.floor(Math.random() * 100)+"%");
        $( this ).css("top", Math.floor(Math.random() * 100)+"%");
    });

});