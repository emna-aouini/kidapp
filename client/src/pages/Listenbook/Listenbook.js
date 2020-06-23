import React, { Component } from "react";
import { connect } from "react-redux";
import Cardbook from "../../components/cardlistenbook";
import { getlistengbooks } from "../../actions/index";
import "./Listenbook.css";

class Listenbooks extends Component {
  componentDidMount() {
    this.props.getlistengbooks();
  }
  render() {
    return (
      <div className="cards">
        {this.props.listenbooks&&this.props.listenbooks.map(el => (
          <Cardbook card={el}></Cardbook>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ listenbooks: state.listenbooks });

export default connect(mapStateToProps, { getlistengbooks })(Listenbooks);
