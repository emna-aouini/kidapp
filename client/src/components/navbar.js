import React, { Component } from "react";
import { Link } from "react-router-dom";
import parent from "../assets/intro/parent.png";
import child from "../assets/intro/child.png";
import logo from "../assets/home/logo.png";
import axios from "axios";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import { updateChild } from "../actions/index";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child: {
        idparent: this.parseJwt(localStorage.getItem("token")).id,
        name: "",
        age: ""
      },
      loading: false,
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  logout = () => {
    localStorage.removeItem("token");
  };
  parseJwt = token => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };

  componentDidMount() {
    axios
      .get("users/current", this.configtoken())
      .then(res => res.data)
      .catch(err => err.response.data);
  }
  configtoken = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    if (token) {
      config.headers["Authorization"] = token;
      console.log(this.parseJwt(token));
    }
    // const config = { headers: { common: { Authorization: token } } };
    console.log(config);
    return config;
  };
  handleChangemodal = e => {
    this.setState({
      child: { ...this.state.child, [e.target.name]: e.target.value }
    });
  };
  render() {
    const { visible, loading } = this.state;

    return (
      <div className="globalnav">
        <nav class="navbar navbar-expand-lg ">
        <Link to="/home">
          <img src={logo} alt="logo" width="135px" height="80px" />
          </Link>
       
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Education
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to="/home/edVideo"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Video Education</button>
                  </Link>
                  <Link
                    to="/home/edGames"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Games Education</button>
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Entertaiment
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to="/home/movie"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">watch movie</button>
                  </Link>
                  <Link
                    to="/home/game"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Play games</button>
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Books
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to="/home/readingbooks"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Read Books</button>
                  </Link>
                  <Link
                    to="/home/listen"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Listen book</button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div class="form-inline my-1 my-lg-1">
            <div className="authentification">
              <div className="parentsection">
                <div className="parentaccount">
                  <img  class="parent" src={parent} style={{ width: "30px",height:"30px" }} />                
                 
                  <span className="childenfanttext">
                    {this.parseJwt(localStorage.getItem("token")).name}
                  </span>
                </div>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">
                      Setting
                    </a>
                    <a class="dropdown-item" href="#">
                      Premium
                    </a>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button
                        onClick={this.logout}
                        class="dropdown-item"
                        href="#"
                      >
                        Log out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="parentsection child">
                <img class="child" src={child} style={{ width: "40px",height:"40px" }} />
                <span className="childenfanttext">Enfant </span>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                 { this.parseJwt(localStorage.getItem("token")).childs?
                 this.parseJwt(localStorage.getItem("token")).childs.map(el => (
                          <button
                            class="btn btn-secondary "
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {el.name}
                          </button>))
                      : "il ya pas encore des anfants"}
                  </div>
                </div>
              </div>
              <div>
                 <div>
                  <Button
                    class="btn btn-light"
                    style={{
                      color: " black",
                      background: " white",
                      borderColor: "white",
                      width:"100px",
                      padding:"0px"
                      
                    }}
                    type="primary"
                    onClick={this.showModal}
                  >
                    ajouter enfant
                  </Button>
                  <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                      <Button key="back" onClick={this.handleCancel}>
                        Return
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        loading={loading}
                        onClick={() => {
                          this.handleOk();
                          this.props.updateChild(this.state.child);
                        }}
                      >
                        Submit
                      </Button>
                    ]}
                  >
                    <span style={{ color: "black" }}>Name:</span>
                    <input
                      type="text"
                      name="name"
                      value={this.state.child.name}
                      onChange={e => this.handleChangemodal(e)}
                    />
                    <span style={{ color: "black" }}>Age:</span>
                    <input
                      type="text"
                      name="age"
                      value={this.state.child.age}
                      onChange={e => this.handleChangemodal(e)}
                    />
                  </Modal>
                </div> 
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({ childs: state.childs });

export default connect(mapStateToProps, { updateChild })(Navbar);
