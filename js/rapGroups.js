var imgContainer = document.getElementById("info-groups");
var arrimg = imgContainer.getElementsByTagName("img");
var arrDescription = imgContainer.getElementsByTagName("p");
setImgSize()
var xhr = new XMLHttpRequest();
function getJson(){
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var rapGroups = JSON.parse(this.responseText);
            var rgroups = rapGroups.rapGroups;
            for(i =0;i<rgroups.length;i++)
            {
                arrimg[i].setAttribute("src",rgroups[i].image);
            }
        }
    }
    xhr.open("GET","../json/groups.json",true);
    xhr.send();
}

function setImgSize(){
    for(i=0;i<arrimg.length;i++)
    {
        arrimg[i].style.width = "284px"
        arrimg[i].style.height= "177px"
    }
}