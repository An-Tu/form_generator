import { memo } from 'react';
import style from './style.module.scss';

interface Props {
  tabs: JSX.Element;
  errorsMessages: JSX.Element;
}

const AppLayout = (props: Props) => (
  <div className={style.wrapper}>
    <div>{props.tabs}</div>
    <div>{props.errorsMessages}</div>
  </div>
);

export default memo(AppLayout);
