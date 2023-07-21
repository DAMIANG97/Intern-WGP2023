import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Button';
import Copyright from 'components/CopyRight';
import ThemeSelect from 'components/ThemeSelect';

const Home = () => {
  const { t, lang } = useTranslation();

  return (
    <div>
      Hello {t('hello')}! <br />
      lang - {lang}
      <p className="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <Button>Test me</Button>
      <ThemeSelect />
      <Copyright>Copyring © Viachas Kul. All right reserved.</Copyright>
    </div>
  );
};

export default Home;
