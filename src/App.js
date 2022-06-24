import './App.css';
import Form from './components/Form';
import StockRow from './components/StockRow.js';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Form />
        <table className='table'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker='aapl' />
            <StockRow ticker='goog' />
            <StockRow ticker='msft' />
            <StockRow ticker='tsla' />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
