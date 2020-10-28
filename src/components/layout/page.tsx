import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = { children?: ReactNode; component?: keyof JSX.IntrinsicElements; className?: string };

const Page = ({ children, component: Component = 'div', className, ...rest }: Props) => (
  <CSSTransition timeout={{ exit: 0, enter: 1500 }} {...rest}>
    <Component className={className}>{children}</Component>
  </CSSTransition>
);

export default Page;
