function addContactForm(e){
    const newDiv = document.createElement("div")
    newDiv.innerHTML =
     `   <section class="contact-form">
     <h3 class="contact-form__title">Escribime</h3>
     <form class="contact-form__form">
         <label>
             <p class="contact-form__input-name">NOMBRE</p>
             <input id="name" class="contact-form__input" type="text">
         </label>
         <label>
             <p class="contact-form__input-name">EMAIL</p>
             <input id="email" class="contact-form__input" type="text">
         </label>

         <label>
             <p class="contact-form__input-name">Mensaje</p>
             <textarea id="message" class="contact-form__textarea"></textarea>
         </label>
         <div class="contact-form__button-container">
             <button class="contact-form__button">Enviar</button>
         </div>
         
     </form>
 </section>`
 e.appendChild(newDiv);


function postFormData(){
    const formEl = document.querySelector(".contact-form__form");
    formEl.addEventListener("submit", (event)=>{
        event.preventDefault();

        const name = formEl.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        const data = {
            "to":"barboriniigancio@gmail.com",
            "message": `Nombre: ${name}, Email: ${email}, Mensaje: ${message}.`
        }

        fetch("https://webhook.site/02bfba8c-a8b5-4bf2-af8e-3ba919b5ced4", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((data)=>{data.JSON()})
    })
    }
    postFormData();
}
    