<script lang="ts" setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

const loginWithGoogle = async() => {
    const { error } = await client.auth.signIn({
        provider: 'google',
    }, {
        redirectTo: 'http://localhost:3000',
    })

    navigateTo('/')
}

watchEffect(() => {
    if (user.value) {
        navigateTo('/')
    }
})
</script>

<template>
    <div flex items-center justify-center p-8>
        <Button @click="loginWithGoogle">
            <div i-ri-google-fill mr-2 /> Login with Google
        </Button>
    </div>
</template>