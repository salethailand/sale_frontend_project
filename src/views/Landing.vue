<template>
    <div>
        <div class="position-relative" style="    background: rgba(0, 0, 0, 0) url(img/aerial-2178705_1920-min-e1531161335683.jpg) no-repeat scroll center center / cover">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0" style="text-align: center;">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="display-3  text-white">Welcome to Sale Thailand</h1>
                                <p class="lead  text-white">Online marketplace of second hand, Vehicles, Real Estate, Electronics, Jobs, Services and more</p>
                                <div class="row">
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
                                    <div style="width:25%margin-left:-45px;">
                                        <base-button tag="a"
                                                    href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                    class="mb-3 mb-sm-0"
                                                    type="info"
                                                    icon="fa fa-code">
                                            Search Now
                                        </base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0" style="padding-bottom: 0rem;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-16">
                        <div class="row row-grid">
                            <div class="col-lg-3">
                                <a href="http://127.0.0.1:8080/Vehicle" class="hover">
                                    <card class="border-0" hover shadow body-classes="py-5" style="height=500px;">
                                        <img src="/img/cars-300x300.jpg" width='114' height='114'>
                                        <h6 class="text-primary text-uppercase">>Vehicles</h6>
                                        <p class="description mt-3">Car / car, bus / minibus, motorbike / Big Bite, van, truck, truck and bus.</p>
                                    </card>
                                </a>
                            </div>
                            <div class="col-lg-3">
                                <a href="http://127.0.0.1:8080/RealEstate" class="hover">
                                    <card class="border-0" hover shadow body-classes="py-5">
                                        <img src="/img/REAL-ESTATE-300x300.jpg" width='114' height='114'>
                                        <h6 class="text-success text-uppercase">>Real Estate</h6>
                                        <p class="description mt-3">land for sale, commercial building, land for rent, rental business, sale business, farm, apartment / house
                                            / condo for sale, apartment / house / condo for rent, share house / apartment part</p>
                                    </card>
                                </a>
                            </div>
                            <div class="col-lg-3">
                                <a href="http://127.0.0.1:8080/Job" class="hover">
                                    <card class="border-0" hover shadow body-classes="py-5">
                                        <img src="/img/งาน-300x300.jpg" width='114' height='114'>
                                        <h6 class="text-warning text-uppercase">>Jobs / Find a job</h6>
                                        <p class="description mt-3">Banking / finance, Construction, Marketing, Manufacturing, Education,
                                            Transportation & Logistics, Sales, CS & Business Devpt Business development, sales / marketing,
                                            service work, hotel jobs, computer jobs, IT jobs, banking, finance, administrative, human, resoures,
                                            accounting, part-time jobs (Part-time), See more
                                        </p>
                                    </card>
                                </a>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="/img/electronics-300x300.jpg" width='114' height='114'>
                                    <h6 class="text-warning text-uppercase">>Second hand</h6>
                                    <p class="description mt-3">Water sports and extreme, collectibles / souvenirs, 
                                        tobacco products, mobile, health and beauty, Bluetooth stereo and, car accessories, 
                                        medical equipment, kitchenware, office supplies, electrical appliances, miscellaneous, 
                                        Furniture, mother and child
                                    </p>
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="/img/computer-300x300.jpg" width='114' height='114'>
                                    <h6 class="text-warning text-uppercase">>Electronics</h6>
                                    <p class="description mt-3">Other electronic devices, cameras / digital camera / film cameras, home entertainment,
                                        computers, electronic car, phones, secondhand refrigerators
                                    </p>
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="/img/worker-300x300.jpg" width='114' height='114'>
                                    <h6 class="text-warning text-uppercase">>Services</h6>
                                    <p class="description mt-3">Education / Academic, Design, Medicalm Moving / Moving ofiice,
                                         Food Delivery / Delivery
                                    </p>
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="/img/PETS-300x300.jpg" width='114' height='114'>
                                    <h6 class="text-warning text-uppercase">>Animals / Pets</h6>
                                    <p class="description mt-3">Birds, Fish, Dogs, Cats</p>
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="/img/watches-300x300.jpg" width='114' height='114'>
                                    <h6 class="text-warning text-uppercase">>Fashion</h6>
                                    <p class="description mt-3">Bags, Watches & jewelery, shoes, jewelry, clothes for men,
                                        clothes for wemen, and cosmetics
                                    </p>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <ecom-page></ecom-page>
            </div>
        </section> -->
        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <carousel :perPageCustom="[[768, 2], [1024, 3]]" :scrollPerPage="false" :autoplay="true" :navigationEnabled="true" :paginationEnabled="true">
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-43-360x300.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                            </card>
                            </div>
                        </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-43-360x300.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                    <slide>
                        <div>
                            <card class="border-2">
                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                            <p class="description mt-3">Bags, Watches
                            </p>
                        </card>
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>
        
        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 card border-0 shadow">
                        <h4 class="h1-responsive font-weight-bold text-center my-5">Most Visited</h4>
                        <div class="row">
                            <div class="col-sm-3">
                                <span><img src="/img/most/realestate.jpg" width='114' height='114'></span>
                                <span><h6>Real estate</h6></span>
                            </div>
                            <div class="col-sm-3">
                                <span><img src="/img/most/animal.jpg" width='114' height='114'></span>
                                <span><h6>Animals / Pets</h6></span>
                             </div> 
                             <div class="col-sm-3">
                                <span><img src="/img/most/car_model.png" width='114' height='114'></span>
                                <span><h6>Car</h6></span>
                             </div>    
                             <div class="col-sm-3">
                                <span><img src="/img/most/cloth.png" width='114' height='114'></span>
                                <span><h6>Fashion</h6></span>
                             </div>                    
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <span><img src="/img/most/Education.png" width='114' height='114'></span>
                                <span><h6>Education / Academic</h6></span>
                            </div>
                            <div class="col-sm-3">
                                <span><img src="/img/most/motorcycle.png" width='114' height='114'></span>
                                <span><h6>Motorcycles / Big Bytes</h6></span>
                            </div>               
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <card class="border-0" shadow body-classes="py-5">
                            <div class="row">
                                <div class="col-sm-10">
                                    <h6>Feature car</h6>
                                </div>
                                <div class="col-sm-2">
                                    
                                </div>
                            </div>
                            <carousel :scrollPerPage="false" :autoplay="true" :navigationEnabled="true" :perPage="1" :paginationEnabled="false">
                                <!-- <div v-html="buildSlideMarkup(5)"></div> -->
                                <slide>
                                    <div>
                                        <card class="border-2">
                                        <img src="/img/1-49-313x234.jpg" style="width:200px">
                                        <h6 class="text-warning text-uppercase">>Fashion</h6>
                                        <p class="description mt-3">Bags, Watches
                                        </p>
                                    </card>
                                    </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-43-360x300.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                    <slide>
                                        <div>
                                            <card class="border-2">
                                            <img src="/img/1-49-313x234.jpg" style="width:200px">
                                            <h6 class="text-warning text-uppercase">>Fashion</h6>
                                            <p class="description mt-3">Bags, Watches
                                            </p>
                                        </card>
                                        </div>
                                    </slide>
                                </carousel>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <allads-page></allads-page>
                    </div>
                    <div class="col-sm-4">
                        <!-- <allads-page></allads-page> -->
                        <!-- <lastestads-page></lastestads-page><magazine-page></magazine-page> -->
                        <lastestads-page></lastestads-page>
                    </div>
                
                </div>
            </div>
        </section>
        <section class="section section-lg" style= "padding-top: 0rem; padding-bottom: 0rem;">
            <div class="container">
                <blog-page></blog-page>
            </div>
        </section>
        
    </div>
</template>


<script>



export default {
  name: "home",
  components: {
  },
  methods:{
      buildSlideMarkup : function(count) {
            let slideMarkup = '';
        for (var i = 1; i <= count; i++) {
            slideMarkup += '<slide><img src="/img/watches-300x300.jpg" width="114" height="114"><h6 class="text-warning text-uppercase">>Fashion</h6>    <p class="description mt-3">AAA</p></slide>'
        }
        return slideMarkup;
        }
  },
  created: function(){
        var uri = "http://127.0.0.1:8000/api/cars";
        try{
            this.axios.get(uri).then((response)=>{
                // console.log(response.data);
                alert(response.data.data[0]['carcompany']);
            });
        }
        catch{
            alert(2);
        }
  }
};
</script>
<style >
    /* .VueCarousel-slide {
    position: relative;
    background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
    }

    .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }  */
</style>