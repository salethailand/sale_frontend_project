
<template>
    <div>
        <div class="position-relative" style="    background: rgba(0, 0, 0, 0) url(img/background/vehicle_back.jpg) no-repeat scroll center center / cover">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0" style="text-align: center;">
                        <p class="lead  text-white">What are you looking for?</p>
                        <div class="row" style="margin-left:60px;">
                            <div style="width:25%">
                                <base-input alternative placeholder="What are you looking for?">
                                </base-input>
                            </div>
                            <div style="width:25%">
                                <base-input alternative placeholder="Locations" disabled>
                                </base-input>
                            </div>
                            <div style="width:25%">
                                <base-input alternativep placeholder="Select Catgory" :valid="true">
                                </base-input>
                            </div>
                            <div style="width:25%; text-align:left;">
                                <base-button style="margin:0px;">
                                    Search Now
                                </base-button>
                            </div>
                        </div>
                        <div class="new-categoy">
                            <div class="cat_lists">
                                <div class="cat-icon">
                                    <a href="#" class="hover">
                                        <img alt="Car" src="/img/icons/cars-icon.024f099d.png" title="Car" width="100" style="margin-top: 40px;">
                                    </a>
                                </div>
                                <div class="cat-icon" style="margin-left: 100px;">
                                    <a href="#" class="hover">
                                        <img alt="Motorcycles" src="/img/icons/motorcycles-icon.0dccdb0c.png" title="Motorcycles" width="100" style="margin-top: 20px;">
                                    </a>
                                </div>
                                <div class="cat-icon" style="margin-left: 100px;" >
                                    <a href="#" class="hover">
                                        <img alt="Trucks" src="/img/icons/trucks-icon.176d051e.png" title="Trucks" width="100" style="margin-top: 40px;">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <h2 class="h1-responsive font-weight-bold text-center my-5">Featured Vehicles Ads</h2>
                <carousel :perPageCustom="[[768, 2], [1024, 3]]" :scrollPerPage="false" :autoplay="true" :navigationEnabled="true" :paginationEnabled="true">
                    <slide>
                        <div class="slide-element">
                            <img src="/img/1-49-313x234.jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">Toyota Vios 1.5e at</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>Toyota VIOS Car Vehicle</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>Pak Kret, Pak Kret Subdistrict, Pak Kret District</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">฿350,000</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-element">
                            <img src="/img/1-313x234(1).jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">Toyota Vios 1.5e at</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>Toyota VIOS Car Vehicle</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>Pak Kret, Pak Kret Subdistrict, Pak Kret District</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">฿350,000</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-element">
                            <img src="/img/1-49-313x234.jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">Toyota Vios 1.5e at</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>Toyota VIOS Car Vehicle</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>Pak Kret, Pak Kret Subdistrict, Pak Kret District</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">฿350,000</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-element">
                            <img src="/img/1-313x234.jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">Toyota Vios 1.5e at</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>Toyota VIOS Car Vehicle</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>Pak Kret, Pak Kret Subdistrict, Pak Kret District</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">฿350,000</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-element">
                            <img src="/img/1-49-313x234.jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">Toyota Vios 1.5e at</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>Toyota VIOS Car Vehicle</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>Pak Kret, Pak Kret Subdistrict, Pak Kret District</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">฿350,000</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-element">
                            
                            <img src="/img/1-49-313x234.jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">Toyota Vios 1.5e at</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>Toyota VIOS Car Vehicle</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>Pak Kret, Pak Kret Subdistrict, Pak Kret District</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">฿350,000</p>
                            </div>
                        
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>
        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <h2 class="h1-responsive font-weight-bold text-center my-5">Recent Vehicle Ads</h2>
                <carousel :perPageCustom="[[768, 2], [1024, 3]]" :scrollPerPage="false" :autoplay="true" :navigationEnabled="true" :paginationEnabled="true">
                    <slide v-for="recentdata in recentdatas">
                        <div class="slide-element">
                            <img src="/img/1-49-313x234.jpg">
                            <div class="stripe">
                                <h6 class="slide-font-white" style="margin-bottom:3px;">{{ recentdata.title }}</h6>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-th-large fa-fw"></i>{{ recentdata.location }}</p>
                                <p class="slide-font-white" style="margin-top:-5px; margin-bottom:0px; font-size:12px;"><i class="fa fa-map-marker fa-fw"></i>{{ recentdata.location }}</p>
                                <p class="slide-font-white" style="margin-top:-5px; font-size:17px;">{{ recentdata.price }}</p>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>

        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <h2 class="h1-responsive font-weight-bold text-center my-5">All Vehicle Ads</h2>
                <div class="row">
                    <div v-for="AllVehicledata in AllVehicledatas" class="col-sm-3">
                    <div class="polaroid">
                            <a href="http://127.0.0.1:8080/AdsInsight" class="hover"><img src="/img/1-49-313x234.jpg" alt="Norway" style="width:100%"></a>
                            <div class="card-ability">
                                <h6 style="margin-left:15px;font-weight: bold;color: #7070d6;font-size:20px;">{{ AllVehicledata.title }}</h6>
                                <div class="">
                                    <div class="row" style="margin:0px;">
                                        <div class="col-sm-6" style="padding-right:0px;">
                                            <p style="font-weight: bold; font-size:15px;">
                                            <i class="fa fa-calendar"></i> {{ AllVehicledata.model }}</p>
                                            <p style="font-weight: bold; font-size:15px;">
                                            <img src="/img/icons/Car_Engine_-_Dashboard_Lights_68-512.png" alt="Smiley face" width="20" height="20">
                                            2,000 CC</p>
                                            <p style="font-weight: bold; font-size:15px;"><img src="/img/icons/27746.svg" alt="Smiley face" width="20" height="20">
                                            Petrol</p>
                                        </div>
                                        <div class="col-sm-6" style="padding-right:0px;">
                                            <p style="font-weight: bold; font-size:15px;"><img src="/img/icons/Speedometer-595b40b85ba036ed117dbb31.svg" alt="Smiley face" width="20" height="20">
                                            5,250KM</p>
                                            <p style="font-weight: bold; font-size:15px;"><img src="/img/icons/fef0c563c39f2746c35604e969ffe3ef-bmw-car-front-view-silhouette-by-vexels.png" alt="Smiley face" width="20" height="20">
                                            SUV</p>
                                            <p style="font-weight: bold; font-size:15px;"><img src="/img/icons/27746.svg" alt="Smiley face" width="20" height="20">
                                            Automatic</p>
                                        </div>
                                    </div>
                                </div>
                                <p style="margin-left:15px;font-weight: bold; font-size:20px;color: #7070d6;">
                                            ฿148,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                
            <div>
                <base-pagination :page-count="10" v-model="pagination.default" align="center"></base-pagination>
            </div>                
        </section>

    </div>
    
