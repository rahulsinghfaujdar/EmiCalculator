import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AnyAction, Dispatch } from 'redux';
import type { RootState } from '.';

export type AppDispatch = Dispatch<AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
