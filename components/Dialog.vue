<template>
    <Dialog :open="isOpen" @close="setIsOpen">
        <div class="modal modal-open grid place-content-center">
            <DialogOverlay />
            <div class="modal-box w-full">
                <DialogTitle class="text-2xl font-semibold text-blue-900">{{title}}</DialogTitle>
                <DialogDescription v-if="desc">
                    {{desc}}
                </DialogDescription>
                <div class="h-1 bg-blue-200 mt-2 mb-4" />
                <slot/>
                <div class="modal-action">
                    <button class="btn btn-primary" @click="$emit('confirm');" :disabled="acting">{{actionLbl}}</button>
                    <button class="btn" @click="$emit('cancel');setIsOpen(false)">Cancel</button>
                </div>
            </div>
        </div>
    </Dialog>
  </template>

  <script lang="ts" setup>
    import {
      Dialog,
      DialogOverlay,
      DialogTitle,
      DialogDescription,
      TransitionRoot
    } from "@headlessui/vue"

    type DialogProps = {
        isOpen?: boolean
        title: string
        desc?: string
        actionLbl?: string
        acting?: boolean
        onAction?: () => void
    }

    type DialogEvts = {
        (e: 'confirm'): void
        (e: 'cancel'): void
    }

    const props = withDefaults(defineProps<DialogProps>(), {
        title: '',
        desc: '',
        isOpen: false,
        actionLbl: 'Okay',
        acting: false,
        onAction: () => {}
    })

    const emit = defineEmits<DialogEvts>()

    const isOpen = ref(props.isOpen)

    function setIsOpen(value: boolean) {
        isOpen.value = value
    }
  </script>
