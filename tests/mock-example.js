const Users = require('../src/users');
const axios = require('axios');

// here we are mocking the whole module of axios
jest.mock('axios');

test('it should return a user with ID: 1', () => {
  const user = { name: 'Piotr', id: 1 };
  const response = { data: user };

  // mocking the implmentation
  axios.get.mockImplementation(() => Promise.resolve(response));
  Users.getUsers().then((res) => {
    expect(res.data.id).toEqual(user.id);
  });

  // changing the mocking implementation
  axios.get.mockImplementation(() => Promise.reject(null));
  Users.getUsers()
    .then((res) => {
      expect(res).toBe(null);
    })
    .catch((e) => e);

  // creating a new mock function
  const mockFn = jest.fn(() => Promise.resolve(response));
  mockFn();
  expect(mockFn.mock.calls).toHaveLength(1);
});
