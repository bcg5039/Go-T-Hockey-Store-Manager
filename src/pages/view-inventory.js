import React from 'react'
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'
import { connect } from 'react-redux'

const ViewInventory = function(props) {
  return (
    <div>
      <NavHeader title="Go T Hockey Store - Inventory" />
      <div className="bg-black">
        <article className="pa4 pt6 pa5-ns">
          <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
            <li className="ph3 pv3 bb b--light-silver bg-green">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[0].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[0].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-green">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[1].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[1].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-green">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[2].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[2].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-green">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[3].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[3].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-orange">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[4].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[4].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-orange">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[5].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[5].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-orange">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[6].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[6].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-orange">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[7].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[7].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-red">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[8].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[8].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-red">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[9].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[9].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-red">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[10].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[10].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-red">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[11].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[11].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-yellow">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[12].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[12].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-yellow">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[13].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[13].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-yellow">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[14].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[14].InStockSupplyQuantity[0]} In
                  Stock
                </div>
              </div>
            </li>
            <li className="ph3 pv3 bb b--light-silver bg-yellow">
              <div className="dt dt--fixed w-100">
                <div className="dtc tl ml3">
                  {props.stickData[15].SellerSKU[0]}
                </div>
                <div className="dtc tr mr3">
                  {props.stickData[15].InStockSupplyQuantity[0]} In
                  Stock
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

function mapStateToProps(state) {
  return {
    stickData: state.stickData
  }
}

const connector = connect(mapStateToProps)

export default connector(ViewInventory)

// const li = item => {
//   return (
//
//   )
// }

//<li class="ph3 pv3 bb b--light-silver">Maine Coon</li>
