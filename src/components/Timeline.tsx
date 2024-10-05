import { CheckCircle, Home, Package, Truck } from 'lucide-react'
import React from 'react'

interface TimelineProps {
  trackingCode: string
}

const Timeline: React.FC<TimelineProps> = ({ trackingCode }) => {
  // Dados simulados para a linha do tempo
  const steps = [
    { icon: Package, text: 'Pacote recebido', date: '15/03/2023' },
    { icon: Truck, text: 'Em trânsito', date: '16/03/2023' },
    { icon: Home, text: 'Saiu para entrega', date: '17/03/2023' },
    { icon: CheckCircle, text: 'Entregue', date: '18/03/2023' },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Rastreamento: {trackingCode}</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <step.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">{step.text}</p>
              <p className="text-sm text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline