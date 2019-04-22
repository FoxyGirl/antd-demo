import React, { Component } from 'react'
import MainLayout from './components/MainLayout'

// import './App.css'
import './App.scss'
import { Button } from 'antd'

class App extends Component {
  render() {
    return (
      <MainLayout>
        <div>Hello, everyone!</div>
        <Button type="primary">OK</Button>
      </MainLayout>
    )
  }
}

export default App
