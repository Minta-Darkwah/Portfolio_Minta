<script>
    import Barra from "../../lib/components/barra.svelte";
    import FotoTit from "../../lib/components/foto_tit.svelte";
    import Foto2oriz from "../../lib/components/foto2oriz.svelte";
    import Divisore from "../../lib/components/divisore.svelte";
    import FotoTitMini from "../../lib/components/foto_tit_mini.svelte";
    import Foto3oriz from "../../lib/components/foto3oriz.svelte";
    import FotoTitNano from "../../lib/components/foto_tit_nano.svelte";
    import Foto3 from "../../lib/components/foto3.svelte";

    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";

    import Spaziatore from "../../lib/components/spaziatore.svelte";



    let foto = [
        "https://media.istockphoto.com/id/1096896278/it/foto/rifugiati-su-un-grande-gommone-in-mezzo-al-mare-che-hanno-bisogno-di-aiuto.jpg?b=1&s=612x612&w=0&k=20&c=5OY4g-MTCZrxSX_wxH2v35LqNyZKmeFHVuJuERycfAE=",
        "https://images.pexels.com/photos/4959222/pexels-photo-4959222.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://media.istockphoto.com/id/1300834175/it/foto/colonna-di-migranti-vicino-ai-confini-dello-stato-recinzione-e-filo-spinato-sorveglianza.jpg?b=1&s=612x612&w=0&k=20&c=QiN0Uv8Y3tFwnqQIIz6ups-xlbMUhm2OAA32bZ0Jgbo=",
        "https://www.lenius.it/wp-content/uploads/2014/07/storia-delle-migrazioni.jpg",
        "https://www.firstonline.info/wp-content/uploads/2021/05/Statuto-480x270.jpg",
        "https://www.consilium.europa.eu/media/60464/schengen.jpg",
        "https://www.ultimavoce.it/wp-content/uploads/2023/10/B7D63D33-7D36-4D25-9234-6376E94CA231.jpeg",
        "https://media.internazionale.it/images/2019/07/26/150305-sd.jpg",
        "https://fayllar.org/l-30-dicembre-1986-n-943/img3.jpg",
        "https://1.bp.blogspot.com/-yy5VXMDUUZo/WD_GbXFLuWI/AAAAAAAAL9w/OUQOaCVysioXRdX86aYnEPcTjCSTOUR3wCLcB/s1600/albanians_refugees_in_italy_1991_5.jpg",
        "https://www.atlanteguerre.it/wp-content/uploads/2017/11/Ius-Soli-1.jpg",
        "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2010/06/29/att_653390?_=1340328661",
        "https://d21zrvtkxtd6ae.cloudfront.net/public/uploads/2021/02/arab-spring.jpg",
        "https://www.termometropolitico.it/newmedia/2018/06/legge-bossi-fini.jpg",
        "https://www.simmweb.it/archivio-sito/static/pics/2-bandiera.jpg",
        "https://www.meltingpot.org/app/uploads/2009/07/arton14674.gif",
        "https://images.collettiva.it/view/acePublic/alias/contentid/NWZhMzdkZTEtZjc1YS00/1/2379720_132912468-8fa73d47-9e2c-42c6-b65c-028bfa7dca0f-jpg.jpeg?f=3%3A2",
        "https://www.repstatic.it/content/localirep/img/rep/2018/09/25/132106528-87dbf1a5-2b67-4d92-8287-653ededb9638.jpg",
        "https://images.ildubbio.news/version/c:NjVlYTUxZjMtMDU0ZS00:ZjMtMDU0ZS00MWRjYTMy/175241364-27870c16-ddf3-4b3f-9e7d-3f39f4886b81.webp?f=3%3A2&q=0.75&w=3840",
        "https://portaleimmigrazione.eu/wp-content/uploads/2018/08/pacchetto-sicurezza-2018.jpg",
        "",
        "",
        "",
    ]

    let tit = [
        "IMMIGRAZIONE",
        "4 stagioni importanti:",
        "PROFUGO",
        "RIFUGIATO",
        "ASILO POLITICO= protezione territoriale",
        "DECOLONIZZAZIONE= smantellamento delle colonie",
        "RESPINGIMENTO= vietare l'arrivo di immigrati e farli ritornare di nuovo alla loro patria",
        "ESPULSIONE= quando toccano il territorio e li fanno ritornare in patria",
        "1985 Accordi di Schenghen",
        "1986 Legge Foschi",
        "Jerry Masslo",
        "1990 Legge Martelli",
        "1991 'boat people'",
        "1991/92 ius sanguinis e soli",
        "Legge Turco- Napoletano",
        "2010/ 2011",
        "2002 Legge Bossi- Fini",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",

    ]

    let did = [
        "Lascia il Paese per motivi economici, fame, calamità naturali e guerra (non è nelle condizioni di chiedere asilo politico)",
        "Lascia il Paese per paura di essere perseguitato per motivi discriminatori (ha chiesto asilo)",
        "Arrivano migranti per lavoro: Friuli- Venezia- Giulia e Sicilia occidentali. Pescatori tunisini emigrano a Trapani o Mazara del Vallo. 70% di siciliani in Tunisia.",
        "Maggio 1970, promulgazione Statuto dei Lavoratori (libertà d'opinione, divieto controllo). Diritto di avere un opinione che non influenzi il lavoro. Diritto di non avere una guardia che li controllano durante il lavoro.",
        "Libera circolazione delle persone all'interno dell' UE.",
        "Uguaglianza formale di diritti tra lavoratori italiani e stranieri: accesso a servizi sociali e sanitari e ricongiungimento familiare",
        "Membro della comunità per la protezione degli stranieri. Chiede asilo politico, ma lo accoglienza come rifugiato politico. Assassinato in un tentativo di rapina a sfondo razzista.",
        "Prima legge organica su immigrazione.",
        "Gli albanesi sono i primi 'boat people', arrivano dalla nave Vlora, 20 mila albanesi.",
        "Ius sanguinis: diritto per il sangue. Ius soli: diritto per il suolo",
        "Disciplina e diritti per l'immigrazione",
        "Proteste violente contro i regimi in Africa nord",
        "Ingresso e permesso di soggiorno solo a chi ha controllo di lavoro.",
        "",
        "",
        "",
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
        1945
    </div>

    <FotoTit url={foto[0]} titolo={tit[0]} min_titolo={tit[1]} testo1={["1945- 1960", "1960- 1990", "fine 90'- 2010", "2010- oggi"]}/>

    <Foto2oriz url1={foto[1]} url2={foto[2]} tit1={tit[2]} tit2={tit[3]} testo1={did[0]} testo2={did[1]}/>

    <Divisore testo1={tit[4]} testo2={tit[5]}/>

    <FotoTitMini url={foto[3]} tit1="1960" testo1={did[2]}/>
    <FotoTitMini url={foto[4]} tit1="1970" testo1={did[3]}/>

    <Divisore testo1={tit[6]} />
    <Divisore testo1={tit[7]} />

    <Foto3oriz url1={foto[5]} titolo1={tit[8]} testo1={did[4]} url2={foto[6]} titolo2={tit[9]} testo2={did[5]} url3={foto[7]} titolo3={tit[10]} testo3={did[6]}/>

    <FotoTitNano url1={foto[8]} tit1={tit[11]} testo1={did[7]} url2={foto[9]} tit2={tit[12]} testo2={did[8]}/>
    <FotoTitNano url1={foto[10]} tit1={tit[13]} testo1={did[9]} url2={foto[11]} tit2={tit[14]} testo2={did[10]}/>
    <FotoTitNano url1={foto[12]} tit1={tit[15]} testo1={did[11]} url2={foto[13]} tit2={tit[16]} testo2={did[12]}/>


    <Spaziatore testo='2008-2009 "Pacchetto sicurezza": nuove misure restrittive'/>

    <Foto3 url1={foto[14]} url2={foto[15]} url3={foto[16]}/>

    <Spaziatore testo='2018 "Decreti sicurezza" di Salvini'/>

    <Foto3 url1={foto[17]} url2={foto[18]} url3={foto[19]}/>

    <Pulsante src="/pag_2020" nome="AVANTI"/>
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