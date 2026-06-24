import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Rutas principales irán aquí */}
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
