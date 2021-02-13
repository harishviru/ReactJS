.Memo
= ===
•Memo is similar to Pure Component (Only for class component) ,but memo is for functional component
•React.memo is a higher order component.

• A Memo component -- shallow comparison. of props.

    SC of prevProps with currentProps        __Difference___________>  Re-render component     
                                      
                   (or)
• If your component renders the same result given the same props, you can wrap it in a call to React.memo 
  for a performance boost in some cases by memoizing the result.
• React.memo only checks for prop changes only.