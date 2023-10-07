export function TodoItems({todos}){
    console.log(todos)
    return (
        <ul>
         {todos.map((todo) => (
           <li>{todo}</li> 
         ))}
       
        </ul>
    )
}