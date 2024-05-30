<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


<div id="nav_b">
    <div class="bot">
        <a href="/pag_iniz">
            <span class="material-symbols-outlined">home</span>
        </a>
    </div>
    <div class="bot">
        <a href="/pag_1945">
            1945
        </a>
    </div>
    <div class="bot">
        <a href="/pag_2020">
            2020
        </a>
    </div>
    <div class="bot">
        <a href="/pag_mafia">
            MAFIA
        </a>
    </div>
    <div class="bot">
        <a href="/pag_borsellino">
            Borsellino
        </a>
    </div>
    <div class="bot">
        <a href="/pag_penadimorte">
            Pena di morte
        </a>
    </div>
    <div class="bot">
        <a href="/pag_femminismo">
            Femminismo
        </a>
    </div>
    <div class="bot">
        <a href="/pag_dittature">
            Dittature
        </a>
    </div>
</div>

<style>
    #nav_b
    {
        width: 10rem;
        /* height: 18rem; */


        display: flex;
        flex-direction: column;


        position: fixed;
        top: 30%;
        left: 1rem;

        float: right;
        
        border: 1px solid black;
    }
    .material-symbols-outlined
    {
        width: 5%;

        font-size: 1.5pc;

        padding-left: 2%;
        padding-top: 0.7%;

        border: 1px solid black;
    }
    #nav_b span
    {
        width: 17%;
        height: 35%;
    }
    a
    {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;

        font-size: 1.5rem;
        color: grey;
        text-decoration: none;

    }
    #nav_b div
    {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        row-gap: 3rem;

        border-radius: 0.5rem;
        

        border: 2px solid #778DA9;
    }
    #nav_b div:hover
    {
        background-color: rgb(224, 224, 224);
    }

    .bot {
        min-height: 2.88rem;

        margin: 0.2rem 0rem 0rem 0rem;

        background-color: #0D1B2A;
        
        /* border: 3px solid orange; */
        
    }
</style>


