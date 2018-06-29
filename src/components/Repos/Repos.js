import React from 'react';
import propTypes from 'prop-types';
const Repos = (props) =>{
  <div>
    <h3>Repos</h3>
    <h5>{props.params.name}</h5>
  </div>
};

Repos.propTypes = {
  params: propTypes.object
}

export default Repos;