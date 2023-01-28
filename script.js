//Turns to true if all fileds aren't empty
let noErrors = false;

const checkIfEmpty = (element) => {
  const errorMsg = element.nextElementSibling;

  //Handle error styling if it isn't an email
  if (element.value === "" && element.type !== "email") {
    element.style.borderColor = "#FF7979";
    element.classList.add("add-img");
    errorMsg.style.display = "block";
    errorMsg.textContent = `${element.placeholder} cannot be empty`;
    element.placeholder = "";
    noErrors = false;
    //If it is email
  } else if (element.value === "" && element.type === "email") {
    element.style.borderColor = "#FF7979";
    element.classList.add("add-img");
    errorMsg.style.display = "block";
    errorMsg.textContent = `Looks like this is not an email`;
    element.placeholder = "email@example/com";
    noErrors = false;
  } else {
    noErrors = true;
  }
};

const handleErrors = (firstName, lastName, email, password) => {
  checkIfEmpty(firstName);
  checkIfEmpty(lastName);
  checkIfEmpty(email);
  checkIfEmpty(password);
};

const handleFormSubmit = (() => {
  const form = document.querySelector(".form");
  const firstName = form.children[0];
  const lastName = form.children[2];
  const email = form.children[4];
  const password = form.children[6];

  form.addEventListener("submit", (e) => {
    handleErrors(firstName, lastName, email, password);

    if (!noErrors) {
      e.preventDefault();
    } else {
      alert("Successfully logged in!");
    }
  });
})();
