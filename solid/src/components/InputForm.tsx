import type { Component } from 'solid-js';
import styles from './InputForm.module.scss';
import { createSignal, Setter } from 'solid-js';
import { FaSolidPaperPlane } from 'solid-icons/fa';
import type {item} from '../App';

type InputFormProps = {
  list: item[]
  setList: Setter<item[]>
}

export const InputForm: Component<InputFormProps> = (props) => {

  const [input, setInput] = createSignal<string>('');

  const confirmInput = () => {
    const newId =  props.list[0].id + 1
    props.setList([{
      id: newId,
      img: '-LCZyXN_onA',
      text: input(),
      editing: false,
    }, ...props.list])
    setInput('')
  }

  return (
    <div class={styles.inputForm}>
      <textarea 
      class={styles.textarea}
      value={input()}
      onchange={(event) => {
        setInput(event.currentTarget.value);
      }}
      rows="5" 
      cols="33" 
      placeholder="新しく追加するタスク"/>
      <div class={styles.sendButton}>
        <button onClick={confirmInput}><FaSolidPaperPlane width="24px" height="24px" /></button>
      </div>
    </div>
  );
};
