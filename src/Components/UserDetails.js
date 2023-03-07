import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { Typography, Space } from "antd";

const { Title } = Typography;

function UserDetails({ user }) {
  return (
    <div>
      <Title level={4}>{user.name}</Title>
      <Space direction="vertical" size={10} wrap={false} spacing={20}>
        <span style={{ fontSize: "16px" }}>
          <MailOutlined style={{ marginRight: "8px" }} />
          <span>{user.email}</span>
        </span>
        <span style={{ fontSize: "16px" }}>
          <PhoneOutlined style={{ marginRight: "8px" }} />
          {user.phone}
        </span>
        <span style={{ fontSize: "16px" }}>
          <GlobalOutlined style={{ marginRight: "8px" }} />
          {user.website}
        </span>
      </Space>
    </div>
  );
}

export default UserDetails;
