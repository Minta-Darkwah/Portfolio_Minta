<div id="watcher">

</div>

<style>
    #watcher
    {
        height: 0.3rem;

        position: sticky;
        top: 0rem;

        z-index: 1000;

        background: linear-gradient(to right,white, rgb(0, 255, 21), darkgreen);
        border-radius: 2rem;
        border: 1px solid black;

        margin-bottom: 1%;

        scale: 0 1;
        transform-origin: left;
        animation: watcher linear;
        animation-timeline: scroll();
    }

    @keyframes watcher
    {
        to {scale:1 1;}
    }
</style>