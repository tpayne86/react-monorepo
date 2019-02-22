import { homeUtil } from '.';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('unit test cases', () => {
  const spy = jest
    .spyOn(homeUtil, 'someAsyncOperation')
    .mockImplementation(jest.fn());

  it('should mock', () => {
    spy.mockReturnValue('fake fake');
    const res = homeUtil.fnWhichIwantToTest(1);
    const tt = homeUtil.someAsyncOperation('no');
    expect(tt).toBe('fake fake');
    expect(res).toEqual('fake fake');
    expect(true).toBe(true);
  });
});
