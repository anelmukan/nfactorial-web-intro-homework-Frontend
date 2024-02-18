const queryParams = new URLSearchParams(window.location.search);
const postId = queryParams.get("id");
const article = document.getElementById("article")
const spinner = `<div id="spinner" class="spinner-border" role="status"></div>`

const onBackBtnClick = (event) => {
  event.preventDefault();
  window.history.back();
};
const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", onBackBtnClick);

const loadPost= async () => {
  article.innerHTML = spinner;
  const postItemRequest = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const spinnerId = document.getElementById('spinner')
  
  postItemRequest.then((response) => response.json()).then((post) =>{
    spinnerId.remove()
    console.log('postItem', post)

    let isImgLoading = true
    fetch(`https://picsum.photos/id/${post.id}/1120/480`).then((response) => response.url).then((imgSrc)=>{
      isImgLoading = false;
      const spinner = document.getElementById('img-spinner-' + post.id)
      if (spinner) spinner.remove()
      const postItem = document.getElementById('postItem-' + post.id)
      postItem.insertAdjacentHTML('beforeend', `<img width="100%" height="100%" class="rounded" src="${imgSrc}" alt="New image" />`)
      postItem.lastChild.addEventListener('click', onclick)
      postItem.innerHTML += `<p id="body" style="margin-top: 32px; font-size: 16px; line-height: 22px; font-weight: 400; font-family: Inter">${post.body}</p>`
      postItem.innerHTML += `<p id="body" style="margin-top: 16px; font-size: 16px; line-height: 22px; font-weight: 400; font-family: Inter">${post.body}</p>`
    });

    const postDiv = `
    <div id=postItem-${post.id} class="rounded mt-4 pb-4">
      <div> 
        <h6 id="author" style="font-size: 14px; line-height: 18px; font-weight: 500; font-family: Inter"> Author ${post.userId}</h6>
        <h3 id="title" style="margin: 36px 0px 16px 0px; font-size: 28px; line-height: 34px; font-weight: 700; font-family: Inter"> ${post.title}</h3>
        <p id="description" style="margin-bottom: 32px; font-size: 16px; line-height: 22px; font-weight: 400; font-family: Inter">${post.body}</p>
      </div>
      <div id="img-spinner-${post.id}" class="spinner-border" role="status" ></div>
    </div>
    `

    article.innerHTML=postDiv
  }).catch((err) => {
    const spinnerId = document.getElementById('spinner')
    if (spinnerId) spinnerId.remove()
    const articlesId = document.getElementById("articles")

    const errorText = `
      <h3>Данные не загрузились</h3>
    `
    articlesId.innerHTML = errorText
  })
}

loadPost()
