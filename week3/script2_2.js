document.getElementById("modaldot").onclick = function() {
    document.getElementById("modal_popup").style.display="block";
}

document.getElementById("m_cancel").onclick = function() {
    document.getElementById("modal_popup").style.display="none";
}   

document.getElementById("modal_popup").onclick = function() {
    document.getElementById("modal_popup").style.display="none";
}   



function add_div() {
    for(let i = 0; i < 2; i++){
        let copy = document.getElementById('feed_group');
        let copy1 = copy.cloneNode(true);
        feed.appendChild(copy1);
        
        
    }
}

add_div();

let imgarray = new Array('images/0_p.jpg', 'images/1_p.jpg');
document.getElementById('feed_photo').src = imgarray[0];