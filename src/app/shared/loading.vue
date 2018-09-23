<template>
    <div class="text-center">
        <div class="loading-container">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <small class="text-muted" v-if="text">
                {{text}}
            </small>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['text']
    };
</script>
