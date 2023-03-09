import React, { useState, useEffect } from "react";
// import { getAllInstitutions } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/InstitutionsandAffiliates.css';


const InstitutionsandAffiliates = () => {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [allInstitutions, setallInstitutions] = useState([]);
  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllInstitutions((institutionList) => {
  //     if(institutionList === null) {
  //       return
  //     }
  //     setallInstitutions(institutionList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallInstitutions([
      {
        number: 1,
        institution: "University of California, Los Angeles",
        affiliation: "Public",
        url: "https://www.ucla.edu/",
      },
      {
        number: 2,
        institution: "Stanford University",
        affiliation: "Private",
        url: "https://www.stanford.edu/",
      },
      {
        number: 3,
        institution: "Harvard University",
        affiliation: "Private",
        url: "https://www.harvard.edu/",
      },
      {
        number: 4,
        institution: "Massachusetts Institute of Technology",
        affiliation: "Private",
        url: "https://www.mit.edu/",
      },
      {
        number: 5,
        institution: "California Institute of Technology",
        affiliation: "Private",
        url: "https://www.caltech.edu/"
      }
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  const handleRowClick = (institution) => {
    setSelectedInstitution(institution);
  };

  const closeModal = () => {
    setSelectedInstitution(null);
  };

  return (
    <div className="institutionsContainer">
      <table className="institutionsTable">
        <thead>
          <tr>
            <th>Number</th>
            <th>Institution</th>
            <th>Affiliation</th>
          </tr>
        </thead>
        <tbody>
          {allInstitutions.map((anInstitution) => (
            <tr key={anInstitution.number} onClick={() => handleRowClick(anInstitution)}>
              <td>{anInstitution.number}</td>
              <td>{anInstitution.institution}</td>
              <td>{anInstitution.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedInstitution && (
        <div className="modalBackdrop">
          <div className="modal">
            <div className="modalHeader">
              <h2>{selectedInstitution.name}</h2>
              <button onClick={closeModal} className="closeButton">X</button>
            </div>
            <div className="modalContent">
              <p>{selectedInstitution.institution}</p>
              <p><strong>Affiliation:</strong> {selectedInstitution.affiliation}</p>
              <p><strong><a href={selectedInstitution.url} target="_blank">Link to Institute</a></strong></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );


};


export default InstitutionsandAffiliates;