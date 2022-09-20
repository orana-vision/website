import React from "react";
import ME from "../../assets/me.jpg";

import "./Gkountras.css";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/github.png";

const Gkountras = () => {
  return (
    <div className="gkountras-container">
      <div className="details">
        <div class="img-hover-zoom img-hover-zoom--quick-zoom">
          <img src={ME} alt="giannis-gkountras" width="400" height="400" className="profileImage" />
        </div>
        {/* <div className="find">Βρείτε με και εδώ:</div> */}
        <div className="socials find">
          Βρείτε με και εδώ:
          <div className="socials-bg">
            <a href="https://www.linkedin.com/in/ioannis-gkountras-25245723b/" target="_blank" rel="noreferrer">
              <img src={linkedin} width={"40"} alt="linkedin" />
            </a>
            <a href="https://github.com/giannisgkountras" target="_blank" rel="noreferrer">
              <img src={git} width={"40"} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="details">
        <p className="title">Γιάννης Γκούντρας</p>

        <p className="bio">
          Φοιτητής στο τμήμα Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών του Αριστοτέλειου Πανεπιστημίου Θεσσαλονίκης. Αρχικά για εμένα ο προγραμματισμός ήταν ενα ευχάριστο hobby. Με τον καιρό
          αυτή η ενασχόληση μου με τον προγραμματισμό απέκτησε μεγαλύτερες διαστάσεις. Πλέον ως συνιδρυτής της Orana, ασχολούμαι σε καθημερινή βάση με projects της εταιρείας, ξεπερνώντας πόλλα
          προβλήματα που προκύπτουν, αλλά και προσθέτοντας μια μοναδική πινελιά, χαρακτηριστική της Orana, που κάνει το κάθε αποτέλεσμα να είναι ξεχωριστό.
        </p>
      </div>
    </div>
  );
};

export default Gkountras;
