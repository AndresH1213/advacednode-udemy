const stats = require('../src/statistics');
const utils = require('../utils');

// mock the whole module
jest.mock('../utils');

test('it should return a valid percentage number', () => {
  // create the spy function, this doesn't changes the implementation
  // of the function but allows access to all the methods of the function
  const spyFn = jest.spyOn(stats, 'getPercentage');

  const dailyStats = 10;
  const totalStats = 100;

  // create a new mock implementation because we want
  // to control what values return this function.
  // utils module is used by statadistic module
  utils.getStats.mockImplementationOnce(() => {
    return { dailyStats, totalStats };
  });

  const statistics = spyFn();
  expect(statistics).toBe(10);
  expect(spyFn.mock.results[0].value).toBe(10);

  // clear the mock
  spyFn.mockReset();
});
