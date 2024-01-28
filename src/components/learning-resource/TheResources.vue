<template>
<base-card>
  <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
  <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
</base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from "@/components/learning-resource/StoredResource.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import AddResource from "@/components/learning-resource/AddResource.vue";

export default {
  name: 'TheResource',
  components: {
    BaseCard,
    BaseButton,
    StoredResource,
    AddResource
  },
  provide() {
    return{
      resource: this.storedResources
    }
  },
  data(){
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description:'the official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description:'Learn to google...',
          link: 'https://google.org'
        }
      ]
    }
  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab;
    }
  }
}
</script>

<style scoped>

</style>