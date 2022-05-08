import React from "react";
import "./Team.css"
import { useNavigate } from "react-router-dom";

const TeamCard = ({image,title,description,id}) => {

    const navigate = useNavigate();

    const TeamPage = () => {
        navigate('/teamPage')
    }
    return(
        <div className="team-card">
            <img src={image} alt="image" className="team-card-image" />
            <h3 className="team-card-title">{title}</h3>
            <p className="team-card-description" >{description}</p>
            <p className="team-card-read-more" onClick={TeamPage}>read more</p>
        </div>
    )
}

export default TeamCard;