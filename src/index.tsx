import { Context, Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { html } from "@elysiajs/html";
import { TodoForm } from "../components/TodoForm";
import { BaseHtml } from "../components/BaseHtml";
import { TodoItems } from "../components/TodoItems";

const app = new Elysia()

let todos = ["Learn Alysia","Learn Beth Stack"]

app.use(swagger())
app.use(html())


app.get('/test',()=>{
   return (<BaseHtml>
                        <TodoForm/>
                        <TodoItems todos={todos}/>
              </BaseHtml>)
})

app.post('/todos',({body})=>{
  return <li>{body.content}</li> 
})

app.listen(4000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);



// app.decorate('getDate', Date.now())
// app.state('version', 1)


/*
app.get('/hello/:name',(context:Context)=>{
  return `hello ${context.store.version}`;
})

app.post('/add-user', ({ body ,set }) => {
  console.log(body.username)
  if(body.username != "Rami")
  {
    set.status = 200;
    return body;
  }
  else{
    set.status = 500;
    return "Error";
  }
}, {
  response: {
      200: t.Object({
          username: t.String(),
          password: t.String()
      }),
      500: t.String()
  }
})

app.group('/user',app=>app
          .get('/allusers',()=>{
            return ["Ali"]
          }))
*/