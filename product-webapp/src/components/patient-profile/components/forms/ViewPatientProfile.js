import React from 'react';

function ViewPatientProfile(props) {
    return (
       <>
           
                {
                    props.users.length>0?(
                        props.users.map((user)=>{
                            const {id, firstName,contactNo,lastName,age,height,weight,blood,gender} = user;
                            return(
                               
                                <div key={id} className="shadow-sm p-3 mb-5 bg-body rounded border-top-0 border-opacity-25">
                                  <h2 className="text-uppercase text-center">
                                    View Profile:
                                  </h2>
                                  <div className="card-body p-4 p-md-5">
                                    <form >
                                      <div className="row">
                                        <div className="col-md-6 ">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                          First Name:
                                            </h4>
                                            <p>
                                             
                                              {firstName}
                                            </p>
                                          
                                          </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                          Last Name:
                                            </h4>
                                            <p>
                                             
                                              {lastName}
                                            </p>
                                           
                                          </div>
                                        </div>
                                      </div>
                                
                                      <div className="row">
                                        <div className="col-md-3 mb-4 pb-2">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                          Age:
                                            </h4>
                                            <p>
                                             
                                              {age}
                                            </p>
                                            
                                          </div>
                                        </div>
                                        <div className="col-md-3 mb-4 pb-2">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                          Gender:
                                            </h4>
                                            <p>
                                             
                                              {gender}
                                            </p>
                                           
                                          </div>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                          <div className="form-outline w-100">
                                          <h4 className="text-bold">
                                          Contact No:
                                            </h4>
                                            <p>
                                             
                                              {contactNo}
                                            </p>
                                           
                                          </div>
                                        </div>
                                      </div>
                                
                                      <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                          Blood Group:
                                            </h4>
                                            <p>
                                             
                                              {blood}
                                            </p>
                                           
                                          </div>
                                        </div>
                                        <div className="col-md-3 mb-4 pb-2">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                          Weight:
                                            </h4>
                                            <p>
                                             
                                              {weight}
                                            </p>
                                           
                                          </div>
                                        </div>
                                        <div className="col-md-3 mb-4 pb-2">
                                          <div className="form-outline">
                                          <h4 className="text-bold">
                                         Height:
                                            </h4>
                                            <p>
                                             
                                              {height}
                                            </p>
                                            
                                          </div>
                                        </div>
                                      </div>
                                
                                      <div className="mt-4 pt-2 text-center">
                                        <button className="btn btn-info btn-lg" onClick={() => {props.editUser(id, user) ; props.viewPatient(false)}}>
                                          Edit Profile
                                        </button>
                                       
                                      </div>
                                    </form>
                                  </div>
                                </div>
                             
                                
                                
                            )
                        })
                    ):(
                        <li>no user found</li>
                    )
                }
               
            </>
    );
}

export default ViewPatientProfile;




{/* <ol key={id}>
                                <li>{firstName}</li>
                                <li>{lastName}</li>
                                <li>{age}</li>
                                <li>{weight}</li>
                                <li>{height}</li>
                                <li>{bloodValue}</li>
                                <li>{genderValue}</li>
                                <button onClick={() => {props.editUser(id, user) ; props.viewPatient(false)}}>Edit</button>
                            </ol> */}