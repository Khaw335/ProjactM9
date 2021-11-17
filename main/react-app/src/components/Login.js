import React from "react";
import { Link } from "react-router-dom";
import { loggedin , loginaccount , currentuser , userlogin } from '../actions'
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function Login() {

    const dispatch = useDispatch()
    const history = useHistory()
    const loginsuccess = useSelector(state=>state.customer)
    const loginacc = () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        dispatch(loginaccount(username,password))
        const loginindex = loginsuccess.findIndex(
            (user) => user.status === true
        );
        console.log(loginindex)
        if(loginindex>=0){
            if(loginsuccess[loginindex].auth===true){
                dispatch(userlogin())
            }
            dispatch(loggedin())
            dispatch(currentuser(username))
            swal("Logging In Success!",'', "success");
            history.push('/');
        }else{
            history.push('/login')
        }
    }

    return (
        <div style={{'backgroundImage': 'url(https://images.unsplash.com/photo-1565701175719-5ef844931183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1648&q=80)'}}>

            <div className="container my-auto">
                <div className="d-flex justify-content-center">
                    <div className="card" style={{width: 18+'rem',margin:65+'px'}}>
                        <img className="card-img-top" src="https://i.pinimg.com/564x/04/71/1a/04711aaf1a2247dcf34e52ce57630ead.jpg" alt="..."/>
                        <div className="card-body">
                            <div className="d-flex flex-column  align-items-center">
                                <div className="p-2">
                                    <input type="text" className="user-username form-control" id="username" placeholder="Username"/>
                                </div>
                                <div className="p-2">
                                    <input type="text" className="user-password form-control" id="password" placeholder="Password"/>
                                </div>
                                <div className="p-2">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="p-2">
                                            <Link to='/register'>
                                                <button type="button" className="btn btn-dark">Register</button>
                                            </Link>
                                        </div>
                                        <div className="p-2">
                                                <button type="button" className="btn" style={{backgroundColor:'#5F7A61',color:'white'}} onClick={()=>{loginacc()}}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
  );
}
export default Login
