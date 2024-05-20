<script>
    import Barra from "../../lib/components/barra.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Spaziatore from "../../lib/components/spaziatore.svelte";


    let foto = [
        "",
        "",
        "",
        "",
        "",
        "",
    ]

    let tit = [
        "CAMPI DI CONCENTRAMENTO TEDESCHI",
        "CAMPI DI CONCENTRAMENTO GIAPPONESI",
        "CAMPI DI CONCENTRAMENTO RUSSI",
        "",
        "",
        "",
        "",
    ]
</script>

<div id="tutto">

    <SWatcher/>
    <Barra/>

    <div id="g_tit">
        Dittature
    </div>
    
    <Spaziatore testo={tit[0]}/>
    <Spaziatore testo={tit[1]}/>
    <Spaziatore testo={tit[2]}/>



    <Pulsante src="" nome="AVANTI"/>
</div>


<style>
    #tutto
    {   width: 60%;
        margin: auto;
        background-color: white;
        
        padding: 0rem 4rem 0rem 4rem;
        
        border: 1px solid black;
    }

    #g_tit
    {
        text-align: center;
        margin-bottom: 3rem;

        margin-top: 4rem;
        

        
        font-size: 8rem;
        border: 1px solid blue;
    }
</style>