function DataCzas()
{
const czas = new Date();
poleCzas = document.getElementById("czas"); 
poleCzas.innerHTML = czas;
}
DataCzas();
setInterval(DataCzas, 500);
let czasNaStronie = 0;
const licznik = setInterval(function() {
    czasNaStronie += 0.5;
    document.getElementById("czasNaStronie").innerHTML = Math.floor(czasNaStronie) + "s";
}, 500);