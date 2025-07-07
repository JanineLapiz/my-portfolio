import { PropsWithChildren } from 'react';
import { safeConcatStrings } from '../utils/safeConcatStrings';

export type SectionProps = {
  additionalClassNames?: string;
  title: string;
  description?: string;
};

export const Section = (props: PropsWithChildren<SectionProps>): JSX.Element => {
  return (
    <section className={safeConcatStrings(['section', props.additionalClassNames])}>
      <div className="title">{props.title}</div>
      {props.description && <div>{props.description}</div>}
      <div className="content">{props.children}</div>
    </section>
  );
};
