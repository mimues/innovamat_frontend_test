import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import getActivity from 'services/getActivity'
import Spinner from 'components/Shared/Spinner/Spinner'
import './Details.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

const Details = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [activity, setActivity] = useState({})
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
  }

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
          <div
            dangerouslySetInnerHTML={{ __html: activity.description}}
          ></div>    
          <div>
            <Document
              className='Details-pdf'
              file={activity.file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(
                new Array(numPages),
                (el,index) => (
                  <Page 
                    key={`page_${index+1}`}
                    pageNumber={index+1}
                  />
                )
              )}
            </Document>
          </div>
        </div>
      }
    </>
  )
};

export default Details;
