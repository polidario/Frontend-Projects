<template>
    <div class="bg-black border-b border-white border-opacity-20">
        <Menubar :model="items" class="bg-black border-none">
            <template #start>
                <div class="flex items-center">
                    <h1 class="text-xl font-bold text-white tracking-tight">DevPlatform</h1>
                </div>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex items-center text-white hover:text-gray-300 font-light" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" class="bg-white text-black" />
                    <span v-if="item.shortcut" class="ml-auto border border-white border-opacity-20 rounded bg-black text-white text-xs p-1 font-mono">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto text-white', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-4">
                    <InputText placeholder="Search..." type="text" class="w-32 sm:w-auto bg-black border-white border-opacity-20 text-white placeholder-gray-400 focus:border-white" />
                    <Button label="Sign Up" class="bg-white text-black hover:bg-gray-100 font-semibold border-0 px-4" size="small" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Platform',
    },
    {
        label: 'Documentation',
    },
    {
        label: 'Templates',
    },
    {
        label: 'Pricing',
    }
]);
</script>
