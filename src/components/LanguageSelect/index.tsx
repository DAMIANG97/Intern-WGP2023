import { FunctionComponent, useState } from 'react';

import Select from 'components/Select';

const options = ['English', 'German', 'Chinese', 'Japanese'];

const LanguageSelect: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return <Select options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
};

export default LanguageSelect;
