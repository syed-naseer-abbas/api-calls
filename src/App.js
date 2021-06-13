import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([])

  useEffect(() => {

    // fetch('https://api.github.com/users/syed-naseer-abbas/repos')
    //   .then(response => response.json())
    //   .then(data => {
    //     setRepos(data);
    //     console.log(data, 'repos');
    //   })

    async function getRepos() {

      const response = await fetch('https://api.github.com/users/syed-naseer-abbas/repos')
      const jsonresponse = await response.json()
      setRepos(jsonresponse)
    }
    getRepos()
  }, [])

  return (
    <div className="App">

      <h1>API calls and Rendering lesson</h1>

      {repos.map((repo, id) => <li key={id} style={{color : 'blue'}}>{repo.name}</li>)}


    </div>
  );
}

export default App;
