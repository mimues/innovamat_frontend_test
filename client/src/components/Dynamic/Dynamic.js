import React from 'react'
import List from 'components/List/List'
import './Dynamic.css'

const Dynamic = ({ activities, keyword }) => {
    return (
        <div className='Dynamic-container'>
            <h1>{keyword}</h1>
            <div className='Dynamic-lists'>
                {activities.map(section => (
                    <List  key={section.sectionName} section={section}/>
                ))}
            </div>
        </div>
    );
};

export default Dynamic
