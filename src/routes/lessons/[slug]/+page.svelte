<script>
    import CodeEditor from '$lib/codeeditor.svelte'
    export let data;
</script>

<html lang="en">
    <body>
        <main>
            <div class="twoBox">
                <div id="left">
                    <a href="/">
                        <img src="/home.png" alt="home button" />
                    </a>
                    <h1>{@html data.lesson.title}</h1>
                    <p>
                    {@html data.lesson.content}
                    </p>
                </div>
                <div id="right">
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
        background-color: #dff0fc;
        width: 100%;
        margin-top:0%;
        padding: 0px;
    }
    /* covers both the text editing and lesson content */
    .twoBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: -16px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }
    /* lesson content */
    #left {
        float: inline-start;
        width: 50%;
        height: 1100px;
        background-color: #b0d4f0;
        padding-left: 15px;
        padding-top: 30px;
    }

    /* text edit box */
    #right {
        float: right;
        width: 50%;
        height: 1000px;
        background-color: #dff0fc;
        padding: 5px;
        margin: 30px;
    }
    html {
        color: rgb(22,36,50);
        padding: 0px;
        margin: 0px;
        width: 100%;
    }
    p {
        margin: 16px;
    }
    h1 {
		font-family: 'Robotics Regular', monospace;
        color:#f7ce7b;
        margin-top: 10px;
        margin-left: 1%;
        margin-right: 50px;
        font-size: 30px;
        width: 95%;
	}
    a {
        width: 7%;
        /* height: 50px; */
    }
    img {
        width: 50px;
        height: 50px;
    }

</style>