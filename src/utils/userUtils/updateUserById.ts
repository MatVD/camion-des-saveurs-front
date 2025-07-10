export const updateUserById = (userId: string, userData: Record<string, any>) => {
    return fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('La mise à jour de l\'utilisateur a échoué');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erreur lors de la requête fetch pour la mise à jour de l\'utilisateur :', error);
            throw error;
        });
};