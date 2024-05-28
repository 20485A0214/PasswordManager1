import {Component} from 'react'

import './index.css'

import User from '../LoginContainer'

class YourPassword extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {userList} = this.props
    const {searchInput} = this.state
    const searchResults = userList.filter(
      eachUser =>
        eachUser && eachUser.name && eachUser.name.includes(searchInput),
    )
    return (
      <div className="your-container">
        <div className="sub-your-container">
          <div className="sub2-you-container">
            <p className="your-paragraph">Your Passwords</p>
            <button type="button" className="password-button">
              {userList.length}
            </button>
          </div>
          <div className="sub2-you-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-container"
            />
            <input
              type="search"
              placeholder="search"
              className="your-input"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr className="horizantal-line" />
        <div className="checkbox-container">
          <input type="checkbox" id="your-checkbox" />
          <label htmlFor="your-checkbox" className="label-paragraph">
            Show Passwords
          </label>
        </div>
        {userList.length > 0 && ( // Use short-circuiting for efficiency
          <ul className="unordered-list">
            {searchResults.map(eachUser => (
              <User key={eachUser.id} eachUser={eachUser} />
            ))}
          </ul>
        )}

        {!userList.length && ( // Negate the condition for readability
          <>
            {' '}
            {/* Wrap multiple elements in a fragment */}
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-passwords"
            />
            <p>No Passwords</p>
          </>
        )}
      </div>
    )
  }
}

export default YourPassword
