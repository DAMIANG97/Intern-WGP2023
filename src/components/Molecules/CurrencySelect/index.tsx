import { FunctionComponent, useEffect, useState } from 'react';

import Select from 'components/Molecules/Select';
import { getCookies, setCookie } from 'cookies-next';

interface CurrencySelectProps {
  currencyOptions: Hybris.Currency[];
}

const CurrencySelect: FunctionComponent<CurrencySelectProps> = ({ currencyOptions }) => {
  const currencyIsocodes = currencyOptions.map((currency) => currency.isocode);
  const activeCurrency = currencyOptions.find((currency) => currency.active === true)?.isocode;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const cookies = getCookies();
    if (!cookies.NEXT_CURRENCY && activeCurrency) {
      setSelectedOption(activeCurrency);
      setCookie('NEXT_CURRENCY', activeCurrency);
    } else if (cookies.NEXT_CURRENCY) {
      setSelectedOption(cookies.NEXT_CURRENCY);
    }
  }, [activeCurrency]);

  const submitHandler = async (value: string) => {
    setSelectedOption(value);
    setCookie('NEXT_CURRENCY', value);
  };

  return <Select options={currencyIsocodes} selectedOption={selectedOption} submitHandler={submitHandler} />;
};

export default CurrencySelect;
