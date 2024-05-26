<script>
    export let url1;
    export let url2;
    export let url3;

</script>


<div class="tutto6">
    <div class="sin6">
        <div class="sopra6"><img src="{url1}" alt=""></div>
        <div class="sotto6"><img src="{url2}" alt=""></div>
    </div>
    <div class="des6"><img src="{url3}" alt=""></div>
</div>


<style>
    /*le 3 foto*/
    .tutto6
    {
        width: 100%;
        height: 30rem;
        margin-bottom: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        border: 1px solid green;
    }
    .sin6
    {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border: 1px solid green;
    }
    .des6
    {
        width: 63%;

        border-radius: 0.5rem;
        overflow: hidden;
        border: 1px solid green;
    }
    /*parte sinistra con 2 foto*/
    .sopra6
    {
        height: 47%;

        border-radius: 0.5rem;
        overflow: hidden;
        border: 1px solid green;
    }
    .sotto6
    {   height: 47%;

        border-radius: 0.5rem;
        overflow: hidden;
        border: 1px solid green;
    }


    img
    {
        width: 100%;
        height: 100%;

        object-fit: cover;
        
    }
</style>