
function startScroll(){
    var time=6000
    time=time*3.4
    setTimeout(alertMe,time)
     myInterval= setInterval(function(){
        var element=document.getElementById("scroll")
        element.scrollBy(0,1)
    },75)
    return myInterval;

}
function stopScroll(){

    clearInterval(myInterval)
}

function alertMe()
{
    alert("Did you like this song?")
}

var myInterval1
function startScroll1(){
    var time=6000
    time=time*3.4
    setTimeout(alertMe,time)
    myInterval1= setInterval(function(){
        var element=document.getElementById("scroll1")
        element.scrollBy(0,1)
    },75)
    return myInterval1;

}
function stopScroll1(){

    clearInterval(myInterval1)
}







