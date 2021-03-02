2)useEffect
    • The Effect hook lets you to perform side effects (an action) in functional components.
    • It is a close replacement for componentDidMount,componentDidUpdate,componentWillUnmount.
    • It does not use class components lifecycle methods .
   # It uses in ..
    •  Updating the DOM,
    •  Fetching and consuming data from a server API,
    •   Setting up a subscription, etc.

 #syntax :
 ---------
  useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

 Note :
#Run effects only once 
 • useEffect(() => {
        effect}, [])                                    ==componentDidMount

#Initial run+Conditionally run effects
•  useEffect(() => {
        effect}, [dependencies])                        ==componentDidUpdate

#cleanup code
•  useEffect(() => {
        effect  return () => {
            cleanup
        }})                                             ==componentWillUnmount 

