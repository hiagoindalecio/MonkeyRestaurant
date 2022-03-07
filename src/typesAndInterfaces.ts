import { Component } from 'react';

/// Food component
export interface foodProps extends Component {
  food: food;
  handleDelete: (id: number) => void;
  handleEditFood: (food: food) => void;
}

export type food = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}
