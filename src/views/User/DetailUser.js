import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import "./DetailUser.scss";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBackButton = () => {
    this.props.history.push(`/user`);
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <div>
        {isEmptyObj === false && (
          <div className="user-content">
            <div className="user-detail">
              <div className="user-name">
                <span>User'name:</span> {user.first_name} {user.last_name}
              </div>
              <div className="user-email">
                <span>User'email:</span> {user.email}
              </div>
              <div className="user-img">
                <img src={user.avatar} alt="" />
              </div>
            </div>
            <button
              className="back-btn"
              onClick={() => this.handleBackButton()}
            >
              Back
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(DetailUser);
