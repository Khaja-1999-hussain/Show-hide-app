// Write your code here
/* import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}
  showFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }
  showLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }
  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <div>
              <button
                className="button"
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>
              {isFirstName && <p className="name">Joe</p>}
              <button
                className="button"
                type="button"
                onClick={this.showLastName}
              >
                Show/Hide Lastname
              </button>
              {isLastName && <p>Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
*/

// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              onClick={this.firstName}
              className="btn-style"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name-card"> Joe</p> : ''}
          </div>
          <div className="card-container">
            <button onClick={this.lastName} className="btn-style" type="button">
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
