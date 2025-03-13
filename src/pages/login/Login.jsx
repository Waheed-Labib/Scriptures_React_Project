import { Envelope, Lock } from 'phosphor-react'
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
    InputIcon,
    Label,
} from 'keep-react'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { server } from '../../constants';
import axios from 'axios';
import SuccessAlert from '../../components/success-alert/SuccessAlert';
import ErrorAlert from '../../components/error-alert/ErrorAlert';
import { AuthContext } from '../../contexts/authProvider';

const Login = () => {

    const { setLoggedInUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true)

        const email = event.target.email.value;
        const password = event.target.password.value;

        axios.post(`${server}/users/login`,
            {
                email,
                password
            },
            {
                withCredentials: true
            })
            .then(function (response) {

                console.log(response)

                const user = response.data.data.user;

                setLoggedInUser(user);

                localStorage.setItem('user', JSON.stringify(user));

                setSuccessMsg(`Welcome Back, ${response.data.data.user.fullName}!`);

                event.target.reset();
            })
            .catch(function (error) {
                const match = error.response.data.match(/<pre>Error: (.*?)<br>/);
                const errorMessage = match ? match[1] : "Unknown error";

                setErrorMsg(`Failed! ${errorMessage}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='w-full'>
            <Card className="max-w-sm mx-auto my-12">
                <CardContent className="space-y-3">
                    <CardHeader>
                        <CardTitle className='text-gray-700'>Login</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleLogin} className="space-y-2">
                        <fieldset className="space-y-1">
                            <Label htmlFor="email">Email*</Label>
                            <div className="relative">
                                <Input id="email" type="email" placeholder="Enter email" className="ps-11" />
                                <InputIcon>
                                    <Envelope size={19} color="#AFBACA" />
                                </InputIcon>
                            </div>
                        </fieldset>
                        <fieldset className="space-y-1">
                            <Label htmlFor="password">Password*</Label>
                            <div className="relative">
                                <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                                <InputIcon>
                                    <Lock size={19} color="#AFBACA" />
                                </InputIcon>
                            </div>
                        </fieldset>
                        {
                            loading ?
                                <Button className="!mt-3 block w-full bg-cyan-700 hover:bg-slate-700" >
                                    Loading ...
                                </Button>
                                :
                                <Button type="submit" className="!mt-3 block w-full bg-cyan-700 hover:bg-slate-700" >
                                    Login
                                </Button>
                        }

                    </form>
                    <p className='text-center mt-8 text-xs'>Don&apos;t have an account? <Link to='/enroll' className='text-sm text-cyan-600 font-medium hover:underline transition'>Enroll Now</Link></p>
                </CardContent>
            </Card>

            {
                successMsg && <SuccessAlert
                    success={successMsg}
                    setSuccess={setSuccessMsg}
                ></SuccessAlert>
            }

            {
                errorMsg && <ErrorAlert
                    error={errorMsg}
                    setError={setErrorMsg}
                ></ErrorAlert>
            }
        </div>
    )
}

export default Login;