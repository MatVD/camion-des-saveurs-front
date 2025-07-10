// updateUserById.test.ts

import { updateUserById } from "../../utils/userUtils/updateUserById";
import "@testing-library/jest-dom";

// On simule l'API fetch globalement
global.fetch = jest.fn();

describe("updateUserById", () => {
    const userId = "12345";
    const updateData = { name: "Jane Doe" };
    const updatedUser = { id: userId, ...updateData };

    beforeEach(() => {
        // On réinitialise les mocks avant chaque test
        (fetch as jest.Mock).mockClear();
    });

    it("doit envoyer une requête PUT avec les bonnes données", async () => {
        (fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => updatedUser,
        });

        const result = await updateUserById(userId, updateData);

        // Vérifie que la requête a bien été envoyée avec les bons paramètres
        expect(fetch).toHaveBeenCalledWith(`/api/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        });

        // Vérifie que les données retournées sont correctes
        expect(result).toEqual(updatedUser);
    });

    it("doit lever une erreur si la réponse n'est pas OK", async () => {
        (fetch as jest.Mock).mockResolvedValue({
            ok: false,
            statusText: "Bad Request",
        });

        // Vérifie que l'erreur personnalisée est bien levée
        await expect(updateUserById(userId, updateData)).rejects.toThrow("La mise à jour de l'utilisateur a échoué");
    });

    it("doit gérer les erreurs de type fetch (ex: réseau)", async () => {
        const errorMessage = "Erreur réseau";
        (fetch as jest.Mock).mockRejectedValue(new Error(errorMessage));

        // Vérifie que l'erreur du fetch est bien propagée
        await expect(updateUserById(userId, updateData)).rejects.toThrow(errorMessage);
    });
});
