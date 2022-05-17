

window.onload = () => {

    const name=document.getElementById('username')
    const email=document.getElementById('email')
    const password=document.getElementById('psw')
    const password_repeat=document.getElementById('psw-repeat')
    const form=document.getElementById('Form')
    const errorElement=document.getElementById('error')


    form.addEventListener('submit',(e)=>
    {
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
        if(password.value!=password_repeat.value)
        {
            messages.push("passwords do not match")
        }
        if(ValidateEmail()==false)
        {
            messages.push("email format not correct")
        }
        alert("aici")
        if(messages.length>0)
        {

            e.preventDefault()
            errorElement.innerText=messages.join(', ')
            alert("err")
        }
        else
        {

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
    var verifyName = document.getElementById('username').value;
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

function ValidateEmail()
{
    alert("You have entered an invalid email address!")
    var verifyEmail=document.getElementById('email')
    var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email.test(verifyEmail))
    {
        return false
    }

    return true
}
