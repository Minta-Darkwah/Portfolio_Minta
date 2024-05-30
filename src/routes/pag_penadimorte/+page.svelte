<script>
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Barra from "../../lib/components/barra.svelte";
    import FotoTit from "../../lib/components/foto_tit.svelte";
    import ScrollText from "../../lib/components/scroll_text.svelte";
    import Foto2oriz from "../../lib/components/foto2oriz.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";



    let foto = [
        "https://www.civiltaeterne.it/wp-content/uploads/2017/02/Hammurabi-testata2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljMecp8HxGpnTbYXeMBA1ggf6u1DEWpBLGg4lUOswFA&s",
        "https://www.archetravel.com/wp-content/uploads/2020/03/grecia-storia_fb.jpg",
        "https://www.ruminantia.it/wp-content/uploads/2019/03/roma-imperiale.jpg",
        "https://www.prometheus-studio.it/filosofia_e_storia/wp-content/uploads/2020/06/Medioevo_cover.jpg",
        "",
        "",
        "",
        "",
    ]

    let tit = [
        "Legge di Hammurabi",
        "La legge non è uguali per tutti",
        "Crimini per la pena di morte",
        "Pena di morte nell'America latina",
        "Pena di morte nell'Antica Grecia",
        "Le diverse pene di morte",
        "Nell'Antica Roma:",
        "Nel Medioevo:",
        "",
        "",
        
    ]

    let did = [
        "La pena di morte è una pratica che esiste dai tempi degli egizi. Ad esempio nel Codice Hammurabi abbiamo la legge del taglione che dimostra chiaramente come chi recava un danno ad una persona veniva punito allo stesso modo, oppure in caso di omicidio anche ucciso. A privilegio dei più ricchi.",
        "La pena di morte veniva attribuita a chi compiva furti, faceva spionaggio o aveva fatto adulterio (ma riferito solo alle donne).",
        "Nell'America latina è attiva la pena di morte ma non diffrenzia un omicidio colposo da uno non colposo. Nell'America latina è attiva la pena di morte ma non differenzia un omicidio colposo da uno non colposo. In caso di adulterio non è la moglie che viene punita ma l'amante.",
        "Ad esempio nella Antica Grecia la pena di morte veniva principalmente data nella polis. Invece ad Atene nasce una visione della pena di morte differente perché a differenza degli altri luoghi essa non veniva data non con obbiettivo vendicativo ma rieducativo: non per il reo (colpevole) ma per la società.",
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
        Pena di morte
    </div>

    <FotoTit url={foto[0]} titolo={tit[0]} min_titolo={tit[1]} testo2={did[0]}/>

    <ScrollText tit={tit[2]} testo={did[1]}/>
    
    <Foto2oriz url1={foto[1]} url2={foto[2]} tit1={tit[3]} tit2={tit[4]} testo1={did[2]} testo2={did[3]}/>

    <FotoTit url={foto[3]} titolo={tit[5]} min_titolo={tit[6]} testo1={["Fustigazione","Impiccagione","Tagliare gli arti","Crocifissione","Annegamento","Seppellimento da vivi"]}/>

    <FotoTit url={foto[4]} titolo={tit[5]} min_titolo={tit[7]} testo1={["Torture","Lancio in un dirupo","Impalamento","Morte di stenti","Sbranamento"]}/>

    <Pulsante src="/pag_femminismo" nome="AVANTI"/>
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