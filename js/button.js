function clickOn(el) {
    var x = document.getElementsByClassName(el.className);
    var total = document.getElementById("total");
    var value = total.innerHTML;

    //number add 1 for the required/elective courses check
    var check = el.className + "i";
    var number = document.getElementsByClassName(check);


    if(x[0].style.opacity != 1){
        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = 1;
        }
        for (i = 0; i < number.length; i++) {
            number[i].innerHTML ++;
        }
        value++;
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = 0.3;
        }
        for (i = 0; i < number.length; i++) {
            number[i].innerHTML --;
        }
        value--;
    }

    document.getElementById("total").innerHTML = value;
    document.getElementsByClassName(check) = number;
}

function resetClick() {
    location.reload();
}