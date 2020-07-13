let queryname = new Array('modal_open2', 'modal_open3', 'modal_open4', 'modal_open5', 'modal_open6', 'modal_open7',);

let footer = [];

for (let i = 2; i < 8; i++) {

    footer[i] = document.createElement("div");
    footer[i].id = "main";
    footer[i].innerHTML = document.getElementById('main').innerHTML;

    let divname = footer[i].querySelector('#modal_open');
    divname.id=queryname[i-2];

    document.getElementById('section').appendChild(footer[i]);
    let img = document.getElementById("mainImg");
    img.src = "../image/HW2_image/main" + i + "_img.png";

}

//페이지 이동
function page_href2() {
    location.href = "peedPage";
}

function page_href3() {
    location.href = "propilPage";
}

//모달 복사
document.getElementById("modal_open").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("modal_open2").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("modal_open3").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}
document.getElementById("modal_open4").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("modal_open5").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("modal_open6").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("modal_open7").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("closeModal").onclick = function () {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflowY = "visible";
}

document.getElementById("bgr").onclick = function () {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflowY = "visible";
}

var count = 1;

function like(){
    document.getElementById("menu1").src = "../image/HW2_image/nav_image4_3.png";
    count++;   
}

function unlike(){
    document.getElementById("menu1").src = "../image/HW2_image/nav_image4.png";
    count++;   
}

function LIKE(count){
    console.log(count);
    if(count % 2 == 1){
        like();
    }else{
        unlike();
    }
}