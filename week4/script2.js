function add_div() {
    let imgarray = new Array('images/0_p.jpg', 'images/1_p.jpg');
    let commentarray = new Array ('<p><b>id.here</b> meow?</p>', '<p><b>id.here</b> 고양이 담요</p>');
    let likearray = new Array ( '좋아요 3개', '좋아요 2개' );
    let datearray = new Array ('5월 5일', '4월 25일');
    let queryname = new Array ('modaldot2', 'modaldot3');
    let iconname = new Array ('like2', 'like3');
    let iconname2 = new Array ('like_onclick2', 'like_onclick3');

    for(let i = 0; i < 2; i++){
        let copy = document.getElementById('feed_group');
        let copy1 = copy.cloneNode(true);

        const photo = copy1.querySelector(".feed_photo");
        const text = copy1.querySelector(".id_comment");
        const like = copy1.querySelector("#like");
        const date = copy1.querySelector("#date");
        let divname = copy1.querySelector('#modaldot');
        let iconid = copy1.querySelector('#like');
        let iconid2 = copy1.querySelector('#like_onclick');

        photo.src = imgarray[i];
        text.innerHTML = commentarray[i];
        like.innerHTML = likearray[i];
        date.innerHTML = datearray[i];
        divname.id = queryname[i];
        iconid.id = iconname[i];
        iconid2.id = iconname2[i];

        feed.appendChild(copy1);
    }
}

add_div();

document.querySelector("#modaldot").onclick = function() {
    document.getElementById("modal_popup").style.display="block";
}

document.getElementById("modaldot2").onclick = function() {
    document.getElementById("modal_popup").style.display="block";
}

document.getElementById("modaldot3").onclick = function() {
    document.getElementById("modal_popup").style.display="block";
}

document.getElementById("m_cancel").onclick = function() {
    document.getElementById("modal_popup").style.display="none";
}   

document.getElementById("modal_popup").onclick = function() {
    document.getElementById("modal_popup").style.display="none";
}   

document.querySelector("#like").onclick = function() {
    document.getElementById("like_onclick").style.display="block";
    document.getElementById("like").style.display="none";
}

document.querySelector("#like_onclick").onclick = function() {
    document.getElementById("like_onclick").style.display="none";
    document.getElementById("like").style.display="block";
}

document.querySelector("#like2").onclick = function() {
    document.getElementById("like_onclick2").style.display="block";
    document.getElementById("like2").style.display="none";
}

document.querySelector("#like_onclick2").onclick = function() {
    document.getElementById("like_onclick2").style.display="none";
    document.getElementById("like2").style.display="block";
}

document.querySelector("#like3").onclick = function() {
    document.getElementById("like_onclick3").style.display="block";
    document.getElementById("like3").style.display="none";
}

document.querySelector("#like_onclick3").onclick = function() {
    document.getElementById("like_onclick3").style.display="none";
    document.getElementById("like3").style.display="block";
}
