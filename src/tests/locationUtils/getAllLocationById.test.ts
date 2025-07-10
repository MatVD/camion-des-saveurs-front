// test getAllLocationsById function

import { getAllLocationsById } from '../../utils/locationUtils/getAllLocationById';

describe('getAllLocationsById', () => {
    it('should return locations that match the given IDs', () => {
        const locations = [
            { id: '1' },
            { id: '2' },
            { id: '3' }
        ];
        const ids = ['1', '3'];
        const result = getAllLocationsById(locations, ids);
        expect(result).toEqual([
            { id: '1' },
            { id: '3' }
        ]);
    });

    it('should return an empty array if no IDs match', () => {
        const locations = [
            { id: '1' },
            { id: '2' },
            { id: '3' }
        ];
        const ids = ['4', '5'];
        const result = getAllLocationsById(locations, ids);
        expect(result).toEqual([]);
    });
});