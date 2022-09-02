let searchForm = document.querySelector('.search-form');

// adding event lisrener to the serch btn
document.querySelector('#search-btn').addEventListener('click', () =>{
  searchForm.classList.toggle('active');
})

// adding default prevent on the buttons
// document.querySelector('button').addEventListener('submit',(event) => {event.preventDefault()})


window.onscroll = () =>{
    // searchForm.classList.remove('active');
    if(window.scrollY > 80){
      document.querySelector('.header-2').classList.add('active');
    }else{
      document.querySelector('.header-2').classList.remove('active');
    }
}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

// adding events on the form
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').addEventListener('click',() =>{
  loginForm.classList.toggle('active');
})

document.querySelector('#close-login-btn').addEventListener('click',() =>{
  loginForm.classList.remove('active');
})


//https://swiperjs.com/demos#slides-per-view
let swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Book feature
document.addEventListener("DOMContentLoaded", () => {//Getting the list of books:
  getaAllBooks()
  // renderContent()
});

function getaAllBooks(){
  fetch("http://localhost:3000/books")
  .then(resp => resp.json())
  .then(data => data.forEach (books =>{
    renderContent(books)
  }))

//   // .then(function(data){
//   //   renderContent(data.message)
//   // })
//   // 
//   .then(data => data.forEach (books =>
//   //   // console.log(books)
//     renderContent(books)
//     // renderBooks(books)
//     // renderBooksInLst(books)
//     // generateBookList(books)
//     // .catch(function(books){
//     //   console.log(books)
//     // })
//   ))
}


/*** lets try it in a list */
// function renderBooksInLst (books){
//   const listCard = document.createElement('li')
//   listCard.innerHTML = `
//   <div class="icons">
//   //     <a href="#" class="fas fa-search"></a>
//   //     <a href="#" class="fas fa-heart"></a>
//   //     <a href="#" class="fas fa-eye"></a>
//   //   </div>
//   //   <div id="image">
//   //     <img src="${books.img_url}" alt="">
//   //   </div>
//   //   <div id="content">
//   //     <h3>${books.title}</h3> 
//   //     <h5>${books.author}</h5>
//   //     <p>${books.description}</p>
//   //     <div class="price">$ ${books.price}</div>
//   //     <a href="#" class="btn" id="btn">Like</a>
//   //   </div>
//   `
//   document.querySelector('.swiper-slide box').appendChild(listCard)
// }

// targeting elements and appending it to a list
// function generateBookList(books){
//   const parentDiv = document.querySelector('.swiper-slide box')
//   const listCard = document.querySelector('li')
//   const divImage = document.querySelector('#image img')
//   divImage.src = books.img_url

//   // const divContect = document.querySelector('#content')
//   // const title = document.querySelector('h3').textContent = books.title
//   // const author = document.querySelector('h5').textContent = books.author
//   // const descrip= document.querySelector('#des').textContent = books.description
//   // const price = document.querySelector('.price').textContent = `Ksh ${books.price}`
//   // const btn = document.querySelector('#btn')
//   // divContect.append(title,author,descrip,price,btn)

//   // listCard.append(divImage,divContect)
//   // parentDiv.appendChild(listCard)


//   /*** this isnt not working also */
//   const divContect = document.querySelector('#content')
//   divContect.innerText = document.querySelector('h3').textContent = divContect.title
//   divContect.innerText = document.querySelector('h5').textContent = books.author
//   divContect.innerText = document.querySelector('p').textContent = books.description
//   divContect.innerText = document.querySelector('.price').textContent = `Ksh ${books.price}`

//   listCard.append(divImage,divContect)
//   parentDiv.appendChild(listCard)
// }
// generateBookList()
// console.log(generateBookList())

function renderContent(books){
  const parentDiv = document.querySelector('.swiper-slide box')
    const card = document.querySelector('.card')
    const divImage = document.querySelector('#image img')
    divImage.src = books.img_url
//     // parentDiv.appendChild(divImage)

// //  /*** this only displays the 1st object and mixes up the dscription */
//    const divContect = document.querySelector('#content')
//    const title = document.querySelector('h3').textContent = books.title
//    const author = document.querySelector('h5').textContent = books.author
//    const descrip= document.querySelector('#des').textContent = books.description
//    const price = document.querySelector('.price').textContent = `Ksh ${books.price}`
//   //  const btn = document.querySelector('#btn')
//    divContect.append(title,author,descrip,price )
// //   //  parentDiv.appendChild(divContect , divImage)

//    card.append(divImage,divContect)
//    parentDiv.appendChild(card)


/** withot appending and targeting each element it only brings the last object */
  // const divImage = document.getElementById("#image img")
  // divImage.src = document.getElementById('#image')

  document.querySelector('#content h3').textContent = books.title
  document.querySelector('#content h5').textContent = books.author
  document.querySelector('#content p').textContent = books.description
  document.querySelector('#content .price').textContent = `Ksh ${books.price}`
  
}
// console.log(renderContent())

