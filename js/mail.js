//const form= document.getElementById("contact-form");
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
})
const sendMail = (mail) => {
    fetch('http://localhost:8080/send', {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };
