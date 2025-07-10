import { ForwardedRef } from 'react';
export declare function useForwardRef<T>(ref: ForwardedRef<T>, value: T, onSet?: (value: T) => void, onUnset?: () => void): void;
