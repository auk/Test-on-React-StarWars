import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {


  render() {

    const { personData } = this.props;
    const { name, gender, birthYear, eyeColor } = personData;
    const urlByName = {
      'Leia Organa': 'https://starwars-visualguide.com/assets/img/characters/5.jpg',
      'R2-D2': 'https://starwars-visualguide.com/assets/img/characters/3.jpg'
    };

    return (
      <div className="person-details">
        <img src={urlByName[name]} className="person-image" alt={name} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}