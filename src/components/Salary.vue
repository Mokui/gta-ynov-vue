<template>
    <div class="contact-data">
        <b-card title="name nickname" img-src="" img-alt="Image" img-top tag="article" class="col-lg-12">
            <b-list-group class="card-text">
                <b-list-group-item>date de naissance: <b-btn v-b-modal.modal_name>{{ birth_date }}</b-btn></b-list-group-item>
                <b-list-group-item>adresse: <b-btn v-b-modal.modal_name>{{ address }}</b-btn></b-list-group-item>
                <b-list-group-item>numéros de téléphone: <b-btn v-b-modal.modal_name>{{ phone_number }}</b-btn></b-list-group-item>
                <b-list-group-item>adresse email: <b-btn v-b-modal.modal_name>{{ email_address }}</b-btn></b-list-group-item>
            </b-list-group>
            <b-btn v-b-modal.modal_name>Update</b-btn>
            <!-- Modal Component -->
        </b-card>

        <b-modal id="modal_name" ref="modal" title="Submit your name">
            <form>
                <b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
            </form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "Salary",
        props: {
            birth_date: Date,
            address: String,
            phone_number: String,
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