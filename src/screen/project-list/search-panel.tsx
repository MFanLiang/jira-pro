import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string
};

interface SearchPanelProps {
  users: User[], // users 被定义为 User 类型的数组
  param: {
    name: string,
    personId: string
  },
  setParam: (param: SearchPanelProps["param"]) => void;
};

export const SearchPanel = ({param, setParam, users}: SearchPanelProps) => {
  
  return (
    <form>
      <div>
        <input type="text" value={param.name} onChange={event => setParam({
          ...param,
          name: event.target.value.trim()
        })} />
        <select value={param.personId} onChange={event => setParam({
          ...param,
          personId: event.target.value.trim()
        })}>
          <option value={""}>负责人</option>
          {
            users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
          }
        </select>
      </div>
    </form>
  );
};
