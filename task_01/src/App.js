import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogList from './components/BlogList';
import Blog from './components/Blog';
import EditBlog from './components/EditBlog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BlogList/>}/>
        <Route path='/:id' element={<Blog/>}/>
        <Route path='/:id/edit' element={<EditBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;