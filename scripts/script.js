var replaceDigits = function () {
    var map = [
        "&\#1776;",
        "&\#1777;",
        "&\#1778;",
        "&\#1779;",
        "&\#1780;",
        "&\#1781;",
        "&\#1782;",
        "&\#1783;",
        "&\#1784;",
        "&\#1785;",
    ];
    document.body.innerHTML = document.body.innerHTML.replace(
        /\d(?=[^<>]*(<|$))/g,
        function ($0) {
        return map[$0];
        }
    );
    };
    window.onload = replaceDigits;



function closelist()
{
    document.getElementById("check").checked=false;
}

function shop(){
    if(document.getElementById("shop").checked == true){
        document.getElementById("previewShop").style.display="block";
    }
    else{
        document.getElementById("previewShop").style.display="none";
    }
}

function close_pop(){
    document.getElementById("popContainer").style.display="none";
}

function popShow(){
    document.getElementById("popContainer").style.display="block";
}