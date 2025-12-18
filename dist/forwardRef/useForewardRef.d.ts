import React from 'react';
export declare function useForwardRef<T>(ref: React.Ref<T> | undefined, value: T, onSet?: (value: T) => void, onUnset?: () => void): void;
