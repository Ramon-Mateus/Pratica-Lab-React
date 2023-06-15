import './App.css'
import { useState, ChangeEvent } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return (
    <main>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <div>{text}</div>
      </div>
    </main>
  );
}