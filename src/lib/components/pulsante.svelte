<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<div id="nav_b">
    <div class="bot">
        <a href="/pag_iniz">
            <span class="material-symbols-outlined">home</span>
        </a>
    </div>
    <div class="bot">
        <a href="/pag_1945"> 1945 </a>
    </div>
    <div class="bot">
        <a href="/pag_2020"> 2020 </a>
    </div>
    <div class="bot">
        <a href="/pag_mafia"> MAFIA </a>
    </div>
    <div class="bot">
        <a href="/pag_borsellino"> Borsellino </a>
    </div>
    <div class="bot">
        <a href="/pag_penadimorte"> Pena di morte </a>
    </div>
    <div class="bot">
        <a href="/pag_femminismo"> Femminismo </a>
    </div>
    <div class="bot">
        <a href="/pag_dittature"> Dittature </a>
    </div>
</div>

<style>
    #nav_b {
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
    .material-symbols-outlined {
        width: 5%;

        font-size: 1.5pc;

        padding-left: 2%;
        padding-top: 0.7%;

        border: 1px solid black;
    }
    #nav_b span {
        width: 17%;
        height: 35%;
    }
    a {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;

        font-size: 1.5rem;
        color: grey;
        text-decoration: none;
    }
    #nav_b div {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        row-gap: 3rem;

        border-radius: 0.5rem;

        border: 2px solid #778da9;
    }
    #nav_b div:hover{
        background-color: #415A77;
        
    }
    a {
        color: #E0E1DD;
    }

    .bot {
        min-height: 2.88rem;

        margin: 0.2rem 0rem 0rem 0rem;
        /**/
        font-family: inherit;
        z-index: 0;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

        background-color: #0d1b2a;

        /* border: 3px solid orange; */
    }

    /**/
    .bot:hover {
        animation: sh0 0.5s ease-in-out both;
    }

    @keyframes sh0 {
        0% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }

        25% {
            transform: rotate(7deg) translate3d(0, 0, 0);
        }

        50% {
            transform: rotate(-7deg) translate3d(0, 0, 0);
        }

        75% {
            transform: rotate(1deg) translate3d(0, 0, 0);
        }

        100% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
    }

    .bot:hover a {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
    }

    .bot::before,
    .bot::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #fff;
        opacity: 0;
        transition:
            transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
            opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
        z-index: 0;
        transform: translate(100%, -25%) translate3d(0, 0, 0);
    }

    .bot:hover::before,
    .bot:hover::after {
        opacity: 0.15;
        transition:
            transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
            opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }

    .bot:hover::before {
        transform: translate3d(50%, 0, 0) scale(0.9);
    }

    .bot:hover::after {
        transform: translate(50%, 0) scale(1.1);
    }
</style>
