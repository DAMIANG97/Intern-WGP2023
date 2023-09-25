import { getCookie } from 'cookies-next';

function getLocaleSuffix() {
  const lang = getCookie('NEXT_LOCALE');
  const curr = getCookie('NEXT_CURRENCY');
  const localeSuffix = `lang=${lang}&curr=${curr}`;
  return localeSuffix;
}

export default getLocaleSuffix;
