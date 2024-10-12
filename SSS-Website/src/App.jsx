import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import CustomerData from './Components/CustomerData'
import TableHeading from './Components/TableHeading'
import DataTable from './Components/DataTable'


function App() {
  return (<div>
              <h1 className='top-name'> Shiv Shakti Shuttering Store</h1>
              <CustomerData />
              <TableHeading />
              <DataTable />
          </div>)
}

export default App
