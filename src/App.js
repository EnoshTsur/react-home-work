import React from 'react';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';

function App() {
    
    const [company, setCompany, ] = React.useState(null)


    return (
    <div>
        <Header company={company}/>
        {
            !company && ( <Signup setCompany={setCompany} />)
        }
    </div>
  );
}

export default App;
