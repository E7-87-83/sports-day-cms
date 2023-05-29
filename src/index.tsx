import React from 'react';
import { createRoot } from 'react-dom/client';
import IndivApplicationForm from './pages/individual-form/IndividualApplication';
import ReactDOM from 'react-dom';

const root = createRoot( document.getElementById('root')  as HTMLElement );

root.render(
    <>
        <IndivApplicationForm />
    </>
);