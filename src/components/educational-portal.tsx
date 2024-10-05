'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Chatbot from './Chatbot'

export function EducationalPortalComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Educational Portal</h2>
        <p className="mb-4">Please log in to access your personalized dashboard.</p>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Educational Portal</h2>
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
          <TabsTrigger value="chat">Chat with ZabBot</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <h3 className="text-xl font-semibold mb-4">Your Dashboard</h3>
          <p className="mb-4">Welcome back! Here's your personalized information.</p>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Announcements</h4>
            <div className="border rounded-md p-4">
              <p>Important: Mid-term exams start next week. Please check your exam schedule in the Courses tab.</p>
              <p className="mt-2">Reminder: The deadline for course registration for the next semester is approaching. Visit the registrar's office if you need assistance.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="courses">
          <h3 className="text-xl font-semibold mb-4">Your Courses</h3>
          <ul className="list-disc list-inside mb-4">
            <li>CS101: Introduction to Programming</li>
            <li>MATH201: Linear Algebra</li>
            <li>ENG102: Academic Writing</li>
          </ul>
          <Button>Register for New Courses</Button>
        </TabsContent>
        <TabsContent value="grades">
          <h3 className="text-xl font-semibold mb-4">Your Grades</h3>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Course</th>
                <th className="border border-gray-300 p-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">CS101</td>
                <td className="border border-gray-300 p-2">A</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">MATH201</td>
                <td className="border border-gray-300 p-2">B+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">ENG102</td>
                <td className="border border-gray-300 p-2">A-</td>
              </tr>
            </tbody>
          </table>
          <Button>View Full Transcript</Button>
        </TabsContent>
        <TabsContent value="chat">
          <Chatbot isLoggedIn={true} />
        </TabsContent>
      </Tabs>
    </div>
  )
}