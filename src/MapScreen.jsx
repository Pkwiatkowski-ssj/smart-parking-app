import React from "react";

function MapScreen() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Live Campus Parking Map</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Hilltop</h2>
          <p>Allowed: Commuter, Junior, Senior</p>
          <p>Spots: Checking...</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">CAS</h2>
          <p>Allowed: Sophomore</p>
          <p>Spots: Checking...</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Hogan</h2>
          <p>Allowed: Senior, Visitor, Commuter</p>
          <p>Spots: Checking...</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">North Lot</h2>
          <p>Allowed: Commuter, Faculty & Staff</p>
          <p>Spots: Checking...</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Development</h2>
          <p>Allowed: Faculty & Staff, Vendor</p>
          <p>Spots: Checking...</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Westwoods</h2>
          <p>Allowed: Everyone</p>
          <p>Spots: Checking...</p>
        </div>
      </div>
    </div>
  );
}

export default MapScreen;
