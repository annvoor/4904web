

<script>
    import { onMount, onDestroy } from "svelte";
    let editor;

    // JDoodle editor
    onMount(() => {
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

<!-- JDoodle Embed -->
<div data-pym-src='https://www.jdoodle.com/embed/v1/11c4a22e4896395'></div>


<style>
</style>


