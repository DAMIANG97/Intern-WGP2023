import { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Select from 'components/Select';

interface LanguageSelectProps {
  defaultLanguage: Hybris.Language;
  languageOptions: Hybris.Language[];
}

const LanguageSelect: FunctionComponent<LanguageSelectProps> = ({ defaultLanguage, languageOptions }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>('');
  const languageNames = languageOptions.map((language) => language.nativeName);
  const router = useRouter();

  const setLocale = async (languageName: string) => {
    const languageIsocode = languageOptions.find((language) => language.nativeName === languageName)?.isocode;
    const path = router.asPath;
    if (languageIsocode) {
      const routerPush = async () => {
        router.push(path, path, { locale: languageIsocode });
      };
      await routerPush();
    }
  };

  useEffect(() => {
    const localeLanguage = languageOptions.find((language) => language.isocode === router.locale);
    if (localeLanguage) {
      setSelectedOption(localeLanguage.name);
    } else {
      setSelectedOption(defaultLanguage.nativeName);
    }
  }, [languageOptions, router.locale, defaultLanguage]);

  const submitHandler = (languageName: string) => {
    setSelectedOption(languageName);
    setLocale(languageName);
  };

  return <Select options={languageNames} selectedOption={selectedOption} submitHandler={submitHandler} />;
};

export default LanguageSelect;
