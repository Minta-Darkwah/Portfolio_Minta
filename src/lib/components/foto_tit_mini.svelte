<script>
    export let url;
    export let tit1;
    export let testo1;
</script>


<div class="tutto3">
    <div class="sin3"><img src={url} alt=""></div>
    <div class="des3">
        <div class="tit3">{tit1}</div>
        <div class="par3">{testo1}</div>
    </div>
</div>

<style>
    /*riquadri del 1960 e del 1970*/
    .tutto3
    {
        width: 100%;
        height: 18rem;

        display: flex;
        margin-bottom: 3rem;

        border: 1px solid green;
    }
    .sin3
    {
        width: 40%;
        border: 1px solid green;
    }
    .des3
    {
        width: 60%;

        display: flex;
        flex-direction: column;

        border: 1px solid green;
    }
    /*parte destra del riquadro*/
    .tit3
    {
        height: 40%;
        font-size: clamp(1.5rem, 3vw, 4rem);

        padding-left: 2%;
        border: 1px solid green;
    }
    .par3
    {
        height: 60%;
        font-size: 1.5rem;

        padding-left: 2%;
        padding-right: 2%;
        text-align: justify;
        border: 1px solid green;
    }

    img
    {
        width: 100%;
        height: 100%;
    }
</style>