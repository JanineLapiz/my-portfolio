import { PropsWithChildren } from 'react';
import { safeConcatStrings } from '../utils/safeConcatStrings';

export type CardProps = {
  additionalClassNames?: string;
  title: string;
  icon?: string;
  onClick?: () => void;
};

export const Card = (props: PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <div className={safeConcatStrings(['card', props.additionalClassNames])} onClick={props.onClick}>
      <div className="icon">{props.icon}</div>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="body">{props.children}</div>
      </div>
    </div>
  );
};
