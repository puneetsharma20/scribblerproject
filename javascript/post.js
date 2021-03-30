var editable = false;
var a = 1;
var str = new Array();


function Edit() {
    a = a + 1;
    var eh = document.getElementById("editableheading");
    var ec = document.getElementById("editablecontent");
    if (!editable) {
        eh.style.border = '2px';
        eh.style.borderStyle = 'solid';

        ec.style.border = '2px';
        ec.style.borderStyle = 'solid';

        document.getElementById("editbtn").innerHTML = "Save <i class=\"glyphicon glyphicon-floppy-save\"></i>";

        editable = true;
    } else {

        if (a == 2) {
            var t = document.getElementById("editableheading");
            eh.innerHTML = t.innerHTML;

            var temp = document.getElementById("editablecontent");
            ec.innerHTML = temp.innerHTML;

        }

        eh.style.border = 'none';
        ec.style.border = 'none';

        document.getElementById("editbtn").innerHTML = "Edit <i class=\"glyphicon glyphicon-edit\"></i>";

    }
}
window.onload = function() {

    if (str.length == 0) {
        if (window.location.search.split('?').length > 1) {
            const par = window.location.search.split('?')[1].split('&');
            for (let i = 0; i < par.length; i++) {
                const k = par[i].split('=')[0];
                const v = decodeURIComponent(par[i].split('=')[1]);
                str[k] = v;
            }
        }
    }

    if (str.heading != null && str.author != null) {
        const { heading } = str;
        const { author } = str;
        const { content } = str;
        document.getElementsByClassName('heading-content')[0].innerHTML = heading;
        document.getElementsByClassName('writername')[0].innerHTML = author;
        document.getElementsByClassName('post-content')[0].innerHTML = content;
    }
 }

var c = 0;

function count1() {

    c = c + 1;
    document.getElementById("likebtn").innerHTML = "Liked";
    if (c == 1) {
        document.getElementById("counter").innerHTML = c + " person liked this !";
    } else {
        document.getElementById("counter").innerHTML = c + " people liked this !";
    }

}