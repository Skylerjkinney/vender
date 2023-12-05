import { AppState } from "../AppState.js"


export class snack {

    name
    price
    imgUrl

    constructor(name, price, imgUrl) {
        this.name = name
        this.price = price
        this.imgUrl = imgUrl
    }
    get snackImg() {
        return `<span><img src='${this.imgUrl}'></span>`
    }
}

