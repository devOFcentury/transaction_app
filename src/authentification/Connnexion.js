import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../contextTransaction/State';

const Connnexion = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const {authentification} = useContext(StateContext);


  const navigate = useNavigate();
  


  const validateConnexion = (e) => {
    e.preventDefault();

    if(user.length !== 0 && password.length !== 0 ) {

      

      // return the value matching if the user  corresponds to the one of saved users
      const isUserAndPasswordExist = authentification.inscriptions.find((inscription) => inscription.user === user && inscription.password === password);
      // return the value matching if the passwords  corresponds to the one of saved passwords
      // const isPasswordExist = authentification.inscriptions.find(inscription => inscription.password === password);

      if(isUserAndPasswordExist) {
        navigate('/');
      } else{
        alert("veuillez vous authentifiez correctement")
      }
    }
  }



  return (
    <div className="container mt-5">
            <form className='border p-5'>
                <h2 className='text-center mb-5'>Connexion</h2>

                <div className="mb-3">
                  <input 
                    type="text" 
                    placeholder='Nom utilisateur' 
                    className='form-control'
                    onChange={e => setUser(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input 
                  type="password" 
                  placeholder='Mot de passe' 
                  className='form-control'
                  onChange={e => setPassword(e.target.value)}
                   />
                </div>

                <div className="mb-3 btn-link">
                  <button type='submit' className='btn btn-success' onClick={validateConnexion}>Valider</button>
                  <p className='h5'><Link to="/inscription">s'inscrire</Link></p>
                </div>

            </form>
      </div>
  )
}

export default Connnexion