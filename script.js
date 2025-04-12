function btnClick(e) {
    let txtdisplay = document.getElementById('txtdisplay');
    txtdisplay.value += e.innerHTML;
}
function equal() {
    let txtdisplay = document.getElementById('txtdisplay');
    txtdisplay.value = eval(txtdisplay.value);
}
function Myclear() {
    let txtdisplay = document.getElementById('txtdisplay');
    txtdisplay.value = '';
}
function MyTheme(no) {
    // alert(no);
    let myvideos = document.getElementById('myvideos');
    if (no == 1)
        myvideos.src = "wave1.mp4";
    else if (no == 2)
        myvideos.src = "wave2.mp4";
    else if (no == 3)
        myvideos.src = "wave3.mp4";
    // Reload video for change to take effect
    let video = myvideos.parentElement;
    video.load();
}
function myDel()
{
    let res = document.getElementById("txtdisplay");
    res.value = res.value.slice(0, -1);
}
//   how to calculate string (1+2) in javascript