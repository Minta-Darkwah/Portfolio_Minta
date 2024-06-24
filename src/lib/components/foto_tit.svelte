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
        border-radius: 0.6rem;
        overflow: hidden;

        display: flex;
        flex-direction: row;

    }
    #sin
    {
        width: 50%;
    }
    #des
    {
        width: 50%;
    }
    /*destra(testo) con titolo, mini titolo e paragrafo*/
    #tit
    {
        height: 25%;
        font-size: 2.5rem;
        text-align: center;

        display: flex;
        align-items: center;

        border-radius: 0rem 0.5rem 0rem 0rem;

        
        color: #E0E1DD;

        padding-left: 2%;
        padding-right: 2%;

        border: 2px solid #E0E1DD;
    }
    #min_tit
    {
        height: 15%;
        font-size: 1.7rem;
        display: flex;
        align-items: center;

        background-color: #1B263B;
        color: #778DA9;

        padding-left: 2%;
    }
    #text
    {
        height: 60%;
        padding: 2%;
        text-align: justify;
        background-color: #778DA9;

        
        font-size: clamp(1.1rem, 1.2rem, 1.5rem);
        
    }
    img
    {
        width: 100%;
        height: 100%;
    }
</style>