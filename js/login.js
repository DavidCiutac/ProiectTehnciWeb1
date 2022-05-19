

window.onload = () => {

    const name=document.getElementById('uname')
    const password=document.getElementById('psw')
    const form=document.getElementById('Form')
    const errorElement=document.getElementById('error')

    form.addEventListener('submit',(e)=>
    {
        var nameRegex = /^[a-zA-Z0-9]+$/;
        let messages=[]
        if(name.value===''||name.value==null){
            messages.push('Name is requaiered')
        }
        if(verifyName()==false)
        {
            messages.push(" username must be 5-12 characters with small letters ")
        }
        if(verifyPwd()==false)
        {
            messages.push(" password must be uppercase alphanumeric mixed with 8-15 digits")
        }
        if(messages.length>0)
        {
            e.preventDefault()
            errorElement.innerText=messages.join(', ')
        }

    })
}


function verifyPwd() {
    // password
    var verifyPwd = document.getElementById('psw').value;
    var pwd = / ^ [A-Z] [a-za-z0-9] \ w {7,14}. {1,20} $/;
    // uppercase alphanumeric mixed with 8-15 digits
    return pwd.test(verifyPwd)
    
}

function verifyName() {
    //User name verification
    var verifyName = document.getElementById('uname').value;
    var name = /^[a-z\d]{5,12}$/
    // username must be 5-12 characters with small letters
    return name.test(verifyName)
   
}

