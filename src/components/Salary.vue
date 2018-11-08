<template>
    <div class="contact-data">
        <b-card title="name nickname" img-src="" img-alt="Image" img-top tag="article" class="mb-2">
            <p class="card-text">
                <ul>
                    <li>date de naissance</li>
                    <li>adresse</li>
                    <li>numéros de téléphone</li>
                    <li>adresse email</li>
                </ul>
            </p>
            <b-button href="#" variant="primary"></b-button>
            <b-btn v-b-modal.update-modal>Update</b-btn>
            <!-- Modal Component -->
            <b-modal id="update-modal" title="Bootstrap-Vue">
                <p class="my-4">Hello from modal!</p>
            </b-modal>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Salary",
        props: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .contact-data {
        margin-top: 50px;
    }
</style>