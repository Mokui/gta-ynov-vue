<template>
    <div class="contact-data">
        <b-card title="name nickname" img-src="" img-alt="Image" img-top tag="article" class="col-lg-12">
            <b-list-group class="card-text">
                <b-list-group-item>date de naissance: <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.birth }}</b-btn></b-list-group-item>
                <b-list-group-item>adresse: <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.adress }}</b-btn></b-list-group-item>
                <b-list-group-item>numéros de téléphone: <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.phone }}</b-btn></b-list-group-item>
                <b-list-group-item>adresse email: <b-btn v-b-modal.modal_name>{{ $store.getters.user_connected.email }}</b-btn></b-list-group-item>
            </b-list-group>
            <b-btn v-b-modal.modal_name>Update</b-btn>
            <!-- Modal Component -->
        </b-card>

        <b-modal id="modal_name" ref="modal" title="Submit your name">
            <form>
                <b-form-input type="text" placeholder="Enter your birthdate" v-model="birth"></b-form-input>
                <b-form-input type="text" placeholder="Enter your adresse" v-model="adress"></b-form-input>
                <b-form-input type="text" placeholder="Enter your phone number" v-model="phone"></b-form-input>
                <b-form-input type="text" placeholder="Enter your email" v-model="email"></b-form-input>
            </form>
        </b-modal>
    </div>
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
</style>