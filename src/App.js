import './App.css';
import fakeData from "./MOCK_DATA.json";
import * as React from 'react';
import { useTable } from 'react-table';


function App() {
  const data = React.useMemo(() => fakeData, []); //according to the doc-n they recommend use usMemo
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id" //have to look like in the data
    },
    {
      Header: "First name",
      accessor: "first_name" 
    },
    {
      Header: "Last name",
      accessor: "last_name" 
    },
    {
      Header: "Email",
      accessor: "email" 
    },
    {
      Header: "Gender",
      accessor: "gender" 
    },
    {
      Header: "University",
      accessor: "university" 
    }

  ]) //it returns array as columns are in a format of an array
  
  //const table = useTable({ columns, data }); //useTable({ columns, data }) returns a banch of ufnctions
  const {getTableProps, getTableBodyProps, headerGroups, rows,  prepareRow } = useTable({ columns, data });


  return (
    <div className="App">
      <div className="container">
        <table>
          <thead>

          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default App;
