<script>
    export let url;
    export let titolo;
    export let min_titolo;
    export let testo1 = "";
    export let testo2 = "";

</script>

<div id="tutto">
    <div id="sin">
        <img src={url} alt="testo">
    </div>

    <div id="des">
        <div id="tit">{titolo}</div>
        <div id="min_tit">{min_titolo}</div>
        <div id="text">
            {#each testo1 as parola}
                <div>{parola}</div>
            {/each} 

            {testo2}
        </div>
    </div>
</div>


<style>
    #tutto
    {
        width: 100%;
        height: 22rem;

        margin-bottom: 6rem;

        display: flex;
        flex-direction: row;

        border: 1px solid black;
    }
    #sin
    {
        width: 50%;
        border: 2px solid lightseagreen;
    }
    #des
    {
        width: 50%;
        border: 2px solid green;
    }
    /*destra(testo) con titolo, mini titolo e paragrafo*/
    #tit
    {
        height: 25%;
        font-size: 2.5rem;
        text-align: center;

        display: flex;
        align-items: center;

        padding-left: 2%;
        padding-right: 2%;

        border: 1px solid green;
    }
    #min_tit
    {
        height: 15%;
        font-size: 1.7rem;

        padding-left: 2%;
        border: 1px solid green;
    }
    #text
    {
        height: 60%;

        padding-left: 2%;
        padding-right: 2%;
        text-align: justify;

        font-size: clamp(1.1rem, 1.2rem, 1.3rem);
        border: 1px solid green;
    }
    img
    {
        width: 100%;
        height: 100%;
    }
</style>