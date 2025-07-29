import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import AddExpensePage from './AddExpensePage'
import EditExpensePage from './EditExpensePage'
import NewCurrencyHome from './NewCurrencyHome'
import Help from './HelpPage'

function App() {

      const [expenseToEdit, setExpenseToEdit] = useState([]);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home setExpenseToEdit={setExpenseToEdit} />}></Route>
            <Route path="/add-expense" element={ <AddExpensePage />}></Route>
            <Route path="/edit-expense" element={ <EditExpensePage expenseToEdit={expenseToEdit} />}></Route>
            <Route path="/convert-currency" element={ <NewCurrencyHome />}></Route>
            <Route path="/help" element={ <Help /> }></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
