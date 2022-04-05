function addReusableComponents(){
    const headerContainer = document.querySelector(".contact__header");
    const bodyContainer = document.querySelector(".contact__body");
    const footerContainer = document.querySelector(".contact__footer");
    addContactForm(bodyContainer);
    addFooter(footerContainer);
    addHeader(headerContainer);
    openPopUpWindow();
    closePopUpWindow();
}

function main(){
    addReusableComponents();
}

main();