</template>
<script>
import { mdbIcon, mdbContainer, mdbRow, mdbCol, mdbCardGroup, mdbCardBody, mdbView, mdbCard, mdbBtn, mdbCardText, mdbCardTitle,mdbCardImage, mdbMask} from 'mdbvue';
export default {
  name: "vehiclecar",
  components: {
      mdbContainer,
      mdbRow,
      mdbCardGroup,
      mdbCardBody,
      mdbView,
      mdbCard,
      mdbBtn,
      mdbCardText,
      mdbCardTitle,
      mdbCardImage,
      mdbMask,
      mdbIcon,
      mdbCol
  },
  data(){
      return{

        pagination: {
                default: 1
        },
        Featuredatas:[
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            }
        ],
        recentdatas:[
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            }
        ],
        AllVehicledatas:[
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            },
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            },
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            },
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            },
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            },
            { 
            imageurl:'',
            title:'Toyota Vios 1.5e at',
            model:'2018',
            bodytype:'',
            gear:'',
            fueltype:'',
            engin:'',
            mileage:'',
            price:''
            }
        ]
      }
  }
};
</script>
<style>
.list-unstyled{
    padding-left:0;
    list-style:none;
}
.well{
    background-color: #fff;
    border: 1px solid #eaedef;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 30px;
    box-shadow: none;
}
.ad-listing{
    margin-bottom: 30px;
    padding: 0;
    position: relative;
}
.stripe{
    background-color: rgba(0,0,0,.7);
    position: absolute;
    bottom: 0rem;
    width: 97%;
    height: 30%;
}
.slide-element{
    padding:5px;
    float:left;
    position:relative;
}
.slide-font-white{
    color: white;
    margin-left:10px;
}
div.polaroid {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.cat-icon{
    background: #fff none repeat scroll 0 0;
    border-radius: 100%;
    -webkit-box-shadow: 0 20px 10px -7px rgba(0, 0, 0, 0.15);
    box-shadow: 0 20px 10px -7px rgba(0, 0, 0, 0.15);
    height: 110px;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    position: relative;
    float: left;
    margin-right: 5px;
    width: 110px;
}
.veichle-search{
    text-align: center;
}
</style>