# __ToDo List - Backend__ (Documentation)

## __Test it__
- Install dependencies whit __npm install__
- Start the app with __npm run dev__
- Don't forget to __configure your .env files__ from the __.env.example templates__

## __Endpoints__
- __Users__:
  - __POST__ /api/v1/users/ -> (To create a new user)
    ```javascript
    Body (JSON):
    {
      "name": "example",
      "email": "example@example.com",
      "password": "example"
    }
    ```

  - __POST__ /api/v1/auth/login -> (To login)
    ```javascript
    Body (JSON):
    {
      "email": "example@example.com",
      "password": "example"
    }

  - __GET__ /api/v1/users -> (To get all users)

  - __PUT__ /api/v1/users/{id} -> (To edit a user)
    ```javascript
    Headers:
    "x-token": token

    Body (JSON):
    {
      "name": "example",
      "email": "example@example.com",
      "password": "example"
    }
    ```

  - __DELETE__ /api/v1/users/{id} -> (To delete a user)
    ```javascript
    Headers:
    "x-token": token
    ```
---
- __Tasks__:
  - __POST__ /api/v1/tasks/ -> (To create a task)
    ```javascript
    Headers:
    "x-token": token

    Body (JSON):
    {
      "description": "Task 1"
    }
    ```

  - __GET__ /api/v1/tasks -> (To get the user's task list)
    ```javascript
    Headers:
    "x-token": token
    ````

  - __PUT__ /api/v1/tasks/{id} -> (To edit a task)
    ```javascript
    Headers:
    "x-token": token

    Body (JSON):
    {
      "description": "Task 2",
      "done": true
    }
    ```

  - __DELETE__ /api/v1/tasks/{id} -> (To delete a task)
    ```javascript
    Headers:
    "x-token": token
    ```
