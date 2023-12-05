import { AppState } from "../AppState.js";


class SnacksService {
    selectCurrentSnack(imgUrl) {
        console.log('🍫 selected', imgUrl);
        const selectedSnack = AppState.snacks.find(snack => snack.imgUrl == imgUrl)
        console.log('🍭', selectedSnack)
    }
    addMoney(amount) {
        let currentMoney = AppState.money
        currentMoney += amount
    }
}

export const snacksService = new SnacksService  