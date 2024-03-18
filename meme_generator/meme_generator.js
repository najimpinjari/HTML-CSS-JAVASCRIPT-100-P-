const generateMemeBtn = document.querySelector(".meme-genretor .genret-meme-btn");

const memeImag = document.querySelector(".meme-genretor img");
const memeTitle = document.querySelector(".meme-genretor .meme-title");
const memeAuthor = document.querySelector(".meme-genretor .meme-author");

const updateDetails = (url, title, author) => {
    memeImag.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
  };

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")  
    .then((Response) => Response.json())
        .then((data) =>{
            updateDetails(data.url, data.title, data.author);
        });
    };


    generateMemeBtn.addEventListener("click", generateMeme);

    generateMeme();
