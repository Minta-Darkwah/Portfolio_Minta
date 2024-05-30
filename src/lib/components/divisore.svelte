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
        align-items: center;

        border-radius: 0.5rem;

        padding-right: 1%;
        padding-left: 1%;

        font-size: 1.1rem;

        margin-top: 4rem;
        margin-bottom: 4rem;

        background: #1B263B;
        color: #E0E1DD;

        border: 2px solid #E0E1DD;
    }
    .ins {font-size: 1vw;}
</style>