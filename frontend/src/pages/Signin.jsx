import { Link } from "react-router-dom";

const Signin = () => {
    return(
    <form>
        <div class="form-email">
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" required/>
  </div>
  <div class="form-password">
    <label for="password">Senha: </label>
    <input type="password" name="password" id="password" required/>
  </div>
  <div class="form-example">
    <input type="submit" value="Singin"/>
    <Link to="signup">Singup</Link>
  </div>
    </form>
)
}

export default Signin;