import React from 'react';
import './Results.css';

// import icons
import lab from './Lab.svg';
import shop from './Shop.svg';
import statistics from './Statistics.svg';

function Results() {
  return (
    <section className="container">
      <div className="grid__results">
        <div className="card__result">
          <img src={ lab } alt="Lab Icon"/>
          <div>
            <h4>$50,000</h4>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="card__result">
          <img src={ shop } alt="Lab Icon" />
          <div>
            <h4>$50,000</h4>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="card__result">
          <img src={ statistics } alt="Lab Icon" />
          <div>
            <h4>$50,000</h4>
            <p>Total Revenue</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results;