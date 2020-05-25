document.getElementById("settings").onclick = function() {
    document.getElementById("modal_popup").style.display="block";
}

document.getElementById("m_cancel").onclick = function() {
    document.getElementById("modal_popup").style.display="none";
}   

document.getElementById("modal_popup").onclick = function() {
    document.getElementById("modal_popup").style.display="none";
}   

function add_div() {
    for(let i = 0; i < 3; i++){
        let imgarray = new Array('images/p.jpg','images/0_p.jpg', 'images/1_p.jpg');
        document.getElementById('photos').innerHTML = '<img src = \''+ imgarray[i] + '\'>';
    }
}

add_div();