import Home from './screens/home'
import React from 'react';
import Navigator from './routes/HomeStack'


export default function App() {
  return (
    <div>
      <Navigator />
      <Home />
    </div>
  );
}
