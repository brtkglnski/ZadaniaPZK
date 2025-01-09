function Konwersja(){
    var wartosc = document.getElementById("wartosc").value;
    var zamianaWartosc = 0;
    var jednostka = document.getElementById("jednostka").value;
    var wynik =  document.getElementById("wynik"); 
    var slowo = "m";
    switch (jednostka)
    {
        case "kilometr":
            zamianaWartosc = wartosc * 1000;
            slowo = "km";
            wynik.innerHTML= wartosc + slowo + " to: <br>" +
        zamianaWartosc + "m,<br>" + 
        zamianaWartosc *100 + "cm,<br>" + 
        zamianaWartosc * 1000 + "mm";
         break;

        case "metr":
            zamianaWartosc = wartosc;
            slowo = "m";
            wynik.innerHTML= wartosc + slowo + " to: <br>" +
        zamianaWartosc / 1000 + "km,<br>" + 
        zamianaWartosc *100 + "cm,<br>" + 
        zamianaWartosc * 1000 + "mm";
         break;

        case "centymetr":
            zamianaWartosc = wartosc / 100;
            slowo = "cm";
            wynik.innerHTML= wartosc + slowo + " to: <br>" +
        zamianaWartosc / 1000 + "km,<br>" + 
        zamianaWartosc + "m,<br>" + 
        zamianaWartosc * 1000 + "mm";
         break;

         case "milimetr":
            zamianaWartosc = wartosc / 1000;
            slowo = "mm";
            wynik.innerHTML= wartosc + slowo + " to: <br>" +
        zamianaWartosc / 1000 + "km,<br>" + 
        zamianaWartosc + "m,<br>" + 
        zamianaWartosc *100 + "cm,<br>";
         break;
    }
        


}