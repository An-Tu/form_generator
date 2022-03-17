import { memo } from 'react';
import style from './style.module.scss';

interface Props {
  idx: number;
  title: string;
  onClick: (idx: number) => void;
  isActive: boolean;
}

const Tab = (props: Props) => (
  <div
    className={props.isActive ? style.tab + ' ' + style.active : style.tab}
    onClick={() => props.onClick(props.idx)}
  >
    {props.title}
  </div>
);

export default memo(Tab);
