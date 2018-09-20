import React from 'react';
import store from './src/store'
import { Provider } from 'react-redux'
import SeezAssistant from './src/SeezAssistant';



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SeezAssistant />
      </Provider>
    );
  }
}