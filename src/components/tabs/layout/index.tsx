import { memo } from 'react';
import style from './style.module.scss';

interface Props {
  tabs: JSX.Element[];
  content: JSX.Element;
}

const TabsLayout = (props: Props) => (
  <div className={style.wrapper}>
    <div className={style.tabs}>{props.tabs}</div>
    <div className={style.content}>{props.content}</div>
  </div>
);

export default memo(TabsLayout);
