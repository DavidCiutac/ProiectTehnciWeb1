

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
            messages.push("username must be 5-12 characters with small letters ")
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
        if(messages.length>0)
        {

            e.preventDefault()
            errorElement.innerText=messages.join(', ')
            alert("err")
        }
        else
        {
            alert('You have a new account')

        }

    })
}


function verifyPwd() {
    // password validation
    var verifyPwd = document.getElementById('psw').value;
    var pwd = / ^ [A-Z] [a-za-z0-9] \ w {7,14}. {1,20} $/;
    // uppercase alphanumeric mixed with 8-15 digits
    return pwd.test(verifyPwd) 
   
}

function verifyName() {
    //name validation
    var verifyName = document.getElementById('username').value;
    var name = /^[a-z\d]{5,12}$/
    // username must be 5-12 characters with small letters
    return name.test(verifyName)
}

function ValidateEmail()
{
    //email validation
    var verifyEmail=document.getElementById('email').value
    var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // console.log(email.test(verifyEmail))
    return email.test(verifyEmail)
}
