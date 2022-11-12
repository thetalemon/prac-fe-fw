import type { Component } from 'solid-js';
import { createSignal, Setter, For, Switch, Match } from 'solid-js';
import styles from './List.module.scss';
import type {item} from '../App';
import { FaSolidTrash, FaSolidPencil, FaSolidPaperPlane } from 'solid-icons/fa';

type ListProps = {
  list: item[]
  setList: Setter<item[]>
}

export const List: Component<ListProps> = (props) => {
  const [editedText, setEditedText] = createSignal<string>('');

  const deleteList = (index: number) => {
    const newList = props.list.filter((item)=>item.id !== index)
    props.setList(newList)
  }

  const startEdit = (index: number, text: string) => {
    props.setList(
      props.list.map((item) => (
        item.id !== index ? { ...item, editing: false } : { ...item, editing: true }
      ))
    );
    setEditedText(text)
  }

  const endEdit = (index: number) => {
    props.setList(
      props.list.map((item) => (
        item.id !== index ? { ...item, editing: false } : { ...item, text: editedText(), editing: false }
      ))
    );
    setEditedText('')
  }

  return (
    <div class={styles.todoItemList}>
        <For each={props.list}>{(item) => 
          <li class={styles.todoItem}>
            <Switch>
              <Match when={item.editing === true}>
                {/* <p>Fizz</p> */}
                <div class={`${styles.left} ${styles.leftEditing}`}>
                  <img src={`https://source.unsplash.com/${item.img}`} alt="icon"/>
                  <textarea 
                    onchange={(event) => {
                      setEditedText(event.currentTarget.value);
                    }}
                    value={editedText()}
                    rows="5" 
                    cols="33"
                  />
                </div>
                <div class={`${styles.right} ${styles.rightEditing}`}>
                  <button onClick={() => endEdit(item.id)}><FaSolidPaperPlane width="24px" height="24px" /></button>
                </div>
              </Match>
              <Match when={item.editing === false}>
                <div class={styles.left}>
                  <img src={`https://source.unsplash.com/${item.img}`} alt="icon"/>
                  <div>{item.text}</div>
                </div>
                <div class={styles.right}>
                  <button onClick={() => startEdit(item.id, item.text)}><FaSolidPencil width="24px" height="24px" /></button>
                  <button onClick={()=> deleteList(item.id)}><FaSolidTrash width="24px" height="24px" /></button>
                </div>
              </Match>
            </Switch>
          </li>
          }
        </For>
    </div>
  );
};
