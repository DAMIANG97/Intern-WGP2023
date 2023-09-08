import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

export interface RegionProps {
  countryIso: string;
  isocode: string;
  isocodeShort: string;
  name: string;
}

type Arguments = QueryFunctionContext<[queryFnName: 'getRegions', countryCode: string, localeSuffix: string]>;

async function getRegions({ signal, queryKey: [, countryCode, localeSuffix] }: Arguments): Promise<RegionProps[]> {
  return apiFetch<RegionProps[]>(`${BASESITE_URL}/countries/${countryCode}/regions?fields=FULL&${localeSuffix}`, {
    signal,
    credentials: 'same-origin',
  });
}
export default getRegions;
