import React from "react";

import "./TeamMember.css";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/github.png";

const TeamMember = ({ find_me, name, imgsrc, bio, linkedin_link, github_link }) => {
    return (
        <div className="gkountras-container">
            <div className="details">
                <div class="img-hover-zoom img-hover-zoom--quick-zoom">
                    <img src={imgsrc} alt="giannis-gkountras" width="400" height="400" className="profileImage" />
                </div>
                <div className="socials find">
                    {find_me}
                    <div className="socials-bg">
                        <a href={linkedin_link} target="_blank" rel="noreferrer">
                            <img src={linkedin} width={"40"} alt="linkedin" />
                        </a>
                        <a href={github_link} target="_blank" rel="noreferrer">
                            <img src={git} width={"40"} alt="github" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="details">
                <p className="title">{name}</p>

                <p className="bio">{bio}</p>
            </div>
        </div>
    );
};

export default TeamMember;
