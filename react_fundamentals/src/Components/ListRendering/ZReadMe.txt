.List and Keys
= ==========
•Keys help React identify which items have changed, are added, or are removed. Keys should be given to the  elements inside the array to give the elements a stable identity

 Eg :(i)
          List WITHOUT key attribute            (Insertion end at the List)
             #01                                                              #02
           <ul>                                                             <ul>
                <li>John</li>                                                  <li>John</li>
                <li>Roja</li>                                                    <li>Roja</li>
             </ul>                                                              <li>Ramu</li>
                                                                            </ul>   
•React will iterates both list (01 and 02) at same time for comparsion,
 if it find any difference (#01 items should match #02 items + (1 or more items )),
 then react mutate (changes) in List.

        --React comparison like these...
  #01  List                                   #02  List                        Changes
 <li>John</li>                       <li>John</li>                               NO
<li>Roja</li>                         <li>Roja</li>                              NO 
                                        <li>Ramu</li>                            YES

Then  finally ,react insert item into list.

(ii)
          List WITHOUT key attribute            (Insertion beginning at the List)
             #01                                                              #02
                                                                               <ul>
              <ul>                                                               <li>Ramu</li>   
                <li>John</li>                                                    <li>John</li>
                <li>Roja</li>                                                     <li>Roja</li>
             </ul>                                                             </ul>                                                           
                                                                                
    --React comparison like these...
  #01  List                                   #02  List                                Changes
 <li>John</li>                                 <li>Ramu</li>                             YES
<li>Roja</li>                                   <li>John</li>                             YES
                                                 <li>Roja</li>                            YES

Note :(*****Imp*******)
 Then react will keep as it is instead of mutation becoz list #02 is different

•Thats Why React ask key to Identify to item in List for which items have changed, are added, or are removed.


(ii)
          List WITH key attribute            
             #01                                                              #02
                                                                               <ul>
              <ul>                                                              <li key="3">Ramu</li>   
                <li key="1">John</li>                                           <li key="1">John</li>
                <li key="2">Roja</li>                                             <li key="2">Roja</li>
             </ul>                                                               </ul>            

•Here React match/compare Original List items(#01)  with subsequent List items(#02),
 it find out key 1 and key 2 matches ,key 3 is extra.Then react insert extra item/children at top
 of Original List.

 Importtant points :
 -----------------------
• A 'key' is a special string attribute you need to include when creating lists of elements
• Keys are give to elements a stable identity.
•Keys help React identity which items have changed,are added ,or removed.

Index as Key:
---------------
•When you don’t have stable IDs for rendered items, you may use the item index as a key

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs 
   <li key={index}>  {todo.text} </li>
);

We don’t recommend using indexes for keys if the order of items may change. becoz ...

#Index as key anti-pattern
 (#01)                                                    (#02)                                                         (#03)  
 <ul>                                                     <ul>                                                        <ul>     
       <li key="0">1</li>                                   <li key="0"></li>                                           <li key="0">1</li>   
        <li key="1">2</li>   ------------->                   <li key="1"></li> --------------->                        <li key="1">2</li>  
        <li key="2">3</li>                                     <li key="2"></li>                                        <li key="2">3</li>   
 <ul>                                                           <li key="3"></li>                                        <li key="3"></li> 
                                                            </ul>                                                      </ul>    
                                                                (When You insert item in the beginning)         (After mutation)

•When you insert item in the beginning ,if key as Index  then it add  like (0,1,2,3...)[#02].
 Then react realize that by comparing list (#01 and #02) Lists ,key 3 is extra .
 so that list #03 renders in UI.  

#When to use index as key ? (https://reactjs.org/docs/lists-and-keys.html)
• The items in your list do not have a unique id.
• If list is a static and will not change.
•The list will never be reordered or filtered.

Note :Infact React internally uses index as key in list ,if you not specify

For better solution :Uses id as key or npm id generated items.
