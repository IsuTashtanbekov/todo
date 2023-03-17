const ADD_COLUMN = "ADD_COLUMN";
const ADD_CART = "ADD_CART";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK_NAME = "UPDATE_TASK_NAME"
const UPDATE_LIST_NAME = "UPDATE_LIST_NAME"

const initialState = {
  lists: [
    {
      id: 1,
      name: "Задачи на сегодня",
      tasks: [
        {
          id: 1,
          name: "Написать письмо заказчику",
          description: "Написать письмо с вопросами по проекту",
          dueDate: "2023-03-18",
          priority: "high",
          comments: [
            {
              id: 1,
              text: "Можно добавить еще один вопрос в письмо?",
              author: "Иван Иванов",
              createdAt: "2023-03-15T12:00:00.000Z"
            }
          ]
        },
        {
          id: 2,
          name: "Сделать презентацию",
          description: "Сделать презентацию для совещания на следующей неделе",
          dueDate: "2023-03-20",
          priority: "medium",
          comments: []
        }
      ]
    },
    {
      id: 2,
      name: "В работе",
      tasks: [
        {
          id: 3,
          name: "Добавить новую функциональность",
          description: "Добавить возможность добавлять комментарии в задачи",
          dueDate: null,
          priority: "low",
          comments: []
        }
      ]
    },
    {
      id: 3,
      name: "Готово",
      tasks: [
        {
          id: 4,
          name: "Завершить проект",
          description: "Закончить все задачи и подготовить проект к сдаче",
          dueDate: "2023-04-01",
          priority: "high",
          comments: []
        }
      ]
    }
  ]
};

export const newCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN: {
      const newColumn = {
        id: state.lists.length + 1,
        name: action.column,
        tasks: []
      };
      return {
        ...state,
        lists: [...state.lists, newColumn]
      };
    }
    
    case ADD_CART: {
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === action.payload.listId) {
            return {
              ...list,
              tasks: [...list.tasks, action.payload.task]
            };
          } else {
            return list;
          }
        })
      };
    }
    case UPDATE_TASK_NAME: {
      const { listId, taskId, newName } = action.payload;
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === listId) {
            return {
              ...list,
              tasks: list.tasks.map(task => {
                if (task.id === taskId) {
                  return {
                    ...task,
                    name: newName
                  };
                } else {
                  return task;
                }
              })
            };
          } else {
            return list;
          }
        })
      };
    }
    case UPDATE_LIST_NAME: {
      const { listId, newName } = action.payload;
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === listId) {
            return {
              ...list,
              name: newName
            };
          } else {
            return list;
          }
        })
      };
    }
    case DELETE_TASK: {
      const { listId, taskId } = action.payload;
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === listId) {
            return {
              ...list,
              tasks: list.tasks.filter(task => task.id !== taskId)
            };
          } else {
            return list;
          }
        })
      };
    }
    default:
      return state;
  }
};

export const addTask = (taskId, listId, task) => ({
  type: ADD_CART,
  payload: { taskId, listId, task }
});

export const deleteTasks = (listId, taskId) => ({type:DELETE_TASK, payload:{listId, taskId}})

export const addColumn = (column) => ({
  type: ADD_COLUMN,
  column
});

export const updateTaskName = (listId, taskId, newName) => ({
  type: UPDATE_TASK_NAME,
  payload: { listId, taskId, newName }
});

export const updateListName = (listId, newName) => ({
  type: UPDATE_LIST_NAME,
  payload: { listId, newName }
});