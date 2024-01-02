let posts = {};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    posts = json;
    console.log(posts.slice(90, 100));
  });

let perPagePosts = 10;
let totalPosts = 100;
let totalPages = Math.ceil(totalPosts / perPagePosts);

if (totalPages > 1) {
  const getPostCardDiv = document.querySelector("#blog-card-container");
  const newDiv = document.createElement("div");

  newDiv.addEventListener("click", function (event) {
    let goToPageNumber = event.target.textContent;
  });
  
  newDiv.classList.add("pagination");
  newDiv.insertAdjacentHTML("beforeend",'<a href="#" class="prev">&laquo; Prev</a>');

  for (let index = 0; index < totalPages; index++) {
    newDiv.insertAdjacentHTML("beforeend",`<a href="index.html?page=${index + 1}">${index + 1}</a>`);
  }

  newDiv.insertAdjacentHTML("beforeend",'<a href="#" class="next">Next &raquo;</a>');
  getPostCardDiv.append(newDiv);
}
