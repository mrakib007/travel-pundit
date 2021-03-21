import React, { useContext } from "react";
import "../../App.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import "./Login2.css";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function Login2() {
  const [newUser, setNewUser] = useState(false);
  const history = useHistory();

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace('/transport');
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          error: "",
          success: false,
        };
        setUser(signedOutUser);
        console.log(res);
      })
      .catch((err) => {});
  };
  const handleBlur = (event) => {
    let isFieldValid;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          updateUserName(user.name);
          history.replace('/transport');
          console.log("sign in user info", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log('signed in');
          setLoggedInUser(newUserInfo);
          history.replace('/transport');
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    event.preventDefault();
  };
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <br></br>
      {user.isSignedIn ?
      (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email : {user.email}</p>
          <img src={user.photo} alt=""></img>
        </div>
      ) : <h1>Sign In to continue</h1>}
      
    
      <section className="container-fluid">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form action="" className="form-container" onSubmit = {handleSubmit}>
              <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
              <label htmlFor="newUser">New User Signup</label>
            
                {newUser && (
                  <input className="form-control" type="text" name="name"onBlur={handleBlur} required placeholder="Your Name" />
                )}
                <br />
                <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="Email Address"required></input>
                <br></br>
                <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required></input>
                <br></br>
             
                <input className="btn-secondary form-control my-2" type="submit" value={newUser ? "Sign Up With Email & Password" : "Sign In with Email & Password"}></input>

                {user.isSignedIn ? (
                <button className="btn-secondary form-control" onClick={handleSignOut}>Sign out</button>
                ) : (
                <button className="form-control btn-success" onClick={handleSignIn}>Sign in Using Google</button>
                )}

            </form>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Login2;
