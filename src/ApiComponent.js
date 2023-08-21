import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiComponent() {

  const [data, setData] = useState([]);
  
  const url = "https://json-server.cyclic.cloud/api/employees";

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
        setData([]);
      });
  }, [url]);

  return (
    <div>
      <h1>API Employees Data</h1>

      {data && data.length > 0 && 
        <>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <table border="1" width="60%">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>first_name</th>
                  <th>last_name</th>
                  <th>email</th>
                  <th>salary</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td> 
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }

      {(!data || data.length === 0) &&
        <p>Loading...</p>  
      }

    </div>
  );

}

export default ApiComponent;  