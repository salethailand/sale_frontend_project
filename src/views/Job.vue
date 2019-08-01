
<template>
    <div>
        <div class="position-relative" style="    background: rgba(0, 0, 0, 0) url(img/upload/2017-03-28-16-57-06-min.jpg) no-repeat scroll center center / cover">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0" style="text-align: center;">
                        <p class="lead  text-white">What are you looking for?</p>
                        <div class="row">
                            <div class="col" style="padding:0px">
                                <base-button type="primary" style="margin:0px;"><i class="ni ni-pin-3"></i> Use GPS location</base-button>
                            </div>
                            <div class="col" style="padding:0px">
                                <base-dropdown>
                                    <base-button slot="title" class="dropdown-toggle" outline type="default" style="margin:0px;background-color:white !important;color: #000000 !important;">Distance(Any)
                                    </base-button>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </base-dropdown>
                            </div>
                            <div class="col" style="padding:0px">
                                <base-dropdown>
                                    <base-button slot="title" class="dropdown-toggle" outline type="default" style="margin:0px;background-color:white !important;color: #000000 !important;">Make(Any)
                                    </base-button>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </base-dropdown>
                            </div>
                            <div class="col" style="padding:0px">
                                <base-dropdown>
                                    <base-button slot="title" class="dropdown-toggle" outline type="default" style="margin:0px;background-color:white !important;color: #000000 !important;">Modal(Any)
                                    </base-button>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </base-dropdown>
                            </div>
                            <div class="col" style="padding:0px">
                                <base-dropdown>
                                    <base-button slot="title" class="dropdown-toggle" outline type="default" style="margin:0px;background-color:white !important;color: #000000 !important;">Price(Any)
                                    </base-button>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </base-dropdown>
                            </div>
                            <div class="col" style="padding:0px">
                                <base-button type="primary" style="margin:0px;">
                                    <i class="fa fa-search"></i>
                                </base-button>
                            </div>
                        </div>
                        <div class="new-categoy" style="margin-left: -30px;">
                            <div class="cat_lists">
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/audi/" class="hover"><img alt="Audi" src="//sale-thailand.com/wp-content/uploads/2018/06/audi-min-e1531170691634.png" title="Audi" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/mercedes-benz/" class="hover"><img alt="Mercedes-Benz" src="//sale-thailand.com/wp-content/uploads/2018/06/Mercedes_Benz_Logo_11-e1531170616288.jpg" title="Mercedes-Benz" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/toyota/" class="hover"><img alt="Toyota" src="//sale-thailand.com/wp-content/uploads/2018/06/toyota-e1531169638475.png" title="Toyota" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/honda/" class="hover"><img alt="Honda" src="//sale-thailand.com/wp-content/uploads/2018/06/honda-e1531170236493.png" title="Honda" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/bmw/" class="hover"><img alt="BMW" src="//sale-thailand.com/wp-content/uploads/2018/05/bmw-e1531170905534.jpg" title="BMW" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/nissan/" class="hover"><img alt="Nissan" src="//sale-thailand.com/wp-content/uploads/2018/05/nissan-1-e1531170333548.png" title="Nissan" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/jaguar/" class="hover"><img alt="Jaguar" src="//sale-thailand.com/wp-content/uploads/2018/06/jaguar-e1531170973951.png" title="Jaguar" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/lexus/" class="hover"><img alt="Lexus" src="//sale-thailand.com/wp-content/uploads/2018/06/Lexus-e1531170830792.png" title="Lexus" width="100" height="100"></a>
                                </div>
                                <div class="c-icon">
                                    <a href="https://sale-thailand.com/ad_category/porsche/" class="hover"><img alt="PORSCHE" src="//sale-thailand.com/wp-content/uploads/2018/06/Porsche-e1531170511701.jpg" title="PORSCHE" width="100" height="100"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        
        
    </div>
    
</template>
<script>
import { mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbCardText, mdbView, mdbMask, mdbBtn} from 'mdbvue';
export default {
  name: "job",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbCardText,
    mdbView,
    mdbMask,
    mdbBtn
  }
};
</script>
<style>
.new-categoy {
	position:relative;
	overflow:hidden;
	z-index:3;
	text-align: center;
	padding: 30px 0;
}

.new-categoy .cat_lists {
	margin:0 auto;
	display:table;
}

.c-icon {
    background: #fff none repeat scroll 0 0;
    border-radius: 100%;
    box-shadow: 0 20px 10px -7px rgba(0, 0, 0, 0.15);
    height: 110px;
    transition: all 0.2s ease-in-out 0s;
    width: 110px;
	position:relative;
	float:left;
	margin-right: 5px;
}
.c-icon  a > img {
    position: relative;
	padding: 10px;
}
.column {
  float: left;
  width: 33.33333%;
}
</style>