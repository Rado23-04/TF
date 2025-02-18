import { useState } from "react"
import { login } from "../api/auth";

export default function Sign(){

    const [email,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string> ("");

    const handleSubmit = async(e:any) => {
        e.preventDefault(); 
  
        try {
            const addUser = await login(email,password)
        } catch (error) {
            throw error
        }
        const newEmail = email;
        const newPassword = password;

        setEmail("");
        setPassword("");

      };

    return (<>
       <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="form-container p-4 bg-white rounded shadow">
        <h2 className="text-center mb-4">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
      </div>
    </div>

    </>)
}