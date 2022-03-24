import { useContext} from 'react'
// import { Box, styled, useTheme } from '@mui/system'
// import { Paragraph, Span } from '../components/typo'
// import Loginclock from '../assets/Loginclock.PNG'
import { FormInput } from '../styled/form.styled';
import GlobalContext from '../components/GlobalContext';
import { AppButton } from '../styled/Button,styled';


// const IMG = styled('img')(() => ({
//     width: '100%',
// }))

// const FlexBox = styled(Box)(() => ({
//     display: 'flex',
//     alignItems: 'center',
// }))

// const JustifyBox = styled(FlexBox)(() => ({
//     justifyContent: 'center',
// }))


const Home = () => {

    const { register, setRegisterEmail, setRegisterPassword } = useContext(GlobalContext)

  return (
  <div>
  hello
    <FormInput
              // width={"60%"}
              placeholder="Email"
              type="text"
              name="email"
              id='email'
              onChange={(e) => {setRegisterEmail(e.target.value)
              console.log(e.target.value)}}
            />
            <FormInput
              // width={"60%"}
              placeholder="Password"
              type="password"
              name="password"
              id='password'
              onChange={(e) => setRegisterPassword(setRegisterEmail)}
            />
            
            <AppButton
              bg="#292929"
              bcolor="#fff"
              color="#fff"
              className="newUserBttn"
              type="submit"
              id="submituser"
              onClick={register}
            >Sign Up Now!</AppButton>
    
    </div>
  )
}

export default Home