function addReusableComponents(){
    const headerPortfolioContainer = document.querySelector(".portfolio__header");
    const footerPortfolioContainer = document.querySelector(".portfolio__footer");
    addFooter(footerPortfolioContainer);
    addHeader(headerPortfolioContainer);
    openPopUpWindow();
    closePopUpWindow();
}

function addPortfolioCard(contentfulData = {}){
    const template = document.querySelector("#portfolio__template");
    const container = document.querySelector(".portfolio__cards-container");

    template.content.querySelector(".portfolio__img-card").src = "https://" + contentfulData.imagen;
    template.content.querySelector(".portfolio__title-card").textContent = contentfulData.titulo;
    template.content.querySelector(".portfolio__text-card").textContent = contentfulData.text;
    template.content.querySelector(".portfolio__link-card").href = contentfulData.link;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getImg(id, contentfulData){
    const img = contentfulData.includes.Asset.find((Asset)=>{
       return Asset.sys.id == id 
   });
   return img;
}; 


function getPortfolio(){
    return fetch("https://cdn.contentful.com/spaces/ozx8tpy2sabk/environments/master/entries/?access_token=kvMZtZ06aMghHzdGSbPiXny397A5TSyhtpKk-yO9rfk&content_type=portfolio").
    then((res)=> {return res.json()}).
    then((res)=>{
        const items = res.items.map((item)=>{
            const id = item.fields.portfolioImage.sys.id;
            const img = getImg(id, res);
            linkImg = img.fields.file.url;
            return {
                imagen: linkImg,
                titulo: item.fields.portfolioTitle,
                text: item.fields.portfolioDescription,
                link: item.fields.portfolioLink
            }
        }) 
        console.log(res);
        return items;
    })
}

function main(){
    addReusableComponents()
    getPortfolio().then((items)=>{
        for (const i of items) {
            addPortfolioCard(i);
        }
    })
}

main()