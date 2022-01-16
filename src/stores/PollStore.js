import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: 'Python or Javascript?',
        answerA: 'Python',
        answerB: 'Javascript',
        votesA: 9,
        votesB: 15
    },
    {
        id: 2,
        question: 'Do you like Mamite?',
        answerA: 'Yes',
        answerB: 'No',
        votesA: 24,
        votesB: 13
    }
]);

export default PollStore;