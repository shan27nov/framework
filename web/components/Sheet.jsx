import React from 'react';

export default class extends React.Component {

  render(props) {
    return (
      <div className="card rapyd-card-sheet" style={{minHeight: '250px', marginTop: '20px'}}>
        <div className="card-content form-sheet" style={{'display': 'flex', 'flex-wrap': 'wrap'}}>
          {props.children}
        </div>
      </div>
    );
  }
}
