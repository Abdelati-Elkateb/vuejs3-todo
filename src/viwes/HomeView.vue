<template>
    <div style="min-height:100vh; background: linear-gradient(135deg, #f0f4fa 0%, #e9f5ff 100%); display: flex; align-items: center; justify-content: center;">
        <div style="background: #fff; border-radius: 18px; box-shadow: 0 4px 24px #0d6efd22; padding: 32px 18px; width: 100%; max-width: 480px;">
            <HeaderTodo />
            <InputTodo />
            <TabelTodo />
        </div>
    </div>

</template>

<script setup>
import HeaderTodo from '../components/TodoHeader.vue';
import InputTodo from '../components/TodoInput.vue';
import TabelTodo from '../components/TodoTabel.vue';

</script>


<script>

</script>