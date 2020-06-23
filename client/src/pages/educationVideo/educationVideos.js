import React, { Component } from "react";
import { connect } from "react-redux";
import CardEd from "../../components/cardEducation";
import { geteducationVideos } from "../../actions/index";
import "./educationVideo.css";
import ReactDOM from "react-dom";

import { MultiSelect } from "@progress/kendo-react-dropdowns";

class EducationVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langue: ["choisir la langue", "français", "anglais", "arabe"],
      valuelangue: "choisir la langue ",
      categories:["choisir la categories","mathematique","alphabet","histoire"],
      valuecategorie:"choisir la categories",
      isloading: true
    };
  }

  componentDidMount() {
    this.props.geteducationVideos();
  }
  render() {
    return (
      <div className="pageeducation">
      <div className='select'>
        <select
          placeHolder="choisir la langue"
          onChange={e => this.setState({ valuelangue: e.target.value })}
          style={{ width: "20%", marginRight:'2%'}}
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
        { !this.props.educationVideos? 'is Loading':
        <div className="cards">
          {(this.state.valuelangue === "choisir la langue" || this.state.valuecategorie==="choisir la categories" )
            ? this.props.educationVideos && this.props.educationVideos.map(el => (
                <CardEd key={el._id} card={el}></CardEd>
              ))
            : this.props.educationVideos
                .filter(el => (el.lang === this.state.valuelangue && el.theme===this.state.valuecategorie))
                .map(el => <CardEd key={el._id} card={el}></CardEd>)}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ educationVideos: state.educationVideos });

export default connect(mapStateToProps, { geteducationVideos })(
  EducationVideos
);
