'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import UniversityHomepage from './UniversityHomepage'
import EducationalPortal from './EducationalPortal'
import Logo from '../components/ui/logo'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-szabist-white">
      <header className="bg-szabist-dark-blue text-szabist-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo />
            <h1 className="text-2xl font-bold">SZABIST University</h1>
          </div>
          {isLoggedIn ? (
            <Button variant="outline" className="text-szabist-white border-szabist-white hover:bg-szabist-light-blue" onClick={() => setIsLoggedIn(false)}>Log Out</Button>
          ) : (
            <Button variant="outline" className="text-szabist-white border-szabist-white hover:bg-szabist-light-blue" onClick={() => setIsLoggedIn(true)}>Log In</Button>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {isLoggedIn ? <EducationalPortal /> : <UniversityHomepage />}
      </main>

      <footer className="bg-szabist-dark-blue text-szabist-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 SZABIST University. All rights reserved.</p>
          <p>123 University Avenue, Karachi, Pakistan | Phone: +92 123 456 7890 | Email: info@szabist.edu.pk</p>
        </div>
      </footer>
    </div>
  )
}