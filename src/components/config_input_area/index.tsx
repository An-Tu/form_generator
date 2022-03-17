import ConfigTextarea from './textarea';
import ConfigApply from './apply';
import style from './style.module.scss';

const ConfigInputArea = () => {
  return (
    <div className={style.wrapper}>
      <ConfigTextarea />
      <div className={style.button}>
        <ConfigApply />
      </div>
    </div>
  );
};

export default ConfigInputArea;
