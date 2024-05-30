<script>
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Barra from "../../lib/components/barra.svelte";
    import Spaziatore from "../../lib/components/spaziatore.svelte";
    import FotoTit from "../../lib/components/foto_tit.svelte";
    import Divisore from "../../lib/components/divisore.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";
    import Paragrafo from "../../lib/components/paragrafo.svelte";

    let foto = [
        "https://www.palermotoday.it/~media/horizontal-hi/69917819701031/manca-attilio-3-2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Strage_di_piazza_Fontana.jpg",
        "",
        "",
        "",
        "",
        "",
        "",
    ]

    let tit = [
        "Attilio Manca",
        "Uccisione dell'urologo",
        "La strage di Piazza Fontana",
        "Prima strage terroristica",
        "Ferdinando Dome e ad altre vittime innocenti",
        "",
        "",
    ]

    let did = [
        "Attilio Manca è un urologo che decise con coraggio di non accettare il pizzo, proposto con prepotenza da parte della Mafia. Per questa sua scelta viene ucciso nella sua casa di Viterbo, i sicari tentano un depistaggio facendo credere il suicidio: in quel periodo non ancora reato. Trovano le siringhe per l'iniazione senza impronte del medico, e i genitori dicono che è strano che il figlio si sia iniettato qualcosa sul polso sinistro essendo mancino. Questi grandi errori fanno pensare ad un tentativo per falsificare le prove.",
        "L'attentato si svolge nella Banca dell'agricoltura di Fontana, dove sotto un tavolo vi è stata messa una valigia con una bomba al suo interno portando alla morte di 13 persone. Tutto il giorno del 12 dicembre del 1969 è stato costellato da attentati fatti in altri luoghi, provocando altrettante vittime ",
        "Ferdinando Dome era figlio del custode del cantiere edile che fu ucciso il 10 dicembre 1969 nella strage di Viale Lazio. Ricordando anche che per molti il padre Giovanni e Salvatore Bevilacqua furono etichettati come mafiosi, nonostante la loro innocenza.",
        "",
        "",
        "",
    
    ]

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">

<div id="tutto">
    <SWatcher/>
    <Barra/>

    <div id="g_tit">
        MAFIA
    </div>

    <Spaziatore testo="Depistaggio"/><br>

    <h2>Eliminare le prove e metterne altre false per confondere le tracce</h2>

    <FotoTit url={foto[0]} titolo={tit[0]} min_titolo={tit[1]} testo2={did[0]}/>

    <Divisore testo1="Nel 2016 vinene introdotta la legge 33 firmata da paolo Cortellesi la quale rende il depistaggio un reato"/>

    
    <Spaziatore testo="Terrorismo"/>

    <h2>Causare confuzione attraverso la confusione</h2><br>

    <FotoTit url={foto[1]} titolo={tit[2]} min_titolo={tit[3]} testo2={did[1]}/>

    <Spaziatore testo={tit[4]}/>
    <Paragrafo testo={did[2]}/>
    
    <Pulsante nome="AVANTI" src="/pag_borsellino"/>

</div>


<style>
    #tutto
    {   width: 60%;
        margin: auto;
        background-color: #415A77;
        
        padding: 0rem 4rem 0rem 4rem;
        
        border: 1px solid black;
    }

    #g_tit
    {
        text-align: center;
        margin-bottom: 3rem;

        margin-top: 4rem;
        color: #E0E1DD;
        
        
        font-family: "Abril Fatface", serif;
        font-weight: 400;
        font-style: normal;

        
        font-size: 8rem;
        border: 1px solid #E0E1DD;
    }

    h2
    {
        text-align: center;
        color: #1B263B;
    }
</style>