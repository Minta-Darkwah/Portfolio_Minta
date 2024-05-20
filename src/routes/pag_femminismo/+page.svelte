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
        "",
        "",
        "",
        "",
        "",
        ""
    ]

    let tit = [
        "Lotta delle donne",
        "CODICE ROSSO",
        "Dal 19 del 1991 un diritto in più",
        "Franca Rame",
        "La storia di Franca Rame",
        "Una cicatrice profonda",
        "",
        ""
    ]

    let did = [
        "Da sempre le donne nel corso del tempo hanno lottato per i loro diritti. Nella loro posizione all'interno della famiglia, nel posto di lavoro e nel mondo politico, ma come in tante altre posizioni.",
        "`L'uomo sempre visto come un cacciatore e la donna come una preda`",
        "Negli anni 90' lo stupro viene considerato un reato ed il criminale riceve una pena corta, ma con il crimine ostativo dove viene arrestato per forza. Con anche l'aggravante se avvenuto in gruppo.",
        "Diventano reati anche il mobbing e lo stalking, sia per uomo che per donna.",
        "Nel 78' Franca Rame presenta un monologo chiamato 'Lo stupro' creato dalla lettura di una storia realmente accaduta dove racconta di uno stupro di gruppo accaduto ad una donna. Poi dopo del tempo racconta che la donna della storia era lei, e che furono quattro fascisti. Purtroppo però non poté più denunciare perché ormai era caduta in prescrizione (passato troppo tempo).",
        "Lo stupro subito da Franca Rame fu un modo per fargliela pagare, dato che lei e suo marito erano contrari al fascismo: recitavano con libera espressione ed erano politici di sinistra.",
        "",
        "",
        ""
    ]
</script>

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

    <Spaziatore testo={tit[3]}/>

    <FotoTit url={foto[2]} titolo={tit[4]} min_titolo={tit[5]} testo2={did[4]}/>

    <Paragrafo testo={did[5]}/>

    <Pulsante src="/pag_dittature" nome="AVANTI"/>
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