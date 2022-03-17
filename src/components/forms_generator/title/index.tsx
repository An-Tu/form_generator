import { useModel, useSelector } from 'src/hooks';

const FormsGeneratorTitle = () => {
  const model = useModel();
  const title = useSelector(model.titleModel);

  return <h3>{title}</h3>;
};

export default FormsGeneratorTitle;
