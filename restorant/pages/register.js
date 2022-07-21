import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import { useRouter } from 'next/router'



const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/register', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

    return(
      <div>
        <Head>
          <title>Register Page</title>
        </Head>
        <div className="login-page">
  <div className="form">
    <form className="login-form"  onSubmit={handleSubmit}>
      <input type="text" placeholder="Ad-Soyad" name="name" value={name} onChange={handleChangeInput}/>
      <input type="email" placeholder="E-pasto"  name="email" value={email} onChange={handleChangeInput} />
      <input type="password" placeholder="Şifre"  name="password" value={password} onChange={handleChangeInput} />
      <input type="password" placeholder="Şifre Tekrar" name="cf_password" value={cf_password} onChange={handleChangeInput}/>
      
      <button>Kaydol</button>
    </form>
  </div>
</div>

     
      </div>
    ) 
  }
  
  export default Register






  