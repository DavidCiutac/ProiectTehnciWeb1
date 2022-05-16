

window.onload = () => {
    const btn = document.getElementById('add-btn1');
    btn.addEventListener("click",learned)
    function learned()
    {
        const d = new Date();
        const day=d.getDate()
        const month=d.getMonth()
        const year=d.getFullYear()
        newDiv=document.createElement("div")
        newDiv.innerHTML="Congratulations! You learned this song on "+day+"."+month+"."+year
        let p=document.querySelector("#paragraf1")
        p.appendChild(newDiv);
        btn.remove();
    }

}