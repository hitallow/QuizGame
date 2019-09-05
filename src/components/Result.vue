<template>
  <div class="result" :class="{'wrong':!result}">
      <span v-if="result"> Parabêns. você acertou! :)</span>
      <span v-else>Que pena, você errou! :(</span>
      <button @click="nextQuestion">Ir para próxima pergunta</button>

  </div>
</template>

<script>
import bus from '../bus'
export default {
  props: {
    result: {
      type: Boolean,
      required: true
    }
  },
  methods:{
      nextQuestion(){
          bus.nextQuestion();
      }
  }
  
};
</script>

<style>
.result {
  height: 400px;
  color: #000;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  font-size: 5.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #89c454;
  color: #30863d;
}

.result h1 {
  color: #fff;
}

.result.wrong {
  background-color: #f05250;
  color: #bb2814;
}

.result button {
  outline: none;
  align-self: center;
  padding: 10px 20px;
  font-size: 1.7rem;
  border-radius: 8px;
  background-color: #fff;
  color: #30863d;
  font-weight: 600;
}

.result.wrong button {
  color: #bb2814;
}
</style>
