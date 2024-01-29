type ButtonProps = JSX.IntrinsicElements['button'];

export interface IButton extends ButtonProps {
  buttonType?: 'Primary' | 'Secondary' | 'Tertiary';
  fullWidth?: boolean;
  loading?: boolean;
}
