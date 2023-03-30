import { useState } from "react";
import { Link } from "react-router-dom";



const Signin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e){
      e.preventDefault();
    }
    return(
    <form onSubmit={handleSubmit}>
        <div class="form-email">
    <label for="email">Email: </label>
    
    <input 
      type="email" 
      value={email} 
      name="email" 
      id="email" 
      required
    />

  </div>
  <div class="form-password">
    <label for="password">Senha: </label>
    
    <input 
      type="password" 
      value={password} 
      name="password" 
      id="password" 
      required
    />
 
  </div>
  <div class="form-example">
    <input type="submit" value="Singin"/>
    <Link to="signup">Singup</Link>
  </div>
    </form>
)
}

export default Signin;