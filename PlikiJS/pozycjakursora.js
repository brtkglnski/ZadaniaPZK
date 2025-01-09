var xPos = document.getElementById("x");
var yPos = document.getElementById("y"); 

document.addEventListener('mousemove', function(Event){
    var x = Event.clientX;
    var y = Event.clientY;
    xPos.innerHTML = "Pozycja X: "+x;
    yPos.innerHTML = "Pozycja Y: "+y;
    const szerokosc = window.innerWidth;
    const wysokosc = window.innerHeight;
    const poleLewyGorny = x * y;
    const polePrawyGorny = (szerokosc - x) * y;
    const poleLewyDolny = x * (wysokosc - y);
    const polePrawyDolny = (szerokosc - x) * (wysokosc - y);
    const wynik = document.getElementById("wynik");
    wynik.innerHTML = 
    `<p>Pole lewego górnego prostokąta: ${poleLewyGorny}px2<br>
    Pole prawego górnego prostokąta: ${polePrawyGorny}px2<br>
    Pole lewego dolnego prostokąta: ${poleLewyDolny}px2<br>
    Pole prawego dolnego prostokąta: ${polePrawyDolny}px2</p><br>`;
})





document.addEventListener("mousemove", aktualizujPozycjeKursora);

function aktualizujPozycjeKursora(event) {

    // Wyświetl pozycję i pola prostokątów
    const pozycjaDiv = document.getElementById("position");
    pozycjaDiv.innerHTML = `<p>${odPoczatku}</p><p>${odKonca}</p>`;


}