function addFooter(e){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = 
    ` <section class="footer">
    <div class="footer__logo-container">
        <a href="../index.html">
            <img class="footer__logo" src="/images/logo-prueba.png" alt="">
        </a>
    </div>
    <div class="footer__social-media-container">
        <a class="footer__social-media-link" href="https://www.instagram.com/nachobarborini/">
            <div class="footer__social-media-individual-container">
                <p class="footer__social-media-name">Instagram</p>
                <img class="footer__social-media-logo" src="/images/instagram.png" alt="">
            </div>  
        </a>
        <a class="footer__social-media-link" href="https://www.linkedin.com/in/ignacio-barborini-1415a2209/">
            <div class="footer__social-media-individual-container">
                <p class="footer__social-media-name">Linkedin</p>
                <img class="footer__social-media-logo" src="/images/linkedin.png" alt="">
            </div>
        </a>
        <a class="footer__social-media-link" href="https://github.com/ignacioBarborini">
            <div class="footer__social-media-individual-container">
                <p class="footer__social-media-name">Github</p>
                <img class="footer__social-media-logo" src="/images/github.png" alt="">
            </div>
        </a>
    </div>
</section>`
e.appendChild(newDiv);
}