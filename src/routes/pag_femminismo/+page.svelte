<script>
    import Barra from "../../lib/components/barra.svelte";
    import Divisore from "../../lib/components/divisore.svelte";
    import Foto from "../../lib/components/foto.svelte";
    import FotoTit from "../../lib/components/foto_tit.svelte";
    import Paragrafo from "../../lib/components/paragrafo.svelte";
    import Pulsante from "../../lib/components/pulsante.svelte";
    import SWatcher from "../../lib/components/s_watcher.svelte";
    import ScrollText from "../../lib/components/scroll_text.svelte";
    import Spaziatore from "../../lib/components/spaziatore.svelte";



    let foto = [
        "https://www.ansa.it/webimages/img_620x438/2017/1/22/fdc34036208880749ced1f2ad0051a8b.jpg",
        "https://siulp.it/wp-content/risorse/2022/11/CODICE-ROSSO-I-codici-commentati-con-la-giurisprudenza-2023_SIULP_16-9.jpg",
        "https://st.ilfattoquotidiano.it/wp-content/uploads/2023/05/12/Franca-Rame-1200-x-630.jpg",
        "https://cdn.studenti.stbm.it/images/2018/11/21/sorelle-mirabal-orig.jpeg",
        "",
        "",
        
    ]

    let tit = [
        "Lotta delle donne",
        "CODICE ROSSO",
        "Dal 19 del 1991 un diritto in più",
        "Franca Rame",
        "La storia di Franca Rame",
        "Una cicatrice profonda",
        "Le sorelle Mirabal",
        "3 donne contro la dittatura",
        "",
        "",
    ]

    let did = [
        "Da sempre le donne nel corso del tempo hanno lottato per i loro diritti. Nella loro posizione all'interno della famiglia, nel posto di lavoro e nel mondo politico, ma come in tante altre posizioni.",
        "`L'uomo sempre visto come un cacciatore e la donna come una preda`",
        "Negli anni 90' lo stupro viene considerato un reato ed il criminale riceve una pena corta, ma con il crimine ostativo dove viene arrestato per forza. Con anche l'aggravante se avvenuto in gruppo.",
        "Diventano reati anche il mobbing e lo stalking, sia per uomo che per donna.",
        "Nel 78' Franca Rame presenta un monologo chiamato 'Lo stupro' creato dalla lettura di una storia realmente accaduta dove racconta di uno stupro di gruppo accaduto ad una donna. Poi dopo del tempo racconta che la donna della storia era lei, e che furono quattro fascisti. Purtroppo però non poté più denunciare perché ormai era caduta in prescrizione (passato troppo tempo).",
        "Lo stupro subito da Franca Rame fu un modo per fargliela pagare, dato che lei e suo marito erano contrari al fascismo: recitavano con libera espressione ed erano politici di sinistra.",
        "Nel 1970 viene introdotta attraverso la legge 1° la possibilità di compiere il divorzio.",
        "Nel 1978 viene introdotto la legge che tutela la possibilità di poter eseguire da parte della madre l'aborto.",
        "Il 25 novembre, oltre a essere la giornata contro la violenza sulle donne, ricorda anche l'impresa eroica e coraggiosa delle sorelle Mirabal che in seguito ai loro tentativi di opporsi alla dittatura della Repubblica Domenicana vennero uccise dal dittatore Trujillo.",
        "",
        "",
        "",
        ""
    ]
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">


<div id="tutto">
    <SWatcher/>
    <Barra/>

    <div id="g_tit">
        Femminismo
    </div>

    <Foto imm={foto[0]}/>

    <ScrollText tit={tit[0]} testo={did[0]}/>

    <Divisore testo1={did[1]}/>

    <FotoTit url={foto[1]} titolo={tit[1]} min_titolo={tit[2]} testo2={did[2]}/>

    <Divisore testo1={did[3]}/>

    <Paragrafo testo={did[6]}/>
    <Paragrafo testo={did[7]}/>

    <Spaziatore testo={tit[3]}/>

    <FotoTit url={foto[2]} titolo={tit[4]} min_titolo={tit[5]} testo2={did[4]}/>

    <Paragrafo testo={did[5]}/>

    <Spaziatore testo={tit[6]}/>
    <FotoTit url={foto[3]}  titolo={tit[6]} min_titolo={tit[7]} testo2={did[8]}/>

    <Pulsante src="./pag_dittature" nome="AVANTI"/>
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