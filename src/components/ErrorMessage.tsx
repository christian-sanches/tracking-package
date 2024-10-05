import { AlertCircle } from 'lucide-react'
import React from 'react'

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 flex items-center">
      <AlertCircle className="w-5 h-5 mr-2" />
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage