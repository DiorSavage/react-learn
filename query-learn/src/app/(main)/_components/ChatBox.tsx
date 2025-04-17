"use client"

import { useState, useEffect } from 'react';

export default function ChatBox({ userId, messages }) {
	console.log(messages)
  // const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [receiverId, setReceiverId] = useState(2); // Пример ID получателя

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/chat/ws/${userId}`);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // setMessages((prev) => [...prev, message]);
    };

    return () => ws.close();
  }, [userId]);

  const sendMessage = () => {
    const ws = new WebSocket(`ws://localhost:8000/chat/ws/${userId}`);
    ws.onopen = () => {
      ws.send(JSON.stringify({ receiver_id: receiverId, text: input }));
      setInput('');
    };
		ws.onerror = (error) => {
			console.log(error)
		}
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto mt-10">
      <div className="flex-grow p-4 bg-gray-100 rounded-lg shadow-md">
        {/* {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender_id === userId ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))} */}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}