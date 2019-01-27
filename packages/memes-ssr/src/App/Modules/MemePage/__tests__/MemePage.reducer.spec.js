import * as functionUtils from '@healthifyme/utilities/lib/generics';
import memePageReducer from '../MemePage.reducer';


describe('unit test cases for MemePageReducer.js', () => {
  describe('unit test cases for memePageReducer', () => {
    let defaultState = {};
    beforeEach(() => {
      defaultState = {
        loading: false,
        data: [],
        error: null,
      };
    });
    it('should be a valid function', () => {
      expect(typeof memePageReducer).toBe('function');
    });
    it('should return a valid object', () => {
      expect(memePageReducer(defaultState, {})).toBeInstanceOf(Object);
    });
  });
  describe('unit test cases for memePageReducer FETCH_MEMES_LOADING action', () => {
    let defaultState = {};
    beforeEach(() => {
      defaultState = {
        loading: false,
        data: [],
        error: null,
      };
    });
    it('should update default state to loading', () => {
      const mockSimpleApiStoreStates = jest.mock();
      mockSimpleApiStoreStates.spyOn(functionUtils, 'simpleApiStoreStates')
        .mockReturnValue({
          pupularMemes: {
            loading: true,
            data: [],
            error: null,
          },
        });
      const newState = memePageReducer(defaultState, {
        type: 'MEMEPAGE/FETCH_MEMES_LOADING',
      });

      expect(newState).toEqual({
        pupularMemes: {
          loading: true,
          data: [],
          error: null,
        },
      });
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalled();
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledTimes(1);
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledWith(
        defaultState,
        'pupularMemes',
        { loading: true },
      );
      functionUtils.simpleApiStoreStates.mockRestore();
    });
  });
  describe('unit test cases for memePageReducer FETCH_MEMES_SUCCESS action', () => {
    let defaultState = {};
    beforeEach(() => {
      defaultState = {
        loading: false,
        data: [],
        error: null,
      };
    });
    it('should update default state to loading', () => {
      const mockSimpleApiStoreStates = jest.mock();
      mockSimpleApiStoreStates.spyOn(functionUtils, 'simpleApiStoreStates')
        .mockReturnValue({
          pupularMemes: {
            loading: false,
            data: [1, 2, 3],
            error: null,
          },
        });
      const newState = memePageReducer(defaultState, {
        type: 'MEMEPAGE/FETCH_MEMES_SUCCESS',
        payload: [1, 2, 3],
      });

      expect(newState).toEqual({
        pupularMemes: {
          loading: false,
          data: [1, 2, 3],
          error: null,
        },
      });
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalled();
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledTimes(1);
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledWith(
        defaultState,
        'pupularMemes',
        { loading: false, data: [1, 2, 3], error: null },
      );
      functionUtils.simpleApiStoreStates.mockRestore();
    });
  });
  describe('unit test cases for memePageReducer FETCH_MEMES_FAILURE action', () => {
    let defaultState = {};
    beforeEach(() => {
      defaultState = {
        loading: false,
        data: [],
        error: null,
      };
    });
    it('should update default state to loading', () => {
      const mockSimpleApiStoreStates = jest.mock();
      mockSimpleApiStoreStates.spyOn(functionUtils, 'simpleApiStoreStates')
        .mockReturnValue({
          pupularMemes: {
            loading: false,
            data: [],
            error: 'err',
          },
        });
      const newState = memePageReducer(defaultState, {
        type: 'MEMEPAGE/FETCH_MEMES_FAILURE',
        payload: 'err',
      });

      expect(newState).toEqual({
        pupularMemes: {
          loading: false,
          data: [],
          error: 'err',
        },
      });
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalled();
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledTimes(1);
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledWith(
        defaultState,
        'pupularMemes',
        { loading: false, data: [], error: 'err' },
      );
      functionUtils.simpleApiStoreStates.mockRestore();
    });
  });
  describe('unit test cases for memePageReducer FETCH_MEMES_CLEAR action', () => {
    let defaultState = {};
    beforeEach(() => {
      defaultState = {
        loading: false,
        data: [],
        error: null,
      };
    });
    it('should update default state to loading', () => {
      const mockSimpleApiStoreStates = jest.mock();
      mockSimpleApiStoreStates.spyOn(functionUtils, 'simpleApiStoreStates')
        .mockReturnValue({
          pupularMemes: {
            loading: false,
            data: [],
            error: null,
          },
        });
      const newState = memePageReducer(defaultState, {
        type: 'MEMEPAGE/FETCH_MEMES_CLEAR',
        payload: 'err',
      });

      expect(newState).toEqual({
        pupularMemes: {
          loading: false,
          data: [],
          error: null,
        },
      });
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalled();
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledTimes(1);
      expect(functionUtils.simpleApiStoreStates).toHaveBeenCalledWith(
        defaultState,
        'pupularMemes',
        { loading: false, data: [], error: null },
      );
      functionUtils.simpleApiStoreStates.mockRestore();
    });
  });
});
