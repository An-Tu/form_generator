import { ChangeEvent } from 'react';
import style from './style.module.scss';

interface Props {
  value: string;
  onChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const ConfigTextareaUI = (props: Props) => (
  <textarea
    className={style.textarea}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
);

export default ConfigTextareaUI;
