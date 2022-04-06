function addHeader(el){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = 
    `<header class="header">
    <div class="header__general-container">
    <div class="header__container-logo-and-open-button">
        <a href="./index.html">
            <img class="header__logo" src="./images/logo-prueba.png" alt="">
        </a>
        <a class="header__open-options-button">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <div class="header__container-options-desktop">
            <a class="header__options-link" href="./portfolio.html">
                    <p class="header__options">Portfolio</p>
            </a>
            <a class="header__options-link" href="./servicios.html">
                <p class="header__options">Servicios</p>
            </a>
            <a class="header__options-link" href="./contacto.html">
                <p class="header__options">Contacto</p>
            </a>
        </div>
        </div>
    
    </div>
    <div class="header__container-pop-up-window">
        <div class="header__close-options-button">
            <img class="header__button-img" src="./images/cruz.png" alt="">
        </div>
        <div class="header__container-options">
            <a class="header__options-link" href="./portfolio.html">
                <p class="header__options">Portfolio</p>
        </a>
        <a class="header__options-link" href="./servicios.html">
            <p class="header__options">Servicios</p>
        </a>
        <a class="header__options-link" href="./contacto.html">
            <p class="header__options">Contacto</p>
        </a>
        </div>


    </div>
</header>`
        el.appendChild(newDiv);

        
        
        function openPopUpWindow(){
            const openButton = document.querySelector(".header__open-options-button");
            const options = document.querySelector(".header__container-pop-up-window");
            openButton.addEventListener("click", ()=>{
                options.style.display = "inherit";
            })
        };
        
        function closePopUpWindow(){
            const closeButton = document.querySelector(".header__close-options-button")
            const options = document.querySelector(".header__container-pop-up-window")
            closeButton.addEventListener("click", ()=>{
                options.style.display = "";
            })
        }
        
        openPopUpWindow();
        closePopUpWindow();
    }


