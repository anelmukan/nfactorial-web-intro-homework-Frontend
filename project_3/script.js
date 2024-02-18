// const postItems = [
//   {
//     id: "1",
//     author: "Olzhas Mukayev",
//     title: "Today is the sunny day!",
//     img: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique gravida elementum. Curabitur nec vulputate neque. Nunc ut arcu felis. Sed vulputate dolor velit, in mollis massa ultricies sagittis. Duis commodo, enim in elementum lobortis, magna magna auctor augue, id lobortis leo nibh eu felis. Lorem ipsum dolor sit amet."
//   }, 
//   {
//     id: "2",
//     author: "Author 2",
//     title: "Today is the sunny day!",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique gravida elementum. Curabitur nec vulputate neque. Nunc ut arcu felis. Sed vulputate dolor velit, in mollis massa ultricies sagittis. Duis commodo, enim in elementum lobortis, magna magna auctor augue, id lobortis leo nibh eu felis. Lorem ipsum dolor sit amet."
//   },
//   {
//     id: "3",
//     author: "Author 3",
//     title: "Today is the sunny day!",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique gravida elementum. Curabitur nec vulputate neque. Nunc ut arcu felis. Sed vulputate dolor velit, in mollis massa ultricies sagittis. Duis commodo, enim in elementum lobortis, magna magna auctor augue, id lobortis leo nibh eu felis. Lorem ipsum dolor sit amet."
//   },
//   {
//     id: "4",
//     author: "Author 4",
//     title: "Today is the sunny day!",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique gravida elementum. Curabitur nec vulputate neque. Nunc ut arcu felis. Sed vulputate dolor velit, in mollis massa ultricies sagittis. Duis commodo, enim in elementum lobortis, magna magna auctor augue, id lobortis leo nibh eu felis. Lorem ipsum dolor sit amet."
//   },
//   {
//     id: "5",
//     author: "Author 5",
//     title: "Today is the sunny day!",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique gravida elementum. Curabitur nec vulputate neque. Nunc ut arcu felis. Sed vulputate dolor velit, in mollis massa ultricies sagittis. Duis commodo, enim in elementum lobortis, magna magna auctor augue, id lobortis leo nibh eu felis. Lorem ipsum dolor sit amet."
//   }
// ]


const articles = document.getElementById("articles")
const spinner = `<div id="spinner" class="spinner-border" role="status"></div>`

/*
  1. Показать spinner когда у нас загружаются данные
  2. Если данные есть, то мы для каждого post-item, заполняем article
*/

const loadPosts = async () => {
  articles.innerHTML = spinner;
  const postItemsRequest = fetch('https://jsonplaceholder.typicode.com/posts');

  console.log('postItemsRequest', postItemsRequest)
  const spinnerId = document.getElementById('spinner')
  
  postItemsRequest.then((response) => response.json()).then((postItems) =>{
    spinnerId.remove()
    console.log('postItems', postItems)

    postItems.map((post) => {

      const onClick = () =>{
        console.log('post:', {
          id: post.id,
        })
        window.location = `http://127.0.0.1:5500/post.html?id=${post.id}`

      }

      const onMouseOver = (element) => {
        element.style.cursor="pointer"
        element.style.pointerEvents="auto"
      }    

      let isImgLoading = true
      fetch(`https://picsum.photos/id/${post.id}/265`).then((response) => response.url).then((imgSrc)=>{
        isImgLoading = false;
        const spinner = document.getElementById('img-spinner-' + post.id)
        if (spinner) spinner.remove()
        const postItem = document.getElementById('postItem-' + post.id)
        postItem.insertAdjacentHTML('beforeend', `<img width="265px" height="265px" class="rounded" src="${imgSrc}" alt="New image" />`)
        postItem.lastChild.addEventListener('mouseover', onMouseOver(postItem.lastChild))
        postItem.lastChild.addEventListener('click', onClick)
      });


      const articleHtml = document.createElement('div')

      articleHtml.setAttribute('id', `postItem-${post.id}`)
      articleHtml.setAttribute('key',  `${post.id}`)
      articleHtml.setAttribute('class', "mt-4 pb-4 d-flex justify-content-between align-items-center rounded border-bottom")

      articleHtml.innerHTML = 
      `<div style="margin-right: 84px"> 
        <h6 id="author" style="font-size: 14px; line-height: 18px; font-weight: 500; font-family: Inter"> Author ${post.userId}</h6>
        <h3 id="title" style="margin: 36px 0px; font-size: 28px; line-height: 34px; font-weight: 700; font-family: Inter"> ${post.title}</h3>
        <p id="description" style="font-size: 16px; line-height: 22px; font-weight: 400; font-family: Inter">${post.body}</p>
      </div>
      <div id="img-spinner-${post.id}" class="spinner-border" role="status" ></div>
      `

      articleHtml.childNodes.forEach(child=>child.childNodes.forEach(ch => {
        if (ch.childNodes.length !== 0){
          ch.addEventListener('mouseover', onMouseOver(ch))
          ch.addEventListener('click', onClick)
        }
      }))
      
      articles.appendChild(articleHtml)
    })

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

loadPosts()
