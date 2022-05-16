

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
            messages.push(" name must be 6-20 characters at the beginning of uppercase letter (no sign allowed but backslash) ")
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
    if (!pwd.test(verifyPwd))   {
        // $("#username").css("border-color", "red");
        return false;
    }
    else
    {
        return true;
    }
}

function verifyName() {
    //User name verification
    var verifyName = document.getElementById('uname').value;
    var name = / ^ [A-Z] [0-9a-zA-Z] [a-za-z 0-9] {5,19} $/;
    // 6-20 characters at the beginning of the capital letter (no sign but 2;)
    if (!name.test(verifyName)) {
        // //$("#username"). After ("< span > 6-20 characters at the beginning of uppercase letter (no sign allowed but" \ "< span >");
        // $("#username").css("border-color", "red");
        return false;
    }
    else
    {
        return true;
    }
}
