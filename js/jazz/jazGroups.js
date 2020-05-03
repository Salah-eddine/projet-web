console.log("hi!");
var sa = 0;
var cookies = document.cookie = "langue=Fr;style=white"

function getJazzGroups(xhttp) {
    var langue = getLangvalue()
    console.log(langue)
    var imgContainer = document.getElementById("info-groups");
    var arrimg = imgContainer.getElementsByTagName("img");
    var arrDescription = imgContainer.getElementsByTagName("p");
    var arrLink = imgContainer.getElementsByTagName("a");
    var jgroups = xhttp.jazzGroups;
    for (i = 0; i < jgroups.length; i++) {
        arrimg[i].setAttribute("src", jgroups[i].image);
        arrDescription[i].innerHTML = jgroups[i]["miniDescription" + langue];
        arrimg[i].style.width = "284px";
        arrimg[i].style.height = "177px";
        arrLink[i].setAttribute("href", jgroups[i].lien);
    }

}

/* La méthode getIam() va recuperer dans le serveur les information concernant le groupe Iam et va les afficher avec du dom dans le neviguateur*/
function getJazz(response) {
    sa++;
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var i;
    var langue = getLangvalue();
    switch (page) {
        case "forever.html":
            i = 0;
            break;
        case "double.html":
            i = 1;
            break;
        case "ripping.html":
            i = 2;
            break;
        case "yellow.html":
            i = 3;
            break;
        case "crusaders.html":
            i = 4;
            break;
        default:
            i = 0;

    }
    var iamImage = document.getElementById("Img");
    var iamDescription = document.getElementById("iamDescription");
    // iamImage.style.height = "500px";
    // iamImage.style.width = "700px";
    iamDescription.innerHTML = response.jazzGroups[i]["description" + langue];
    iamImage.setAttribute("src", response.jazzGroups[i].imagePerso);
    if (sa <= 1) {
        ajaxRequest("../../json/discographie.json", getdisco, response.jazzGroups[i].name);
    }
}