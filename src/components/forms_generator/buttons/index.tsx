import { useModel, useSelector } from 'src/hooks';
import FormsGeneratorButtonsUI from './ui';

const FormsGeneratorButtons = () => {
  const model = useModel();
  const buttons = useSelector(model.buttonsModel);

  return <FormsGeneratorButtonsUI buttons={buttons} />;
};

export default FormsGeneratorButtons;
