import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
     <h1>Home page</h1>
     <ul>
       <li><Link to="/resultForm">Result Form</Link></li>
       <li><Link to="/resultDisplay">Result Display</Link></li>
     </ul>
    </>
  );
}