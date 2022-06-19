const buttonhello = document.querySelector("#button-hello");
const buttonwelcome = document.querySelector("#button-welcome");
const hellocontainer = document.querySelector("#hello-container");
const welcomecontainer = document.querySelector("#welcome-container");
const logincontainer = document.querySelector("#login-container");
const registercontainer = document.querySelector("#register-container");
const dangercontainer = document.querySelector("#danger-container");

buttonhello.addEventListener("click", () => {
    hellocontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
    welcomecontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 15;
        `
    logincontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: -5;
        `
    registercontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
    dangercontainer.style.cssText = `
        transform: translateX(-100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `    
})

buttonwelcome.addEventListener("click", () => {
    hellocontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
    welcomecontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: -5;
    `
    logincontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
    registercontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: -5;
    `
    dangercontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
})


document.querySelector("#logar").addEventListener("click", (e) => {
    e.preventDefault();
  
    logar();
  });
  
  function logar() {
    const login = document.querySelector("#login");
    const senha = document.querySelector("#pass");
  
    let usuarios_novo = [];
  
    //pego todos os dados de usuarios que tenho no localstorage
    usuarios_novo = JSON.parse(localStorage.getItem("usuarios"));
  
    //crio um objeto para comparar com os dados do objero que vem do localstorage
    let usuario = {
      email: "",
      senha: "",
    };
  
    usuarios_novo.forEach((element) => {
      if (element.login === login.value && element.senha === senha.value) {
        usuario = {
          email: element.login,
          senha: element.senha,
        };
      }
    });
  
    if (usuario.email === login.value && usuario.senha === senha.value) {
      sessionStorage.setItem("logado", usuario.email);
      window.location.href = "recados-modal.html";
    } else {
      alert("Usuario ou senha Incorretos!");
    }
  }
