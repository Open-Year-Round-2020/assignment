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
    var imgarray = new Array('images/0_p.jpg', 'images/1_p.jpg');
    for(var i = 0; i < 2; i++){
        var copy = document.getElementById('f_images');
        var copy1 = copy.cloneNode(true);
        console.log(copy1);
        const photo = copy1.querySelector(".photos");
        console.log(photo);
        photo.src = imgarray[i];
        wrap.appendChild(copy1);
    }
};

add_div();