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
    #pulsante {
        width: 15%;
        height: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 1.3rem;

        border-radius: 0.2rem;

        background-color: #0d1b2a;
        color: #caf0f8;

        margin-bottom: 3rem;
        margin-left: 85%;

        /**/
        z-index: 0;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

        border: 2px solid #e0e1dd;
    }
    a {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: #e0e1dd;
        text-decoration: none;
    }
    a:hover {
        color: #0d1b2a;
    }
    #pulsante:hover {
        background-color: #e0e1dd;
        color: #0d1b2a;
        border: 2px solid #0d1b2a;
    }
    span {
        margin-left: 0.5rem;
    }

    .material-symbols-outlined {
        width: 12%;
        height: 45%;
    }

    /**/
    #pulsante:hover {
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

    #pulsante:hover a {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
    }

    #pulsante::before,
    #pulsante::after {
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
        z-index: -1;
        transform: translate(100%, -25%) translate3d(0, 0, 0);
    }

    #pulsante:hover::before,
    #pulsante:hover::after {
        opacity: 0.15;
        transition:
            transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
            opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }

    #pulsante:hover::before {
        transform: translate3d(50%, 0, 0) scale(0.9);
    }

    #pulsante:hover::after {
        transform: translate(50%, 0) scale(1.1);
    }
</style>
