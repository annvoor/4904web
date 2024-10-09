<script>
    const lessons = ['1', '2', '3', '4'];
</script>

<h1>Welcome to Team 4904</h1>
<a href="/lessons/1">
    <button onclick>Start Learning!</button>
</a>

<div>
    {#each lessons as lesson}
        <a href="/lessons/{lesson}">
            <button onclick>Java Part {lesson}</button>
        </a>
    {/each}
</div>

<a href="/codeEdit">
    <button onclick>Edit Code</button>
</a>

<style>
    :global(h1) {
		font-family: Courier, monospace;
	}
</style>