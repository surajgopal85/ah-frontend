import React from "react";
import { useParams } from "react-router-dom";
import building from '../../assets/building.jpg';

// components
import { ProjectList } from "../helpers/ProjectList";
import Toolbar from "../UI/Toolbar";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div>
      <Toolbar />
      <div className="container border-2 rounded border-slate-600 m-auto mt-5 w-4/5 h-1/2 font-merriweather">
        <div className="flex flex-row">
          <div className="flex flex-col place-items-center m-0 w-1/2">
            <div className="text-3xl pt-4">{project.address}</div>
            <div><img src={building} alt={project.address} className="px-4 rounded-lg object-cover mb-4 mt-2" /></div>
          </div>
          <div className="flex flex-col justify-start  m-auto w-1/2">
            <div className="border-b-2 border-slate-300 text-2xl mx-2 mt-2 pt-4">Market: {project.market}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Status: {project.status}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">GMP: {project.gmp}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Phase: {project.phase}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Design Phase: {project.design_phase}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Schedule Variance: {project.sched_var}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Units: {project.units}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Notes: {project.notes}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Budget: ${project.budget}</div>
            <div className="border-b-2 border-slate-300 text-2xl mt-2 mx-2">Address: {project.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// {
//   image: building2,
//   address: '544 Carroll Street',
//   market: 'Gowanus, Brooklyn',
//   units: 133,
//   phase: 'Pre-Construction',
//   design_phase: '175,000 SF GFA',
//   design_phase_completion: '75',
//   last_issuance: 'ASI #1',
//   start_date: {type: 'Start Date', time: new Date(2023, 4, 1)},
//   proj_end_date: {type: 'Projected End Date', time: new Date(2024, 2, 14)},
//   budget: 1572640,
//   gmp: 'TBD',
//   status: 'planning',
//   sched_var: 'flex',
//   notes: 'test 1'
// },

export default ProjectDisplay;
