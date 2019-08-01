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
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                <div class="row">
                    <div class="col-sm-3">
                        <h3>Amnarsha</h3>
                        <div class="user-profile">
                            <ul>
                                <li>
                                    <a class="" href="" target="_blank">
                                        <i class="fa fa-sign-in"></i> Profile |
                                    </a>
                                </li>
                                <li>
                                    <a class="" href="" target="_blank">
                                        <i class="fa fa-registered"></i>  Edit Profile
                                    </a>
                                </li>
                            </ul>
                            <p>Last Active : 1 min Ago</p>
                            <button slot="title">Paid</button>
                            <a href="#">
                                <div class="seller-public-profile-star-icons">
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <span class="rating-count count-clr"></span>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-lg-4">
                            <div class="seller-public-profile-text-area">
                            <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></h2>
                            <span class="text-details"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ads sold</font></font></span> </div>
                            </div>
                            <div class="col-lg-4">
                            <div class="seller-public-profile-text-area-left-side">
                            <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></h2>
                            <span class="text-details"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">All items</font></font></span> </div>
                            </div>
                            <div class="col-lg-4">
                            <div class="seller-public-profile-text-area-left-side">
                            <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></h2>
                            <span class="text-details"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">All items</font></font></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </b-card>
            <tabs fill class="flex-column flex-md-row">
                <card shadow>
                    <tab-pane>
                        <span slot="title">My Ads</span>
                        <p class="description"></p>
                    </tab-pane>

                    <tab-pane title="Profile">
                        <span slot="title">Inactive Ads</span>
                        <p class="description"></p>
                    </tab-pane>

                    <tab-pane>
                        <span slot="title">Featured Ads</span>
                        <p class="description"></p>
                    </tab-pane>
                    <tab-pane>
                        <span slot="title">Fav Ads</span>
                        <p class="description"></p>
                    </tab-pane>
                    <tab-pane>
                        <span slot="title">Messages</span>
                        <p class="description"></p>
                    </tab-pane>
                    <tab-pane>
                        <span slot="title">Packages</span>
                        <p class="description"></p>
                    </tab-pane>
                    <tab-pane>
                        <span slot="title">Package history</span>
                        <p class="description"></p>
                    </tab-pane>
                </card>
            </tabs>
        </div>
    </div>
</template>
<style>
.user-profile{
    position:absolute;
}
.user-profile ul{
    padding:0px;
}
.user-profile ul li{
    color: #999;
    display: inline-block;
    font-weight: 500;
}
.seller-public-profile-text-area {
    background: #3498db;
    text-align: center;
    padding: 5px 0px;
    margin-bottom: 18px;
}
.text-details {
    color: #FFFFFF;
}
.seller-public-profile-text-area-left-side {
    background: #1abc9c;
    text-align: center;
    padding: 5px 0px;
}
</style>