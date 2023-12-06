import { AppState } from "../AppState.js";


class SnacksService {
    selectCurrentSnack(imgUrl) {
        console.log('🍫 selected', imgUrl);
        const selectedSnack = AppState.snacks.find(snack => snack.imgUrl == imgUrl)
        console.log('🍭', selectedSnack)
    }
    addMoney(amount) {
        AppState.money += amount
        console.log(AppState.money)
    }
    buySnack(amount) {
        if (AppState.money >= )
    }
}

export const snacksService = new SnacksService()  