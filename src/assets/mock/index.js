/*
 * Mock 数据
 * @Author: Guoxing.han 
 * @Date: 2017-05-02 11:51:37 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
 */
import Mock from 'mockjs';
import { Table } from './table.js';

let data = [].concat(Table);

data.forEach(function (res) {
  Mock.mock(res.path, res.data);
});
export default Mock;
