<template>
    <div>
        <AppFormInput v-model="body"></AppFormInput>
    </div>
</template>

<script>
    import AppFormInput from '@/components/elements/form/AppFormInput'

    export default {
        data() {
            return {
                body: ''
            }
        },
        components: {
            AppFormInput
        }
    }
</script>
