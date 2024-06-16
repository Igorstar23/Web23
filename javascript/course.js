var modal = document.getElementById("modal");
var btn_close = document.getElementsByClassName("button-close")[0];
var btn_send = document.getElementsByClassName("modal-button")[0];
var grids = document.getElementsByClassName("grid-item");
var modal_success = document.getElementById("modal-success");
var course_name = document.getElementById("course-name");

for (var i = 0; i < grids.length; i++) {
    console.log(grids[i]);
    grids[i].onclick = gridClick;
}

function gridClick(event) {
    console.log(event.currentTarget);
    PopUpShow(event.currentTarget);
}

$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(element) {
        modal.style.display = "block";
        course_name.textContent = element.textContent;
        console.log(course_name);
        
}

function PopUpHide() {
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