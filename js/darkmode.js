function darkMode()
{
    let container=document.getElementById("scroll")
    container.querySelector("#scroll div")
    container.style.backgroundColor="black"
    container.style.color='white'
}

window.onload= () => {

    let number=localStorage.getItem("Harry Styles")||0;
    number=parseInt(number,10)
    number=number+1
    localStorage.removeItem("Harry Styles")
    localStorage.setItem("Harry Styles",number)
    // alert(number)
}