document.addEventListener("DOMContentLoaded", () => {
  //Getting the list of books:
  getAllBooks();
});

// search button
let searchForm = document.querySelector(".search-form");
// adding event lisrener to the serch btn
document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

// to make the search function so that the input is displayed
const userCard = document.querySelector('[data-user-template]')
const userCardContainer =document.querySelector('.user-cards')
const searchInput =document.querySelector('#search-box')

// // looping throu the books and hide all that dont match the input
let books = []
searchInput.addEventListener('input', (event)=>{
  const value = event.target.value.toLowerCase()
  books.forEach(book =>{
    const isVisible = book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value) //this is to make only the author or the title name visible
    // book.element.classList.toggle('hide', !isVisible) // if the user is visible display it if not hide it
    if(isVisible ){  
    console.log(isVisible)
    bookList(book)
    console.log(book)
  }
  })
  // console.log(books)
})
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




// adding default prevent on the buttons
// document.querySelector('button').addEventListener('submit',(event) => {event.preventDefault()})

window.onscroll = () => {
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

// adding events on the user icon for openning and closing
let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
});

document.querySelector("#close-login-btn").addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// form submition button 
document.querySelector('#form').addEventListener('submit', (event)=>event.preventDefault())


// Book feature
function getAllBooks() {
  fetch("http://localhost:3000/books")
  .then((resp) => resp.json())
  .then((data) => 
  {
    data.forEach((book) => { books.push(book)
      bookList(book)})
  }
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

// function for all the swiper of books, reviews and reviews
function swiper(className){
  let swiperSlider = new Swiper(className, {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
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
  })
  return swiperSlider
}
swiper(".blogs-slider")
swiper(".books-slider")
swiper('.reviews-slider')
// swiper('.featured-slider')


// the subscribe button
document.getElementById('check').addEventListener('submit', (e)=> e.preventDefault())
let popUp = document.getElementById('popup')

function openPopup(){
  popUp.classList.add('open-popup') //adding a class

}
function closePopup(){
  popUp.classList.remove('open-popup')
}


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
  setTimeout(loader, 2500);
}
fadeOut();
