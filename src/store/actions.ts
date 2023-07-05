import { createAction } from '@reduxjs/toolkit';
import { Products } from '../types/products';

export const changeFilterBase = createAction<string>('catalog/changeFilterBase');
export const loadProducts = createAction<Products>('data/loadProducts');
