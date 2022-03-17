import style from './style.module.scss';

interface Props {
  label: string;
  options: string[];
}

const FormsGeneratorRadio = (props: Props) => (
  <div className={style.wrapper}>
    <label>{props.label}</label>
    <div>
      {props.options.map((option) => (
        <div key={option} className={style.option}>
          <input type="radio" id={option} name={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  </div>
);

export default FormsGeneratorRadio;
