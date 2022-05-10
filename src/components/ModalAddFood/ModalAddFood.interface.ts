import { Food } from "../../interfaces/Food.interface";

export type ModalAddFoodProps = {
  handleAddFood(payload: Partial<Food>): void;
  setIsOpen(): void;
  isOpen: boolean;
};
