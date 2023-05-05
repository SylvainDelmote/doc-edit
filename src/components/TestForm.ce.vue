<template>
  <!--<div class="template">
    Saisir du texte :
    <input type="text" label="test" @keydown="process_current_text_style">
    <br/>
    <span contenteditable="true" @keydown="process_current_text_style"> editable </span> ---
    <span contenteditable="false"> non editable</span>
  </div>-->
  <!--<span contenteditable="true" class="editable" @input="onKeyDown">test : {{value}}</span>-->
  <input type="text" v-model="internalValue" @keydown="onKeyDown" class="editable">
</template>

<script>
export default {
  name: "TestForm",
  props:{
    value:{ type: String, default: "aaa"},
    max:{type: Number, default: 250}
  },
  computed:{
    internalValue: {
      get() {return this.value},
      set(v){ this.$emit("input", v)}
    }
  },
  methods: {
    onKeyDown(evt){
      if (this.value.length >= this.max) {
        if (evt.keyCode >= 48 && evt.keyCode <= 90) {
          evt.preventDefault()
          return
        }
      }
    }
  }
}
</script>

<style>
.editable {
  background: rgba(193, 231, 85, 0.4);
  transition: padding 0.05s linear;
}
</style>