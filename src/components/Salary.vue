<template>
  <div class="contact-data">
    <b-card
      :title="$store.getters.user_connected.name+' '+$store.getters.user_connected.firstname "
      img-src
      img-alt="Image"
      img-top
      tag="article"
      class="col-lg-12"
    >
      <b-list-group class="card-text">
        <b-list-group-item>date de naissance:
          <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.birth }}</b-btn>
        </b-list-group-item>
        <b-list-group-item>adresse:
          <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.adress }}</b-btn>
        </b-list-group-item>
        <b-list-group-item>numéros de téléphone:
          <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.phone }}</b-btn>
        </b-list-group-item>
        <b-list-group-item>adresse email:
          <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.email }}</b-btn>
        </b-list-group-item>
      </b-list-group>
      <b-btn class="update" v-b-modal.modal_name>Update</b-btn>
      <!-- Modal Component -->
    </b-card>

<<<<<<< HEAD
        <b-modal id="modal_name" ref="modal" title="Submit your name">
            <form>
                <b-form-input type="text" placeholder="Enter your birthdate" v-model="birth">{{ $store.getters.user_connected.birth }}</b-form-input>
                <b-form-input type="text" placeholder="Enter your adresse" v-model="adress">{{ $store.getters.user_connected.adress }}</b-form-input>
                <b-form-input type="text" placeholder="Enter your phone number" v-model="phone"></b-form-input>
                <b-form-input type="text" placeholder="Enter your email" v-model="email"></b-form-input>
            </form>
        </b-modal>
    </div>
=======
    <b-modal id="modal_name" ref="modal" title="Submit your modifications">
      <form>
        <b-form-input
          type="date"
          placeholder="Enter your birthdate"
          v-model="birth"
        >{{ $store.getters.user_connected.birth }}</b-form-input>
        <b-form-input type="text" placeholder="Enter your adress" v-model="adress"></b-form-input>
        <b-form-input type="number" placeholder="Enter your phone number" v-model="phone"></b-form-input>
        <b-form-input type="email" placeholder="Enter your email" v-model="email"></b-form-input>
      </form>
    </b-modal>
  </div>
>>>>>>> 73f814eb530ed1345977535c1ec5fe7dcfedb02c
</template>

<script>
export default {
  name: "Salary",
  props: {
    birth: Date,
    adress: String,
    phone: String,
    email: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-data {
  margin-top: 2%;
}

.update {
  margin-top: 2%;
}
</style>