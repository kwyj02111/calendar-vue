import Header from '../../Header/Header.vue'

export default {
  components: {
      Header,
  },
  data(){
    return {
      mode : {
        name : '월간',
        type : 'month',
      },
    }
  },
  methods:{
    changeMode(mode){
      this.mode = mode;
      return;
    }
  }
}