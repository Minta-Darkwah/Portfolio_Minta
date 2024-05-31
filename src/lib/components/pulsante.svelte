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

        background-color: #0D1B2A;
        color: #CAF0F8;

        margin-bottom: 3rem;
        margin-left: 85%;

        border: 2px solid #E0E1DD;


    }
    a
    {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: #E0E1DD;
        text-decoration: none;
        
    }
    a:hover
    {
        
        color: #0D1B2A;
    }
    #pulsante:hover
    {
        background-color: #E0E1DD;
        color: #0D1B2A;
        border: 2px solid #0D1B2A;
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