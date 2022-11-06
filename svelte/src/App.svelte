<script lang="ts">
  import ToDoInputForm from './components/ToDoInputForm.svelte'
  import ToDoList from './components/ToDoList.svelte'
</script>

<main>
  <div class="conteiner">
    <ToDoInputForm />
    <ToDoList />
  </div>
</main>

<style>
	main {
		max-width: 240px;
    width: 100%;
    height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

  .conteiner {
    margin: 0 auto;
    max-width: 500px;
  }
</style>