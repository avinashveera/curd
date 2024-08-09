import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudent from './pages/Addstudent';
import StudentList from './pages/StudentList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<AddStudent/>} />
          <Route path="/students" element={<StudentList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;