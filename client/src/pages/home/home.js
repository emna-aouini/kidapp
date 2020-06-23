import React, { Component } from "react";
import slide1 from "../../assets/home/slide1.png";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import fondhome from "../../assets/home/fondhome1.jpg";
import recommandation from "../../assets/home/recommandation.png";
import itkids from "../../assets/home/itkids.jpg";
import fleche from "../../assets/home/fleche.jpeg";
import news from "../../assets/home/news.jpg";
import cst from "../../assets/home/cst.jpg";
import disney from "../../assets/home/disney.jpg";
import recette from "../../assets/home/recette.jpg";
import creation from "../../assets/home/creation.png";
import "./home.css";
// import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Homeuser extends Component {
  render() {
    return (
      <div className="homepage" >
        
        <div id="imageCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target=".carousel" data-slide-to="0"></li>
            <li data-target=".carousel" data-slide-to="1"></li>
            <li data-target=".carousel" data-slide-to="2"></li>
          </ol>
 <div class="carousel-inner">
   <div class="item active">
     <div class="row">
       <div class="col-md-5">
         <img src={slide1} class="img-responsive"/>
       </div>
       <h3 class="col-md-3">
       C'EST PLUS FACILE AVEC <span>علمنى</span>
        </h3>
      
     </div>
   </div>
   <div class="item">
     
     <div class="row">
       <div class="col-md-5">
         <img src={slide2} class="img-responsive"/>
       </div>
       <h3 class="col-md-3">
        SURFER EN TOUTE SECURITE
       </h3>
      
     </div>
     </div>
   
   <div class="item">
   <div class="row">
       <div class="col-md-5">
         <img src={slide3} class="img-responsive"/>
       </div>
       <h3 class="col-md-3">
         VIVEZ AU QUOTIDIEN LES ACTUALITES DE VOS ENFANTS
       </h3>
      
     </div>
   </div>
  
  <a class="left carousel-control" href="#imageCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#imageCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
   </div>
 </div>
            
      <div className="news" > 
     {/* style={{backgroundImage: "url(" + fondhome + ")"}} */}
       <div className="idee">
            <div className="textenews">
              <div>
                <img
                  src={recette}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>

              <h6>Idée recette saine </h6>
            </div>
            <div className="textenews">
              <div>
              <img src={creation} style={{ width: "400px", height: "250px" }} />
              </div>

              <h6>Idée creation pour enfant</h6>
            </div>
          
          </div>
          <div className="partienews">
            <img className="newimage" src={news} />
            <div className="sousnews">
              <img src={cst} className="imagesct" />
              <div>
              <h6>Mois 10-2019</h6>
              <p className="descriptionsct">
                20-10-2019 | La Robotique à la Cité des Sciences
              </p>
              </div>
            </div>
            <div className="sousnews">
              <img src={disney} className="imagesct" />
              <div>
              <h6>Mois 11-2019</h6>
              <p className="descriptionsct">
                30-11-2019 | Disney:Festival de Tunis
              </p>
              </div>
              </div>
            <div className="sousnews">
              <img src={disney} className="imagesct" />
              <div>
              <h6>Mois 12-2019</h6>
              <p className="descriptionsct">
                15-12-2019 | Cigognes et companie,Miss Peregrine et les enfants
                particuliers,Trolls
              </p>
              </div>
            </div>
            
          </div>
        </div> 
      </div>
     
    );
  }
}

export default Homeuser;
