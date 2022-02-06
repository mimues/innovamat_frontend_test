import React, { useEffect, useState } from 'react'
import Dynamic from 'components/Dynamic/Dynamic'
import getActivities from 'services/getActivities'
import Spinner from 'components/Shared/Spinner/Spinner';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { dynamic } = useParams()
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    getActivities({dynamic})
    .then(res => {
      setActivities(res)
      setLoading(false)
    })
  }, [dynamic])
  
  return (
    <>
      {
        loading ?
        <Spinner /> :
        <Dynamic activities={activities} dynamic={dynamic} />
      }
    </>
  );
};

export default Home
