import React from "react";

// components
import ProjectDate from "./ProjectDate";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

// can you separate into components?

const ProjectItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className="border-2 border-solid border-slate-500 rounded-md shadow-lg text-slate-700">
      <div className="flex flex-row m-2 mr-0">
        <div className="m-2">
          <img src={props.image} alt={props.address} />
        </div>
        <div className="grid grid-cols-3 items-center  align-middle w-full mr-2">
          <div className="w-full m-2 justify-left col-span-3">
            <h1
              onClick={() => navigate("/project/" + props.id)}
              className="font-merriweather text-blue-500 underline text-center text-base cursor-pointer"
            >
              {props.address}
            </h1>
          </div>
          <div className="w-full m-2 col-span-3 text-center">
            <h1 className="font-merriweather text-base">{props.market}</h1>
          </div>
          <div className="w-full m-2 col-span-3 text-center">
            <h1 className="font-merriweather text-base">{props.status}</h1>
          </div>
          <div className="w-full m-2 col-span-3 text-center">
            <ProgressBar progress={props.design_phase_completion} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-y-2 border-slate-500 bg-gray-100 m-0">
        <div className="border-slate-500 border-r-2">
          <p className="text-center font-merriweather">{props.design_phase}</p>
        </div>
        <div className="border-slate-500 border-r-2">
        <p className="text-center font-merriweather">{props.units}</p>
        </div>
        <div className="font-merriweather">
        <p className="text-center font-merriweather">{props.status}</p>
          </div>
      </div>
      <div className="flex justify-around m-2">
        <div>
          <ProjectDate date={props.start_date} />
        </div>
        <div>
          <ProjectDate date={props.proj_end_date} />
        </div>
      </div>
      <div className="flex flex-row justify-around m-2">
        <p className="font-merriweather">Total Projected Cost: ${props.budget}</p>
        <p className="font-merriweather">GMP: {props.gmp}</p>
      </div>
    </div>
  );
};

//

export default ProjectItem;
