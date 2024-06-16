var modal = document.getElementById("modal");
var modal_success = document.getElementById("modal-success");
var btn_close = document.getElementsByClassName("button-close")[0];
var btn_send = document.getElementsByClassName("button-container-item")[0];

$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(){
    modal.style.display="block";

}

function PopUpHide(){
    modal.style.display="none";
    modal_success.style.display = "none";
}

btn_close.onclick = function() {
    PopUpHide();
}

btn_send.onclick = function() {
    modal_success.style.display = "block";
}

window.addEventListener("click", function(event) {
    if (event.target == modal_success) {
        modal_success.style.display = "none";
        modal.style.display = "none";
    }
});