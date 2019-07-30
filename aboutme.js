alert("Yeeerrrrrrr")

/* Below is for an image but I did not insert one soooo
function makeImageBig(x) {
    x.style.height = "500px"
    x.style.width = "500 px"
}

function MakeImageOriginalSize(x) {
    x.style.height = "200px"
    x.style.width = "200px"
}
*/

function showHideSection(section) {
    var showHideSection = document.getElementById(section);
    if(showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("bragsButton").innerHTML = "press me :)";
    } else {
        showHideSection.style.display = "none";
        document.getElementById("bragsButton").innerHTML = "press me :)";
    }
}
