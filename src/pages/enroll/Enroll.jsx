import { User, Envelope, Lock } from 'phosphor-react'
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { getErrorMsg } from '../../utilities/getErrorMessage';
import { MsgContext } from '../../contexts/MsgProvider';

const Enroll = () => {

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    const { setLoggedInUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const { setSuccessMsg, setErrorMsg } = useContext(MsgContext);

    const handleEnroll = (event) => {
        event.preventDefault();
        setLoading(true)

        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const server = import.meta.env.VITE_SERVER;

        axios.post(`${server}/users/register`,
            {
                fullName,
                email,
                password
            },
            {
                withCredentials: true
            })
            .then(function (response) {
                const user = response.data.data;

                setLoggedInUser(user);

                localStorage.setItem('user', JSON.stringify(user))

                setSuccessMsg(`Welcome ${user.fullName}. Please check your email for verification.`)

                event.target.reset();

                navigate(from, { replace: true });
            })
            .catch(function (error) {
                const errorMessage = getErrorMsg(error)
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
                        <CardTitle className='text-gray-700'>Create an account</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleEnroll} className="space-y-2">
                        <fieldset className="space-y-1">
                            <Label htmlFor="fullName">Full Name*</Label>
                            <div className="relative">
                                <Input id="fullName" type="text" placeholder="Enter full name" className="ps-11" />
                                <InputIcon>
                                    <User size={19} color="#AFBACA" />
                                </InputIcon>
                            </div>
                        </fieldset>
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
                                    Enroll
                                </Button>
                        }
                    </form>
                    <p className='text-center mt-8 text-xs'>Already have an account? <Link to='/login' className='text-sm text-cyan-600 font-medium hover:underline transition'>Login</Link></p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Enroll;