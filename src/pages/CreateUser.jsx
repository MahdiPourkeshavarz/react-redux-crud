// import { useSelector } from "react-redux";
// import { store } from "../store/store";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../queryFn/users/users-query";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({ name: "" });
  // const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser({ name: "" });
    navigate("/");
  };

  // const handleUpdateUser = (id) => {
  //   dispatch(editUser({ id, user: editingUser }));
  //   setEditingUser(null);
  // };

  function handleInput(searchKey) {
    setNewUser({ name: searchKey });
  }

  return (
    <div className="flex items-center mx-auto w-max mt-36">
      <form
        onSubmit={handleAddUser}
        className="flex items-center flex-col space-y-6"
      >
        {/* <input
          type="text"
          value={newUser.name}
          placeholder="name..."
          className="pl-4 h-8 w-52 border rounded-xl border-purple-500"
        /> */}
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="name"
          className="pl-4 h-8 w-52 border rounded-xl border-purple-500"
        />
        <button className="px-4 py-2 bg-blue-500 rounded-xl w-28" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}
