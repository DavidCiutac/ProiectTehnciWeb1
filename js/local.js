

function swap(a,b){
    var aux=a
    a=b
    b=aux

}

window.window.onload = () => {
    let Harry=localStorage.getItem("Harry Styles")
    let Ayo=localStorage.getItem("Ayo")
    let AM=localStorage.getItem("Arctic Monkeys")
    let newDiv=document.createElement("div")
    newDiv.innerHTML=`<ul>
        <li>Harry Styles : ${Harry} vizitari</li>
        <li>Ayo : ${Ayo} vizitari</li>
        <li>Arctic Monkeys : ${AM} vizitari</li>
    </ul>`
    let p=document.querySelector("#divspecial")
    p.appendChild(newDiv);
}