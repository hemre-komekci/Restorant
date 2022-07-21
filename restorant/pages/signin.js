import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'


const Signin = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

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
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

    return(
      <div>
        <Head>
          <title>Sign in Page</title>
        </Head>

        <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
        <div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item text-center"> <a className="nav-link  btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Giriş</a> </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="form px-4 pt-5"> <input type="email"name="email" value={email} onChange={handleChangeInput} placeholder="E-Posta" /> <input type="password"   name="password" value={password} onChange={handleChangeInput}  placeholder="Şifre" /> <button className="btn btn-dark btn-block">Giriş</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
      </div>
    )
  }
  
  export default Signin




