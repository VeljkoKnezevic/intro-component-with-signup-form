const form = document.querySelector(".form")
const inputs = document.querySelectorAll(".form__input");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const button = document.querySelector(".form__button");

button.addEventListener("click", (e) => {
  inputs.forEach(input => {

    if(input.placeholder === "Email Address" && input.value === "") {
      let element = document.createElement("div")
      element.textContent = "Looks like this is not an email";
      element.classList.add("error")
      input.after(element);    
      
      input.placeholder = "email@example/com";
      input.style.color = "#FF7979"
      input.style.borderColor = "#FF7979"
      input.style.backgroundImage = "url(./images/icon-error.svg)"
      input.style.backgroundRepeat = "no-repeat"
      input.style.backgroundPosition = "95% 50%"      

    } else if(input.value === "") {
        //Adds a div with error text
        let element = document.createElement("div")
        element.textContent = `${input.placeholder} cannot be empty`;
        element.classList.add("error")
        input.after(element);
  
        //Additional styling
        input.placeholder = "";
        input.style.borderColor = "#FF7979"
        input.style.backgroundImage = "url(./images/icon-error.svg)"
        input.style.backgroundRepeat = "no-repeat"
        input.style.backgroundPosition = "95% 50%"      
       }
  })

})
