<template>
<li>
  <h2>{{name}} {{isFavorite ? '(Favorite)': ""}}</h2>
  <button @click="toggleFavorite">toggle Favorite</button>
  <button @click="deleteFriend">Delete</button>
  <button @click="UpdatedButton">{{detailsAreVisible? 'Hide': 'Show'}}</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{phoneNumber}}</li>
    <li><strong>Email:</strong>{{emailAddress}}</li>
  </ul>

</li>
</template>

<script>
export default {
  name: "FriendContact",
  props: {
    id: {
      type:String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value){
      //   return value === '1' || value === '0';
      // }
    }
  },
  emits:['delete'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing');
  //       return false;
  //     }
  //   }
  // },
data() {
  return {
    detailsAreVisible: false,
  }
},
  methods:{
    UpdatedButton(){
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend(){
      this.$emit('delete', this.id);
    }
  }
}

</script>

<style scoped>

</style>