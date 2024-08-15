import { useSelector } from "react-redux";
import { store } from "../store/store";

export default function CreateUser() {
  return (
    <div>
      <form>
        <button type="submit">Add User</button>
        <input placeholder="name..." />
      </form>
    </div>
  );
}
