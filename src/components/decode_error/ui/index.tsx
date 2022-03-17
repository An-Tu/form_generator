import style from './style.module.scss';

interface Props {
  isInvalidJson: boolean;
  isEmptyScheme: boolean;
  isInvalidTitle: boolean;
  isInvalidButtons: boolean;
  isInvalidFormItems: boolean;
  jsonExample: string;
}

const DecodeErrorUI = (props: Props) => {
  const errorsText = [];

  if (props.isInvalidJson) {
    errorsText.push('You entered invalid json');
  }

  if (props.isEmptyScheme) {
    errorsText.push("Scheme can't be empty");
  }

  if (props.isInvalidTitle) {
    errorsText.push('Title can be string only');
  }

  if (props.isInvalidButtons) {
    errorsText.push('Buttons can be array of the strings only');
  }

  if (props.isInvalidFormItems) {
    errorsText.push('Form items invalid');
  }

  return errorsText.length === 0 ? null : (
    <div className={style.wrapper}>
      {errorsText.map((msg) => (
        <span key={msg}>{msg}</span>
      ))}
      <span>{"Here's an example:"}</span>
      <pre>{props.jsonExample}</pre>
    </div>
  );
};

export default DecodeErrorUI;
