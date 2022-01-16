<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';


	// tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	// let polls = [];

	const changeTab = (e) => (activeItem = e.detail);

	const addPoll = (e) => (activeItem = 'Current Polls');
	
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:onTabChanged={changeTab}/>

	{#if activeItem === 'Current Polls'}
		<PollList />
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:onAddPoll={addPoll}/>
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>