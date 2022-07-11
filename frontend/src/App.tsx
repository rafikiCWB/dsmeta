import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import NotificationButton from "./components/NotificationButton";


function App() {
    return (
        <>
            <h1>Olá mundo!</h1>
            <NotificationButton />
            <NotificationButton />
            <NotificationButton />
            <NotificationButton />
        </>
    )
}

export default App
