<script>
  import { toDoItems } from "./store.js"
  import Send from "svelte-material-icons/Send.svelte";

  let newItem = ""
  
  function addToList() {
    newId =  $toDoItems[0].id + 1
    $toDoItems = [{id: newId, img: '-LCZyXN_onA', text: newItem}, ...$toDoItems]
    newItem = ""
  }
</script>

<div class="inputForm">
  <textarea bind:value={newItem} rows="5" cols="33" type="text" placeholder="新しく追加するタスク"/>
  <div class="sendButton">
    <button on:click={addToList}><Send width="24px" height="24px" />
  </div>
</div>


<style>
  .inputForm {
    background: white;
    border-radius: 8px;
    padding: 16px;
  }
  textarea {
    display: block;
    resize: none;
    width: 100%;
  }
  button {
    margin: 0;
  }
  .sendButton {
    display: flex;
    justify-content: flex-end;
  }
</style>