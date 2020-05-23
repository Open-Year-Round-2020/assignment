function page_href_1() {
    location.href = "../ass2/ass2.html";
}

function page_href_5() {
    location.href = "./ass3.html";
}


let POST = [];
for (let i = 0; i < 7; i++) {
    POST[i] = document.createElement("img");
    POST[i].id = "post" + (i % 3 + 1);
    POST[i].innerHTML = document.getElementById("post" + (i % 3 + 1)).innerHTML;
    document.getElementById("body_bottom").appendChild(POST[i]);
    POST[i].src = "./ass3_image/main" + (i + 1) + "_img.png";
}