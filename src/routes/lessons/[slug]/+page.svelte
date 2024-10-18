<script>
    import Tiptap from '$lib/Tiptap.svelte'
    export let data;
</script>

<html lang="en">
    <body>
        <a href="/"><h1>{@html data.lesson.title}</h1></a>
        <main>
        <div class="twoBox">
            <div id="lesson">
                <p>
                {@html data.lesson.content}
                </p>
            </div>
            <div id="edit">
                <Tiptap />
            </div>
        </div>
        </main>
    </body>
</html>  

<style>
    body {
        display: flex;
        flex-direction: column;;
        justify-content: space-between;
        background-color: rgb(22,36,50);
        width: 105%;
        margin: 0px;
        padding: 0px;
    }
    .twoBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0px;
        padding: 0px;
    }
    #lesson {
        float: inline-start;
        width: 50%;
        height: 1000px;
    }
    #edit {
        float: right;
        width: 50%;
        height: 1000px;
        background-color: #475468;
        padding: 5px;
    }
    html {
        color: #fefefe;
        padding: 0px;
        margin: 0px;
        width: 100%;
    }
    p {
        margin: 16px;
    }
    h1 {
		font-family: Courier, monospace;
        margin-top: 10px;
        margin-left: 0px;
        margin-right: 0px;
        font-size: 30px;
        width: 50%;
	}

</style>