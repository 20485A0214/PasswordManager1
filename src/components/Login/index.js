import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPassword from '../YourPasswords'
import './index.css'

class Login extends Component {
  state = {
    userList: [],
    website: '',
    userName: '',
    password: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      userName,
      password,
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {website, userName, password, userList} = this.state
    console.log(website)
    console.log(userName)
    console.log(password)
    console.log(userList)

    return (
      <div className="user-card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="login-main-container">
          <form className="form-container" onSubmit={this.onAddContact}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="form-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-image"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="form-input"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="form-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="website"
                className="website-image"
                placeholder="Enter Website"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="form-input"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="form-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="website-image"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="form-input"
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="form-button" key={userList.id}>
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="main-image-container"
          />
        </div>
        <YourPassword userList={userList} />
      </div>
    )
  }
}

export default Login
