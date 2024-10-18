<script>
    export let data;
    // lessons variable just contans number of lessons, refers to pages under lessons, update as needed
    // const lessons = ['1', '2', '3', '4'];
</script>
<html lang="en">
    <body id="page">
        <h1>Welcome to Team 4904!</h1>
        <h3>Click on a lesson to start learning!</h3>

        <!-- "each" creates a lesson for every lesson in the data file
        -->
        <div class="masterlist">
         {#each data.summaries as { slug, title }}
                <a href="/lessons/{slug}">
                    <button onclick class="lesson">{@html title}</button>
                </a>
            {/each}
        </div>
    </body>
</html>

<style>
    h1 {
		font-family: Courier, monospace;
        margin: 10px;
        font-size: 80px;
	}
    h3 {
		font-family: Courier, monospace;
        margin: 10px;
        font-size: 30px;
	}
/* full list of lessons */
    .masterlist {
        display: flex;
        flex-direction: column;
        width: 108%;
        justify-content: center;
    }
    /* each individual lesson block */
    button {
        width: 99%;
        height: 60px;
        margin: 10px;
        background-color: #475468;
        color: #fefefe;
        border-color: #b0d4f0;
        justify-content: left;
        font-size: x-large;
        font-family: Courier, monospace;
        text-align: left;
        border-radius: 12px;
        padding-left: 10px;
        padding-top: 80px;
        padding-bottom: 80px;
    }
    #page {
        color: #f7ce7b;
        background-color: rgb(22,36,50);
        height: 1000px;
        width: 95%;
        padding: 10px;
    }
    html, body {
        margin: 0;
        padding: 0;
    }  

</style>