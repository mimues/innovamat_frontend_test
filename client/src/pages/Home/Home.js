import React, { useEffect, useState } from 'react'
import Dynamic from 'components/Dynamic/Dynamic'
import getActivities from 'services/getActivities'
import Spinner from 'components/Shared/Spinner/Spinner';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { dynamic } = useParams()
  const [keyword, setKeyword] = useState('talleres')
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setKeyword(dynamic)
  }, [dynamic]);
  

  useEffect(() => {
    getActivities({keyword})
      .then(res => {
        setActivities(res)
        setLoading(false)
      })
  }, [keyword])
  
  return (
    <>
      {
        loading ?
        <Spinner /> :
        <Dynamic activities={activities} keyword={keyword}/>
      }
    </>
  );
};

export default Home
