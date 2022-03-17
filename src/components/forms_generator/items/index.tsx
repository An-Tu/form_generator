import { useModel, useSelector } from 'src/hooks';
import FormsGeneratorInput from './input_item';
import FormsGeneratorRadio from './radio_item';
import FormsGeneratorTextarea from './textarea_item';
import FormsGeneratorInvalid from './invalid_item';

const FormsGeneratorItems = () => {
  const model = useModel();
  const items = useSelector(model.formItemsModel);

  return (
    <>
      {items.map((item) => {
        switch (item.type) {
          case 'text':
          case 'number':
          case 'checkbox':
          case 'date':
            return (
              <FormsGeneratorInput
                key={item.label}
                type={item.type}
                label={item.label}
              />
            );
          case 'textarea':
            return (
              <FormsGeneratorTextarea key={item.label} label={item.label} />
            );
          case 'radio':
            return (
              <FormsGeneratorRadio
                key={item.label}
                label={item.label}
                options={item.options}
              />
            );
          default:
            return <FormsGeneratorInvalid />;
        }
      })}
    </>
  );
};

export default FormsGeneratorItems;
