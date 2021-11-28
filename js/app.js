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