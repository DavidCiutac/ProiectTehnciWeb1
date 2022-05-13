


var myInterval;
function startScroll(){
     myInterval= setInterval(function(){
        var element=document.getElementById("scroll")
        element.scrollBy(0,1)
    },75)
    return myInterval;

}

function stopScroll(){

    clearInterval(myInterval)
}

