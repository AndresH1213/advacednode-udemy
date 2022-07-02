const fetchData = () => {
  return Promise.resolve({ title: 'some title to test' });
};

exports.fetchData = fetchData;

// in the test file we can add

jest.mock('./http');

// what happens is that when the test file gets executed
// jest goes ahead and replaces the http file with our mock
// file so all the functions that are exports here, are
// replacing the functions that normally are in the original module
// for the test only
