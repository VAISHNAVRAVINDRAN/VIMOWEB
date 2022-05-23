const l_arrow=document.querySelector(".left-arrow");
const r_arrow=document.querySelector(".right-arrow");
const s_bar=document.querySelector(".side-bar");
const notifications=document.querySelector(".notifications");
const notifications_win=document.querySelector(".notification-window");
const close_win=document.querySelector(".close_nwin");
l_arrow.addEventListener("click", openbar);
r_arrow.addEventListener("click", closebar);
notifications.addEventListener("click", opennoti);
close_win.addEventListener("click", closenoti);
function openbar(){
    s_bar.style.width="100px";
    l_arrow.style.display="none";
    r_arrow.style.left="100px";
    r_arrow.style.display="flex";
}
function closebar(){
    s_bar.style.width="0px";
    r_arrow.style.display="none";
    l_arrow.style.display="flex";
    l_arrow.style.left="0px";
}
function opennoti(){
    notifications_win.style.left="1135px";
}
function closenoti(){
    notifications_win.style.left="1535px";
}