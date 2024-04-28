function geek() {
    let doc = document.getElementsByTagName("p");
    doc[0].style.background = "green";
    doc[0].style.color = "white";
}
function geek2() {
    let doc = document.getElementsByTagName("P");
    let i;
    for (i = 0; i < doc.length; i++) {
        doc[i].style.backgroundColor = "black";
        doc[i].style.color = "red";

    }
}