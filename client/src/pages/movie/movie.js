import React, { Component } from "react";
import { connect } from "react-redux";
import Cardmovie from "../../components/cardmovie";
import { getMovie } from "../../actions/index";
import "./movie.css";

class Movie extends Component {

  componentDidMount() {
    this.props.getMovie();
  }

  render() {
    return (
      <div className="cards">
        {this.props.movie&&this.props.movie.map(el => (
          <Cardmovie key={el._id} card={el}></Cardmovie>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ movie: state.movie });

export default connect(mapStateToProps, { getMovie })(Movie);
