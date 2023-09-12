import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

export interface TitleProps {
  titles: {
    code: string;
    name: string;
  }[];
}

async function getTitles(): Promise<TitleProps> {
  return apiFetch<TitleProps>(`${BASESITE_URL}/titles`);
}
export default getTitles;
