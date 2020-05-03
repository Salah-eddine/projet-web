var header = document.getElementsByTagName("header");
var langs = document.createElement("div");
var burger = document.createElement("div");
var langns = document.createElement("div");
var icon = document.createElement("img");
var fr = document.createElement("img");
var nl = document.createElement("img");
var en = document.createElement("img");
icon.setAttribute("src", "../../img/extensible-markup-language.png");
fr.setAttribute("src", "../../img/france.png");
nl.setAttribute("src", "../../img/netherlands.png");
en.setAttribute("src", "../../img/united-states-of-america.png");
burger.appendChild(icon);
langns.appendChild(fr);
langns.appendChild(nl);
langns.appendChild(en);
langs.appendChild(burger);
langs.appendChild(langns);
burger.style.background = "white";
langs.style.width = "max-content";
langns.style.display = "none";
langns.style.flexDirection = "column";
langs.style.float = "right";
langs.style.marginTop = "15px";
langs.style.marginRight = "15px";
header[0].appendChild(langs);

icon.onclick = togleLangs;
fr.onclick = french;
en.onclick = english;
nl.onclick = nederlands;

function getPage() // Retourne le nom du fichier html courant.
{
    var path = window.location.pathname;
    var page = path.split("/").pop();
    return page;
}

function getDir() // retourne le nom du dossier dans lequelle se trouve le fichier. return soit jazz ou rap.
{
    var path = window.location.pathname.split("/");
    var dir = path[path.length - 2];
    return dir;

}

function wichFunction() // Apelle les  bonne fonction de la page ou ont se trouve
{
    dir = getDir();
    page = getPage();
    if (page === "jazzGroups.html") {
        ajaxRequest("../../json/groups.json", getJazzGroups);
    } else if (page === "rapGroups.html") {
        ajaxRequest("../../json/groups.json", getRapGroups);
    } else if (dir === "rap") {
        ajaxRequest("../../json/groups.json", getIam);
    } else {
        ajaxRequest("../../json/groups.json", getJazz)
    }

}

function french() {

    cookies = document.cookie = "langue=Fr;style=white";
    wichFunction()

}

function english() {
    cookies = document.cookie = "langue=En;style=white";
    wichFunction()
}


function nederlands() {
    cookies = document.cookie = "langue=Nl;style=white";
    wichFunction()
}

function togleLangs() {
    if (langns.style.display === "flex") {
        langns.style.display = "none";
    } else {
        langns.style.display = "flex";
    }
}

function getLangvalue() // Retourne la valeur de la clé langue dans les cookies
{
    var cookiesString = document.cookie;
    var cookies = cookiesString.split("/");
    var langue = cookies[0].split("=")[1];
    return langue;


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

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}