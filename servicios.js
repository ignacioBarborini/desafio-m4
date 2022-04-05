function addReusableComponents(){
    const servicesHeaderContainer = document.querySelector(".services__header");
    const servicesFooterContainer = document.querySelector(".services__footer");
    addHeader(servicesHeaderContainer);
    addFooter(servicesFooterContainer);
    openPopUpWindow();
    closePopUpWindow();
}


function addServicesCard(contentfulData = {}){
    const template = document.querySelector("#services__template");
    const container = document.querySelector(".services__cards-container");

    template.content.querySelector(".services__img-card").src = "https://" + contentfulData.image;
    template.content.querySelector(".services__title-card").textContent = contentfulData.title;
    template.content.querySelector(".services__text-card").textContent = contentfulData.description;

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
        console.log(res);
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
}

main()