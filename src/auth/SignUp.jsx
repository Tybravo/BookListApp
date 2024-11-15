import { React, useState } from "react";
import style from "../styles/signup.module.css";
// import style from "./App.css";

const SignUp = () => {
  const userDetails = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);

  function handleChange(event){
    const {name, value} = event.target
    //setData((date, value))
  }

  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            ClassName={style.input}
            onchange = {handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            ClassName="input"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            ClassName="input"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
