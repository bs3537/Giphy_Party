
let input = document.querySelector("#search");
let submit = document.querySelector("#submit");
submit.addEventListener("click", async function (e) {
    e.preventDefault();
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=BmpZORaXwkfh7K87bAeG5i8gOURiC614`);
    let gif1 = res.data.data[0];
    let results = document.querySelector("#results");
    let img = document.createElement("img");
    img.classList.add("gif");
    img.src = gif1.images.downsized.url;
    results.append(img);
    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerText = "Remove";
    results.append(remove);
    remove.addEventListener("click", function (e) {
        img.remove();
        remove.remove();
    });
});



