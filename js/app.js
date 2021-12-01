// get random number to randomize first 5 pages
const FIRST_5_PAGES = 5; 
function randomPage() {
    return Math.floor(Math.random() * FIRST_5_PAGES + 1)
}

let random = randomPage()
console.log(random)

// API url 
const API_KEY = '5b1b515986ab2e1bc528fe6b762fd9a9'
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${random}`
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${random}`
const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
const imgPath = 'https://image.tmdb.org/t/p/w500'



// card ui function
const createCard = (url, title, date) => {
    return `<div class="card">
                <div class="card-img">
                    <img src="${imgPath+url}" alt="">
                </div>
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${date}</p>
                </div>
            </div>`
}  


// DOM elements
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')
const sliderPopular = document.querySelector('#popular')
const sliderTrending = document.querySelector('#trending')
const nowPlaying = document.querySelector('#playing')


// fetch popular into cards
async function fetchPopular() {

    try {
        let response = await fetch(popularUrl)
        let popularData = await response.json()

        popularData.results.forEach((item, index) => {
            //console.log(item, item.id)
            let card = createCard(item.poster_path, item.title, item.release_date)
            sliderPopular.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}

// fetch now playing random
async function fetchNowPlaying() {

    try {
        let response = await fetch(nowPlayingUrl)
        let nowPlayingData = await response.json()

        console.log(nowPlayingData.results[2])

    } catch (error) {
        console.log(error)
    }

}

// fetch trending into cards
async function fetchTrending() {

    try {
        let response = await fetch(trendingUrl)
        let trendingData = await response.json()

        trendingData.results.forEach((item, index) => {
            let card = createCard(item.poster_path, item.title, item.release_date)
            sliderTrending.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}


// fetch search API
async function fetchSearchMovie() {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchWord}`

    try {
        let response = await fetch(searchUrl)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

async function showSearched() {
    let response = await fetchSearchMovie()

    
    console.log(response)
}


let searchWord;

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (search.value === "") {
        alert("enter a word")
    } else {
        searchWord = search.value
        fetchSearchMovie()
        showSearched()
    }

    console.log(searchWord)
})

// load cards on DOM
this.addEventListener('load', () => {
    fetchPopular()
    fetchTrending()
    fetchNowPlaying()

})



// menu toggler
const navLinks = document.querySelector('.links')
const menuToggle = document.querySelector('#menu')

menuToggle.addEventListener('click', () => {
    const visible = navLinks.getAttribute("data-visible")

    if (visible === "false") {
        navLinks.setAttribute("data-visible", true)

        console.log(visible)
    } else {
        navLinks.setAttribute("data-visible", false)
    }
})


//dropdown menu for slider
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }