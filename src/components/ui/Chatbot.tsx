'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatMessage {
  sender: 'User' | 'ZabBot'
  text: string
}

interface ChatbotProps {
  isLoggedIn: boolean
}

export default function Chatbot({ isLoggedIn = false }: ChatbotProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages(prev => [...prev, { sender: 'User', text: inputMessage }])
      setInputMessage('')
      
      // Simulate AI response
      setTimeout(() => {
        let response = "I'm sorry, I don't have enough information to answer that question. Can you please provide more details or ask something else?"
        
        if (isLoggedIn) {
          if (inputMessage.toLowerCase().includes('course')) {
            response = "To register for a course, please go to the 'Course Registration' section in your student portal. If you need help choosing courses, I can provide a list of available options based on your program."
          } else if (inputMessage.toLowerCase().includes('grade')) {
            response = "Your grades for the current semester will be available two weeks after the final exams. You can view them in the 'Academic Records' section of your portal."
          }
        } else {
          if (inputMessage.toLowerCase().includes('admission')) {
            response = "For admission inquiries, please visit our 'Admissions' page or contact our admissions office at admissions@szabist.edu.pk."
          } else if (inputMessage.toLowerCase().includes('program')) {
            response = "SZABIST offers a wide range of programs including Business Administration, Computer Science, Social Sciences, and more. You can find detailed information on our 'Academic Programs' page."
          }
        }

        setChatMessages(prev => [...prev, { sender: 'ZabBot', text: response }])
      }, 1000)
    }
  }

  return (
    <div className="border border-szabist-light-blue rounded-md p-4 h-[400px] flex flex-col bg-szabist-white shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-szabist-dark-blue">Chat with ZabBot</h3>
      <ScrollArea className="flex-grow mb-4">
        {chatMessages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'ZabBot' ? 'text-szabist-dark-blue' : 'text-gray-700'}`}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Ask ZabBot a question..."
          value={inputMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage()}
          className="border-szabist-light-blue focus:border-szabist-dark-blue"
        />
        <Button onClick={handleSendMessage} className="bg-szabist-dark-blue hover:bg-szabist-light-blue text-szabist-white">Send</Button>
      </div>
    </div>
  )
}