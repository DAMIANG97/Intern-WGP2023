/**
 * Because backend sometimes returns content with length equals 0.
 */
async function jsonOrEmptyTextMapper<DATA = unknown>(response: Response): Promise<DATA> {
  try {
    const responseText = response.text();
    const text = await responseText;
    if (text.length > 0) {
      return JSON.parse(text);
    }
    return text as DATA;
  } catch (error) {
    return response as DATA;
  }
}

export default jsonOrEmptyTextMapper;
