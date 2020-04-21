// function getIam() {
//     var iamDescription = document.getElementById("iam");
//     console.log("salut");
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         console.log("000")
//         if (this.readyState == 4 && this.status == 200) {
//             var response = JSON.parse(this.responseText);
//             var iam = response.rapGroups[0];
//             iamDescription.innerHTML = iam.description;
//         }

//     }
//     xhr.open("GET", "../../json/groups.json", true);
//     xhr.send();
// }