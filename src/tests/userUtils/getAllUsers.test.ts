// test getAllUsers function
import { getAllUsers } from '../../utils/userUtils/getAllUsers';

describe('getAllUsers', () => {
  it('should fetch all users successfully', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers),
      })
    ) as jest.Mock;

    const users = await getAllUsers();
    expect(users).toEqual(mockUsers);
  });

  it('should throw an error if the fetch fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    await expect(getAllUsers()).rejects.toThrow('Failed to fetch users');
  });
});