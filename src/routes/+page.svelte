<script>
    
    import Presentazione from "../lib/components/presentazione.svelte";
    import Social from "../lib/components/social.svelte";
    
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="preconnect" href="https://fonts.googleapis.com">


<main>
    <title>PORTFOLIO</title>

    <div id="nome">Minta.</div>
    <div id="nome2">EDUCAZIONE CIVICA.</div>

    <Presentazione/>

    <Social/>

    <div id="pulsante">
        <a href=./pag_1945>
            <div id="sin">AVANTI</div>
            <span class="material-symbols-outlined">navigate_next</span>
        </a>
        
    </div>
    
</main>

<style>
    /* :global(body)
    {
        background: linear-gradient(90deg, #023E8A, #CAF0F8);
        
    } */
    /*per il nome*/
    #nome
    {
        width: 10rem;
        height: 2.5rem;
        display: inline;

        position: relative;
        left: 5rem;
        font-size: 2rem;

        border: 1.5px solid black;
    }
    #nome2
    {
        width: 10rem;
        height: 2.5rem;
        display: inline;

        position: relative;
        top: 3rem;
        left: -0.7rem;
        font-size: 2rem;

        border: 1.5px solid black;
    }


    /*pulsante*/
    #pulsante
    {
        width: 9%;
        height: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 1.3rem;

        border-radius: 0.2rem;

        background-color: #0D1B2A;
        color: #CAF0F8;

        position: relative;
        top: 8.4rem;
        left: 30rem;

        border: 2px solid #E0E1DD;
    }
    a
    {
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: #CAF0F8;
        text-decoration: none;
        
    }
    a:hover
    {
        color: #0D1B2A;
    }
    #pulsante:hover
    {
        background-color: #E0E1DD;
        color: #0D1B2A;
        border: 2px solid #0D1B2A;
    }
    span
    {

        margin-left: 0.5rem;
    }
   
    .material-symbols-outlined
    {
        width: 12%;
        height: 45%;
    }
</style>