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

        border-radius: 0.6rem;
        overflow: hidden;

    }
    .sin3
    {
        width: 40%;
    }
    .des3
    {
        width: 60%;

        display: flex;
        flex-direction: column;

    }
    /*parte destra del riquadro*/
    .tit3
    {
        height: 40%;
        font-size: clamp(1.5rem, 3vw, 4rem);

        display: flex;
        align-items: center;

        background-color: #778DA9;
        color: #0D1B2A;
        border-radius: 0rem 0.4rem 0rem 0rem;

        padding-left: 2%;
        border: 2px solid #E0E1DD;
    }
    .par3
    {
        height: 60%;
        font-size: 1.5rem;

        background-color: #E0E1DD;
        
        padding-left: 2%;
        padding-right: 2%;
        text-align: justify;
    }

    img
    {
        width: 100%;
        height: 100%;
    }
</style>