const redux = require("redux")
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require("redux-logger")
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'



function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}


/*  1.reducer-- specify how the app's state changes in response to actions sent to the store 
    2.Function that accepts state and actions as arguments, adn return the next
    state of the application
    (previousState,action) => newState
*/

// const initialState = {
//     numOfCakes:10,
//     numOfCreams:20

// }
const initialCakeState = {
    noOfCakes: 10
}

const initialIceCreamState = {
    noOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams - 1
        }
        default: return state
    }
}

/* redux store
1. ones store for the entire application
Responsiblities-
    1.HOlds applications state
    2.Allows access to state via getState()
    3.Allows stat to be updated via dispatch(action)
    4.Registers listeners via subscribe(listener)
    5.Handles unregistering of listeners via the function returned by subscribe(listener)
*/
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

// did by myslef
// const redux = require("redux")
// const createStore = redux.createStore


// const BUY_ICECREAMS = 'BUY_ICECREAMS'

// function buyIceCreams() {
//     return {
//         type: BUY_ICECREAMS
//     }
// }

// const initialState = {
//     numOfIceCreams: 20
// }


// const reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case BUY_ICECREAMS: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state

//     }
// }


// const store = createStore(reducer)
// console.log("Initital State", store.getState());
// const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))
// store.dispatch(buyIceCreams())
// store.dispatch(buyIceCreams())
// store.dispatch(buyIceCreams())
// unsubscribe()



