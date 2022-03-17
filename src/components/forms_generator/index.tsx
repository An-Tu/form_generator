import { memo } from 'react';
import FormsGeneratorTitle from './title';
import FormsGeneratorItems from './items';
import FormsGeneratorButtons from './buttons';

const FormsGenerator = () => {
  return (
    <div>
      <FormsGeneratorTitle />
      <FormsGeneratorItems />
      <FormsGeneratorButtons />
    </div>
  );
};

export default memo(FormsGenerator);
