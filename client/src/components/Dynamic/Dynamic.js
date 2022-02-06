import React from 'react'
import List from 'components/List/List'
import './Dynamic.css'
import NoActivities from 'components/NoActivities/NoActivities'

const Dynamic = ({ activities, dynamic }) => {
    return (
        <div className='Dynamic-container'>
            <h1>{dynamic}</h1>
            {activities.length > 0
            ? <div className='Dynamic-lists'>
                {activities.map(section => (
                    <List  key={section.sectionName} section={section} />
                ))}
            </div>
            : <NoActivities dynamic={dynamic} />}
            
        </div>
    )
}

export default Dynamic
