import style from './style.module.scss';

interface Props {
  label: string;
}

const FormsGeneratorTextarea = (props: Props) => (
  <div className={style.wrapper}>
    <label htmlFor={props.label}>{props.label}</label>
    <textarea className={style.textarea} id={props.label} />
  </div>
);

export default FormsGeneratorTextarea;
