export default {
  props : ['mode'],
  data(){
    return {
      modeList : [{
        name : '월간',
        type : 'month',
      },{
        name : '주간',
        type : 'week',
      },{
        name : '일간',
        type : 'day',
      }],
      selected : false,
    }
  },
  methods:{
    clickModeContainer(){
      if(this.selected){
        this.hideModeSelectBox();
      }else{
        this.showModeSelectBox();
      }

      return;
    },
    showModeSelectBox(){
      this.selected = true;
      return;
    },
    hideModeSelectBox(){
      this.selected = false;
      return;
    },
    changeMode(mode){
      if(typeof mode === 'undefined'){
        return;
      }

      if(mode.type !== 'month' && mode.type !== 'week' && mode.type !== 'day'){
        return;
      }

      this.$emit('changeMode', mode);
      return;
    }
  },
}