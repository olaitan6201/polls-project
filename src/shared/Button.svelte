<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>


<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>


<style>
    button{
        border: none;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0, 0.2);
    }

    .primary{
        background-color: #d91b42;
        color: white;
    }
    .primary{
        background-color: #d91b42;
        color: white;
    }

    .secondary{
        background-color: #45c496;
        color: white;
    }

    .flat{
        box-shadow: none;
    }

    .primary.inverse{
        color: #d91b42;
        background-color: white;
    }

    .secondary.inverse{
        color: #45c496;
        background-color: white;
    }
</style>