import '@/styles/globals.css'
import Navbar from '@/components/elements/Navbar'

export default function RootLayout({ children }: {children: React.ReactNode}) {

    return(
        <>
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </head>
            <body>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
        </>
    )
}