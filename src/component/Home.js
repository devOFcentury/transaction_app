import React, { useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import { StateContext } from '../context/State';


const Home = () => {

    const {transactions, budget} = useContext(StateContext);

    const revenus = transactions.revenu.map(({date, type, montant}, index) => {
        if(type === "revenu") {
            return (
                <div key={index} className="card my-3 bg-info">
                    <div  className="card-body">
                        <h5 className="card-title">Date: {date}</h5>
                        <p className='card-text'>Montant: {montant} FCFA</p>
                        <button className='btn btn-success'><Link className='link' to={`/${type}/${index}`}>Plus</Link></button>
                    </div>
                </div>
            );
        }

        return null;
    })

    const depenses = transactions.depense.map(({date, type, montant}, index) => {
        if(type === "depense") {
            return (
                <div key={index} className="card my-3 bg-danger">
                    <div className="card-body">
                        <h5 className="card-title">Date: {date}</h5>
                        <p className='card-text'>Montant: {montant} FCFA</p>
                        <button className='btn btn-success me-auto'><Link className='link' to={`/${type}/${index}`}>Plus</Link></button>
                    </div>
                </div>
            );
        }

        return null;
    })

    

  return (
    <div className='container mt-5'>
        <div className="row mb-5">
            <div className="col-4 offset-8">
                <p className='budget'>Budget: {budget} FCFA</p>
            </div>
        </div>


        <button className='mb-5 btn btn-success'><Link to="/addTransactions" className='link'>Faire une transaction</Link></button>


        <div className="row">
            <div className="col-12 col-md-6 col-lg-4 border-end mb-4 mb-lg-none">
                <h3>Revenu</h3>
                {revenus}
            </div>
            <div className="col-12 col-md-6 col-lg-4 border-end mb-4 mb-lg-none">
                <h3>Dépense</h3>
                {depenses}
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <h3>Informations Transactions</h3>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Home