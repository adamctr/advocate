import '@/styles/globals.css'
import Navbar from '@/components/elements/Navbar'

export default function RootLayout({ children }: {children: React.ReactNode}) {

    return(
        <html>
            <body>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    )
}