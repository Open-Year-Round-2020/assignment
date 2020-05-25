document.getElementById("modal_open").onclick = function () {
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

let footer = [];
for (let i = 2; i < 9; i++) {
    footer[i] = document.createElement("div");
    footer[i].id = "main";
    footer[i].innerHTML = document.getElementById('main').innerHTML;
    document.getElementById('section').appendChild(footer[i]);
    let img = document.getElementById("mainImg");
    img.src = "./ass2_image/main" + i + "_img.png";

}

function page_href2() {
    location.href = "./ass2.html";
}

function page_href3() {
    location.href = "../ass3/ass3.html";
}