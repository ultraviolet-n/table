import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Loader from './components/loader/loader';
import Table from './components/table/table';

function App() {

  const baseUrl = `https://my-json-server.typicode.com/ultraviolet-n/jsonserver-table/item`;
  
  const [date, setDate] = useState([]);
  const [dateReset, setDateReset] = useState([]);
  const [loderActive, setLoaderActive] = useState(true);

  useEffect(() => {
    axios(baseUrl).then((res) => (
      setDate(res.data),
      setDateReset(res.data),
      setLoaderActive(false)
    ))
  }, [])

  return (
    <div className="App">
      {loderActive ? <Loader /> : <Table date={date} setDate={setDate} dateReset={dateReset} />}
    </div>
  );
}

export default App;
