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

const Login = () => {
    return (
        <div className='w-full'>
            <Card className="max-w-sm mx-auto my-12">
                <CardContent className="space-y-3">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                    </CardHeader>
                    <form className="space-y-2">
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
                            Login
                        </Button>
                    </form>
                    <p className='text-center mt-8 text-xs'>Don&apos;t have an account? <Link to='/enroll' className='text-sm text-cyan-600 font-medium hover:underline transition'>Enroll Now</Link></p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;