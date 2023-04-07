import { useContext } from "react";
import Context from "./Context";

var style = {
  width: "300px",
  boxShadow: "0 0 10px black",
  margin: "150px auto",
  padding: "30px",
  textAlign: "center",
};
const Login = () => {
  const { setLogin, user, setUser } = useContext(Context);
  //   const [user, setUser] = useState({
  //     name: "",
  //     password: "",
  //   });
  const HandleAuthentication = () => {
    if (
      (user.name === "Sandeep" && user.password === "Sandeep@123") ||
      (user.name === "Admin" && user.password === "Admin@123")
    ) {
      setLogin(true);
    } else {
      alert("Enter Proper Credentials");
    }
  };
  return (
    <div style={style}>
      <h3>FB Login</h3>
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={HandleAuthentication}>Login</button>
      </div>
    </div>
  );
};

export default Login;
