<script>
    export let url1;
    export let url2;
    export let url3;

    export let titolo1;
    export let titolo2;
    export let titolo3;

    export let testo1;
    export let testo2;
    export let testo3;

</script>

<div id="tutto4">
    <div class="den4">
        <div class="imm4"><img src={url1} alt=""></div>
        <div class="tit4">{titolo1}</div>
        <div class="par4">{testo1}</div>
    </div>
    <div class="den4">
        <div class="imm4"><img src={url2} alt=""></div>
        <div class="tit4">{titolo2}</div>
        <div class="par4">{testo2}</div>
    </div>
    <div class="den4">
        <div class="imm4"><img src={url3} alt=""></div>
        <div class="tit4">{titolo3}</div>
        <div class="par4">{testo3}</div>
    </div>
</div>


<style>
    /*i 3 riquadri*/
    #tutto4
    {
        height: 32rem;
        display: flex;
        justify-content: space-between;

        margin-bottom: 6rem;

    }
    .den4
    {
        display: flex;
        flex-direction: column;

        border-radius: 0.6rem;
        overflow: hidden;

        width: 32%;
    }
    /*l'interno dei 3 riquadri*/
    .imm4
    {
        height: 55%;
    }
    .tit4
    {
        height: 15%;
        font-size: clamp(1.5rem, 1.7vw, 2rem);

        display: flex;
        align-items: center;

        background-color: #1B263B;
        color: #415A77;

        padding-left: 2%;
        padding-right: 2%;
        border: 2px solid #E0E1DD;
    }
    .par4
    {
        height: 30%;
        font-size: 1.2rem;

        background-color: #E0E1DD;

        padding: 2%;

        text-align: justify;
    }

    img
    {
        height: 100%;
        width: 100%;

        object-fit: cover;
    }
</style>