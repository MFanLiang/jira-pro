import React, { useEffect } from "react";
import { useArray } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 34 },
    { name: "menoment", age: 69 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useEffect(() => {
    console.log("value....", value);
  }, [value]);

  // 处理 add 按钮的添加功能
  const Increment = () => {
    add({ name: "john", age: 45 });
  };

  // 处理 RemoveIndex 按钮的删除第一项数据功能
  const RemoveIndex = () => {
    removeIndex(0);
  };

  // 处理 clear 按钮的删除所有数据功能
  const clear_data = () => {
    clear();
  };

  return (
    <div>
      {/* 期待功能：点击 add 后添加john */}
      <button onClick={Increment}>Increment</button>
      <br />

      {/* 期待功能：点击 removeIndex 后删除第一项所展示的数据 */}
      <button onClick={RemoveIndex}>RemoveIndex</button>
      <br />

      {/* 期待功能：点击 clear 后清空列表所展示的所有数据 */}
      <button onClick={clear_data}>clear</button>

      {/* 数据渲染区域 */}
      {value.map((item, index) => {
        return (
          <div key={index}>
            <span>第{index + 1}列表数据</span>&nbsp;&nbsp; - &nbsp;&nbsp;
            <span>{item.name}</span>
            <span>{item.age}</span>
          </div>
        );
      })}
    </div>
  );
};
