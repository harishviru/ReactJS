6)useMemo
= =======
•The useMemo is a hook used in the functional component of react that returns a memoized value
 •It caches function return value
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);