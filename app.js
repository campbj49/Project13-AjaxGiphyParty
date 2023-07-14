console.log("Let's get this party started!");
document.querySelector("form").addEventListener("submit", async (e)=>{
    e.preventDefault()
    let input = document.getElementById("input").value;
    if(input === "") return;
    let response = await axios.get("http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
    console.log(response)
    let newGIF = document.createElement("embed");
    newGIF.src = response.data.data[0].embed_url;
    document.getElementById("gifs").append(newGIF);
    e.target.reset();
})

document.getElementById("reset").addEventListener("click",(e)=>{
    document.getElementById("gifs").innerHTML = "";
})