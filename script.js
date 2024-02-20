function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ahnafahmedjarif",
        Password: "ahnaf-271172",
        To: "ahnafahmedjarif@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Contact From Enquiry",
        Body: `Name: ${document.getElementById("name").value} 
        <br> Email: ${document.getElementById("email").value}
        <br> Message: ${document.getElementById("message").value}`
    }).then(
        message => alert("Message Sent Successfully")
    );
}