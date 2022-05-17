window.onload= () => {

    let number=localStorage.getItem("Arctic Monkeys")||0;
    number=parseInt(number,10)
    number=number+1
    localStorage.removeItem("Arctic Monkeys")
    localStorage.setItem("Arctic Monkeys",number)
    // alert(number)
}