import { AppState } from "../AppState.js";
// import { snack } from "../models/SnackModel.js";
import { SnacksService } from "../services/SnacksService.js";
//NOTE I need to import the services here

export class SnacksController {
    constructor() {
        console.log('snacks eaten in controller')
        this.drawSnacksImg()
    }
    drawSnacksImg() {
        const snacks = AppState.snacks
        let content = ''
        snacks.forEach(snack => content += snack.imgUrl)
        console.log('found snack', snack)
        document.getElementById('snack-view').innerHTML = content
    }
    selectCurrentSnack(imgUrl) {
        console.log('Selected Snack', imgUrl);
        SnacksService.selectCurrentSnack(imgUrl)
    }

}
