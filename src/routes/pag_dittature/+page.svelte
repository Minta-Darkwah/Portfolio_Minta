<script>
    import Barra from "../../lib/components/barra.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Spaziatore from "../../lib/components/spaziatore.svelte";
    import FotoTit from "../../lib/components/foto_tit.svelte";
    import Paragrafo from "../../lib/components/paragrafo.svelte";


    let foto = [
        "https://burogu00.files.wordpress.com/2013/04/clipboard03.jpg",
        "https://it.gariwo.net/iV3/gulag_fotoD2.jpg",
        "https://www.ivescovi.ch/wp-content/uploads/sites/4/2020/01/75-anniversaire-liberation-Auschwitz.jpg",
        "",
        "",
        "",
    ]

    let tit = [
        "CAMPI DI CONCENTRAMENTO TEDESCHI E ITALIANI",
        "CAMPI DI CONCENTRAMENTO GIAPPONESI",
        "CAMPI DI CONCENTRAMENTO RUSSI",
        "La storia di Dacia",
        "Da amici a nemici",
        "I nemici internati",
        "Chiamati anche gulag",
        "Saliti al potere",
        "Grazie alla confusione",
        "",
        "",
        "",
        "",
        "",
    ]

    let did = [
        "Dacia segue il padre a lavoro in Giappone, così come tutta la famiglia. Il padre era ambasciatore. Nella Seconda Guerra Mondiale il Giappone era alleato con la Germania e l'Italia. Poi però l'Italia si allea con l'America, e viene considerata traditrice dal Giappone. La famiglia viene deportata e tenuta nell'Unità 731.",
        "In questi campi venivano fatti esperimenti sugli umani di ogni tipo. Nell'Unità 100 invece provavano a trasferire le malattie degli animali sugli umani. Poi il Giappone fa un patto con l'America: avrebbe avuto l'immunità sugli atti atroci commessi in cambio delle ricerche ottenute dagli esperimenti.",
        "Nei gulag venivano internati tutti coloro che erano contrari alla dittatura: politici, kulaki, vechhi zaristi e ortodossi. In quel periodo anche Sogenizzi, insegnante, trasferito a Lipgiancia e portato da un lager ad un altro. Che nel 1970 riceve un premio Nobel per la Pace.",
        "Nei Gulag si mangiava un pezzo di pane e zuppa (brodaglia di carne decomposta e avariata). Collocati al sud della Russia, e costretti a dare il massimo.",
        "In molti sono sicuri che la salita al potere di Hitler sia dovuto esclusivamente dalla confusione ed elevata sofferenza della Germania per colpa del crollo del muro di Wall Street, e che se non fosse successo non sarebbe mai riuscita ad avere il comando. Invece Mussolini in Italia a differenza di Hitler fu un totalitarismo atipico: il potere gli è stato dato al re Vittorio Emanuele.",
        "Hitler sapeva bene come parlare. Convinse tutti i tedeschi che gli ebrei erano ben collocati ed in buone posizioni economiche, posizioni secondo Hitler rubate ai cittadini tedeschi.",
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
    <FotoTit url={foto[2]} titolo={tit[7]} min_titolo={tit[8]} testo2={did[4]}/>
    <Paragrafo testo={did[5]}/>

    <Spaziatore testo={tit[1]}/>
    <FotoTit url={foto[0]} titolo={tit[3]} min_titolo={tit[4]} testo2={did[0]}/>
    <Paragrafo testo={did[1]}/>

    <Spaziatore testo={tit[2]}/>
    <FotoTit url={foto[1]} titolo={tit[5]} min_titolo={tit[6]} testo2={did[2]}/>
    <Paragrafo testo={did[3]}/>

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