import React, { useState } from 'react'

interface TrackingFormProps {
  onSearch: (code: string) => void
}

const TrackingForm: React.FC<TrackingFormProps> = ({ onSearch }) => {
  const [code, setCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code.trim()) {
      onSearch(code.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Digite o código de rastreamento"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Buscar
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Exemplo de código válido: BR12345SP
      </p>
    </form>
  )
}

export default TrackingForm