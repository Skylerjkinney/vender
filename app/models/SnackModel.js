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
        return
        `<div class="col">
            <button class="btn fs-3 ${this.name}" title="${this.name}" onclick="">${this.price}</button>
        </div>`
    }
}

