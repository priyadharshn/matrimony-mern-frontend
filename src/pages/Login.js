import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../Validation/LoginValidation"

function Login() {
  const [user, setUser] = useState({
    Email: "", Password: "",
  })
  const [errors, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, });
  };
  const navigate = useNavigate();
  const profile = () => {
    navigate("/profile")
  }
  const log_api = (e) => {
    e.preventDefault()
    setError(validation(user));
    const userLog = fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        console.log("post data", user);
        console.log("User", res);
        localStorage.setItem("users", JSON.stringify(user));
      })
    return userLog
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && (user.Email !== "" && user.Password !== "")) {
      alert("Login Successfully");
      profile();
    }
  }, [errors])

  return (

    <div className="container1">
      <div className="row m-5 no-gutters shadow-lg">
        <div className="col-md-6 d-none d-md-block">
          <img src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?b=1&s=170667a&w=0&k=20&c=UuXq_km9Ea4Rwb7PtoHp9SdyFMpmm1SFpXgcpTCCHwk=" class="img-fluid" />
        </div>
        <div className="col-md-6 bg-white p-5">
          <h3 className="pb-3">Login Form</h3>
          <div className="form-style">
            <form onSubmit={log_api}>
              <div className="form-group pb-3">
                <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email" onChange={handleChange} value={user.Email}
                />
                {errors.Email && <p style={{ color: "red", fontSize: "15px" }}>{errors.Email}</p>}
              </div>
              <div className="form-group pb-3">
                <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" name="Password" onChange={handleChange} value={user.Password}
                />
                {errors.Password && <p style={{ color: "red", fontSize: "15px" }}>{errors.Password}</p>}
              </div>
              <div className="pb-2">
                <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={(e) => onclick()}>Login</button>
              </div>
            </form>
            <div className="pt-4 text-center">
              Get Members Benefit. <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;