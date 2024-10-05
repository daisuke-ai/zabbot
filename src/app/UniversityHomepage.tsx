import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Chatbot from '../components/ui/Chatbot'
import Image from 'next/image'
import { useState } from 'react'

export default function UniversityHomepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="home" className="space-y-4">
        <TabsList className="bg-szabist-light-blue">
          <TabsTrigger value="home" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Home</TabsTrigger>
          <TabsTrigger value="programs" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Programs</TabsTrigger>
          <TabsTrigger value="admissions" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Admissions</TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Chat with ZabBot</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-szabist-dark-blue">Welcome to SZABIST University</h2>
              <p className="mb-4 text-gray-700">Discover our world-class academic programs, state-of-the-art facilities, and vibrant campus life.</p>
              <Button className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white">Learn More</Button>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image src="/campus.jpg" alt="SZABIST Campus" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="programs">
          <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Our Programs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <li className="bg-szabist-light-blue text-szabist-white p-4 rounded-lg">Business Administration</li>
            <li className="bg-szabist-light-blue text-szabist-white p-4 rounded-lg">Computer Science</li>
            <li className="bg-szabist-light-blue text-szabist-white p-4 rounded-lg">Social Sciences</li>
            <li className="bg-szabist-light-blue text-szabist-white p-4 rounded-lg">Media Sciences</li>
          </ul>
          <Button className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white">View All Programs</Button>
        </TabsContent>
        <TabsContent value="admissions">
          <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Admissions</h2>
          <p className="mb-4 text-gray-700">Join our diverse community of learners. Applications are now open for the upcoming semester.</p>
          <Button className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white">Apply Now</Button>
        </TabsContent>
        <TabsContent value="chat">
          <Chatbot isLoggedIn={isLoggedIn} />
        </TabsContent>
      </Tabs>
    </div>
  )
}