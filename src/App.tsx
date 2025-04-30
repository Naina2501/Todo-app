import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToDoIndex } from './components/todo-index';
import { ToDoUserRegister } from './components/todo-user-reigster';
import { ToDoUserLogin } from './components/todo-user-login';
import { ToDoUserDashBoard } from './components/todo-user-dashboard';
import { ToDoAddAppointment } from './components/todo-add-appointment';
import { ToDoEditAppointment } from './components/todo-edit-appointment';
import { ToDoDeleteAppointment } from './components/todo-delete-appointment';

function App() {
  return (
    <div className="App bg-image">
       <header className='text-left bg-dark  fw-bold p-3 align-items-center '>
      <h3 className='p-2 text-light'><span className='bi bi-calendar2-check-fill text-warning mx-4 fs-3 '></span>𝕋𝕆-𝔻𝕆-𝔸ℙℙ</h3>
     </header>
        <section>
          <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ToDoIndex />} />
                    <Route path='register' element={<ToDoUserRegister/>} />
                    <Route path='login' element={<ToDoUserLogin />} />
                    <Route path='user-dashboard' element={<ToDoUserDashBoard />} />
                    <Route path='add-appointment' element={<ToDoAddAppointment />} />
                    <Route path='edit-appointment/:id' element={<ToDoEditAppointment />} />
                    <Route path='delete-appointment/:id' element={<ToDoDeleteAppointment />} />
                </Routes>
          </BrowserRouter>      
        </section>
    </div>
  );
}

export default App;
