import React from "react";
import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string
};

interface ListProps {
  list: Project[], // list 被定义为 Project 类型的数组
  users: User[] // users 被定义为 User 类型的数组
};

export const List = ({ list, users }: ListProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project => <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name}</td>
          </tr>)
        }
      </tbody>
    </table>
  );
};
