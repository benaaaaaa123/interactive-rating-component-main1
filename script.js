let butt = document.getElementById("przycisk");
let oceny = document.querySelectorAll(".ocena1");
let zaznaczonyDiv = null;
let tox1 = document.getElementById("to1");
let tox2 = document.getElementById("to2");
let gwia = document.getElementById("sel");


oceny.forEach(ocena => {
    ocena.addEventListener("click", function () {

        if (zaznaczonyDiv) {
            zaznaczonyDiv.classList.remove("selected");
        }


        ocena.classList.add("selected");
        zaznaczonyDiv = ocena;
        let wart = zaznaczonyDiv.getAttribute("data-value");

        butt.addEventListener("click", function () {
            tox1.style.display = "none";
            tox2.style.display = "flex";
            tox2.style.alignContent = "center";
            tox2.style.justifyContent = "center";
            tox2.style.flexDirection = "column";

            gwia.innerHTML = "You selected " + wart + " out of 5";
            gwia.style.color = "hsl(25, 97%, 53%)";
        })

    });


});

















// // WARTOSC 1 po klinieicu w 1
// oceny.addEventListener("click", function () {
//     let wartoscTest = oceny.getAttribute("data-value");
//     alert("Wartość: " + wartoscTest);
// })