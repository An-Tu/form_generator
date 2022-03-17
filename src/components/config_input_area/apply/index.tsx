import { memo } from 'react';
import { useModel } from 'src/hooks';

const ConfigApply = () => {
  const model = useModel();

  const onClick = () => model.configModel.decode();

  return <button onClick={onClick}>Apply</button>;
};

export default memo(ConfigApply);
