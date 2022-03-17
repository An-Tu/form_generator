import { memo, ChangeEvent } from 'react';
import { useModel, useSelector } from 'src/hooks';
import ConfigTextareaUI from './ui';

const ConfigTextarea = () => {
  const model = useModel();
  const value = useSelector(model.configModel);

  const onChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    model.errorModel.clean();
    model.configModel.set(evt.target.value);
  };

  return (
    <ConfigTextareaUI
      placeholder="Enter scheme"
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(ConfigTextarea);
