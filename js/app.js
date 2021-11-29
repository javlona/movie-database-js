const API_KEY = '5b1b515986ab2e1bc528fe6b762fd9a9'
const url = ''
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
const trending = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`





// menu toggler
const navLinks = document.querySelector('.links')
const menuToggle = document.querySelector('#menu')

menuToggle.addEventListener('click', () => {
    const visible = navLinks.getAttribute("data-visible")

    if(visible === "false") {
        navLinks.setAttribute("data-visible", true)
        
    console.log(visible)
    } else {
        navLinks.setAttribute("data-visible", false)
    }
})