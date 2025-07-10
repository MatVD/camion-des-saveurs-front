// src/tests/userUtils/getAllLocations.test.ts

import { getAllLocations } from '../../utils/userUtils/getAllLocations';

describe('getAllLocations', () => {
  it("devrait retourner un tableau non vide d'emplacements", () => {
    const result = getAllLocations();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
