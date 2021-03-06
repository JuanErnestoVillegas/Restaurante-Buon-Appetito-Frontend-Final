import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import LucasImg from "./../../assets/Integrantes/Lucas Ferruchi.jpeg";
import GastonImg from "./../../assets/Integrantes/Gastón Devalis.jpg";
import JuanImg from "./../../assets/Integrantes/Juan Ernesto Villegas.jpg";
import FerImg from "./../../assets/Integrantes/Maria Fernanda Trujillo.jpg";
import MarcosImg from "./../../assets/Integrantes/Marcos Scheuermann.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>

  <div className="aboutUs">  
  <Button variant="success" className="m-1"><Link to={`/`} className="text-reset text-decoration-none m-1">                     
        Volver </Link>
        </Button>
        <h2 className="us-title">Diseñadores de Buon Appetito</h2>
        <div className="content-all">
          <div className="content-carrousel">
            <figure>
              <img src={LucasImg} alt="Ferruchi, Lucas"/>
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Ferruchi, Lucas</div>
                <p className="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
            <figure>
              <img src={MarcosImg} alt="Scheuermann, Marcos"/>
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Scheuermann, Marcos</div>
                <p className="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
            <figure>
              <img src={FerImg} alt="Trujillo, M. Fernanda"/>
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Trujillo, M. Fernanda</div>
                <p className="image__description">
                  Hobby: <br />
                  Trekking
                </p>
              </div>
            </figure>

            <figure>
              <img src={JuanImg} alt="Villegas, Juan Ernesto"/>
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Villegas, Juan Ernesto</div>
                <p className="image__description">
                  Hobby: <br />
                  Fútbol - Trekking
                </p>
              </div>
            </figure>
            <figure>
              <img src={GastonImg} alt="Devalis, Gastón"/>
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Devalis, Gastón</div>
                <p className="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
          </div>
        </div>    

        </div>


</ThemeProvider>

  );
};

export default AboutUs;
