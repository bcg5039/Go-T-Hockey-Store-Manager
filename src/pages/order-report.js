import React from 'react'
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'
import { connect } from 'react-redux'
import { SET_ORDER_AMT } from '../constants'

class OrderReport extends React.Component {
  componentDidMount() {
    let orderAmt = calcOrderAmt(this.props.stickData)
    this.props.dispatch({ type: SET_ORDER_AMT, payload: orderAmt })
  }
  render() {
    return (
      <div>
        <NavHeader title="Go T Hockey Store - Order Report" target="/home" />
        <div className="bg-black">
          <article className="pa4 pt6 pa5-ns">
            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
              <li className="ph3 pv3 bb b--light-silver bg-green">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[0].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[0]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-green">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[1].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[1]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-green">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[2].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[2]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-green">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[3].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[3]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-orange">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[4].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[4]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-orange">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[5].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[5]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-orange">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[6].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[6]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-orange">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[7].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[7]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-red">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[8].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[8]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-red">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[9].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[9]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-red">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[10].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[10]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-red">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[11].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[11]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-yellow">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[12].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[12]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-yellow">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[13].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[13]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-yellow">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[14].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[14]}
                  </div>
                </div>
              </li>
              <li className="ph3 pv3 bb b--light-silver bg-yellow">
                <div className="dt dt--fixed w-100">
                  <div className="dtc tl ml3">
                    {this.props.stickData[15].SellerSKU[0]}
                  </div>
                  <div className="dtc tr mr3">
                    Order Amount: {this.props.orderRep[15]}
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </div>
        <NavFooter />
      </div>
    )
  }
}

function calcOrderAmt(sticks) {
  const orderTotals = [10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 6, 6, 4, 4, 4, 4]
  let orderAmounts = []
  for (var i = 0; i < 16; i++) {
    orderAmounts[i] =
      orderTotals[i] - Number(sticks[i].InStockSupplyQuantity[0])
  }
  return orderAmounts
}

function mapStateToProps(state) {
  return {
    stickData: state.stickData,
    orderRep: state.orderRep
  }
}

const connector = connect(mapStateToProps)

export default connector(OrderReport)
