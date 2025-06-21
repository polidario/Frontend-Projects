<template>
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-lg font-semibold mb-4">Brand</h3>
                    <p class="text-gray-300 max-w-md">
                        Building beautiful and functional web experiences with modern technologies.
                    </p>
                </div>
                <div>
                    <h4 class="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
                    <ul class="space-y-2">
                        <li><Button label="About" text size="small" class="p-0 text-gray-300 hover:text-white justify-start" /></li>
                        <li><Button label="Services" text size="small" class="p-0 text-gray-300 hover:text-white justify-start" /></li>
                        <li><Button label="Portfolio" text size="small" class="p-0 text-gray-300 hover:text-white justify-start" /></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
                    <div class="flex space-x-2">
                        <Button icon="pi pi-twitter" text size="small" class="text-gray-300 hover:text-white" />
                        <Button icon="pi pi-linkedin" text size="small" class="text-gray-300 hover:text-white" />
                        <Button icon="pi pi-github" text size="small" class="text-gray-300 hover:text-white" />
                    </div>
                </div>
            </div>
            <Divider class="my-8" />
            <div class="text-center">
                <p class="text-gray-400 text-sm">
                    © 2024 Brand. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script> 