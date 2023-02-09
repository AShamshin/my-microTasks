import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { FullInput } from './components/FullInput';
import { Input } from './components/input';

function App() {
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ]);

  let [title, setTitle] = useState('');

  const addMessage = (title: string) => {
    let newMessage = { message: title };

    setMessage([newMessage, ...message]);
  };

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle('');
  };

  return (
    <div className='App'>
      <Input setTitle={setTitle} title={title} />
      <Button name={'+'} callBack={callBackButtonHandler} />
      {/* <FullInput addMessage={addMessage} /> */}
      {message.map((m, index) => {
        return <div key={index}>{m.message}</div>;
      })}
    </div>
  );
}

export default App;
