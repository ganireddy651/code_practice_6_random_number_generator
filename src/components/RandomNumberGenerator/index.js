// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    this.setState(() => ({
      number: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {number} = this.state
    console.log(number)

    return (
      <div className="random-number-bg-container">
        <div className="random-number-generator-card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              onClick={this.generateRandomNumber}
              className="button"
              type="button"
            >
              Generate
            </button>
            <p className="random-number">{number}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
