<template>
<form @submit.prevent="enteredData">
  <div>
    <label>Name</label>
    <input type="text" v-model="enteredName" />
  </div>
  <div>
  <label>Phone</label>
  <input type="tel" v-model="enteredPhone" />
</div>
  <div>
    <label>Email</label>
    <input type="text" v-model="enteredEmail" />
  </div>
<button>Add Button</button>
</form>
</template>

<script>

export default {
  name: "NewFriend",
  emits: ['add-contact'],
  data(){
    return {
      enteredName:'',
      enteredPhone:'',
      enteredEmail:'',
    }
  },
  methods:{
    enteredData(){
      this.$emit('add-contact', this.enteredName,this.enteredEmail,this.enteredPhone)
    }
  }

}
</script>

<style>

</style>