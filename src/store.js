import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { merge } from 'ramda'
import logo from './Go-T-Hockey-Logo.jpg'
import lowInventory from './reducers/low-inventory'
import orderRep from './reducers/order-rep'

const store = createStore(
  combineReducers({
    app,
    stickData,
    lowInventory,
    orderRep
  }),
  applyMiddleware(thunk)
)

export default store

fetch('http://localhost:4000/')
  .then(res => res.json())
  .then(data => store.dispatch({ type: 'SET', payload: data }))
  .catch(err => console.log(err))

// reducers
function stickData(
  state = [
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] },
    { TotalSupplyQuantity: ['0'], InStockQuantity: ['0'], SellerSKU: [''] }
  ],
  action
) {
  switch (action.type) {
    case 'SET':
      return merge(state, action.payload)
    default:
      return state
  }
}

function app(state = { title: 'Go T Hockey Store', logo }, action) {
  switch (action.type) {
    case 'SET_APP_TITLE':
      return merge(state, { title: action.payload })
    default:
      return state
  }
}
