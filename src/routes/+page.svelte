<script>
    export let data;
    // lessons variable just contans number of lessons, refers to pages under lessons, update as needed
    // const lessons = ['1', '2', '3', '4'];
</script>
<div id="page">
<h1>Welcome to Team 4904</h1>

<!-- always links to lesson 1 - probably not needed
<a href="/lessons/1">
    <button onclick>Start Learning!</button>
</a>
-->
<!-- "each" creates a lesson for every lesson in the lessons variable (defined at top)
 need to add to lessons const to make more pages + create new folder/file under lessons
TODO: figure out how to not need new folder for every lesson?-->
<div class="masterlist">
    {#each data.summaries as { slug, title }}
        <a href="/lessons/{slug}">
            <button onclick class="lesson">{title}</button>
        </a>
    {/each}
</div>
</div>

<!-- should impact all pages? I think? check svelte/css syntax -->
<style>
    :global(h1) {
		font-family: Courier, monospace;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
	}
    .masterlist {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
    }
    .lesson {
        width: 100%;
        height: 60px;
        margin: 5px;
        background-color: #475468;
        color: #fefefe;
        border-color: #b0d4f0;
        justify-content: left;
        font-size: x-large;
        font-family: Courier, monospace;
        text-align:left;
    }
    #page {
        color: #f7ce7b;
        background-color: rgb(22,36,50);
        height: 1000px;
        width: 100%;
        padding: 10px;
    }
</style>