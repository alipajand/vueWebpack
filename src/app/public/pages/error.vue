<template>
    <b-container class="mt-5 errorPage">
        <b-row class="justify-content-center">
            <b-col cols="12" lg="6">
                <h1 class="text-center errorCode text-primary m-0">
                    {{$route.params.id}}
                </h1>
                <h1 class="text-center">
                    {{errorTitle}}
                </h1>
                <hr>
                <p class="mt-3 text-justify text-black-50 latin">
                    {{$t('msg.error.errorStaticText')}}
                </p>
                <div class="text-center mt-4">
                    <b-link to="/home">
                        {{$t('msg.error.backToHome')}}
                    </b-link>
                    <div class="m-2 d-inline">
                        |
                    </div>
                    <b-link to="/contact">
                        {{$t('msg.error.contactUs')}}
                    </b-link>
                    <div v-if="$route.params.id === 401"
                         class="m-2 d-inline">
                        |
                    </div>
                    <b-link v-bind:to="{name: 'login'}" v-if="$route.params.id === 401">
                        {{$t('msg.error.loginPage')}}
                    </b-link>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script type="text/javascript">
    import globalMethods from '../../../methods';

    export default {
        data() {
            return {
                errorTitle: ''
            };
        },
        watch: {
            $route() {
                this.fillErrorText();
            }
        },
        mounted() {
            this.fillErrorText();

            /**
             * Token Expired or Token Black-listed
             */
            if (this.errorCode === '401' && globalMethods.getCurrentToken()) {
                /**
                 * Remove token
                 */
                this.$store.dispatch('resetToken');
            }
        },
        methods: {
            fillErrorText() {
                /**
                 * props handling
                 */
                if (this.$route.params.id) {
                    switch (parseInt(this.$route.params.id)) {
                        case 401:
                            this.errorTitle = 'لطفا دوباره وارد سیستم شوید';
                            break;
                        case 403:
                            this.errorTitle = 'شما اجازه دسترسی به این صفحه را ندارید.';
                            break;
                        case 410:
                            this.errorTitle = 'حساب شما مسدود می باشد. لطفا با پشتیبانی تماس بگیرید.';
                            break;
                        case 503:
                            this.errorTitle = 'با عرض پوزش، سیستم موقتا از دسترس خارج است';
                            break;
                        default:
                            this.errorTitle = 'متاسفانه خطایی رخ داده است';
                            break;
                    }
                }
            }
        }
    };
</script>
