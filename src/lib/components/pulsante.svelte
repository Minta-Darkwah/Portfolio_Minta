<script>
    export let src;
    export let nome;
</script>

<div id="pulsante">
    <a href={src}>
        <div id="sin">{nome}</div>
        <span class="material-symbols-outlined">navigate_next</span>
    </a>
    
</div>

<style>
    #pulsante
    {
        width: 15%;
        height: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 1.3rem;

        border-radius: 0.2rem;

        background-color: #0089d3;
        color: #CAF0F8;

        margin-bottom: 3rem;
        margin-left: 85%;

        border: 1px solid black;


    }
    a
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: #CAF0F8;
        text-decoration: none;
        
    }
    a:hover
    {
        color: #0089d3;
    }
    #pulsante:hover
    {
        background-color: #CAF0F8;
        color: #0089d3;
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