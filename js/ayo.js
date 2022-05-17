window.onload= () => {

    let number=localStorage.getItem("Ayo")||0;
    number=parseInt(number,10)
    number=number+1
    localStorage.removeItem("Ayo")
    localStorage.setItem("Ayo",number)
    // alert(number)
}