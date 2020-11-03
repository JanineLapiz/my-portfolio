import React from 'react';
import data from '../project-data.json';


export default function Accomplishments() {
    return(
        <div id='accomp' className='main-content'>
            <h2>Accomplishments</h2>
            
            <div className='container'>
                {data.accomplishments.map(item => 
                    <div className='my-5' key={item.id}>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='card-title'>{item.title}</div>
                            </div>
                            <div className='card-body'>
                                <div className='card-text text-muted'>
                                    <p>{item.issued_by}</p>
                                    <p><strong>Issued:</strong> {item.issued}</p>
                                    <p><strong>Expires:</strong> {item.expires}</p>
                                    {item.credential_id && (<p><strong>Credential ID:</strong> {item.credential_id}</p>)}
                                    <a className='btn btn-outline-dark btn-sm' target='_blank' rel='noreferrer' href={item.credential_url}>See Credential</a>
                                </div>
                            </div>
                        </div>
                    </div>    
                )}                
            </div>
        </div>
    );
}