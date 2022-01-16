<script>
    import { createEventDispatcher } from "svelte";
    export let items;
    export let activeItem;

    let dispatch = createEventDispatcher();

    const onChangeTab = (tabName) => {
        dispatch('onTabChanged', tabName);
    }
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={onChangeTab(item)}>
                <div class:active={activeItem === item}>
                    {item}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 40px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
    }
    ul li{
        list-style-type: none;
        margin: 0 60px;
        font-size: 18px;
        color: #666;
        cursor: pointer;
    }
    .active{
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>