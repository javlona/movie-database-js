// API url 

const API_KEY = '5b1b515986ab2e1bc528fe6b762fd9a9'
const url = ''
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
const imgPath = 'https://image.tmdb.org/t/p/w1280'



// DOM elements
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')


// fetch api
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