import 'bootstrap/scss/bootstrap.scss'
import '@/styles/globals.scss'
import Layout from "../layout/layout"
import { createContext, useEffect, useState } from "react"

export const Context = createContext({})

export default function App({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [users, setUsers] = useState({})
  const [repos, setRepos] = useState({})

  /* Free fake API for testing and prototyping.: //jsonplaceholder.typicode.com/ */
  const getStaticPropsApp = async () => {
    const [users, repos] = await Promise.all([
      (await fetch(`http://jsonplaceholder.typicode.com/users`)).json(),
      (await fetch(`http://jsonplaceholder.typicode.com/posts`)).json(),
    ])

    if (users && repos) {
      setUsers(users)
      setRepos(repos)

      setIsLoaded(true)
    }
  }

  useEffect(() => { getStaticPropsApp() }, [])

  //console.log(users)
  //console.log(repos)

  const themes = {
    light: {foreground: '#212529', background: '#F8F9FA', iconTheme:'MoonFill', themeName:'light',},
    dark: {foreground: '#ffffff', background: '#212529', iconTheme:'SunFill', themeName:'dark',},
  }

  const [theme, setTheme] = useState(themes?.dark)

  return (<>
  {!isLoaded && <div className={'loading text-center'}>..:::.. loading ..:::..</div>}
  {isLoaded && <Context.Provider value={{theme, setTheme, themes, users, repos}}>
    <Layout><Component {...pageProps} /></Layout>
  </Context.Provider>}
  </>)
}
