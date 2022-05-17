

function functie1(){
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
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        newDiv.style.color='#'+randomColor
        newDiv.style.padding=Math.floor(Math.random() * 11)+"px";

        let p=document.querySelector("#paragraf1")
        p.appendChild(newDiv);
        btn.remove();

    }

}