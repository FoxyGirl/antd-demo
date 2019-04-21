import React, { Component } from 'react'
import { Button, Switch } from 'antd'
import MainLayout from './components/MainLayout'

import './App.css'

class App extends Component {
  render() {
    return (
      <MainLayout>
        <div>Hello, Kitty! </div>
        <Button type="primary">Click</Button>
        <Switch checked={true}/>
      </MainLayout>
    )
  }
}

export default App
