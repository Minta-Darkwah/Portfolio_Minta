<script>
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Barra from "../../lib/components/barra.svelte";
    import Spaziatore from "../../lib/components/spaziatore.svelte";
    import Foto from "../../lib/components/foto.svelte";
    import ScrollText from "../../lib/components/scroll_text.svelte";

    import Divisore from "../../lib/components/divisore.svelte";
    import Foto2oriz from "../../lib/components/foto2oriz.svelte";
    import FotoTitMini from "../../lib/components/foto_tit_mini.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";

    let foto = [
        "https://images.ildubbio.news/version/c:N2M2MWJkZTItMzJjYi00:ZjBmZWY0N2YtYjc1OC00/image.webp?f=3%3A2&q=0.75&w=3840",
        "https://www.libertaegiustizia.it/wp-content/uploads/2016/06/3962389436_63ab977c3e.jpg",
        "https://micromegaedizioni.net/wp-content/uploads/2022/05/ayala-falcone-scalfaro.jpg",
        "https://www.nuovogiornalenazionale.com/images/rognoni_la_torre.jpg",
        "",
        "",
        "",
        "",
        "",
    ]

    let tit = [
        "La vita di Borsellino",
        "Agende rosse",
        "Pool antimafia",
        "Legge Rognoni La Torre",
        "",
        "",
        "",
        "",
        "",
    ]

    let did = [
        "Paolo Borsellino fu magistrato italiano che da sempre ha lottato contro la mafia in Italia e a livello internazionale. Una domenica come tutte le altre decide di andare da sua madre, ma purtroppo questa sarà l'ultima cosa che farà perché la Mafia fece mettere una bomba 126 auto parcheggiata in Via d'Amelio",
        "Il 19 Luglio 1992 Salvatore Borsellino, fratello di Paolo Borsellino fonda Agende Rosse, fondazione che lotta contro la Mafia dove chiunque può diventarne membro. E confrontarsi con gli altri.",
        "Data la poca fiducia nelle istituzioni Chinnici crea il Pool Antimafia, composto da magistrati. Purtroppo viene assassinato e sostituito da Caponnetto",
        "La legge Rognoni La Torre introduce il reato di associazione nel codice penale. Approvata dal Parlamento, dopo la morte del segretario Pio La Torre di Geu Della Chiesa nella strage di Via Panici",
        "",
        "",
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
        Paolo Borsellino
    </div>

    <Spaziatore testo="La vita di Borsellino"/>

    <Foto imm={foto[0]}/>

    <ScrollText tit={tit[0]} testo={did[0]}/>

    <Foto2oriz tit1={tit[1]} tit2={tit[2]} url1={foto[1]} url2={foto[2]} testo1={did[1]} testo2={did[2]}/>
    <Divisore testo1="Salvatore: 'Ormai siamo morti che camminano'"/>


    <FotoTitMini url={foto[3]} tit1={tit[3]} testo1={did[3]}/>
    <Pulsante nome="AVANTI" src="./pag_penadimorte"/>
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
</style>