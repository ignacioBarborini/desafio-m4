function addReusableComponents(){
    const headerContainer = document.querySelector(".welcome__header")
    const contactContainer = document.querySelector(".contact-form-container")
    const footerContainer = document.querySelector (".footer-container")
    addHeader(headerContainer);
    addContactForm(contactContainer);
    addFooter(footerContainer);
}

function addPresentation(contentfulData = {}){
    const template = document.querySelector("#presentation__template");
    const container = document.querySelector(".presentation__container");

    template.content.querySelector(".presentation__image").src = "https://" + contentfulData.image;
    template.content.querySelector(".presentation__title").textContent = contentfulData.title;
    template.content.querySelector(".presentation__text").textContent = contentfulData.text;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getPresentation(){
    return fetch("https://cdn.contentful.com/spaces/ozx8tpy2sabk/environments/master/entries/?access_token=kvMZtZ06aMghHzdGSbPiXny397A5TSyhtpKk-yO9rfk&content_type=presentation").
    then((res)=>{return res.json()}).
    then((res)=>{
        const fieldsCollection = res.items.map((item)=>{
        const imgId = item.fields.presentationImage.sys.id;
        const image = getImg(imgId, res);
        const linkImg = image.fields.file.url;
        return{
            image: linkImg,
            title: item.fields.presentationTitle,
            text: item.fields.presentationText,
        }
    })
        return fieldsCollection;
    })
}

function addServicesCard(contentfulData = {}){
    const template = document.querySelector("#services__template");
    const container = document.querySelector(".services__container");

    template.content.querySelector(".services__card-image").src = "https://" + contentfulData.image;
    template.content.querySelector(".services__card-title").textContent = contentfulData.title;
    template.content.querySelector(".services__card-text").textContent = contentfulData.description;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getImg(id, datos){
    const img = datos.includes.Asset.find((Asset)=>{
       return Asset.sys.id == id 
   });
   return img;
};   

function getServices(){
    return fetch("https://cdn.contentful.com/spaces/ozx8tpy2sabk/environments/master/entries/?access_token=kvMZtZ06aMghHzdGSbPiXny397A5TSyhtpKk-yO9rfk&content_type=services").
    then(res=> {return res.json()}).
    then((res)=>{
        const fieldsCollection = res.items.map((item)=>{
            const imgId = item.fields.servicesImage.sys.id;
            const imagen = getImg(imgId, res);
            const linkImg = imagen.fields.file.url;
            return{
                image: linkImg,
                title:item.fields.serviceTitle,
                description:item.fields.serviceDescription
            }

        })
        return fieldsCollection;
    })
}


function main(){
    addReusableComponents();
    getServices().then((services)=>{
        for (const s of services) {
            addServicesCard(s); 
        }
    })
    getPresentation().then((presentation)=>{
        for (const p of presentation) {
            addPresentation(p)
            
        }
    });
}

main();