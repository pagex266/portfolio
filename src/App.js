import './App.css';
import {useEffect, useState} from "react";
import Pages from "./pages";

function App() {
  const [user, setUser] = useState(null);
  const path = 'https://gitconnected.com/v1/portfolio/pagex266'

  useEffect(() => {
    fetch(path)
        .then(res => res.json())
        .then(user => {
          setUser(user)
        });
  }, []);

  if (!user) {
    return <div/>;
  }

  return <Pages user={user} />;
}

export default App;
