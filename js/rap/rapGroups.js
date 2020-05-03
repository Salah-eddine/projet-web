var cookies = document.cookie = "langue=Fr;style=white"




var sa = 0






/* La méthode getRapGroups() va recuper les info des groupes de rap et va les manipuler avec du dom afin de les afficher.*/
function getRapGroups(xhttp) {
    var langue = getLangvalue()

    var imgContainer = document.getElementById("info-groups");
    var arrimg = imgContainer.getElementsByTagName("img");
    var arrDescription = imgContainer.getElementsByTagName("p");
    var arrLink = imgContainer.getElementsByTagName("a");
    var rgroups = xhttp;
    for (i = 0; i < rgroups.rapGroups.length; i++) {
        arrimg[i].setAttribute("src", rgroups.rapGroups[i].image);
        arrDescription[i].innerHTML = rgroups.rapGroups[i]["miniDescription" + langue];
        arrimg[i].style.width = "284px";
        arrimg[i].style.height = "177px";
        arrLink[i].setAttribute("href", rgroups.rapGroups[i].lien);
    }

}




/* La méthode getIam() va recuperer dans le serveur les information concernant le groupe Iam et va les afficher avec du dom dans le neviguateur*/
function getIam(response) {
    sa++;
    var langue = getLangvalue();
    var page = getPage();
    var i;
    switch (page) {
        case "iam.html":
            i = 0;
            break;
        case "psy.html":
            i = 1;
            break;
        case "arsenik.html":
            i = 2;
            break;
        case "fonky.html":
            i = 3;
            break;
        case "assaut.html":
            i = 4;
            break;
        default:
            i = 0;

    }
    var iamImage = document.getElementById("Img");
    var iamDescription = document.getElementById("iamDescription");
    iamDescription.innerHTML = response.rapGroups[i]["description" + langue];
    iamImage.setAttribute("src", response.rapGroups[i].imagePerso);
    if (sa <= 1) {
        ajaxRequest("../../json/discographie.json", getdisco, response.rapGroups[i].name);
    }


}




function postCookie() {

}