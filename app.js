const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        // variables defined in the reactive form
        const goals = ref([]); 
        const enteredValue = ref('');
        function addGoal() {
            goals.value.push(enteredValue.value); // don't use 'this.'
            enteredValue.value = '';
        }

        return {
            goals,
            enteredValue,
            addGoal
        };
    }
});

app.mount("#app");