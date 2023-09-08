import jsonOrEmptyTextMapper from 'utils/jsonOrEmptyTextMapper';

const DEFAULT_INIT = {
  credentials: 'include',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
} as const satisfies RequestInit;

/**
 * Fetches data from the API using the given `input` and `init` parameters.
 * Parses the response as JSON and returns the result.
 */
function apiFetch<DATA>(input: RequestInfo | URL, init?: RequestInit): Promise<DATA> {
  return fetch(input, { ...DEFAULT_INIT, ...init })
    .then((response) => {
      if (response.ok) {
        return jsonOrEmptyTextMapper<DATA>(response);
      }
      throw response;
    })
    .catch((error) =>
      jsonOrEmptyTextMapper(error).then((response) => {
        throw response;
      }),
    );
}

export default apiFetch;
