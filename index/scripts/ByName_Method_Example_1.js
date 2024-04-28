{
    let elements = document.getElementsByName("fname");
    document.getElementById("demo").innerHTML = elements[0].tagName;
}
{
    let num = document.getElementsByName("animal").length;
    document.getElementById("demo2").innerHTML = num;
}

// creating geeks functions to display
// number of elements at particular name
function geeks() {

    // takin list of elements under name ga

    let x = document.getElementsByName("ga");

    // printing number of elements inside alert tag

    alert("Total elements with name ga are: " + x.length);

}
