export type ModalProps = {
  isOpen: boolean;
  setIsOpen(
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ): void;
  children: React.ReactNode | React.ReactNode[];
};
