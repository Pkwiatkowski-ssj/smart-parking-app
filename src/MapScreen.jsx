import React from 'react'

const MapScreen = () => {
  const zones = [
    { name: "Hilltop", types: ["Commuter", "Junior", "Senior"] },
    { name: "CAS", types: ["Sophomore"] },
    { name: "Hogan", types: ["Senior", "Visitor", "Commuter"] },
    { name: "North Lot", types: ["Commuter", "Faculty & Staff"] },
    { name: "Development", types: ["Faculty & Staff", "Vendor"] },
    { name: "Westwoods", types: ["Everyone"] },
    { name: "Whitney Village", types: ["Commuter", "Junior", "Senior"] },
    { name: "Harwood", types: ["Visitor"] },
  ]

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Live Campus Parking Map</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {zones.map((zone, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{zone.name}</h3>
            <p className="mt-2 text-sm text-gray-500">Allowed: {zone.types.join(", ")}</p>
            <div className="mt-3 text-green-600 text-sm font-semibold">Spots: Checking...</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MapScreen
