/*css imports */
import './App.css'
/*page imports */
import Editor from './Pages/Editor';
/*Constant imports */
import problems from '../src/Constants/SampleProblem1';
/*Npm imports */
import DOMPurify from 'isomorphic-dompurify';

function App() {

  const markdown = problems.prob1;

  const normalizedImportedMarkdown = markdown
    .split('\n')
    .map(line => line.trim() )
    .join('\n');

  const cleanMarkDown = DOMPurify.sanitize(normalizedImportedMarkdown);

  return (
    <Editor cleanMarkDown={cleanMarkDown} />
  )
}

export default App
