import React, {useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../contextTransaction/State';

const Inscription = () => {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  


  const {authentification, setAuthentification} = useContext(StateContext);

  const navigate = useNavigate();


  const addInscription = (e) => {
    e.preventDefault();
    if(nom.length !== 0 && prenom.length !== 0 && user.length !== 0 && password.length !== 0 ) {

      const inscription = {
        nom: nom,
        prenom: prenom,
        user: user,
        password: password
      }

      const recupAllPassword = authentification.inscriptions.map(({password}) => password);

      if(recupAllPassword.length > 0) {
        const passwordIncluded = recupAllPassword.find(password => password === inscription.password);
        if(passwordIncluded) {
          // console.log("mot de passe récupéré sont : " + recupAllPassword)
          // console.log("mpd tapé : " + inscription.password);
          // console.log("le mot de passe existe déja");
          alert("ce mot de passe appartient déja à un autre veuillez changer de mot de passe");
          
        }
        else {
          // console.log("mot de passe récupéré sont : " + recupAllPassword)
          // console.log("mpd tapé : " +inscription.password);
          // console.log("le mot de passe est nouveau")
          setAuthentification({...authentification, inscriptions: [...authentification.inscriptions, inscription]});
          navigate("/connexion");
        }
      } else{
        // console.log("pas encore de données");
        navigate("/connexion");
        setAuthentification({...authentification, inscriptions: [...authentification.inscriptions, inscription]});

      }
      
    }
  }

  

  return (
    <div className="container mt-5">
      <form className='border p-5'>
        <h2 className='text-center mb-5'>Inscription</h2>

        <div className="mb-3">
          <input 
            type="text" 
            placeholder='Nom' 
            className='form-control' 
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input 
            type="text" 
            placeholder='Prenom' 
            className='form-control'
            onChange={(e) => setPrenom(e.target.value)} 
            />
        </div>

        <div className="mb-3">
          <input 
            type="text" 
            placeholder='Nom utilisateur' 
            className='form-control'
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input 
          type="password" 
          placeholder='Mot de passe' 
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
           />
        </div>

        <div className="mb-3 btn-link">
          <button type='submit' className='btn btn-success' onClick={addInscription}>Valider</button>
          <button className='btn btn-danger'><Link className='link' to="/connexion">Annuler</Link></button>
        </div>
        
      </form>
    </div>
  )
}

export default Inscription