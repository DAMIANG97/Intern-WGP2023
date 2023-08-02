import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Button';
import Hero from 'components/Hero';

interface HomeProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
}

const Home: React.FC<HomeProps> = ({ heroContent }) => {
  const { t, lang } = useTranslation();
  return (
    <div>
      <Hero heroContent={heroContent} />
      Hello {t('hello')}! <br />
      lang - {lang}
      <p className="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <Button>Test me</Button>
    </div>
  );
};

export default Home;
