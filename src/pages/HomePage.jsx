import { NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import UserList from "../components/UserList";
export function HomePage() {
  return (
    <div>
      <Header />
      <div className="mb-4">
        <NavLink to="/create">
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">
            Create
          </button>
        </NavLink>
      </div>
      <UserList />
    </div>
  );
}
