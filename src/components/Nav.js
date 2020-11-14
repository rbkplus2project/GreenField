import './App.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
      <div className="App">
          <Link to="/signup">
              <button>Sign Up</button>
          </Link>
          <Link to="/login">
              <button>Login</button>
          </Link>
    </div>
  );
}

export default Login;