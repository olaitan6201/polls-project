<script>
    import PollStore from '../stores/PollStore';
    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';

    export let poll;


    //reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentageA = Math.floor(100 / totalVotes * poll.votesA);
    $: percentageB = Math.floor(100 / totalVotes * poll.votesB);

    //Handling Vote
    const handleVote = (opt, id) => {
        PollStore.update(currentPolls => {
            let copiedPolls = [...currentPolls];
            let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
    
            if(opt === 'a') upvotedPoll.votesA++;
            if(opt === 'b') upvotedPoll.votesB++;
    
            return copiedPolls;
        });
    }


    const handleDelete = (id) => PollStore.update(currentPolls=>{
        return currentPolls.filter(poll => poll.id !== id);
    });
</script>

<Card>
    <div class="poll">
        <h3>{ poll.question }</h3>
        <p>Total votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {percentageA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {percentageB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button flat={true} on:click={()=> handleDelete(poll.id)}>Delete</Button>
        </div>
    </div>
</Card>

<style>
    h3{
        margin: 0 auto;
        color: #555;
    }
    p{
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-top: 30px;
    }
    .answer{
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover{
        opacity: 0.6;
    }
    span{
        display: inline-block;
        padding: 10px 20px;
    }
    .percent{
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a{
        border-left: 4px solid #d91b42;
        background-color: rgba(217, 27, 66, 0.2);
    }
    .percent-b{
        border-left: 4px solid #45c496;
        background-color: rgba(69, 196, 150, 0.2);
    }

    .delete{
        margin-top: 30px;
        text-align: center;
    }
</style>