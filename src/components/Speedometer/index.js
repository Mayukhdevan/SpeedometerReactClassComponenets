import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () =>
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : null,
    )

  applyBreak = () =>
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : null,
    )

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h2 className="sub-heading">Speed is {speed}mph</h2>
        <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="btn-accelerate"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button type="button" className="btn-break" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
