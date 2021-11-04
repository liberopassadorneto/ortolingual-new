import { ReactNode } from 'react';
import { Button } from './ButtonElement';

export interface BtnCtaProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  children?: ReactNode;
  onMouseEnter?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  onMouseLeave?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export function BtnCta({
  primary = true,
  big = false,
  dark = true,
  fontBig = false,
  onMouseEnter,
  onMouseLeave,
  children,
}: BtnCtaProps) {
  return (
    <Button
      primary={primary}
      big={big}
      dark={dark}
      fontBig={fontBig}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Button>
  );
}
