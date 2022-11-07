function all1() {
    var takepoinbio = +document.getElementById("biological").value;
    var takepoinphy = +document.getElementById("physics").value;
    var takepoinchem = +document.getElementById("chemistry").value;
    document.getElementById("all4").value = (takepoinbio + takepoinphy + takepoinchem);
    document.getElementById("all3").value = (takepoinbio + takepoinphy + takepoinchem) / 3;


}

function tempc() {
    var cin = document.getElementById("temperaturec");
    var fin = document.getElementById("temperaturef")
    fin.value = parseInt(cin.value) / 5 * 9 + 32;
}

function  geometry() {
    var geome = +document.getElementById("halfr").value;
    document.getElementById("res").value = (geome * geome * 3.14);
    document.getElementById("ref").value = ((geome * 2) * 3.14);
}
