import type { Component } from 'solid-js';
import { createStore } from "solid-js/store"; 
import styles from './App.module.scss';
import {List} from './components/List';
import {InputForm} from './components/InputForm';

export type item = {
  id: number,
  img:string,
  text:string,
  editing: boolean,
}

export const [list, setList] = createStore<item[]>([
  {id: 3, img: 'si06cFB0g1s',text: 'いい天気ですね。お散歩でも行こうかな。', editing: false,},
  {id: 2, img: 'yMSecCHsIBc', text: 'にゃーん', editing: false,},
  {id: 1, img: '5iFZBM7qgWc', text: 'おこめおいしい', editing: false,},
]);

const App: Component = () => {
  return (
    <div class={styles.App}>
      <InputForm list={list} setList={setList}/>
      <List list={list} setList={setList} />
    </div>
  );
};

export default App;
