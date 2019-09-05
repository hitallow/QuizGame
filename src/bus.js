import Vue from 'vue'
export default new Vue({
    methods:{
        answered(ok){
            this.$emit('respondido',ok)
        },
        onAnswered(fn){
            this.$on('respondido',fn)
        },
        nextQuestion(){
            this.$emit('nextQuestion')
        },
        onNextQuestion(fn){
            this.$on('nextQuestion',fn)
        }

    }
})