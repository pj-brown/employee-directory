import React from 'react';
import Search from './Search/index';
import EmployeeCard from './EmployeeCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <EmployeeCard />
      </header>
    </div>
  );
}

export default App;
