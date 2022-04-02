import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    linkListUser: 1,
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  async handleNextListUser() {
    let { linkListUser } = this.state;
    linkListUser += 1;
    let res = await axios.get(
      `https://reqres.in/api/users?page=${linkListUser}`
    );
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  async handlePrivousListUser() {
    let { linkListUser } = this.state;
    linkListUser -= 1;
    let res = await axios.get(
      `https://reqres.in/api/users?page=${linkListUser}`
    );
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list user</div>
        <ul className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <li
                  className="child"
                  d
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {item.id} - {item.first_name} {item.last_name}
                </li>
              );
            })}
        </ul>
        <div className="control-btn">
          <button
            className="privous-btn"
            onClick={() => this.handlePrivousListUser()}
          >
            Privous
          </button>
          <button
            className="next-btn"
            onClick={() => this.handleNextListUser()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
