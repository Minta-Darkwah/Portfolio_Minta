<script>
    export let url1;
    export let url2;
    export let url3;
    export let url4;

    export let titolo1;
    export let titolo2;
    export let titolo3;
    export let titolo4;

</script>


<div id="tutto">
    <div class="den">
        <div class="imm"><img src={url1} alt=""></div>
        <div class="tit">{titolo1}</div>
    </div>
    <div class="den">
        <div class="imm"><img src={url2} alt=""></div>
        <div class="tit">{titolo2}</div>
    </div>
    <div class="den">
        <div class="imm"><img src={url3} alt=""></div>
        <div class="tit">{titolo3}</div>
    </div>
    <div class="den">
        <div class="imm"><img src={url4} alt=""></div>
        <div class="tit">{titolo4}</div>
    </div>
</div>


<style>
    #tutto
    {
        height: 20rem;
        display: flex;
        column-gap: 3rem;
        justify-content: space-between;

        margin-bottom: 6rem;

    }
    .den
    {
        display: flex;
        flex-direction: column;

        border-radius: 0.6rem;
        overflow: hidden;

        width: 100%;
    }
    /*l'interno dei 2 riquadri*/
    .imm
    {
        height: 80%;
    }
    .tit
    {
        height: 20%;

        padding-left: 2%;
        padding-right: 2%;


        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #415A77;

        text-align: justify;
        border: 2px solid gray;
    }

    img
    {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
</style>