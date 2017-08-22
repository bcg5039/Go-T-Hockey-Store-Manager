import React from 'react'
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { SET_LOW_INV_STICKS } from '../constants'

class Alerts extends React.Component {
  componentDidMount() {
    let lowSticks = findLowInventory(this.props.stickData)
    this.props.dispatch({ type: SET_LOW_INV_STICKS, payload: lowSticks })
  }
  render() {
    return (
      <div>
        <NavHeader title="Go T Hockey Store - Alerts" target="/home" />
        <div className="bg-black tc">
          <article className="pa3 pa5-ns">
            <h1 className="f4 bold center mw6 white">OUT OF STOCK!</h1>
            <ul className="list pl0 ml0 center mw6 ba b--black br2">
              {map(li, this.props.lowInvSticks)}
            </ul>
          </article>
        </div>
        <NavFooter />
      </div>
    )
  }
}

function findLowInventory(sticks) {
  let lowStickInventoryModels = []
  for (var i = 0; i < 16; i++) {
    if (sticks[i].InStockSupplyQuantity[0] === '0') {
      lowStickInventoryModels.push(sticks[i].SellerSKU[0])
    } else {
    }
  }
  return lowStickInventoryModels
}
function li(item) {
  return <li key={item} className="ph3 pv3 bb bg-red b--black">{item}</li>
}

function mapStateToProps(state) {
  return {
    stickData: state.stickData,
    lowInvSticks: state.lowInventory
  }
}

const connector = connect(mapStateToProps)

export default connector(Alerts)
