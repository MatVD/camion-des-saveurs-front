// function getAllUsers() {
export async function getAllUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const users = await response.json();
  return users;
}