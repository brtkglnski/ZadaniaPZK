function Pole()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value; 
    var wynik =  document.getElementById("wynik"); 
    wynik.innerHTML = "Pole wynosi " + a*b + ".";

}
function Obwod()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value; 
    var wynik =  document.getElementById("wynik"); 
    wynik.innerHTML = "Obwód wynosi " + ((2*a)+(2*b)) + ".";

}