function sendMail(){
    let parmds = {
        name:document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        subject:document.getElementById("subject").Value,
        message:document.getElementById("message").Value,

    }
    emailjs.send("service_twwr5jt","template_263lu6r",parms).then(alert("Email sent!!"))
}

