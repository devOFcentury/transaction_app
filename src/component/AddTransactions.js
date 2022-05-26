import React, {useState, useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { StateContext } from '../contextTransaction/State';

const AddTransactions = () => {
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [montant, setMontant] = useState("");
    const [description, setDescription] = useState("");

    const {addTransaction, budget, setBudget} =  useContext(StateContext);

    const navigate = useNavigate();

    
    const add = (e) => {
        e.preventDefault();

        if(date.length !== 0 && type.length !== 0 && montant.length !== 0 && description.length !== 0) {

            const transaction = {
                date: date,
                type: type,
                montant: montant,
                description: description
            }
            
            const parseMontant = Number(montant);
            const pourcentage = (parseMontant * 100) / Number(budget);

            if(type === "depense") {
                if(parseMontant <= budget && pourcentage >= 40) {
                    setBudget(Number(budget) - parseMontant);
                    addTransaction(transaction, type);
                    navigate("/");
                }
            }
            if(type === "revenu"){
                setBudget(Number(budget) + parseMontant);
                addTransaction(transaction, type);
                navigate("/");
            }
            

        }
        else {
            alert("veuillez remplir tous les champs");
        }

    }
    
    
  return (
      <div className="container mt-5">
            <form className='border p-5'>
                <h2 className='text-center mb-5'>Ajout de transactions</h2>
                <div className="mb-3">
                    <input 
                        type="date" 
                        onChange={(e) => setDate(e.target.value)} placeholder='JJ/MM/YY' 
                        className='form-control'
                    />
                </div>
                <div className="mb-3 form-floating">
                    <select 
                        className='form-select' 
                        onChange={(e) => setType(e.target.options[e.target.selectedIndex].value)}
                    >
                        <option value="select">Select the type</option>
                        <option value="depense">Dépense</option>
                        <option value="revenu">Revenu</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input 
                    type="number" 
                    onChange={(e) => setMontant(e.target.value)} 
                    placeholder='Montant' 
                    className='form-control'/>
                </div>
                <div className="mb-3">
                    <textarea 
                        className='form-control'
                        onChange={(e) => setDescription(e.target.value)}
                        cols="30" 
                        rows="10" 
                        placeholder='Description'
                        ></textarea>
                </div>

                <button className='btn btn-success me-3' onClick={add}>VALIDER</button>
                <button className='btn btn-danger'><Link to="/" className='link'>ANNULER</Link></button>
            </form>
      </div>
  )
}

export default AddTransactions