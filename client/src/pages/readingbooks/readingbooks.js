import React, { Component } from "react";
import { connect } from "react-redux";
import Cardbook from "../../components/cardreadbook";
import { getreadingbooks } from "../../actions/index";
import "./readingbooks.css";

class Readingbooks extends Component {
  componentDidMount() {
    this.props.getreadingbooks()
    console.log('is running')
  }
  render() {
    console.log(this.props.readingbooks);
    return (
      <div className="cards">
        {this.props.readingbooks&&this.props.readingbooks.map(el => (
          <Cardbook card={el}></Cardbook>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ readingbooks: state.readingbooks });

export default connect(mapStateToProps, { getreadingbooks })(Readingbooks);
