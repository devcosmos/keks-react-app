import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getFilterBase = (state: State): string | null => state[NameSpace.Process].filterBase;
