import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from 'redux/store';

/**
 * Type-safe hook for accessing the Redux dispatch function with the correct type.
 *
 * @function useAppDispatch
 * @returns {AppDispatch} - The Redux dispatch function.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Type-safe hook for selecting data from the Redux store with the correct RootState type.
 *
 * @function useAppSelector
 * @type {TypedUseSelectorHook<RootState>}
 * @returns {TypedUseSelectorHook<RootState>} - A function to select and return data from the Redux store.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
