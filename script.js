document.getElementById("allapot1").style.visibility = "hidden"
document.getElementById("allapot2").style.visibility = "hidden"


function ellenorzes()
{
    var jelszo1 = document.getElementById("jelszo").value
    var jelszo2 = document.getElementById("jelszomegegyszer").value

    if (jelszo1 == jelszo2)
        {
            document.getElementById("allapot1").style.visibility = "hidden"
            document.getElementById("allapot2").style.visibility = "visible"
        }
    else
        {
            document.getElementById("allapot1").style.visibility = "visible"
            document.getElementById("allapot2").style.visibility = "hidden"
        }
}