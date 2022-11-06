import { writable } from "svelte/store"

export const toDoItems = writable([
  {id: 3, img: 'si06cFB0g1s',text: 'いい天気ですね。お散歩でも行こうかな。'},
  {id: 2, img: 'yMSecCHsIBc', text: 'にゃーん'},
  {id: 1, img: '5iFZBM7qgWc', text: 'おこめおいしい'}
])