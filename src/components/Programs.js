import React, { useState, useEffect } from 'react';
// import { getAllPrograms } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/Programs.css';

const Programs = () => {
  const [allPrograms, setallPrograms] = useState([]);

  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllPrograms((programList) => {
  //     if(programList === null) {
  //       return
  //     }
  //     setallPrograms(programList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallPrograms([
      { id: 1, name: 'program1', start_date: '03/06/2023', end_date: '03/06/2023', link: 'https://www.migrationpolicy.org/programs'},
      { id: 2, name: 'program2', start_date: '03/06/2023', end_date: '03/06/2023', link: 'https://results.ed.gov/' },
      { id: 3, name: 'program3', start_date: '03/06/2023', end_date: '03/06/2023', link: 'https://www.humanrightscareers.com/magazine/top-10-masters-programs-in-migration-studies/' },
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  return (
  <div className="programs">
      <h2>Programs</h2>
      <table className="programsTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {allPrograms.map((aProgram) => (
            <tr key={aProgram.id} onClick={() => {
              console.log("aProgram click with id", aProgram.id)
            }}>
              <td>{aProgram.id}</td>
              <td>{aProgram.name}</td>
              <td>{aProgram.start_date}</td>
              <td>{aProgram.end_date}</td>
              <td>
                <a href={aProgram.link} target="_blank">link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Programs;