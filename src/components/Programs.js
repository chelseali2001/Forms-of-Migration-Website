import React from 'react';
import './styling/Programs.css';


const programsData = [
  { id: 1, name: 'program1', start_date: '03/06/2023', end_date: '03/06/2023', link: 'https://www.migrationpolicy.org/programs'},
  { id: 2, name: 'program2', start_date: '03/06/2023', end_date: '03/06/2023', link: 'https://results.ed.gov/' },
  { id: 3, name: 'program3', start_date: '03/06/2023', end_date: '03/06/2023', link: 'https://www.humanrightscareers.com/magazine/top-10-masters-programs-in-migration-studies/' },
];

const Programs = () => {
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
          {programsData.map((program) => (
            <tr>
              <td>{program.id}</td>
              <td>{program.name}</td>
              <td>{program.start_date}</td>
              <td>{program.end_date}</td>
              <td>
                <a href={program.link} target="_blank">link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Programs;