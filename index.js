let loginform = document.getElementById("login-form");
loginform.addEventListener("submit", function(event){
    event.preventDefault();
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;
    if(username==="admin" && password==="password") {
        let contacts= JSON.parse(localStorage.getItem("contacts"))|| [];
        let contactInfo="";
        for(var i = 0; i < contacts.length; i++){
            contactInfo +="<h2>contact #" +(i + 1) + "</h2>";
            contactInfo +="<p><strong>Name:</strong>" + contacts[i].name +"</p>";
            contactInfo +="<p><strong>Address:</strong>" + contacts[i].address +"</p>";
            contactInfo +="<p><strong>Email:</strong>" + contacts[i].email +"</p>";
            contactInfo +="<p><strong>Comment:</strong>" + contacts[i].comment +"</p>";
        }
        document.getElementById("contact-info").innerHTML = contactInfo;
    } else{
        alert("Invalid username or password.");
    }
    loginform.reset();
});
    