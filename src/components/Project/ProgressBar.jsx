import React from 'react';
import '../../styles/ProgressBar.css';

const ProgressBar = (props) => {
  // const maxValue = 100;

  console.log('dpc = ' + props.progress + '!');

  const barFillWidth = props.progress + '%';

  console.log(`barFillWidth = ${barFillWidth}`);

  return (
    <div className='chart-bar'>
        <div className="chart-bar__label">
          <p className='text-base font-merriweather'>Progress: </p>
          </div>
        <div className="chart-bar__inner w-10/12 m-2">
          <div className="chart-bar__fill font-merriweather" style={{width: barFillWidth}}>{barFillWidth}</div>
        </div>
    </div>
  )
}

export default ProgressBar;
