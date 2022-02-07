import React, { useState, useContext } from 'react'
import AppContext from 'context/AppContext';
import List from 'components/List/List'
import './Dynamic.css'
import NoActivities from 'components/Shared/NoActivities/NoActivities'

const Dynamic = ({ activities, dynamic }) => {
    const [reset, setReset] = useState(false)
    const { resetSearchButton, hideResetButton } = useContext(AppContext)

    const resetSearch = () => {
        setReset(!reset)
        hideResetButton()
      }

    return (
        <div className='Dynamic-container'>
            {activities.length > 0
            ? <>
                {resetSearchButton && <button onClick={resetSearch}>Volver a la lista completa</button>}
                <h1>{dynamic}</h1>
                <div className='Dynamic-lists'>
                    {activities.map(section => (
                        <List  
                            key={section.sectionName} 
                            section={section} 
                            reset={reset}
                        />
                    ))}
                </div>
            </>
            : <NoActivities dynamic={dynamic}/>}
            
        </div>
    )
}

export default Dynamic
