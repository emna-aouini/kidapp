import React, { Component } from "react";
import { connect } from "react-redux";
import Cardgame from "../../components/cardGames";
import { geteducationGames } from "../../actions";
import "./educationGames.css";

class EducationGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langue: ["choisir la langue", "français", "anglais"],
      valuelangue: "choisir la langue ",
      categories: [
        "choisir la categories",
        "Math",
        "culture",
        
      ],
      valuecategorie: "choisir la categories",
      isloading: true
    };
  }
  componentDidMount() {
    console.log("working");
    this.props.geteducationGames();
  }

  render() {
    return (
      <div >
        <div className="select">
          <select
            placeHolder="choisir la langue"
            onChange={e => this.setState({ valuelangue: e.target.value })}
            style={{ width: "20%", marginRight: "2%" }}
          >
            {this.state.langue.map(el => (
              <option value={el}>{el}</option>
            ))}
          </select>
          <select
            placeHolder="choisir la langue"
            onChange={e => this.setState({ valuecategorie: e.target.value })}
            style={{ width: "20%" }}
          >
            {this.state.categories.map(el => (
              <option value={el}>{el}</option>
            ))}
          </select>
        </div>
        <div className="cardsGames" >
          {(this.state.valuelangue === "choisir la langue" ||
          this.state.valuecategorie === "choisir la categories")
            ? this.props.educationGames &&
              this.props.educationGames.map(el => (
                <Cardgame key={el._id} card={el}></Cardgame>
              ))
            : this.props.educationGames &&
              this.props.educationGames
                .filter(
                  el =>
                    el.lang === this.state.valuelangue &&
                    el.categorie === this.state.valuecategorie
                )
                .map(el => <Cardgame key={el._id} card={el}></Cardgame>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ educationGames: state.educationGames });

export default connect(mapStateToProps, { geteducationGames })(EducationGames);
