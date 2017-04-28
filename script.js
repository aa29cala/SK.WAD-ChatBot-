window.onload = function () {
    recalcMap();
}

window.onresize = function () {
    recalcMap();
}

function hideTeam() {
    document.querySelector("#team").setAttribute("style", "display:none;");
    document.querySelector("#" + this.id + "ID").setAttribute("style", "display:block;");
}
function showTeam() {
    var faceBoxes = document.querySelectorAll(".hideme");
    for (var i = 0; i < faceBoxes.length; i++) {
        faceBoxes[i].setAttribute("style", "display:none;");
    }
    document.querySelector("#team").setAttribute("style", "display:block;");
}

function recalcMap() {

    var width = $("#frame").width();

    var height = $("#frame").height();


    $("#mccoy").attr("coords", "" + (width * 0.13) + "," + (height * 0.05) + "," + (width * 0.256) + "," + (height * 0.27));

    $("#milano").attr("coords", "" + (width * 0.43) + "," + (height * 0.15) + "," + (width * 0.55) + "," + (height * 0.35));

    $("#calabrese").attr("coords", "" + (width * 0.73) + "," + (height * 0.10) + "," + (width * 0.87) + "," + (height * 0.32));

    $("#kish").attr("coords", "" + (width * 0.18) + "," + (height * 0.39) + "," + (width * 0.34) + "," + (height * 0.60));

    $("#weyna").attr("coords", "" + (width * 0.64) + "," + (height * 0.34) + "," + (width * 0.8) + "," + (height * 0.60));

}

