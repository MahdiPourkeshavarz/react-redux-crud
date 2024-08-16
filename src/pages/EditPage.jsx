import { useLoaderData, useNavigate } from "react-router-dom";
import { httpsRequest } from "../services/htppRequest";
import { useState } from "react";
import { useUpdateUserMutation } from "../store/userSlice-rtkquery";
// import { useDispatch } from "react-redux";
// import { editUser } from "../queryFn/users/users-query";

export function EditPage() {
  const user = useLoaderData();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editUser] = useUpdateUserMutation();

  const [editingUser, setEditingUser] = useState(user);

  const handleUpdateUser = () => {
    // dispatch(editUser(editingUser));
    editUser(editingUser);
    setEditingUser(null);
    navigate("/");
  };

  function handleInput(searchKey) {
    setEditingUser({ ...editingUser, name: searchKey });
  }

  return (
    <div className="flex items-center mx-auto w-max mt-36">
      <form
        onSubmit={handleUpdateUser}
        className="flex items-center flex-col space-y-6"
      >
        <input
          type="text"
          value={editingUser.name}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="name"
          className="pl-4 h-8 w-52 border rounded-xl border-purple-500"
        />
        <button className="px-4 py-2 bg-blue-500 rounded-xl w-36" type="submit">
          update User
        </button>
      </form>
    </div>
  );
}

export async function loader({ params }) {
  const userId = params.userId;
  const response = await httpsRequest.get(`/users/${userId}`);
  return response.data;
}
