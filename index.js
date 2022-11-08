var alphabetCode = [
    ["111",
     "101",
     "111",
     "101",
     "101",
    12],

    ["110",
     "101",
     "110",
     "101",
     "110",
    10],

    ["011",
     "100",
     "100",
     "100",
     "011",
    7],

    ["110",
     "101",
     "101",
     "101",
     "110",
    10],

    ["111",
     "100",
     "110",
     "100",
     "111",
    10],

    ["111",
     "100",
     "110",
     "100",
     "100",
    8],

    ["011",
     "100",
     "101",
     "101",
     "011",
    9],

    ["101",
     "101",
     "111",
     "101",
     "101",
    11],

    ["111",
     "010",
     "010",
     "010",
     "111",
    9],

    ["001",
     "001",
     "001",
     "101",
     "111",
    8],

    ["101",
     "101",
     "110",
     "101",
     "101",
    10],

    ["100",
     "100",
     "100",
     "100",
     "111",
    7],

    ["101",
     "111",
     "101",
     "101",
     "101",
    11],

    ["111",
     "101",
     "101",
     "101",
     "101",
    11],

    ["111",
     "101",
     "101",
     "101",
     "111",
    12],

    ["111",
     "101",
     "111",
     "100",
     "100",
    10],

    ["111",
     "101",
     "101",
     "111",
     "001",
    11],

    ["110",
     "101",
     "110",
     "101",
     "101",
    10],

    ["111",
     "100",
     "111",
     "001",
     "111",
    11],

    ["111",
     "010",
     "010",
     "010",
     "010",
    7],

    ["101",
     "101",
     "101",
     "101",
     "111",
    11],

    ["101",
     "101",
     "101",
     "101",
     "010",
    9],

    ["101",
     "101",
     "101",
     "111",
     "101",
    11],

    ["101",
     "101",
     "010",
     "101",
     "101",
    9],

    ["101",
     "101",
     "111",
     "010",
     "010",
    9],

    ["111",
     "001",
     "010",
     "100",
     "111",
    9],
];

var alphabetIndex = "abcdefghijklmnopqrstuvwxyz";




$(document).ready(function () {

    $( ".trickButton" ).hover(function() {
        if (Math.random() > 0.1) {
            $( this ).css("position", "fixed");
            $( this ).css("left", Math.floor(Math.random() * 100)+"%");
            $( this ).css("top", Math.floor(Math.random() * 100)+"%");
        }
    });


    $( "body" ).mousemove(function( event ) {
        var colors = ["red", "blue", "lime", "yellow"];
        var item = colors[Math.floor(Math.random()*colors.length)];
        //var msg = "Handler for .mousemove() called at ";
        //msg += event.pageX + ", " + event.pageY;
        //$( "#log" ).append( "<div>" + msg + "</div>" );
        $(this).css("background-color", item);
      });

});


var hoverCount = 0;
var secretMessage = "hell";

function addMore() {
    x = document.getElementById("buttons");
    for (var i = 0; i < 300; i++) {
        const y = document.createElement("button");
        y.classList.add("trickButton");
        y.innerHTML = "button";
        x.appendChild(y);
    }

    $( ".trickButton" ).hover(function() {
        if ($(this).hasClass("trickButton")) {
            hoverCount++;
            if (hoverCount < 100) {
                $( this ).css("position", "fixed");
                $( this ).css("left", Math.floor(Math.random() * 100)+"%");
                $( this ).css("top", Math.floor(Math.random() * 100)+"%");
            } else {
                if (Math.random() < 0.7) {
                    var pos = Math.floor(Math.random() * secretMessage.length);
                    var letter = alphabetCode[alphabetIndex.indexOf(secretMessage.charAt(pos))];

                    var centerX = ((pos-((secretMessage.length-1)/2))*15)+50;
                    var centerY = 50;

                    var letterIndex = Math.floor(Math.random() * letter[5]);
                    var i = 0;

                    //count to position
                    for (var y = 0; y < 5; y++) {
                        for (var x = 0; x < 3; x++) {
                            if (letter[y].charAt(x) == "1") {
                                if (i == letterIndex) { //if it is the correct position
                                    centerX += (x-1)*3;
                                    centerY += (y-2)*6;
                                }
                                i++;
                            }
                        }
                    }
                    centerX += (Math.floor(Math.random()*3)-1)*0.2;
                    centerY += (Math.floor(Math.random()*5)-2)*0.9;
                    $( this ).css("position", "fixed");
                    $( this ).css("left", centerX+"%");
                    $( this ).css("top", centerY+"%");
                    $( this ).removeClass("trickButton");
                } else {
                    $( this ).css("position", "fixed");
                    $( this ).css("left", Math.floor(Math.random() * 100)+"%");
                    $( this ).css("top", Math.floor(Math.random() * 100)+"%");
                }
            }
        }
    });
}