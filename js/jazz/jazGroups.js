console.log("hi!");

function getJazzGroups(xhttp) {
    var imgContainer = document.getElementById("info-groups");
    var arrimg = imgContainer.getElementsByTagName("img");
    var arrDescription = imgContainer.getElementsByTagName("p");
    var arrLink = imgContainer.getElementsByTagName("a");
    var jgroups = xhttp.jazzGroups;
    for (i = 0; i < jgroups.length; i++) {
        arrimg[i].setAttribute("src", jgroups[i].image);
        arrDescription[i].innerHTML = jgroups[i].miniDescription;
        arrimg[i].style.width = "284px";
        arrimg[i].style.height = "177px";
        arrLink[i].setAttribute("href", jgroups[i].lien);
    }

}

/* La méthode getIam() va recuperer dans le serveur les information concernant le groupe Iam et va les afficher avec du dom dans le neviguateur*/
function getJazz(response) {

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var i;
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
    iamDescription.innerHTML = response.jazzGroups[i].description;
    iamImage.setAttribute("src", response.jazzGroups[i].imagePerso);
    ajaxRequest("../../json/discographie.json", getdisco, response.jazzGroups[i].name);
}

function getdisco(response, nom) {


    var discographie = document.getElementById("disco");

    for (i = 0; i < response[nom].length; i++) {

        discographie.innerHTML += "<span class='span1'>" + response[nom][i].date + "</span>" + ": " + "<span class='span2'>" + response[nom][i].titre + "</span>" + "<br>"
    }



}

function ajaxRequest(url, fonction, args = "0") {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            fonction(JSON.parse(this.responseText), args);
        }
    }
    xhr.open("GET", url, true);
    xhr.send()
}