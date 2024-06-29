/*css imports */
import './App.css'
/*page imports */
import Editor from './Pages/Editor';
/*Constant imports */
import problems from '../src/Constants/SampleProblem1';
/*Npm imports */
import DOMPurify from 'isomorphic-dompurify';

function App() {

  const cleanMarkDown = DOMPurify.sanitize(problems.problemList);

  return (
    <Editor cleanMarkDown={cleanMarkDown} />
  )
}

export default App
