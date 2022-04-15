import type { NextPage } from 'next'
import React,{useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';

const Home: NextPage = () => {

  const [response,setResponse] = useState<any>();

  useEffect(()=> {
    axios.get('http://localhost:8000').then((res)=> {
      setResponse(res);
    })
  },[])

  console.log(response);

  return (
    <div className={styles.container}>

    </div>
  )
}

export default Home
