import React from "react";
import "./Team.css"

const TeamCard = ({image,title,description,id}) => {
    return(
        <div className="team-card">
            <img src={image} alt="image" className="team-card-image" />
            <h3 className="team-card-title">{title}</h3>
            <p className="team-card-description" >{description}</p>
            <p className="team-card-read-more">read more</p>
        </div>
    )
}

export default TeamCard;