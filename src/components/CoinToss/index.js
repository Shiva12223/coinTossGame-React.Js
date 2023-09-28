// Write your code here
import {Component} from 'react'

import './index.css'

const tossHeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tossTailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResultsImage: tossHeadImage}

  tossCoin = () => {
    const {headsCount, tailsCount} = this.state
    let tossImage = ''
    const tossResults = Math.floor(Math.random() * 2)

    let increasedNewHeadCount = headsCount
    let increasedNewTailCount = tailsCount
    if (tossResults === 0) {
      tossImage = tossHeadImage
      increasedNewHeadCount += 1
    } else {
      tossImage = tossTailImage
      increasedNewTailCount += 1
    }

    this.setState({
      tossResultsImage: tossImage,
      headsCount: increasedNewHeadCount,
      tailsCount: increasedNewTailCount,
    })
  }

  render() {
    const {tossResultsImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-results-name">Heads (or) Tails</p>

          <img
            className="toss-image"
            src={tossResultsImage}
            alt="toss result"
          />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>

          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
