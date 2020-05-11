document.getElementById("modal_open").onclick = function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflowY = "hidden";
}

document.getElementById("closeModal").onclick = function () {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflowY = "visible";
}