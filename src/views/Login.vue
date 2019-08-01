<template>
    <div>
        <div class="position-relative" style="scroll center center / cover">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0" style="text-align: center;">
                        <br><br>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                        <b-row no-gutters>
                        <b-col md="3">
                            <b-card-img src="./img/image/Screen-Shot-2018-06-07-at-2.48.37-AM.png" class="rounded-0" ></b-card-img>
                            <b-card-img src="./img/image/featured-listing.png" class="rounded-0"></b-card-img>
                            <b-card-img src="./img/image/chat.png" class="rounded-0"></b-card-img>
                            <b-card-img src="./img/image/panel.png" class="rounded-0"></b-card-img>
                            <b-card-img src="./img/image/history.png" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="9">
                            <b-card-body title="Receive And Send Bids">
                                <b-card-text>
                                    Receive bids for your ads and increase your chances of closing sales.
                                </b-card-text>
                            </b-card-body>
                            <b-card-body title="List features">
                                <b-card-text>
                                    Create more value for your ads
                                </b-card-text>
                            </b-card-body>
                            <b-card-body title="Chat and messages">
                                <b-card-text>
                                    Access your chat and account information from any device.
                                </b-card-text>
                            </b-card-body>
                            <b-card-body title="User Dashboard">
                                <b-card-text>
                                    Collect the desired items by saving your favorites.
                                </b-card-text>
                            </b-card-body>
                            <b-card-body title="Track history">
                                <b-card-text>
                                    Track the status of your ad history.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                        </b-row>
                        <div class="arrowsign">
                            <b-card-img src="./img/image/arrow.png" class="rounded-0" ></b-card-img>
                        </div>
                </div>
                <div class="col-md-5" style="margin-top:70px">
                    <card  shadow
                        header-classes="bg-white pb-5"
                        body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>

            </div>
        </div>
    </div>
</template>
<style>
.arrowsign {
    bottom: 170px;
    left: 500px;
    position: absolute;
}
</style>