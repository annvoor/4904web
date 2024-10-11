<script>
    import Tiptap from '$lib/Tiptap.svelte'
    export let data;
</script>

<html lang="en" id="html">
<div class="page">
    <h1>{data.lesson.title}</h1>

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
</div>
</html>  

<style>
    .page {
        display: flex;
        flex-direction: column;;
        justify-content: space-between;
        background-color: rgb(22,36,50);
        background-size: 20px 20px;
        margin: 0;
        padding: 10px;
    }
    .twoBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
        padding: 10px;
        padding-top: 5px;
    }
    #html {
        color: #fefefe;
        padding: 0px;
        margin: 0px;
        border: 100px;
        border-color: rgb(22,36,50);
    }
    h1 {
        width: 50%;
    }
    p {
        margin: 0px;
    }

</style>