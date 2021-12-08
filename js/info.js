import * as constants from './constants.js'
import {} from './utilities.js'





// fetch movie credits for a particular movie
async function fetchCredits() {

    try {
        let response = await fetch(constants.creditsUrl())
        let credits = await response.json()

    }
}