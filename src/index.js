const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return response.status(404).json({ error: "User does not exists" });
  }
  request.user = user;

  return next();
}

app.post("/users", (request, response) => {
  const { name, username } = request.body;

  const userAlreadyExists = users.find((user) => user.username === username);

  if (userAlreadyExists) {
    return response.status(400).json({ error: "User already exists" });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.send(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: uuidv4(),
    title: title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { username } = request.headers;
  const { id } = request.params;
  let todoUpdated = {};

  users.find((user) => {
    if (user.username === username) {
      if (!user.todos.some((todo) => todo.id === id)) {
        return response.status(404).json({ error: "Todo does not exists" });
      }

      user.todos.find((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.deadline = new Date(deadline);
          todoUpdated = todo;
        }
      });
    }
  });

  return response.json({
    title: todoUpdated.title,
    deadline: todoUpdated.deadline,
    done: todoUpdated.done,
  });
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { username } = request.headers;
  let todoUpdated = {};

  users.find((user) => {
    if (user.username === username) {
      if (!user.todos.some((todo) => todo.id === id)) {
        return response.status(404).json({ error: "Todo does not exists" });
      }

      user.todos.find((todo) => {
        if (todo.id === id) {
          todo.done = true;
          todoUpdated = todo;
        }
      });
    }
  });

  return response.json(todoUpdated);
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;
  const { id } = request.params;

  users.find((user) => {
    if (user.username === username) {
      if (!user.todos.some((todo) => todo.id === id)) {
        return response.status(404).json({ error: "Todo does not exists" });
      }

      let todoRemove = {};

      user.todos.find((todo) => {
        if (todo.id === id) {
          todoRemove = todo;
        }
      });

      user.todos.splice(todoRemove, 1);
    }
  });

  return response.status(204).send();
});

module.exports = app;
