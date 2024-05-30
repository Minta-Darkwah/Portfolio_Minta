<script>
    export let tit;
    export let testo;
</script>

<br/>

<div id="testo">
    <h1>{tit}</h1>
    <span>
        {testo}
    </span>
</div>


<style>
    #testo
    {
        text-align: center;
        margin-bottom: 10rem;
    }
    /*parte dello scroll del testo iniziale*/
    /*ho scelto lo "span" al posto del "p" perché "#testo * " includerei tutti i tag dentro "#testo"*/
    #testo *
    {
        font-size: 2rem;
        text-align: center;
        line-height: 3rem;
        font-weight: bold;
        
        
    /*il problema -webkit-background-clip: funziona ma non lo trova consono*/

        color: hsla(221, 62%, 75%, 0.7);
        background-image: linear-gradient(to right, #778DA9, #E0E1DD);
        -webkit-background-clip: text;
        background-clip: text;
        background-repeat: no-repeat;
        background-size: 0% 100%;
        animation: testo linear forwards;
        animation-timeline: view();
        
        
    }


    #testo h1
    {
        animation-range-start: contain 20vh;
        animation-range-end: contain 30vh;

    }
    #testo span
    {
        animation-range-start: contain 20vh;
        animation-range-end: contain 62vh;

    }
    @keyframes testo
    {
        to {background-size: 100% 100%;}
    
    }
</style>
