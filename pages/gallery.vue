<template>
  <div class="min-h-screen flex flex-col justify-center">
      <Sep size="lg"/>
      <StarterKit/>
      <p class="text-center">Pre-made components like alert/toast, button, separator, modal/dialog, spinner, etc. </p>
      <ComponentExample heading="spinner">
            <Spinner size="lg" />
            <Spinner size="xl" />
            <Spinner size="xxl" />
      </ComponentExample>
      <Sep/>
      <ComponentExample heading="button">
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="accent">accent</Button>
      </ComponentExample>
      <Sep/>
      <ComponentExample>
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="md">md</Button>
      </ComponentExample>
      <Sep/>
      <ComponentExample>
            <Button size="md" outline>outlined</Button>
            <Button size="md" loading>loading</Button>
            <Button size="md" disabled>disabled</Button>
      </ComponentExample>
      <Sep/>
      <ComponentExample>
            <Button size="md" wide >wide</Button>
            <Button size="md" circle>circle</Button>
      </ComponentExample>
      <Sep/>
      <ComponentExample heading="avatar">
        <Avatar src="https://avatars.dicebear.com/api/adventurer/nuxt.svg" title="nuxt"/>
        <Avatar src="https://avatars.dicebear.com/api/adventurer/starter.svg" title="starter"/>
        <Avatar src="https://avatars.dicebear.com/api/adventurer/kit.svg" title="kit"/>
      </ComponentExample>
      <Sep/>
      <ComponentExample heading="alert/toast">
            <Button variant="primary" @click="handleAlert({ text: 'Success message goes here...', type: 'success'})">Success</Button>
            <Button variant="primary" @click="handleAlert({ text: 'Error message goes here...', type: 'error'})">Error</Button>
            <Button variant="primary" @click="handleAlert({ text: 'Default message goes here...', type: 'default'})">Default</Button>
      </ComponentExample>
      <Sep/>
      <ComponentExample heading="dialog/modal">
            <Dialog
                v-if="isOpen"
                :isOpen="isOpen"
                title="Deactivate Account"
                desc="This will permanently deactivate your account"
                @confirm="handleConfirm()"
                @cancel="handleCancel()"
            >
                <p>
                    Are you sure you want to deactivate your account? All of your data will
                    be permanently removed. This action cannot be undone.
                </p>
            </Dialog>
            <button @click="isOpen = true">Show dialog</button>
      </ComponentExample>
      <ComponentExample heading="pagenav">
        <PageNavIndicator />
        see at the top...
      </ComponentExample>
      <Sep size="lg"/>
  </div>
</template>
<script lang="ts" setup>
    import Spinner from '~/components/Spinner.vue'
    import PageNavIndicator from '~/components/PageNavIndicator.vue'
    import Dialog from '~/components/Dialog.vue'
    import { handleAlert } from '~/lib/alert'

    const isOpen = ref<boolean>(false)
    const handleConfirm = () => alert('confirmed')
    const handleCancel = () => alert('cancelled')
</script>
