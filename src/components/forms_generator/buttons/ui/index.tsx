import style from './style.module.scss';

interface Props {
  buttons: string[];
}

const FormsGeneratorButtonsUI = (props: Props) => (
  <div className={style.wrapper}>
    {props.buttons.map((button) => (
      <button className={style.button} key={button}>
        {button}
      </button>
    ))}
  </div>
);

export default FormsGeneratorButtonsUI;
