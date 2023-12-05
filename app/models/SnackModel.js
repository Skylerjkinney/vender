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
        return `<span class='col-2 rounded border border-solid'><span>${this.name} , ${this.price}</span><img src='${this.imgUrl}'></span>`
    }
}

