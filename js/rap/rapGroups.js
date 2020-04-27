/* La méthode getRapGroups() va recuper les info des groupes de rap et va les manipuler avec du dom afin de les afficher.*/
var cook = document.cookie = "key=value;"
console.log(cook);

function getRapGroups(xhttp) {
    var imgContainer = document.getElementById("info-groups");
    var arrimg = imgContainer.getElementsByTagName("img");
    var arrDescription = imgContainer.getElementsByTagName("p");
    var arrLink = imgContainer.getElementsByTagName("a");
    var rgroups = xhttp;
    for (i = 0; i < rgroups.rapGroups.length; i++) {
        arrimg[i].setAttribute("src", rgroups.rapGroups[i].image);
        arrDescription[i].innerHTML = rgroups.rapGroups[i].miniDescription;
        arrimg[i].style.width = "284px";
        arrimg[i].style.height = "177px";
        arrLink[i].setAttribute("href", rgroups.rapGroups[i].lien);
    }
}




/* La méthode getIam() va recuperer dans le serveur les information concernant le groupe Iam et va les afficher avec du dom dans le neviguateur*/
function getIam(response) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
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
    iamDescription.innerHTML = response.rapGroups[i].description;
    iamImage.setAttribute("src", response.rapGroups[i].imagePerso);
    ajaxRequest("../../json/discographie.json", getdisco, response.rapGroups[i].name);
}

function getdisco(response, nom) {


    var discographie = document.getElementById("disco");

    for (i = 0; i < response[nom].length; i++) {

        discographie.innerHTML += "<span class='span1'>" + response[nom][i].date + "</span>" + ": " + "<span class='span2'>" + response[nom][i].titre + "</span>" + "<br>"
    }



}

/*La méthode ajaxRequest()  fait une requête ajax  pour recuperer un fichier json passer en paramètre. Elle retourne la réponse de la requête*/
function ajaxRequest(url, fonction, args = "0") {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            fonction(JSON.parse(this.responseText), args);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}