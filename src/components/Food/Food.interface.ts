import { Food } from "../../interfaces/Food.interface";

export type FoodProps = {
  food: Food;
  handleDelete(foodId: number): void;
  handleEditFood(props: Food): void
};

export type ContainerProps = {
    available: boolean;
}