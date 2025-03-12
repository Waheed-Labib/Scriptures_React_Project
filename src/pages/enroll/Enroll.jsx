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
import { Link } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../constants';

const Enroll = () => {

    const handleEnroll = (event) => {
        event.preventDefault();

        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        axios.post(`${server}/users/register`, {
            fullName,
            email,
            password
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                const match = error.response.data.match(/<pre>Error: (.*?)<br>/);
                const errorMessage = match ? match[1] : "Unknown error";

                console.log(errorMessage)
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
                        <Button type="submit" className="!mt-3 block w-full bg-cyan-700 hover:bg-slate-700" >
                            Enroll
                        </Button>
                    </form>
                    <p className='text-center mt-8 text-xs'>Already have an account? <Link to='/login' className='text-sm text-cyan-600 font-medium hover:underline transition'>Login</Link></p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Enroll;