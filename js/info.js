import * as constants from './constants.js'
import {creditsUrl, Storage} from './utilities.js'



// get movie id from local Storage
let movId = Storage.get('movie')


// fetch movie credits for a particular movie
async function fetchCredits() {

    try {
        let response = await fetch(creditsUrl(moivId))
        let credits = await response.json()
        console.log(credits)
        
    } catch (error) {
        console.log(error)
    }

}