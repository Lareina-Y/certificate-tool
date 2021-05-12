function clickOn(el) {
    var x = document.getElementsByClassName(el.className);
    var total = document.getElementById("total");
    var value = total.innerHTML;

    if(x[0].style.opacity != 1){
        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = 1;
        }

        value++;
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = 0.3;
        }
        
        value--;
    }

    document.getElementById("total").innerHTML = value;
}

function resetClick() {
    location.reload();
}