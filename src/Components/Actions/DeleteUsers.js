import { DeleteOutlined } from "@ant-design/icons";

function DeleteUsers({ user, handleUserDelete }) {
  const handleDelete = () => {
    handleUserDelete(user.id);
  };

  return (
    <DeleteOutlined
      onClick={handleDelete}
      style={{
        fontSize: "20px",
      }}
    />
  );
}

export default DeleteUsers;
