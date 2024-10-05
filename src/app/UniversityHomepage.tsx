
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
        <TabsList className="bg-szabist-light-gray">
          <TabsTrigger value="home" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Home</TabsTrigger>
          <TabsTrigger value="programs" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Programs</TabsTrigger>
          <TabsTrigger value="admissions" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Admissions</TabsTrigger>
          <TabsTrigger value="campus-life" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Campus Life</TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Chat with ZabBot</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-szabist-dark-blue">Welcome to SZABIST University</h2>
              <p className="mb-4 text-gray-700">Discover our world-class academic programs, state-of-the-art facilities, and vibrant campus life at SZABIST, one of Pakistan's leading higher education institutions.</p>
              <Button className="bg-szabist-dark-blue hover:bg-szabist-red text-szabist-white">Learn More</Button>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image src="/public/OIP.jpeg" alt="SZABIST Campus" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-szabist-dark-blue">Why Choose SZABIST?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Internationally recognized degrees</li>
              <li>State-of-the-art facilities and modern infrastructure</li>
              <li>Distinguished faculty with industry experience</li>
              <li>Strong industry linkages and career support</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="programs">
          <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Our Programs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <li className="bg-szabist-dark-blue text-szabist-white p-4 rounded-lg">Business Administration</li>
            <li className="bg-szabist-dark-blue text-szabist-white p-4 rounded-lg">Computer Science</li>
            <li className="bg-szabist-dark-blue text-szabist-white p-4 rounded-lg">Social Sciences</li>
            <li className="bg-szabist-dark-blue text-szabist-white p-4 rounded-lg">Media Sciences</li>
          </ul>
          <Button className="bg-szabist-dark-blue hover:bg-szabist-red text-szabist-white">View All Programs</Button>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Program Highlights</h3>
            <p className="text-gray-700 mb-4">SZABIST offers a wide range of undergraduate, graduate, and doctoral programs designed to meet the evolving needs of the industry and society.</p>
            <div className="relative h-64 md:h-auto mb-4">
              <Image src="/public/programs-placeholder.jpg" alt="SZABIST Programs" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="admissions">
          <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Admissions</h2>
          <p className="mb-4 text-gray-700">Join our diverse community of learners. Applications are now open for the upcoming semester at SZABIST.</p>
          <Button className="bg-szabist-dark-blue hover:bg-szabist-red text-szabist-white">Apply Now</Button>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Admission Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Submit online application</li>
              <li>Appear for entrance test</li>
              <li>Attend interview (if shortlisted)</li>
              <li>Receive admission decision</li>
            </ol>
            <div className="relative h-64 md:h-auto mt-4">
              <Image src="/public/admissions-placeholder.jpg" alt="SZABIST Admissions" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="campus-life">
          <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Campus Life</h2>
          <p className="mb-4 text-gray-700">Experience a vibrant campus life at SZABIST with various student clubs, sports activities, and cultural events.</p>
          <div className="relative h-64 md:h-auto mb-4">
            <Image src="/public/campus-life-placeholder.jpg" alt="Campus Life" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Student Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Annual cultural festival</li>
              <li>Sports competitions</li>
              <li>Academic societies and clubs</li>
              <li>Community service initiatives</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="chat">
          <Chatbot isLoggedIn={isLoggedIn} />
        </TabsContent>
      </Tabs>
    </div>
  )
}