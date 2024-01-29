type ParagraphProps = JSX.IntrinsicElements['p'];

export type TParagraph =
  | 'Default'
  | 'S'
  | 'XS'
  | 'Label'
  | 'FieldLabel'
  | 'Error';

export interface IParagraph extends ParagraphProps {
  type?: TParagraph;
  bold?: boolean;
}
