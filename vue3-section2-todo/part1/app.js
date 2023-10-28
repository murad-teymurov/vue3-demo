
const { createApp, ref} = Vue;

const app = createApp({
    setup() {
        // const courseGoalA = ref('<h2> Vue Learning </h2>');
        // const courseGoalB = ref("<h2> Master learning Vue </h2>");
        const courseGoalA = ref('Vue Learning');
        const courseGoalB = ref("Master learning Vue");
        const vueLink = ref('https://vuejs.org/');

        function outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber > 0.5) {
                return courseGoalA.value;
            } else {
                return courseGoalB.value;
            }
        }

        return {
            // courseGoal,
            vueLink,
            outputGoal
        };
    },
});

app.mount("#user-goal");