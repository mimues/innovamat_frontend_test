import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getActivity from 'services/getActivity'
import Spinner from 'components/Shared/Spinner/Spinner'
import './Details.css'


const Details = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [activity, setActivity] = useState({})
  let string = activity.description

  useEffect(() => {
    setLoading(true)
    getActivity({id})
      .then(activity => {
        setActivity(activity)
        setLoading(false)
      })
  }, [])
  
  return (
    <>
      {
        loading ?
        <Spinner /> :
        <div className='Details-container'>
          <h1>{activity.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: activity.description}} id='Details-description'></div>
          <object data={activity.file} type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href={activity.file}>to the PDF!</a></p>
          </object>
          {/* <embed src={activity.file} /> */}
        </div>
      }
    </>
  )
};

export default Details;
