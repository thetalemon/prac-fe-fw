<script  lang="ts">
  import { toDoItems } from "./../store";
  import PencilOutline from "svelte-material-icons/PencilOutline.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";
  import Send from "svelte-material-icons/Send.svelte";

  let isEditing = undefined
  let newItem = ""

  function removeFromList(i) {
    $toDoItems.splice(i, 1)
    $toDoItems = $toDoItems
  }
  function startEdit(i) {
    isEditing = i
    newItem = $toDoItems[i].text
  }
  function endEdit(i) {
    isEditing = undefined
    $toDoItems[i].text = newItem
  }
</script>

<ul class="toDoItemList">
  {#each $toDoItems as item, index}
    <li class="toDoItem">
      {#if isEditing === index}
        <div class="left editing">
          <img src={`https://source.unsplash.com/${item.img}`} alt="icon"/>
          <textarea bind:value={newItem} rows="5" cols="33" type="text" placeholder="新しく追加するタスク"/>
        </div>
        <div class="right editing">
          <button on:click={() => endEdit(index)}><Send width="24px" height="24px" /></button>
        </div>
      {:else}
        <div class="left">
          <img src={`https://source.unsplash.com/${item.img}`} alt="icon"/>
          <div>{item.text}</div>
        </div>
        <div class="right">
          <button on:click={() => startEdit(index)}><PencilOutline width="24px" height="24px" /></button>
          <button on:click={() => removeFromList(index)}><Delete width="24px" height="24px" /></button>
        </div>
      {/if}

    </li>
  {/each} 
</ul>

<style lang="scss">
  .toDoItemList {
    background: white;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;

    .toDoItem {
      display: flex;
      justify-content: space-between;
      padding: 16px;
      min-height: 80px;

      &:not(:last-child){
        border-bottom: 1px #224422 solid;
      }
      &:hover .right {
        display: flex;
      }

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        margin-right: 16px;
      }

      .left {
        display: flex;
        width: calc(100% - 55px);
        &.editing textarea{
          border: 1px solid #224422;
          border-radius: 8px;
        }
      }
      .right {
        display: none;
        flex-direction: column;
        margin-left: 16px;
        &.editing {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>