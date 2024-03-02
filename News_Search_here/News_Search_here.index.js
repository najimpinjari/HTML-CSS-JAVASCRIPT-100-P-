const apikey = '5156fa24f25845c98a6298fad52ea6ab'

const bolgcontainer = document.getElementById("bolg-container");

async function fetchrandamNews(){
    try{
        const apiURl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apikey=${apikey}`;
        const responce = await fetch(apiURl);
        const data = await responce.json();
        return data.articals;
    }
    catch(error){
        console.error("Error Fetching random news ", error);    
    }
    return[];
}

function displayblogs(articals){
    bolgcontainer.innerHTML = ""
    articals.forEach((articals) => {
        const card =document.createElement
        ("div")
        card.classList.add("card")
        const img = document.createElement("img")
        img.src = articals.Urltoimg
        img.alt = articals.title
        const title = document.createElement("h2")
        title.textContent = articals.title
        const description = document.createElement ("p") 
        description.textContent = articals.description ;
        
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        bolgcontainer.appendChild(blogCard);
    });
}


(async () => {
    try{
        const articals = await fetchrandamNews();   
        displayblogs(articals); 
    }catch(error){
        console.error("Error Fetching random news ", error);    
    }
})