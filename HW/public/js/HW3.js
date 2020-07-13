function page_href_1() {
    location.href = "loginPage";
}

function page_href_2() {
    location.href = "peedPage";
}

function page_href_5() {
    location.href = "propilPage";
}

let WRAP = [];
let POST = [];
for (let i = 0; i < 7; i++) {
    WRAP[i] = document.createElement("div");
    WRAP[i].id = "wrap" + i;
    POST[i] = document.createElement("img");
    POST[i].id = "post" + (i % 3 + 1);
    POST[i].innerHTML = document.getElementById("post" + (i % 3 + 1)).innerHTML;
    WRAP[i].innerHTML = POST[i].innerHTML;
    document.getElementById("body_bottom").appendChild(WRAP[i]);
    document.getElementById("wrap" + i).appendChild(POST[i]);
    POST[i].src = "../image/HW3_image/main" + (i + 1) + "_img.png";
    WRAP[i].style.width = "31%";
    WRAP[i].style.height = "300px%";
    if (i % 3 != 2) {
        WRAP[i].style.margin = "10px 33px 10px 0";
    }
    WRAP[i].style.display = "inline-block";
    POST[i].style.width = "100%";
    POST[i].style.height = "100%";

}

// modal start

document.getElementById("propil_setting").onclick = function () {
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

// modal end