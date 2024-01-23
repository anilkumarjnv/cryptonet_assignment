import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => setUser(data.results[0]));
  // }, []);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc'); // Replace 'API_URL' with the actual URL
        const data = await response.json();
        setUser(data.results[0]); // Assuming there is only one user in the results array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
       {user&&(
      <div className='card'>
        <div className='image'>
          <img src={`${user.picture.large}`} width={"250px"} height={'300px'} alt='profile'/>
        </div>

        <div className='details'>

          <div className='name'>
            <span id='first'>{`${user.name.first}`}</span>
            <span id='last'>{`${user.name.last}`}</span>
          </div>

          <div className='gender'>
            <p><strong>Gender :</strong> {`${user.gender}`}</p>
          </div>

          <div className='location'>
          <p><strong>Location :</strong> {`${user.location.street.number}`},{`${user.location.street.name}`},{`${user.location.city}`},<br/>{`${user.location.state}`},{`${user.location.country}`}-{`${user.location.postcode}`}</p></div>
        </div>

      </div>)}
    </div>
  );
}

export default App;
