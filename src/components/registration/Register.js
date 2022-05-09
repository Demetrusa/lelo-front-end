import React from "react";
import Navigation from "../navigation/Navigation";
import TeamCard from "../team/TeamCard";
import { useState, useEffect } from "react";
import "./Register.css"
import Footer from "../footer/Footer";
import FormApp from "../form/FormApp";

const Register = () =>{ 
    
    return(
        <div className="registerWrap">
            <Navigation />
            <div className="register-heading">
              <div className="register-wrap">
                <div className="empty-smile"></div>
                <h2 id="register-heading">შიდა არჩევნები</h2>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                   Cumque necessitatibus excepturi sunt commodi corrupti quia
                    eius impedit accusantium non, eaque assumenda nihil! Optio,
                     sit provident beatae quo praesentium aliquid, amet suscipit
                      ipsa quia quasi, ratione a consequatur. Quaerat adipisci 
                      asperiores veniam unde! Quis, optio cumque! Hic, nesciunt 
                      iusto! Quaerat architecto distinctio placeat, numquam obcaecati,
                       aliquid qui voluptates laboriosam voluptatibus cumque
                       eius ducimus perspiciatis odit adipisci ullam amet blanditiis
                        commodi nobis! Explicabo eligendi eaque itaque distinctio 
                        accusantium inventore optio ipsam consequatur. Obcaecati
                         libero, ea perspiciatis facere odio repellat consectetur mollitia</p>
          </div>
          <div className="sign-in-heading">
          <h2>გაიარეთ ავტორიცაზია</h2>
          </div>
          <div className="registration">
         <FormApp />
          </div>
        <div id="footeri"><Footer />
        </div>
        </div>
    )
}

export default Register;