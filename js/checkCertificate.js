function checkCompleted () {
    var certificateName = [
        "AI",
        "data",
        "cyber",
        "game",
        "UE",
        "web"
    ];

    var count = 0;

    for(i = 0; i < certificateName.length; i++){
        var check = document.getElementsByClassName(certificateName[i]);
        var minNumber = document.getElementsByClassName(certificateName[i] + "C");
        var TorF = true;
    
        for(j = 0; j < check.length; j++){
            if(check[j].innerHTML < minNumber[j].innerHTML){
                TorF = false;
            }
        }
    
        if(TorF){
            count++;
            document.getElementById(certificateName[i]).style.backgroundColor = "lightyellow";
        } else {
            document.getElementById(certificateName[i]).style.backgroundColor = "white";
        }
    }

    document.getElementById("completed").innerHTML = count;
}