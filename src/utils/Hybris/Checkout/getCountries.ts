import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

export interface Countries {
  isocode: string;
  name: string;
}

async function getCountries(): Promise<Countries[]> {
  return apiFetch<Countries[]>(`${BASESITE_URL}/countries`);
}
export default getCountries;
