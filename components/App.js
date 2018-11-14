import React from 'react';

class App extends React.Component {
    render() {
      return ( 
        <div>
            {Counter}
            {Counter}
            {Counter}
        </div>
       )
    }
  }
  
ReactDOM.render(<App/>, document.getElementById('app'));