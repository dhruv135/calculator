let value = "";



$("input").keypress(function(event){
    if(event.keyCode === 13){
        var ans = eval($("input").val());
    if(typeof(ans) === "number"){
        $("input").val(ans);
    }
    else{
        $("input").val("");
    }
    value="";
    }
})



$("button").click(function(){
if($(this).text() === "1"){
    value = value + "1";
    $("input").val(value);
}
else if($(this).text() === "2"){
    value = value + "2";
    $("input").val(value);
}
else if($(this).text() === "3"){
    value = value + "3";
    $("input").val(value);
}
else if($(this).text() === "4"){
    value = value + "4";
    $("input").val(value);
}
else if($(this).text() === "5"){
    value = value + "5";
    $("input").val(value);
}
else if($(this).text() === "6"){
    value = value + "6";
    $("input").val(value);
}
else if($(this).text() === "7"){
    value = value + "7";
    $("input").val(value);
}
else if($(this).text() === "8"){
    value = value + "8";
    $("input").val(value);
}
else if($(this).text() === "9"){
    value = value + "9";
    $("input").val(value);
}
else if($(this).text() === "0"){
    value = value + "0";
    $("input").val(value);
}
else if($(this).text() === "+"){
    value = value + "+";
    $("input").val(value);
}
else if($(this).text() === "-"){
    value = value + "-";
    $("input").val(value);
}
else if($(this).text() === "*"){
    value = value + "*";
    $("input").val(value);
}
else if($(this).text() === "/"){
    value = value + "/";
    $("input").val(value);
}
else if($(this).text() === "c"){
    $("input").val("");
    value="";
}
else if($(this).text() === "."){
    value = value + ".";
    $("input").val(value);
}
else if($(this).text() === "%"){
    value = value + "%";
    $("input").val(value);
}
else if($(this).text() === "="){
    var ans = eval($("input").val());
    if(typeof(ans) === "number"){
        $("input").val(ans);
    }
    else{
        $("input").val("");
    }
    value="";
}

});

