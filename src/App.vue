<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition name='flip' mode="out-in">
			<Question v-if="!questionMode" :question='questions[currentQuestion]'></Question>
			<Result v-else :result='resp'></Result>
		</transition>
	</div>
</template>

<script>
import questions from '../src/util/questions'
import Result from './components/Result.vue'
import Question from './components/Question.vue'
import bus from './bus'
export default {
	components:{
		Result, Question
	},
	computed:{
		currentQuestion(){
			return this.i% this.questions.length;
		}
	},
	data(){
		return {
			i : 0,
			questions,
			resp : false,
			questionMode : false
		}
	},
	created(){
		bus.onAnswered(resp =>{
				this.questionMode = true,
				this.resp = resp;
		})
		bus.onNextQuestion(()=>{
			this.questionMode = false
			this.i++;
		})
	}
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
