import React from 'react'

export default function Header({ company, }) {

    const baseStyle = {
        padding: '1rem',
        textAlign: 'center',
    }

    const companyStyle = () => {
        return  {
            ...baseStyle,
            color: 'blue',
            textShadow: 'darkblue',
        }
    }

    const guestStyle = () => {
        return  {
            ...baseStyle,
            color: 'brown',
            textshadow: 'black',
        }
    }

    return (
        <header>
            {
                !company ? (
                    <h1 style={guestStyle()}>

                        Hello guest, Please sign in
                    
                    </h1>
                ) : (
                    <div style={companyStyle()}>

                        <h1>{`Hello ${company.name}!`}</h1>
                        <p>{`Your email is: ${company.email}`}</p>
                        <p>{`Your password is: ${company.password}`}</p>
                    
                    </div>
                )

            }
        </header>
    )
}
