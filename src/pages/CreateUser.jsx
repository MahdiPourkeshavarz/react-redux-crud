// import { useSelector } from "react-redux";
// import { store } from "../store/store";
import { useAddUserMutation } from "../store/userSlice-rtkquery";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../queryFn/users/users-query";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({ name: "" });
  const [addUser] = useAddUserMutation();
  const handleAddUser = () => {
    // dispatch(addUser(newUser));
    addUser(newUser);
    setNewUser({ name: "" });
    navigate("/");
  };

  function handleInput(searchKey) {
    setNewUser({ name: searchKey });
  }

  return (
    <div className="flex items-center mx-auto w-max mt-36">
      <form
        onSubmit={handleAddUser}
        className="flex items-center flex-col space-y-6"
      >
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
