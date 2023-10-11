import Nav from '@components/Nav'
import '@styles/globals.css'
import { AuthProvider } from '@components/Provider'


const RootLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <html>
        <body>
          <AuthProvider>
          <Nav/>
            <main>
                {children}
            </main>
            </AuthProvider>
        </body>
    </html>
  )
}

export default RootLayout