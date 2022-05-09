import React from "react";
import Button from "../button/Button";
import Navigation from "../navigation/Navigation";
import ReadMore from "../readMoreButton/ReadMore";
import TeamCard from "./TeamCard";




const Team = ({data}) => {

    const members = data.map((e) => {
        if(e.id < 4 ){
            return (
                <TeamCard 
                    image={e.image}
                    title={e.title}
                    description={e.description}
                    id={e.id}
                />
            )
        }
       
    })
    return (
        
        <div className="team-content-wrap">
          <div className="team-heading-title">
              <div className="heading-wrap">
                <div className="empty-space"></div>
                <h2 id="team-h">ჩვენი გუნდი</h2>
              </div>
              <p id="team-content-texti">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aspernatur minima exercitationem voluptatum sint, 
                  esse neque quo ex quam culpa voluptatibus delectus accusamus temporibus officiis? Deserunt quasi qui sunt mollitia, 
                  corporis quia excepturi maxime quisquam, fugiat suscipit reprehenderit consequatur ipsum!</p>
              <div className="members-wrap">
                {members}    
             </div>
          </div>
          <div className="subButton">
              <ReadMore />
          </div>
        </div>
        
    )
}

export default Team;