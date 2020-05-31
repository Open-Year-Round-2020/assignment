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
    let imgarray = new Array('images/0_p.jpg', 'images/1_p.jpg');
    let commentarray = new Array ('<p><b>id.here</b> meow?</p>', '<p><b>id.here</b> 고양이 담요</p>');
    let likearray = new Array ( '좋아요 3개', '좋아요 2개' );
    let datearray = new Array ('5월 5일', '4월 25일');

    for(let i = 0; i < 2; i++){
        let copy = document.getElementById('feed_group');
        let copy1 = copy.cloneNode(true);

        const photo = copy1.querySelector(".feed_photo");
        const text = copy1.querySelector(".id_comment");
        const like = copy1.querySelector("#like");
        const date = copy1.querySelector("#date");

        photo.src = imgarray[i];
        text.innerHTML = commentarray[i];
        like.innerHTML = likearray[i];
        date.innerHTML = datearray[i];

        feed.appendChild(copy1);
    }
}

add_div();

