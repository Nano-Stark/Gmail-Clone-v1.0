import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                 displayName: user.displayName,
                 email: user.email,
                 photoUrl: user.photoURL,
                })
            );
        })
        .catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className='login_container'>
            <img 
                src="https://cdn.vox-cdn.com/thumbor/_EidO8pPCPbfPSNE8a3DEGVrAM0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                alt=""
            />

            <Button 
                variant="contained"
                color="primary"
                onClick={signIn}>
                Login</Button>
        </div>

    </div>
  )
}

export default Login