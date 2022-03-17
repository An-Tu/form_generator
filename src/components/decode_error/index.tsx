import { memo } from 'react';
import { useMakeSelector, useModel, useSelector } from 'src/hooks';
import DecodeErrorUI from './ui';

const configExample = {
  title: 'Title',
  buttons: ['save', 'cancel'],
  items: [
    {
      type: 'text',
      label: 'text field',
    },
    {
      type: 'number',
      label: 'number field',
    },
    {
      type: 'radio',
      label: 'radio field',
      options: ['option 1', 'option 2', 'option 3'],
    },
  ],
};
const jsonExample = JSON.stringify(configExample, null, 2);

const DecodeError = () => {
  const model = useModel();

  const isInvalidJsonSelector = useMakeSelector(
    model.errorModel.isInvalidJson,
    model.errorModel.subscribe,
  );

  const isEmptySchemeSelector = useMakeSelector(
    model.errorModel.isEmptyScheme,
    model.errorModel.subscribe,
  );

  const isInvalidTitleSelector = useMakeSelector(
    model.errorModel.isInvalidTitle,
    model.errorModel.subscribe,
  );

  const isInvalidButtonsSelector = useMakeSelector(
    model.errorModel.isInvalidButtons,
    model.errorModel.subscribe,
  );

  const isInvalidFormItemsSelector = useMakeSelector(
    model.errorModel.isInvalidFormItems,
    model.errorModel.subscribe,
  );

  const isInvalidJson = useSelector(isInvalidJsonSelector);

  const isEmptyScheme = useSelector(isEmptySchemeSelector);

  const isInvalidTitle = useSelector(isInvalidTitleSelector);

  const isInvalidButtons = useSelector(isInvalidButtonsSelector);

  const isInvalidFormItems = useSelector(isInvalidFormItemsSelector);

  return (
    <DecodeErrorUI
      isInvalidJson={isInvalidJson}
      isEmptyScheme={isEmptyScheme}
      isInvalidTitle={isInvalidTitle}
      isInvalidButtons={isInvalidButtons}
      isInvalidFormItems={isInvalidFormItems}
      jsonExample={jsonExample}
    />
  );
};

export default memo(DecodeError);
