import { SWAPI_ROOT, SWAPI_PEOPLE, HTTPS } 
    from "@constants/ApiConstants"
import { SWAPI_PARAM_PAGE } from "../constants/ApiConstants"


export const getPeopleId = (url) => {
    return url
        .replace(HTTPS+SWAPI_ROOT+SWAPI_PEOPLE, '')
        .slice(1, -1)
}

export const getPeopleImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
}

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length)
    return Number(id)
}