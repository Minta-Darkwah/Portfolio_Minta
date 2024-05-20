<script>
    export let url1;
    export let tit1;
    export let testo1;
    export let url2;
    export let tit2;
    export let testo2;
</script>


<div class="tutto5">
    <div class="sinistrato">
        <div class="sin5"><img src={url1} alt=""></div>
        <div class="des5">
            <div class="tit5">{tit1}</div>
            <div class="par5">{testo1}</div>
        </div>
    </div>
    

    <div class="destrato">
        <div class="sin5"><img src={url2} alt=""></div>
        <div class="des5">
            <div class="tit5">{tit2}</div>
            <div class="par5">{testo2}</div>
        </div>
    </div>
</div>

<style>
    /*i 6 riquadri*/
    .tutto5
    {
        height: 12rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 3rem;

        border: 1px solid green;
    }
    .sinistrato
    {
        width: 48%;

        display: flex;
        flex-direction: row;

        border: 1px solid black;
    }
    .destrato
    {
        width: 48%;

        display: flex;
        flex-direction: row;

        border: 1px solid black;
    }
    .sin5
    {
        width: 30%;
        border: 1px solid orange;
    }
    .des5
    {
        display: flex;
        flex-direction: column;

        width: 70%;
        border: 1px solid brown;
    }
    /*destrato (titolo e paragrafo)*/
    .tit5
    {
        height: 50%;
        font-size: 1.3rem;

        padding-left: 2%;
        padding-right: 2%;

        font-size: clamp(1.5rem, 1.5vw, 2.5rem);
        border: 1px solid brown;
    }
    .par5
    {
        height: 50%;
        font-size: 1.3rem;

        padding-left: 2%;
        padding-right: 2%;

        text-align: justify;
        border: 1px solid brown;
    }

    img
    {
        width: 100%;
        height: 100%;
    }

</style>