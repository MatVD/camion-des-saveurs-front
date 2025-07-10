import { Location } from '../types';

/**
 * Fetches the last location from the API
 * @returns Promise that resolves to the last location object or undefined if not found
 */
export const getLastLocation = async (): Promise<Location | undefined> => {
  try {
    const response = await fetch('/api/locations/last');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching last location:', error);
    return undefined;
  }
}; 