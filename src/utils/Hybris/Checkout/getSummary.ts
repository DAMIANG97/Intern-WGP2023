import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

export interface Summary {
  summary: string;
}
type Arguments = QueryFunctionContext<[queryFnName: 'getSummary', productCode: string]>;

export default function getSummary({ queryKey: [, productCode] }: Arguments): Promise<Summary> {
  return apiFetch<Summary>(`${BASESITE_URL}/products/${productCode}?fields=summary`);
}
