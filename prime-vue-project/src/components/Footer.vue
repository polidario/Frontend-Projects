<template>
    <footer class="bg-black border-t border-white border-opacity-20">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-xl font-bold text-white mb-6 tracking-tight">DevPlatform</h3>
                    <p class="text-white font-light max-w-md leading-relaxed">
                        Empowering developers with modern tools and seamless deployment solutions.
                    </p>
                </div>
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">Platform</h4>
                    <ul class="space-y-3">
                        <li><Button label="Dashboard" text size="small" class="p-0 text-white hover:text-gray-300 justify-start font-light" /></li>
                        <li><Button label="Analytics" text size="small" class="p-0 text-white hover:text-gray-300 justify-start font-light" /></li>
                        <li><Button label="Integrations" text size="small" class="p-0 text-white hover:text-gray-300 justify-start font-light" /></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">Resources</h4>
                    <ul class="space-y-3">
                        <li><Button label="Documentation" text size="small" class="p-0 text-white hover:text-gray-300 justify-start font-light" /></li>
                        <li><Button label="Community" text size="small" class="p-0 text-white hover:text-gray-300 justify-start font-light" /></li>
                        <li><Button label="Support" text size="small" class="p-0 text-white hover:text-gray-300 justify-start font-light" /></li>
                    </ul>
                </div>
            </div>
            <div class="mt-16 pt-8 border-t border-white border-opacity-20">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-white font-light text-sm">
                        © 2024 DevPlatform. All rights reserved.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <Button icon="pi pi-twitter" text size="small" class="text-white hover:text-gray-300" />
                        <Button icon="pi pi-github" text size="small" class="text-white hover:text-gray-300" />
                        <Button icon="pi pi-linkedin" text size="small" class="text-white hover:text-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script> 