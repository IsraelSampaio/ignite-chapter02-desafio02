import { Food } from "../../interfaces/Food.interface";

export type ModalEditFoodProps = {
  handleUpdateFood(payload: Partial<Food>): void;
  setIsOpen(): void;
  isOpen: boolean;
  editingFood: Partial<Food>;
};
