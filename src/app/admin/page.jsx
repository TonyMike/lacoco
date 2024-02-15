import { addPost } from "@/lib/actions";

const AdminPage = () => {
  return (
    <div>
      <form action={addPost} className="flex flex-col gap-4 text-black">
        <input type="text" name="title" id="" placeholder="title" />
        <input type="text" name="desc" id="" placeholder="desc" />
        <input type="text" name="slug" id="" placeholder="slug" />
        <input type="text" name="userId" id="" placeholder="userId" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AdminPage;