import { Link } from "react-router-dom";



const Signup = () => {
    return(
        <form>
            <div className="form-email">
        <label>Email: </label>
        <input type="email" name="email" id="email" required/>
      </div>
      <div className="form-password">
        <label>Senha: </label>
        <input type="password" name="password" id="password" required/>
      </div>
      <div className="form-example">
        <input type="submit" value="Entrar"/>
        <Link to="/signup">Cadastrar</Link>
      </div>
        </form>
    )

}

export default Signup;