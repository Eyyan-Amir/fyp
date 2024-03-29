import React, { useState } from 'react'
import Banner from './Banner';
import { Button, Rating } from "@mui/material";
import { useSelector } from "react-redux"; 

export default function Home() {

  const { jobs } = useSelector(state => state.jobEase);

  return (
    <>
    <Banner />
    <div className="home">
      <div className="container">
        {jobs?.map(job => (
          <div className="card" key={job.id}>
            <div className="title">{job.title}</div>
            <div className='rating'>
              <Rating name="read-only" value={job.rating} readOnly />
            </div>
            <div><span className='benefits'>Salary: </span>{`${job.salary} Per Month`}</div>
            <div><span className='benefits'>Role: </span>{job.role}</div>
            <span className='benefits mb-1'>Description</span>
            <div dangerouslySetInnerHTML={{ __html: job.desc }}></div>
            <div className='mt-4'>
              <Button variant='contained' size='large'>Apply</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
