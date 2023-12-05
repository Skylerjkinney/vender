import { snack } from './models/SnackModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  snacks = [
    new snack({ name: 'raisins', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1608842850202-06e70ead4c10?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new snack({ name: 'fanta', price: 1.00, imgUrl: 'https://images.unsplash.com/photo-1566846128021-b940b0eec910?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' })
  ]

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())