// getUserById function to fetch user data by ID

export const getUserById = (userId: string) => {
  return fetch(`/api/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    });
};