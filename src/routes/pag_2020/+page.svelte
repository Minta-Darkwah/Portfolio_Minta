<script>
    import Barra from "../../lib/components/barra.svelte";
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import Foto2oriz from "../../lib/components/foto2oriz.svelte";
    import Foto3oriz from "../../lib/components/foto3oriz.svelte";
    import Foto4oriz from "../../lib/components/foto4oriz.svelte";
    import FotoTit from "../../lib/components/foto_tit.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";
    import Foto from "../../lib/components/foto.svelte";
    import ScrollText from "../../lib/components/scroll_text.svelte";
    
    let foto = [
        "https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://www.foodlog.nl/images/made/2a703e01277aca84/hand_sanitizer_handgel_covid-19_1024_617_c1.png",
        "https://citynews-firenzetoday.stgy.ovh/~media/horizontal-hi/44950274818691/aeroporto_di_firenze_check_in-2.jpeg",
        "https://media.istockphoto.com/id/1288988730/it/vettoriale/gruppo-di-persone-con-immunit%C3%A0-di-gregge-concetto-di-immunit%C3%A0-di-gregge-diffusione-del.jpg?s=612x612&w=0&k=20&c=oDeesKl1wM7-ImiZm3PTXp0Dq6_OsQhO07t1rOr-bEA=",
        "https://www.ie.edu/insights/wp-content/uploads/2020/12/China-lost-oppotunity-COVID19_1096x678-1005x523-1.jpg",
        "https://www.repstatic.it/content/nazionale/img/2020/03/19/000354943-e15ee8c3-e2d7-494f-89f3-d0fe6e86b4ff.jpg?webp",
        "https://img.yumpu.com/25967294/1/500x640/regolamento-sanitario-internazionale-2005-ministero-della-salute.jpg",
        "https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2024/01/H1N1_influenza_virus-1704894614025-1200x675.jpg",
        "https://cdn.britannica.com/07/160507-050-FF60C61F/Electron-micrograph-ebolavirus-virion.jpg",
        "https://www.scienzainrete.it/files/styles/molto_grande/public/coronavirus-4972480_1920.jpg?itok=0e2lccD7",
        "https://www.insubriamedica.it/wp-content/uploads/2021/12/insubria-radiografie-a-domicilio.jpg",
        "https://www.osservatoriomalattierare.it/images/tampone-per-coronavirus.jpg",
        "https://www.fondazioneveronesi.it/uploads/thumbs/2021/10/20/sierologico_thumb_720_480.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/HIV_Epidem.png/800px-HIV_Epidem.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ];

    let tit = [
        "AMUCHINE",
        "AEREOPORTI ASSALTATI",
        "IMMUNITA' DI GREGGE",
        "PARTENDO DALLA CINA",
        "TROPPI MORTI!",
        "REGOLE INTERNAZIONALI SULLA SALUTE 2005",
        "FEBBRE SUINA 2009",
        "EBOLA 2014-2016",
        "CORONAVIRUS= COVID 19",
        "DIAGNOSI RADIOGRAFICA",
        "DIAGNOSI TAMPONE",
        "DIAGNOSI SERIOLOGICO",
        "ALTERAZIONE DEL COVID- 19",
        "CORONAVIRUS",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ];

    let did = [
        "Le amuchine sono un secondo gadget indispensabile per poter accedere in qualsiasi struttura edile e assicurarsi che almeno nelle nostre mani il Coronavirus non vi può avere accesso",
        "Anche all'inizio della prima ondata si è verificato un caso simile nelle stazioni ferroviarie, ma pochi giorni fa gli aeroporti sono stati affollati insieme ai negozi,  per comprare l'ultimo regalo di natale avendo paura della chiusura degli aeroporti e dei negozi: paura che poi si è avverata.",
        "L'immunità di gregge è una copertura vaccinale che si attiva quando la maggior parte delle persone è vaccinata.",
        "Tutto questo è partito dalla Cina, ma in particolare a Wuhan e scoperto da Li Wenliang  il medico scopritore dell'esistenza del covid-19 di cui l'inizio si pensava fosse una 'bufala'.",
        "Così tanti morti che è necessario che i camion militari li prelevino e li trasportino per seporli ",
        "(sui polmoni)",
        "(nel naso)",
        "(nel sangue)",
        "Il virus si espande attraverso:",
        "Il Coronavirus conosciuto anche come covid-19 in grado di avere effetti simili a un raffreddore e problemi di respirazione può anche portare alla morte per persone anziane e per chi è affetto da gravi malattie o patologie.",
        "",
        "",
        "",
        "",
    ];
</script>


<div id="tutto">

    <SWatcher/>
    <Barra/>
    <div id="g_tit">
        2020
    </div>

    <Foto imm={foto[0]}/>
    

    <ScrollText tit={tit[13]} testo={did[9]}/>
    

    
    <Foto2oriz url1={foto[1]} url2={foto[2]} tit1={tit[0]} tit2={tit[1]} testo1={did[0]} testo2={did[1]}/>

    <Foto3oriz url1={foto[3]} url2={foto[4]} url3={foto[5]} titolo1={tit[2]} titolo2={tit[3]} titolo3={tit[4]} testo1={did[2]} testo2={did[3]} testo3={did[4]}/>
    
    <Foto4oriz url1={foto[6]} url2={foto[7]} url3={foto[8]} url4={foto[9]} titolo1={tit[5]} titolo2={tit[6]} titolo3={tit[7]} titolo4={tit[8]}/>

    <Foto3oriz url1={foto[10]} url2={foto[11]} url3={foto[12]} titolo1={tit[9]} titolo2={tit[10]} titolo3={tit[11]} testo1={did[5]} testo2={did[6]} testo3={did[7]}/>


    <div id="video">
        <iframe title="news" width="100%" height="100%" src="https://www.youtube.com/embed/S7u2oORy0L0" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <Pulsante src="/pag_mafia" nome="AVANTI"/>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">


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
    
    /*video*/
    #video
    {
        width: 45rem;
        height: 30rem;

        margin-bottom: 6rem;

        border: 1px solid black;
    }

    
</style>