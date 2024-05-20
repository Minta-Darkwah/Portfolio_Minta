<script>
    export let testo1 = "";
    export let testo2 = "";

</script>

<div id="divisore">
    <div class="ins">{testo1}</div>
    <div class="ins">{testo2}</div>
</div>

<style>
    /*sezione spaziatrice*/
    #divisore
    {
        height: 2.5rem;

        display: flex;
        justify-content: space-between;

        font-size: 1.1rem;

        margin-top: 4rem;
        margin-bottom: 4rem;

        background: linear-gradient(to right, #457b9d, #a8dadc, white);

        border: 2px solid gray;
    }
</style>