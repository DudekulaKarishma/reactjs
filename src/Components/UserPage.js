import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import { USERS_API_URL } from "../Utils/Contants";
import Spinner from "./Spinner";
import LikeUsers from "./Actions/LikeUsers";
import DeleteUsers from "./Actions/DeleteUsers";
import EditUsers from "./Actions/EditUsers";
import UserDetails from "./UserDetails";
import "./../App.css";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const data = await fetch(USERS_API_URL);
      const json = await data.json();
      const updatedUsers = json.map((user) => ({
        ...user,
        avatarUrl: getAvatarUrl(user.name),
      }));
      setUsers(updatedUsers);
    };

    getUsersData();
  }, []);

  const handleUserDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleUserUpdate = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id
        ? { ...updatedUser, avatarUrl: user.avatarUrl }
        : user
    );
    setUsers(updatedUsers);
  };

  const getAvatarUrl = (name) => {
    return `https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`;
  };

  return (
    <div style={{ margin: "10px" }}>
      {users?.length === 0 ? (
        <Spinner />
      ) : (
        <Row>
          {users?.map((user) => {
            return (
              <Col key={user.id} xs={24} sm={12} md={6}>
                <Card
                  className="user-card"
                  hoverable
                  actions={[
                    <LikeUsers user={user} />,
                    <EditUsers
                      user={user}
                      handleUserUpdate={handleUserUpdate}
                    />,
                    <DeleteUsers
                      user={user}
                      handleUserDelete={handleUserDelete}
                    />,
                  ]}
                  cover={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        alt="avatar"
                        src={user.avatarUrl}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>
                  }
                >
                  <UserDetails user={user} />
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default UserPage;
