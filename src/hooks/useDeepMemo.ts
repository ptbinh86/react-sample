// source https://github.com/apollographql/apollo-client/blob/master/src/react/hooks/utils/useDeepMemo.ts
import { useRef } from "react";
import { isEqual } from "lodash/fp";

/**
 * Memoize a result using deep equality. This hook has two advantages over
 * React.useMemo: it uses deep equality to compare memo keys, and it guarantees
 * that the memo function will only be called if the keys are unequal.
 * React.useMemo cannot be relied on to do this, since it is only a performance
 * optimization (see https://reactjs.org/docs/hooks-reference.html#usememo).
 */
export function useDeepMemo<TKey, TValue>(
	memoFn: () => TValue,
	key: TKey
): TValue {
	const ref = useRef<{ key: TKey; value: TValue }>();

	if (!ref.current || !isEqual(key, ref.current.key)) {
		ref.current = { key, value: memoFn() };
	}

	return ref.current.value;
}
