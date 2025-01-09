

function IloscKrokow()
{
    var wynik =  document.getElementById("wynik1"); 
    var dlugoscKroku = document.getElementById("dlugoscKroku").value; 
    var odleglosc = document.getElementById("odleglosc").value; 
    var wynikDzialania = (odleglosc*100)/dlugoscKroku;
    wynik.innerHTML = wynikDzialania;
}
function Odleglosc()
{
    var wynik =  document.getElementById("wynik2"); 
    var dlugoscKroku = document.getElementById("dlugoscKroku2").value; 
    var iloscKrokow = document.getElementById("iloscKrokow2").value; 
    var wynikDzialania = iloscKrokow*dlugoscKroku;
    wynik.innerHTML = wynikDzialania;
}
function DlugoscKrokow()
{
    var wynik =  document.getElementById("wynik3"); 
    var iloscKrokow = document.getElementById("iloscKrokow3").value; 
    var odleglosc = document.getElementById("odleglosc3").value; 
    var wynikDzialania = (odleglosc*100)/iloscKrokow;
    wynik.innerHTML = wynikDzialania;
}