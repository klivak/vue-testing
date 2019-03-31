<template>
    <div>
        <a href="#"
           @click.prevent="revealed = true"
           v-if="!revealed"
        >
            Click to reveal
        </a>

        <div v-if="revealed">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                revealed: false
            }
        }
    }
</script>

<style scoped>

</style>