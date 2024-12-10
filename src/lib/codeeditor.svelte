
<!-- run "npm install monaco-editor" to install the dependencies for code editor"  -->

<script>
    import { onMount, onDestroy } from "svelte";
    // let monacoContainer;
    let editor;

    // monaco editor
    onMount(() => {
        // import
        // import("monaco-editor").then((monaco) => {
        //     // Create a Monaco editor instance inside the monacoContainer
        //     editor = monaco.editor.create(monacoContainer, {
        //         value: '',
        //         language: "javascript",
        //         theme: "vs-dark", // You can change the theme
        //         automaticLayout: true, // Ensures the editor resizes with its container
        //     });
        // });
        // Dynamically load JDoodle script
        const script = document.createElement("script");
        script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
        script.type = "text/javascript";
        document.body.appendChild(script);
    });

    // remove editor on destroy
    onDestroy(() => {
        if (editor) {
            editor.dispose();
        }
    });
    
</script>

<!-- Monaco Editor Container -->
<!-- <div bind:this={monacoContainer} class="monaco-editor-container" /> -->

<!-- JDoodle Embed -->
<div data-pym-src='https://www.jdoodle.com/embed/v1/11c4a22e4896395'></div>


<style>
    /* .monaco-editor-container {
        width: 100%;
        height: 100%; 
        border: 1px solid #ccc;
    } */
</style>


