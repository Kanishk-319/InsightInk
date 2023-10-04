import Nav from '@components/Nav'
import '@styles/globals.css'


const RootLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <html>
        <body>
          <Nav/>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout