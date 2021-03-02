5)useCallback
= =========
 i)what 
 •useCallback will return a memoized version of the callback that only changes if one of the dependencies 
   has  changed. 
ii)Why
 •This is useful when passing callbacks to optimized child components that rely on reference equality 
   to prevent unnecessary renders (e.g. shouldComponentUpdate)
 •It caches function itself 
 syntax :
 --------
  const memoizedCallback = useCallback(
         () => {
           doSomething(a, b);
         },
      [a, b],
   );

For more Reference  :https://kentcdodds.com/blog/usememo-and-usecallback