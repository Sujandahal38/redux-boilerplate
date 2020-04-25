import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import Posts from './components/posts';
import PostForm from './components/form/postForm';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <PostForm/>
      <hr></hr>
      <Posts/>
      </Provider>
    </div>
  );
}

export default App;
