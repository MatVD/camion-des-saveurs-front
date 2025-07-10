// getUserById.ts test case
import { getUserById } from "../../utils/userUtils/getUserById";
import "@testing-library/jest-dom";

// Mocking the fetch API
global.fetch = jest.fn();

describe("getUserById", () => {
  const userId = "12345";
  const mockUserData = { id: userId, name: "John Doe" };

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  // Silence console.error during tests
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it("should fetch user data by ID", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUserData,
    });

    const user = await getUserById(userId);
    expect(fetch).toHaveBeenCalledWith(`/api/users/${userId}`);
    expect(user).toEqual(mockUserData);
  });

  it("should throw an error if the response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: "Not Found",
    });

    await expect(getUserById(userId)).rejects.toThrow(
      "Network response was not ok"
    );
  });

  it("should handle fetch errors", async () => {
    const errorMessage = "Fetch failed";
    (fetch as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(getUserById(userId)).rejects.toThrow(errorMessage);
  });
});
