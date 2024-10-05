'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Chatbot from '../components/ui/Chatbot'

export default function EducationalPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Educational Portal</h2>
        <p className="mb-4 text-gray-700">Please log in to access your personalized dashboard.</p>
        <Button className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white" onClick={() => setIsLoggedIn(true)}>Login</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-szabist-dark-blue">Welcome to Your Educational Portal</h2>
      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="bg-szabist-light-blue">
          <TabsTrigger value="dashboard" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Dashboard</TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Courses</TabsTrigger>
          <TabsTrigger value="grades" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Grades</TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Resources</TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-szabist-dark-blue data-[state=active]:text-szabist-white">Chat with ZabBot</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Your Dashboard</h3>
          <p className="mb-4 text-gray-700">Welcome back! Here's your personalized information.</p>
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-szabist-dark-blue">Announcements</h4>
            <div className="border border-szabist-light-blue rounded-md p-4 bg-szabist-white shadow-md">
              <p className="text-gray-700">Important: Mid-term exams start next week. Please check your exam schedule in the Courses tab.</p>
              <p className="mt-2 text-gray-700">Reminder: The deadline for course registration for the next semester is approaching. Visit the registrar's office if you need assistance.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="courses">
          <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Your Courses</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li className="text-gray-700">CS101: Introduction to Programming</li>
            <li className="text-gray-700">MATH201: Linear Algebra</li>
            <li className="text-gray-700">ENG102: Academic Writing</li>
          </ul>
          <Button className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white">Register for New Courses</Button>
        </TabsContent>
        <TabsContent value="grades">
          <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Your Grades</h3>
          <table className="w-full border-collapse border border-szabist-light-blue mb-4">
            <thead>
              <tr className="bg-szabist-light-blue text-szabist-white">
                <th className="border border-szabist-light-blue p-2">Course</th>
                <th className="border border-szabist-light-blue p-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-szabist-light-blue p-2 text-gray-700">CS101</td>
                <td className="border border-szabist-light-blue p-2 text-gray-700">A</td>
              </tr>
              <tr>
                <td className="border border-szabist-light-blue p-2 text-gray-700">MATH201</td>
                <td className="border border-szabist-light-blue p-2 text-gray-700">B+</td>
              </tr>
              <tr>
                <td className="border border-szabist-light-blue p-2 text-gray-700">ENG102</td>
                <td className="border border-szabist-light-blue p-2 text-gray-700">A-</td>
              </tr>
            </tbody>
          </table>
          <Button className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white">View Full Transcript</Button>
        </TabsContent>
        <TabsContent value="resources">
          <h3 className="text-xl font-semibold mb-4 text-szabist-dark-blue">Resources</h3>
          <p className="mb-4 text-gray-700">Access a variety of resources including e-books, journals, and online courses to enhance your learning experience.</p>
          <div className="relative h-64 md:h-auto">
            <Image src="/public/logo.png" alt="Resources" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
          </div>
        </TabsContent>
        <TabsContent value="chat">
          <Chatbot isLoggedIn={true} />
        </TabsContent>
      </Tabs>
    </div>
  )
}