<script>
    export let url1;
    export let url2;

    export let tit1;
    export let tit2;
    export let testo1;
    export let testo2;

</script>


<div id="tutto2">
    <div id="par_sin">
        <div id="imm_sin">
            <img src={url1} alt="testo">
        </div>
        <div id="tit2_s">{tit1}</div>
        <div id="par_s">{testo1}</div>
    </div>

    <div id="par_des">
        <div id="imm_des">
            <img src={url2} alt="testo">
        </div>
        <div id="tit2_d">{tit2}</div>
        <div id="par_d">{testo2}</div>
    </div>
</div>

<style>
    
    /*par_sin e par_des*/
    #tutto2
    {
        width: 100%;
        height: 30rem;
        column-gap: 4rem;
        margin-bottom: 6rem;


        display: flex;
        flex-direction: row;

        border: 1px solid black;
    }
    #par_sin
    {
        width: 50%;
        font-size: 1.5rem;
        border: 1px solid green;
    }
    #par_des
    {
        width: 50%;
        font-size: 1.5rem;
        border: 1px solid green;
    }
    /*parte sinistra*/
    #imm_sin
    {
        height: 60%;
        border: 1px solid green;
    }
    #tit2_s
    {
        height: 10%;

        padding-left: 2%;
        padding-right: 2%;
        border: 1px solid green;
    }
    #par_s
    {
        height: 30%;

        padding-left: 2%;
        padding-right: 2%;
        text-align: justify;

        font-size: clamp(0.8rem, 1.2vw, 1.23rem);
        border: 1px solid green;
    }
    /*parte destra*/
    #imm_des
    {
        height: 60%;
        border: 1px solid green;
    }
    #tit2_d
    {
        height: 10%;

        padding-left: 2%;
        padding-right: 2%;

        border: 1px solid green;
    }
    #par_d
    {
        height: 30%;

        padding-left: 2%;
        padding-right: 2%;
        text-align: justify;

        font-size: clamp(0.8rem, 1.2vw, 1.23rem);

        border: 1px solid green;
    }
    /*l'immagine sta' ben messa all'interno del div*/
    img
    {
        width: 100%;
        height: 100%;
    }


</style>