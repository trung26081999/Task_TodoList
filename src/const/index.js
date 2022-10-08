export const LIST_PAGE = "LIST_PAGE";
export const FORM_PAGE = "FORM_PAGE";

export const ITEM_PER_PAGE = 4;

export const MODE = {
  SHOW_LIST: "show-list",
  ADD_NEW_FORM: "add-new-form",
};

export const TASK_STATUS = {
  new: "NEW",
  doing: "DOING",
  done: "DONE",
};

export const ROUTE = {
  all: "/",
  doing: "doing",
  new: "/new",
  done: "/done",
  addNew: "/add-new",
  detail: "/detail",
  editForm: "/edit-form",
  notFound: "*",
};

export const SIDEBAR_ITEMS = [
  {
    label: "All Items",
    link: "/",
  },
  {
    label: "New",
    link: "/new",
  },
  {
    label: "Doing",
    link: "/doing",
  },
  {
    label: "Done",
    link: "/done",
  },
];

export const localStorageKey = {
  todoItems: "TODO_ITEMS_KEY",
};
