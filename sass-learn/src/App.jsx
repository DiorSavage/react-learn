import { CardShowroom } from './components/CardShowroom';
import { Button } from './components/Button';
import './App.scss';

function App() {

  const handleClick = () => {
    console.log('SASS SOSAT')
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button title={'confirm changes'} onClick={handleClick} size='sm' type='info' />
      <Button title={'confirm changes'} onClick={handleClick} size='md' type='error' />
      <Button title={'confirm changes'} onClick={handleClick} size='lg' type='succes' />
      <br />
      <br />
      <br />
      <Button title={'confirm changes'} onClick={handleClick} type='info' />
      <Button title={'confirm changes'} onClick={handleClick} type='error' />
      <Button title={'confirm changes'} onClick={handleClick} type='succes' />
      <Button title={'confirm changes'} onClick={handleClick} disabled={false} />
      <Button title={'confirm changes'} onClick={handleClick} disabled />
      <CardShowroom></CardShowroom>
    </div>
  );
}

export default App;
