<script>
    import CodeEditor from '$lib/codeeditor.svelte'
    export let data;
</script>

<html lang="en">
    <body>
        <a href="/">
    <img src="/home.png" alt="home button" />
        </a>

        <h1>{@html data.lesson.title}</h1>
        <main>
        <div class="twoBox">
            <div id="lesson">
                <p>
                {@html data.lesson.content}
                </p>
            </div>
            <div id="edit">
                <CodeEditor />
            </div>
        </div>
        </main>
    </body>
</html>  

<style>

    /* imports fonts from otf + ttf files */
    @font-face {
        font-family: 'Arvo Bold';
        src: url('.../Fonts/Arvo-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face{
        font-family: 'Arvo';
        src: url('.../Fonts/Arvo-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face{
        font-family: 'CODE Bold';
        src: url('.../Fonts/CODE Bold.otf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face{
        font-family: 'Robotics Regular';
        src: url('.../Fonts/Robotics-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-size:90%;
        font-family: 'Arvo';
        display: flex;
        flex-direction: column;;
        justify-content: space-between;
        background-color: rgb(22,36,50);
        width: 95%;
        margin-top:2%;
        padding: 0px;
    }
    /* covers both the text editing and lesson content */
    .twoBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0px;
        padding: 0px;
    }
    /* lesson content */
    #lesson {
        float: inline-start;
        width: 50%;
        height: 500px;
    }
    h1{
        text-decoration:none;
        color: #ffffff;
        margin-left:1%;
    }

    /* text edit box */
    #edit {
        float: right;
        width: 50%;
        height: 500px;
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
    img{
        max-width:2%;
    }
    h1 {
		font-family: 'Robotics Regular', monospace;
        color:#f7ce7b;
        margin-top: 10px;
        margin-left: 0px;
        margin-right: 0px;
        font-size: 30px;
        width: 50%;
	}

</style>