import React from 'react';
import { useParams } from 'react-router';

function JobApply() {
  const { id } = useParams(); 
  return (
    <div>JobApply {id}</div>
  )
}

export default JobApply;
