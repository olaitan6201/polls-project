<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";


	// tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const changeTab = (e) => (activeItem = e.detail);
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:onTabChanged={changeTab}/>

	{#if activeItem === 'Current Polls'}
		<p>Poll list component goes here</p>
	{:else if activeItem === 'Add New Poll'}
		<p>New Poll form component goes here</p>
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>