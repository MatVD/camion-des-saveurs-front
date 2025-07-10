// function getAllLocationsById(locations: { id: string }[], ids: string[]): { id: string }[] {

export function getAllLocationsById(locations: { id: string }[], ids: string[]): { id: string }[] {
    return locations.filter(location => ids.includes(location.id));
}