import { useContext, useState } from "react"
import { login } from "../api/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sign(){

    const [email,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string> ("");
    const [error, setError] = useState<string | null>(null);
    const auth = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
  
        try {
          const userData = await login(email, password);
          console.log("Token :", userData);
          auth?.login(userData.token,{email})

          setEmail("");
          setPassword("");
          if (userData?.succes) {
            auth?.login(userData.token, { email });
            navigate("/task");
          } else {
            console.error("Connexion échouée : ", userData);
            setError("Échec de la connexion. Vérifiez vos identifiants.");
          }
        } catch (error: any) {
          console.error("Erreur de connexion :", error);
          setError("Échec de la connexion. Vérifiez vos identifiants.");
        }
        e.preventDefault();
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