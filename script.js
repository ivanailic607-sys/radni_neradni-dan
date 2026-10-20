let datum = new Date();
let dan = datum.getDay();

if (dan == 1) {
    console.log("Danas je ponedjeljak.");
    console.log("Danas je radni dan.");
    console.log("Ja najviše volim JS od svih programskih jezika");
}
else if (dan == 2) {
    console.log("Danas je utorak.");
    console.log("Danas je radni dan.");
}
else if (dan == 3) {
    console.log("Danas je srijeda.");
    console.log("Danas je radni dan.");
}
else if (dan == 4) {
    console.log("Danas je četvrtak.");
    console.log("Danas je radni dan.");
    console.log("Mali petak!");
}
else if (dan == 5) {
    console.log("Danas je petak.");
    console.log("Danas je radni dan.");
    console.log("Vikend na Vidiku!");
}
else if (dan == 6) {
    console.log("Danas je subota.");
    console.log("Danas je neradni dan.");
}
else {
    console.log("Danas je nedjelja.");
    console.log("Danas je neradni dan.");
}