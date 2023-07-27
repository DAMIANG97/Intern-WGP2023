import jsonOrEmptyTextMapper from './jsonOrEmptyTextMapper';

describe('jsonOrEmptyTextMapper', () => {
  it('should return parsed object from valid response', async () => {
    // Given
    const testValue = { test: 'object' };
    const response: Response = {
      text: async () => {
        return JSON.stringify(testValue);
      },
    } as Response;
    //When
    const data = await jsonOrEmptyTextMapper(response);
    //Then
    expect(data).toStrictEqual(testValue);
  });

  it('should return empty string when response text is empty', async () => {
    //Given
    const emptyTestValue = '';
    const response: Response = {
      text: async () => {
        return JSON.stringify(emptyTestValue);
      },
    } as Response;
    //When
    const data = await jsonOrEmptyTextMapper(response);
    //Then
    expect(data).toStrictEqual(emptyTestValue);
  });
});
