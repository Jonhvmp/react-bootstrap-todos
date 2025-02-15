import { FunctionComponent } from "react";
import useTodoLists from "features/sidebar/hooks/useTodoLists";
import SidebarNavLink from "./SidebarNavLink";
import SidebarAccount from "./SidebarAccount";
import { SIDEBAR } from "utilities/localization";
import Modal from "components/Modal";
import TodoListForm from "./TodoListForm";

const Sidebar: FunctionComponent = () => {
  const todoListsService = useTodoLists();

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "20em" }}
      //   style="width: 280px;"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">{SIDEBAR.SIDEBAR}</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {todoListsService.todoLists.map((todoList) => (
          <SidebarNavLink todoList={todoList} key={todoList.id} />
        ))}
      </ul>

      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {SIDEBAR.SIDEBAR_ADD_LIST_BUTTON}
      </button>
      <hr />

      <SidebarAccount />
      <Modal title="Create new list">
        <TodoListForm onSubmit={todoListsService.addTodoList} />
      </Modal>
    </div>
  );
};

export default Sidebar;
