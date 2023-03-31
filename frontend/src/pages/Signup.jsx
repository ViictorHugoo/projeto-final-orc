import { useState } from "react";
import { Link } from "react-router-dom";

import Api from "../../services/api";


const Singin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e){
      e.preventDefault();

      const response = await Api.post('/users', {
        email,
        password
      })
    }
    return(
    <form onSubmit={handleSubmit}>
        <div className="form-email">
    <label>Email: </label>
    
    <input 
      type="email" 
      value={email}
      onChange={ (e) => setEmail(e.target.value)} 
      name="email" 
      id="email" 
      required
    />

  </div>
  <div className="form-password">
    <label>Senha: </label>
    
    <input 
      type="password" 
      value={password}
      onChange={ (e) => setPassword(e.target.value)} 
      name="password" 
      id="password" 
      required
    />
 
  </div>
  <div className="form-example">
    <input type="submit" value="Cadastrar"/>
    <Link to="/">Entrar</Link>
  </div>
    </form>
)
}

export default Singin;