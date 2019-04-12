import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "./App.css";

const App = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(authState => setUser(authState));
  }, []);

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="App">
      <p className="App-intro">UID: {user && user.uid}</p>
      {user ? (
        <button onClick={handleLogout}>Google Logout</button>
      ) : (
        <button onClick={handleLogin}>Google Login</button>
      )}
    </div>
  );
};

export default App;
