"use client"
import React, { useEffect, useState } from "react";



export default function Chats() {
  const [userId, setUserId] = useState("user123");
  const [registrationData, setRegistrationData] = useState({});
  const [response, setResponse] = useState(null);
  const [websocket, setWS] = useState()

  useEffect(() => {
    console.log('trying connect')
    const socket = new WebSocket("ws://localhost:8000/celery-worker/ws");
    // Подписываемся на события WebSocket
    socket.onopen = function() {
      console.log("Successfully connect")
    }
    socket.onmessage = function(event) {
      setResponse(event.data);
      console.log(event.data)
    }

    setWS(socket);

    return () => {
      console.log("Closing WebSocket connection");
      socket.close();
    }
  }, []);

  const handleRegister = () => {
    const data = {
      email: "example@example.com",
      password: "password123",
    };

    // Отправляем данные на backend через WebSocket
    websocket.send(JSON.stringify(data))
    setRegistrationData(data);
    websocket.onmessage = function(event) {
      setResponse(event.data);
      console.log(event.data)
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <button className='transition-all duration-300 hover:shadow-md cursor-pointer px-6 py-3 ml-12' onClick={handleRegister}>Зарегистрироваться</button>

      {Object.keys(registrationData).length > 0 && (
        <div>
          <h2>Отправленные данные:</h2>
          <pre>{JSON.stringify(registrationData, null, 2)}</pre>
        </div>
      )}

      {response && (
        <div>
          <h2>Ответ от сервера:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}