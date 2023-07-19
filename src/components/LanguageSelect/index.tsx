import { FunctionComponent, useState } from 'react';

import Select from 'components/Select';

const options = ['English', 'German', 'Chinese', 'Japanese'];

interface LanguageSelectProps {
  theme?: string;
}
const LanguageSelect: FunctionComponent<LanguageSelectProps> = ({ theme }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Select theme={theme} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
  );
};

export default LanguageSelect;
