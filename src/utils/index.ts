// 工具函数集合
import { useState, useEffect } from "react";

export const isFalsy = (value: any) => value === 0 ? false : !value;

// 在一个函数中，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach(key => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// 自定义 hook 函数(Custom Hook)，实现页面渲染后只执行一次，Custom Hook函数内部接收一个函数，并使用 useEffect 生命周期函数对传入的函数制作一次执行的逻辑功能
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO 依赖项里加上 callback 会造成无限死循环，这个和 useCallback 以及 useMemo 有关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在 value 变化之后，都会全新设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个 useEffect 处理完毕之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
