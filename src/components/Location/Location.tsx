import React, { useState, useEffect } from 'react';
import { getLastLocation } from '../../utils/locationUtils';
import { Location as LocationType } from '../../types';

const Location: React.FC = () => {
  const [lastLocation, setLastLocation] = useState<LocationType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastLocation = async () => {
      try {
        setLoading(true);
        setError(null);
        const location = await getLastLocation();
        setLastLocation(location);
      } catch (err) {
        setError('Erreur lors du chargement de la localisation');
        console.error('Error fetching location:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLastLocation();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="ml-2 text-gray-600">Chargement...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  if (!lastLocation) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Aucune localisation disponible</h2>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Dernière Localisation</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{lastLocation.name}</h3>
        <p className="text-gray-600 mb-2">{lastLocation.address}</p>
        <div className="text-sm text-gray-500">
          <p>Coordonnées: {lastLocation.coordinates.lat}, {lastLocation.coordinates.lng}</p>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-gray-800 mb-2">Horaires:</h4>
          <ul className="space-y-1">
            {lastLocation.schedule.map((schedule, index) => (
              <li key={index} className="text-sm text-gray-600">
                {schedule.day}: {schedule.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location; 