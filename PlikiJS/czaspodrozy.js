function CzasPodrozy()
{
    var wynik =  document.getElementById("wynik1"); 
    var v = document.getElementById("v").value; // przyjmujemy ze podane w m/s
    var s = document.getElementById("s").value;

   

    var wynikObliczen = v/s + " h";
    wynik.innerHTML = wynikObliczen;

}
function Predkosc()
{
    var jednostkaCzas = document.getElementById("jednostkaCzas").value;
    var jednostkaDystans = document.getElementById("jednostkaDystans").value;
    var wynik =  document.getElementById("wynik2"); 
    var t = document.getElementById("t").value;

    switch (jednostkaCzas)
    {
        case "h":
            t = t*60;
            break;
        case "min":
            t = t;
            break;
    }
    var v = document.getElementById("v2").value;

    switch (jednostkaDystans)
    {
        case "km":
            v = v*1000;
            break;
        case "m":
            v = v;
            break;
    }
    wynikObliczen = (v/1000)/(t/60); 
    wynik.innerHTML = wynikObliczen + "km/h";
}