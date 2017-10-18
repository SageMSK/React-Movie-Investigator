import React from 'react';

export default function MovieInfopage(props) {
  console.log(props);
  return (
    <div>
      <h1>MovieInfopage</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
}
