import { useState } from "react"
import { saveUser } from "../api/api";

export default function Register (){

    const [email,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string> ("");
    const [role, setRole] = useState<string> ("");
    const [username, setUsername] = useState<string> ("");
    const [error, setError] = useState<string | null>(null);



    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        try {
            const user = await saveUser(email,password,role,username)
            setEmail("")
            setPassword("")
            setRole("")
            setUsername("")
            alert("User created")
        } catch (error) {
            console.error("Error",error)
            setError("Error")
        }
    }


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
          <div className="mb-3">
                <label htmlFor="" className="form-labe">
                    Role
                </label>
                <select
        className="form-control"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
    >
        <option value="">Select a role</option>
        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
        <option value="ROLE_USER">ROLE_USER</option>
        <option value="ROLE_GUEST">ROLE_GUEST</option>
    </select>
          </div>
          <div className="mb-3">
                <label htmlFor="" className="form-labe">
                    Username
                </label>
                <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
                />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            New User
          </button>
        </form>
      </div>
    </div>
    </>)
}