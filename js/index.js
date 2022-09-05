let searchForm = document.querySelector(".search-form");

// // to make the search function so that the input is displayed
// const userCard = document.querySelector('[data-user-template]')
// const userCardContainer =document.querySelector('[data-user-card-container]')
// const searchInput =document.querySelector('[data-search]')

// // looping throu the books and hide all that dont match the input
// let books = []
// searchInput.addEventListener('input', (event)=>{
//   const value = event.target.value.toLowerCase()
//   books.forEach(book =>{
//     const isVisible = book.title.toLowerCase().includes(value) ||
//       book.author.toLowerCase().includes(value) //this is to make only the author or the title name visible
//     book.element.classList.toggle('hide', !isVisible) // if the user is visible display it if not hide it
//   })
//   console.log(books)

// })
// //fetching
// fetch("http://localhost:3000/books")
//   .then(resp => resp.json())
//   .then(data => {
//     books = data.map(book =>{
//     const card = userCard.content.cloneNode(true).children[0]
//     const title =card.querySelector('[data-title]')
//     title.textContent = book.title
//     const author =card.querySelector('[data-author]')
//     author.textContent = book.author
//     userCardContainer.appendChild(card)
//     return {title: book.title, author: book.author, element: card}
//     // console.log(book)
//   })
//   })

// adding event lisrener to the serch btn
document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

// making the search-btn more active

// adding default prevent on the buttons
// document.querySelector('button').addEventListener('submit',(event) => {event.preventDefault()})

window.onscroll = () => {
  // searchForm.classList.remove('active');
  if (window.scrollY > 80) {
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }

  fadeOut();
};

// adding events on the form
let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

document.querySelector("#close-login-btn").addEventListener("click", () => {
  loginForm.classList.remove("active");
});

//https://swiperjs.com/demos#slides-per-view
let swiper = new Swiper(".books-slider", {
  loop: true,
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
document.addEventListener("DOMContentLoaded", () => {
  //Getting the list of books:
  getaAllBooks();
});
function getaAllBooks() {
  fetch("http://localhost:3000/books")
  .then((resp) => resp.json())
  .then((data) => data.forEach((books) => { bookList(books);})
  );
}
function bookList(book) {
  const parentDiv = document.getElementById("container");
  const div = document.createElement("div");
  div.className = "swiper-slide box";
  div.innerHTML = `
      <div class="icons">
        <a href="#" class="fas fa-search"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
      </div>
      <div id="image">
        <img src="${book.img_url}" alt=""></div>
      <div id="content">
        <h3>${book.title}</h3> 
        <h5>${book.author}</h5>
        <p id="des">${book.description}</p>
        <div class="price">Ksh${book.price}</div>
        <a href="#" class="btn" id="btn">Like</a>
      </div>`;
  // console.log(book.author)
  parentDiv.appendChild(div);
}

//  a new formart of fetching
// fetch('db.json')
// .then(resp => resp.json())
// .then(books => {
//   localStorage.setItem('db',JSON.stringify(books))
// })

//  load more for the books feature
// let content = document.querySelector('.swiper-wrapper')

// let loadMore = document.querySelector('load-more-button')

// // control how many books we display when the page 1st loads
// let initialItems = 3

// // control how many books are displayed when load more button is clickecd
// let loadItems = 3

// //function to display the 1st set of books
// function loadInitialItems(){
//   // let books = JSON.parse(localStorage.getItem('books'))
//   let out = list
//   let counter =0
//   if(counter<initialItems){
//     out += list
//   }
//   counter++  
//   // let div = document.querySelector('.featured-slider')
//   // content.insertBefore(div ,loadMore)
//   // div.innerHTML = out
// }
// loadInitialItems()


// swiper for the book features
// let swiperBook = new Swiper(".swiper-wrapper ", {
//   spaceBetween: 10,
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next" /**https://swiperjs.com/swiper-api#events */,
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     450: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });

//  swipe for reviews
let swiperReview = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
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
  grabCursor: true,
  loop: true,
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
const readMore = document.querySelector("#btn");
const text = document.querySelector("#text");
readMore.addEventListener("click", () => {
  text.classList.toggle("show-more");
});

// loging
function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 3000);
}
fadeOut();
