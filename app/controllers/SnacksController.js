import { AppState } from "../AppState.js";
// import { snack } from "../models/SnackModel.js";
import { snacksService } from "../services/SnacksService.js";
//NOTE I need to import the services here

export class SnacksController {
    constructor() {
        console.log('snacks eaten in controller')
        this.drawSnacksImg()
    }
    drawSnacksImg() {
        const snacks = AppState.snacks
        let content = ''
        snacks.forEach(snack => content += snack.snackImg)
        document.getElementById('snack-view').innerHTML = content

    }
    selectCurrentSnack(imgUrl) {
        console.log('Selected Snack', imgUrl);
        snacksService.selectCurrentSnack(imgUrl)
    }

}
