import Nav from '@components/Nav'
import '@styles/globals.css'
import { AuthProvider } from '@components/Provider'
import OverlayState from '@Helpers/OverlayState'

const RootLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <html>
        <body>
          <OverlayState>
          <AuthProvider>
          <Nav/>
            <main>
                {children}
            </main>
            </AuthProvider>
            </OverlayState>
        </body>
    </html>
  )
}

export default RootLayout