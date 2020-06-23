import React, { Component } from "react";
import { connect } from "react-redux";
import Cardgame from "../../components/cardGames";
import { getgames } from "../../actions";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langue: ["choisir la langue", "français", "anglais"],
      valuelangue: "choisir la langue"
    };
  }
  componentDidMount() {
    console.log("working");
    this.props.getgames();
  }

  render() {
    return (
      <div>
        <select
          placeHolder="choisir la langue"
          onChange={e => this.setState({ valuelangue: e.target.value })}
          style={{ width: "20%", marginRight: "2%" }}
        >
          {this.state.langue.map(el => (
            <option value={el}>{el}</option>
          ))}
        </select>

        <div className="cardsGames">
          {this.state.valuelangue === "choisir la langue"
            ? this.props.games &&this.props.games.map(el => (
                <Cardgame key={el._id} card={el}></Cardgame>
              ))
            : this.props.games &&
              this.props.games
                .filter(el => el.lang === this.state.valuelangue)
                .map(el => <Cardgame key={el._id} card={el}></Cardgame>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ games: state.games });

export default connect(mapStateToProps, { getgames })(Game);
