import style from './style.module.scss';

interface Props {
  type: 'text' | 'number' | 'checkbox' | 'date';
  label: string;
}

const FormsGeneratorInput = (props: Props) => (
  <div className={style.wrapper}>
    <label htmlFor={props.label}>{props.label}</label>
    <input id={props.label} type={props.type} />
  </div>
);

export default FormsGeneratorInput;
