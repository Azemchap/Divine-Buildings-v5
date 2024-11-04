
import App from '@/components/App'
import BackToTop from '@/components/BackToTop'
import SocialLinks from '@/components/SocialLinks'
import { ThemeProvider } from '@/components/themeprovider'
import './globals.css'

export const metadata = {
  title: 'Divine Buildings',
  description: 'This is a website where you can buy all kinds of construction and house plans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='relative'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <App>
            {children}
          </App>
          <BackToTop />
          <SocialLinks />
        </ThemeProvider>
      </body>
    </html>
  )
}
