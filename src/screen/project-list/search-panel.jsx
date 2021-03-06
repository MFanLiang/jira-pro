import React from "react";

export const SearchPanel = ({param, setParam, users}) => {
  
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
