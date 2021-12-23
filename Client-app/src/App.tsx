import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { HeaderContent, List } from 'semantic-ui-react';

function App() {

  const [activities, setaActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setaActivities(response.data);
    })
  }, []) // define dependencies in array

  return (
    <div>
      <HeaderContent as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id} >
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