/*** it doesnt work and it doesnt displany anything */
// function renderBooks(books){
//   const parentDiv = document.createElement('div')
//   parentDiv.innerHTML = `
//   <div class="icons">
//     <a href="#" class="fas fa-search"></a>
//     <a href="#" class="fas fa-heart"></a>
//     <a href="#" class="fas fa-eye"></a>
//   </div>
//   <div id="image">
//     <img src="${books.img_url}" alt="">
//   </div>
//   <div id="content">
//     <h3>${books.title}</h3> 
//     <h5>${books.author}</h5>
//     <p>${books.description}</p>
//     <div class="price">$ ${books.price}</div>
//     <a href="#" class="btn" id="btn">Like</a>
//   </div>
//   `
//   document.querySelector('.swiper-slide box').appendChild(parentDiv)
// }
// renderBooks()
  

 
// const divImage = document.querySelector('#image')
// const divContent = document.querySelector('#content')
// function generateBookList(bookID){
  // const image = document.createElement('img')
    // // image.src = books.img_url
    // image.setAttribute('src',books.img_url)
    // divImage.append(image)

//     const image = document.createElement('img')
//     image.src = books.img_url
//     divImage.append(image)
  
//     divContent.innerHTML = ""
//     const title = document.createElement('h3')
//     title.textContent = books.title
//     divContent.append(title)
  
//     const author = document.createElement('h5')
//     author.textContent = books.author
//     divContent.append(author)
  
//     const discrip = document.createElement('p')
//     discrip.textContent = books.description
//     divContent.append(discrip)
  
//     const price = document.querySelector('.price')
//     price.innerHTML = '<span>' + books.price + '</span>'
//     divContent.append(price)})
//   })
// }



// swiper for the book features
let swiperBook = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",  /**https://swiperjs.com/swiper-api#events */
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

//  swipe for reviews
let swiperReview = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// swipe for blog
let swiperBlog = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// read more btn for blog
const readMore = document.querySelector('#btn')
const text = document.querySelector('#text')
readMore.addEventListener('click', ()=>{
  text.classList.toggle('show-more')
})

// loging
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 1000);
}
fadeOut()





// lets see if this will work

// const booksList = (bookID)=>{
//   fetch(`http://localhost:3000/books/${bookID}`) 
//   .then(resp => resp.json()) 
//   .then((bookInfo) => {
//     const divImage = document.querySelector('#image img')
//     divImage.src = bookInfo.img_url

//     const divContent = document.querySelector('#content')
//     const title = document.createElement('h3')
//     title.textContent = books.title
//     divContent.append(title)
      
//     const author = document.createElement('h5')
//     author.textContent = books.author
//     divContent.append(author)
      
//     const discrip = document.createElement('p')
//     discrip.textContent = books.description
//     divContent.append(discrip)
      
//     const price = document.querySelector('.price')
//     price.innerHTML = '<span>' + books.price + '</span>'
//     divContent.append(price)
//   })
// }

// function generateBookList(books) {
//   for(let book of books){
//     const bookList = document.getElementById("list")
//     // bookList.textContent = book.title;
//     bookList.id = book.id;
//     bookList.appendChild(booksList())
    
//   }
// }






 

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("http://localhost:3000/books")
//   .then(res => res.json)
//   .then(books => 
//     // console.log(books))
//     {renderContent(books)})
// })


// function renderImage(booksImage){
//   const divImage = document.querySelector('#image img')
//   divImage.src = booksImage.img_url
// }
// renderImage()


// lets try to go at it as if its a js file by creating a data.js file
// function renderContent(){
//   bookStore.books.forEach(booksContent =>{
//     const parentDiv = document.querySelector('.swiper-slide box')
//     // const parentUl = document.querySelector('#book-list')

//     const li = document.createElement('li')
//     const divImage = document.createElement('div')
//     divImage.id ='image'
//     const img = document.createElement('img')
//     divImage.append(img)

//     const divContect = document.createElement('div')
//     divContect.id = 'content'
//     const h3 = document.createElement('h3')  
//     const h5 = document.createElement('h5')
//     const p = document.createElement('p')
//     const divPrice = document.createElement('div')
//     divPrice.className = 'price'
//     const a = document.createElement('a')
//     a.className ='btn'
//     divContect.append(h3,h5,p,divPrice,a)

//     img.src = booksContent.img_url
//     h3.textContent = booksContent.title
//     h5.textContent =booksContent.author
//     p.textContent =booksContent.description
//     divPrice.textContent = booksContent.price
//     a.textContent = 'like'
    
//     li.append(divImage,divContect)
//     // parentUl.appendChild(li)
//     parentDiv.appendChild(li)
//   })
// }
// renderContent()
// console.log(renderContent())

// const bookCard = booksContent =>{
//   const parentDiv = document.querySelector('.swiper-slide box')

//   const li = document.createElement('li')

//   const divImage = document.createElement('div')
//   divImage.id ='image'
//   const img = document.createElement('img')
//   divImage.append(img)

//   const divContect = document.createElement('div')
//   divContect.id = 'content'
  
//   const h3 = document.createElement('h3')  
//   const h5 = document.createElement('h5')
//   const p = document.createElement('p')
//   const divPrice = document.createElement('div')
//   divPrice.className = 'price'
//   const a = document.createElement('a')
//   a.className ='btn'
//   divContect.append(h3,h5,p,divPrice,a)

//  img.src = booksContent.img_url
//   h3.textContent = booksContent.title
//   h5.textContent =booksContent.author
//   p.textContent =booksContent.description
//   divPrice.textContent = booksContent.price
//   a.textContent = 'like'
    
//   li.append(divImage,divContect)
//   parentDiv.appendChild(li)
// }
// bookStore.books.forEach(bookCard)





