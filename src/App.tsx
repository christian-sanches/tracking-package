import { Package } from 'lucide-react'
import React, { useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import Timeline from './components/Timeline'
import TrackingForm from './components/TrackingForm'

function App() {
  const [trackingCode, setTrackingCode] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = (code: string) => {
    if (code === "BR12345SP") {
      setTrackingCode(code)
      setError(null)
    } else {
      setTrackingCode(null)
      setError("Código de rastreamento não encontrado. Por favor, verifique e tente novamente.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Package className="w-10 h-10 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Rastreie sua encomenda</h1>
        </div>
        <TrackingForm onSearch={handleSearch} />
        {error && <ErrorMessage message={error} />}
        {trackingCode && <Timeline trackingCode={trackingCode} />}
      </div>
    </div>
  )
}

export default App