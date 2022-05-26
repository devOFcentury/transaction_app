import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {StateContext} from "../contextTransaction/State"

function Information() {

    const params = useParams();

    const {transactions} = useContext(StateContext);

    let indexParam = parseInt(params.index);
    let typeParam = params.type;
    

    const revenu = transactions.revenu.map((transaction, index) => {
      if(index === indexParam) {
        return (
          <div key={index}>
            <p>
              <u className='text-center'>Date:</u>
              <br />
              <strong>{transaction.date}</strong>
            </p>
            <p>
              <u className='text-center'>Type:</u>
              <br />
              <strong>{transaction.type}</strong>
            </p>
            <p>
              <u className='text-center'>Montant:</u>
              <br />
              <strong>{transaction.montant} FCFA</strong>
            </p>
            <p>
              <u className='text-center'>Description:</u>
              <br />
              <strong>{transaction.description}</strong>
            </p>
          </div>
        );
      }

      return null;
    });

    const depense = transactions.depense.map((transaction, index) => {
      if(index === indexParam) {
        return (
          <div key={index}>
            <p>
              <u className='text-center'>Date:</u>
              <br />
              <strong>{transaction.date}</strong>
            </p>
            <p>
              <u className='text-center'>Type:</u>
              <br />
              <strong>{transaction.type}</strong>
            </p>
            <p>
              <u className='text-center'>Montant:</u>
              <br />
              <strong>{transaction.montant} FCFA</strong>
            </p>
            <p>
              <u className='text-center'>Description:</u>
              <br />
              <strong>{transaction.description}</strong>
            </p>
          </div>
        );
      }

      return null;
    });

    function afficheInfo() {
      if(typeParam === "revenu") {
        return revenu
      }
      else {
        return depense
      }
    }
    
  return (
    <div>
        {
          afficheInfo()
        }
        
    </div>
  )
}

export default Information