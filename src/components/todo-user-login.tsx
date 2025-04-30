import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export  function ToDoUserLogin(){


    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserId:'',
            Password:''
        },
        onSubmit: (user) => {
            axios.get(`http://127.0.0.1:3200/users`)
            .then(response=>{
                 var client = response.data.find((item:any) => item.UserId===user.UserId)
                 if(client) {
                     if(client.Password===user.Password){
                         setCookie('userid', user.UserId);
                         navigate('/user-dashboard');
                     } else {
                        alert('Invalid Password');
                     }
                 } else {
                    alert('User Not Found');
                 }
            })
        }
    })

    return(
        <div className="text-start d-flex justify-content-center">
            <form className="bg-light p-3 mt-4" onSubmit={formik.handleSubmit}>
                <h3>User Login</h3>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="Password" /></dd>
                </dl>
                <button type="submit" className="btn btn-warning w-100">Login</button>
                <div className="mt-3">
                    <Link to="/register">New User Register</Link>
                </div>
            </form>
        </div>
    )
}