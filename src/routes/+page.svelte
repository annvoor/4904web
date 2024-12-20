<script>
    export let data;
</script>
<html lang="en">
    <body id="page">
        <h1>Welcome to Team 4904!</h1>
        <h3>Click on a lesson to start learning!</h3>

        <!-- "each" creates a lesson for every lesson in the data file
            @html tag allows the html in the title to actually work instead of printing the <p> or smth
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

   /* imports fonts from otf + ttf files */
    @font-face {
        font-family: 'Arvo Bold';
        src: url('../Fonts/Arvo-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face{
        font-family: 'Arvo';
        src: url('../Fonts/Arvo-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face{
        font-family: 'CODE Bold';
        src: url('../Fonts/CODE Bold.otf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face{
        font-family: 'Robotics Regular';
        src: url('../Fonts/Robotics-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    h1 {
		font-family: 'Arvo Bold', sans-serif;
        margin: 10px;
        font-size: 80px;
	}
    h3 {
		font-family: 'Arvo', sans-serif;
        margin: 10px;
        font-size: 30px;
	}

/* full list of lessons */
    .masterlist {
        display: flex;
        flex-direction: column;
        width: 90%;
        justify-content: center;

    }
    /* each individual lesson block */
    button {
        width: 100%;
        margin: 5px;
        background-color: #fefefe;
        color: #162432;
        justify-content: left;
        font-size: x-large;
        font-family: 'Robotics Regular', monospace;
        text-align: left;
        padding-left: 10px;
        padding-top: 2%;
        padding-bottom: 2%;
    }
    /*vertically centered text on button*/
    button p{
        line-height:0;
        height:0;

    }
    #page {
        color: rgb(22,36,50);
        background-color: #dff0fc;
        height: 1000px;
        width: 95%;
        padding: 10px;
    }
    html, body {
        margin: 0;
        padding: 0;
        background-color: #dff0fc;
    }  
    /* we never use this in the code, but this was the only way to
    get the background color to cover the whole page
    weird code pulled from the google chrom dev tools, don't question it? 
    just ignore the yellow underline */
    /* html.s-BVOmtoq1lFbO {
        background-color: #dff0fc;
    } */

</style>