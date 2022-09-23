import { useCallback, useEffect, useMemo, useState } from "react";
import { useDeepMemo } from "./useDeepMemo";

type QueryResult<TResponse, TError> = {
	isLoading: boolean;
	error: TError | null;
	data: TResponse | null;
};

/**
 * Options for useQuery
 * @param enabled - If false, the query will not be automatically executed, but can be executed manually by calling refetch
 */
type Options = {
	enabled?: boolean;
};

function useQuery<
	TResponse extends {},
	TParams = undefined,
	TError extends Error = Error
>(
	fetcher: (params: TParams) => Promise<TResponse> | TResponse,
	...args: TParams extends undefined
		? [params?: undefined, options?: Options]
		: [params: TParams, options?: Options]
) {
	const params = useDeepMemo(() => args[0], [args[0]]);
	const options = useDeepMemo(() => args[1], [args[1]]);

	const [result, setResult] = useState<QueryResult<TResponse, TError>>({
		isLoading: false,
		error: null,
		data: null,
	});

	const callFetcher = useCallback(
		async (overideParams?: TParams) => {
			// If enabled is defined and value is false, do not execute the query
			setResult((prevState) => ({
				...prevState,
				isLoading: true,
				error: null,
			}));
			try {
				// Merge params with previous params
				const queryParams = { ...params, ...overideParams };

				// Convert to promise if not already
				const data = await Promise.resolve(fetcher(queryParams));
				setResult((prevState) => ({ ...prevState, isLoading: false, data }));
			} catch (error) {
				setResult((prevState) => ({
					...prevState,
					isLoading: false,
					error: error as TError,
				}));
				/**
          Dev usually forget detruct error from result...
          They panic because they not see any thing in console if any error occur!
          So we log it here!!!
       */
				console.warn(error);
			}
		},
		[fetcher, params, options]
	);

	useEffect(() => {
		const isEnable = options?.enabled ?? true;
		if (isEnable) {
			callFetcher();
		}
	}, [callFetcher]);

	return useMemo(
		() => ({ ...result, refetch: callFetcher }),
		[result, callFetcher]
	);
}

export default useQuery;
