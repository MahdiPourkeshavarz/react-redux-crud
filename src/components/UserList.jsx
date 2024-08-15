import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/usersSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(userAction.fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser({ name: "", email: "" });
  };

  const handleUpdateUser = (id) => {
    dispatch(editUser({ id, user: editingUser }));
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add User
        </button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center mb-2">
            {editingUser?.id === user.id ? (
              <>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                  }
                  className="border p-2 mr-2"
                />
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                  className="border p-2 mr-2"
                />
                <button
                  onClick={() => handleUpdateUser(user.id)}
                  className="bg-green-500 text-white px-4 py-2 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingUser(null)}
                  className="bg-gray-500 text-white px-4 py-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>
                  {user.name} - {user.email}
                </span>
                <div>
                  <button
                    onClick={() => setEditingUser(user)}
                    className="bg-yellow-500 text-white px-4 py-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
