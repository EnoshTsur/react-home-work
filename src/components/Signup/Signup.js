import React from 'react'
import Company from '../../common/company';
import Radium from 'radium';

const inputStyle = {
    margin: '1rem',
    padding: '0.5rem 1rem',
    border: 'none',
    borderBottom: '1px solid lightblue',
    textShadow: '0 0 2px 3px grey',
    ':focus': {
        outline: 'none',
    }
}

const buttonStyle = {
    padding: '1rem',
    margin: '1rem',
    border: 'none',
    borderRadius: '7px',
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: '600',
    ':hover': {
        cursor: 'pointer',
        opacity: '0.8',
    }
}

function Signup({ setCompany, }) {

    const [name, setName, ] = React.useState('')
    const [email, setEmail, ] = React.useState('')
    const [password, setPassword, ] = React.useState('')

    const isValidInputs = () => ![name, email, password].includes('')

    const createHandler = () => setCompany(new Company(name, email, password))

    return (
   
        <div style={{  maxWidth: '70%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            <div>
                <input key="name" style={inputStyle} type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                <input key="email" style={inputStyle} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input key="pwd" style={inputStyle} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <button 
                    style={buttonStyle}
                    onClick={createHandler}
                    disabled={!isValidInputs()}
                >
                    Sign up 
                </button>
            </div>
        </div>
    )
}

export default Radium(Signup)
