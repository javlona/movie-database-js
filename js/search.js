import {showSearched} from "./app.js"
import * as constants from './constants.js'

function getSearchedWord() {
    console.log(localStorage.searchedWord)
}


window.addEventListener('load', () => {

    getSearchedWord()
    showSearched()

})