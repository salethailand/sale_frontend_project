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
                <div class="col-md-7 col-xs-12 col-sm-12">
                    <div class="descs-box"> 
                        <a class="modern-version-block-cat" href="#"><font style="vertical-align: inherit;">Real Estate </font></a> 
                        <a class="modern-version-block-cat" href="#"><font style="vertical-align: inherit;">Apartments / Houses / Condos for Sale</font></a>
                        <h4>
                            <font style="vertical-align: inherit;">3 storey townhome for sale, Supalai Ville Village </font>
                            <font style="vertical-align: inherit;">Soi Rattanathibet 18, Khae Rai district (3.7 million)</font>
                        </h4>
                        <div class="modern-version-block-info">
                            <div class="pull-left  post-author"> 
                                <a href="http://127.0.0.1:8080/UserProfile"> <img src="/img/icons/user-icon-min-e1526549526850.jpg" alt="profile picture"></a>
                                <font style="vertical-align: inherit;">By </font>
                                <a href="#"><font style="vertical-align: inherit;">Mr. Phairot Phromphanjai</font></a>
                                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Posted </font></font>
                                <a href="javascript:void(0);"><font style="vertical-align: inherit;">June 18, 2019 </font></a> 
                                <span class="spliator"><font style="vertical-align: inherit;">-</font></span>
                                <font style="vertical-align: inherit;"> Visits </font>
                                <a href="javascript:void(0);"><font style="vertical-align: inherit;">55</font></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-xs-12 col-sm-12">
                    <div class="modern-version-block-btnz">
                        <div class="full-width new-price-tag">
                            <h3><font style="vertical-align: inherit;">฿ 3,700,000</font></h3>
                        </div>
                        <div class="ui-group-buttons"> 
                            <a href="#" class="btn btn-success" role="button"> 
                                <span class="glyphicon glyphicon-floppy-disk"></span>
                                <font style="vertical-align: inherit;">Send a message to the seller </font>
                            </a> 
                                <a href="javascript:void(0);" class="btn btn-default" role="button" id="show_ph_num" data-ph-num="081 5474760"> <span class="flaticon-technology-29"></span> 
                                <span><font style="vertical-align: inherit;"> contact seller </font></span> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="modern-version-block-tabs">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <ul>
                            <li>
                                <a class="page-scroll" href="#description"><i class="fa fa-file-text"></i><font style="vertical-align: inherit;"> Nature</font></a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#map-location"><i class="fa fa-location-arrow"></i><font style="vertical-align: inherit;"> Location map</font></a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#bids"><i class="fa fa-gavel "></i><font style="vertical-align: inherit;"> Quote</font></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                        <ul>
                            <li>
                                <a data-toggle="modal" data-target=".share-ad"> <i class="fa fa-share-alt"></i> <span class="hidetext"><font style="vertical-align: inherit;">Share</font></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" id="ad_to_fav" data-adid="57510"> <i class="fa fa-star"></i> <span class="hidetext"><font style="vertical-align: inherit;">Like</font></span> </a>
                            </li>
                            <li>
                                <a data-target=".report-quote" data-toggle="modal"> <i class="fa fa-warning"></i> <span class="hidetext"><font style="vertical-align: inherit;">Report</font></span> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-xs-12 col-sm-12">
                    <lingallery :width="width" :height="height" :items="items"/>
                    <div class="short-features">
                        <div class="heading-panel">
                            <h3 class="main-title text-left"><font style="vertical-align: inherit;"> Nature</font></h3>
                        </div>
                        <div class="col-sm-3 col-md-3 col-xs-12 no-padding"> 
                            <span><strong><font style="vertical-align: inherit;">Price</font></strong><font style="vertical-align: inherit;"> :</font></span>
                            <font style="vertical-align: inherit;">฿ 3,700,000</font>
                        </div>
                        <div class="col-sm-3 col-md-3 col-xs-12 no-padding"> 
                            <span><strong><font style="vertical-align: inherit;">Date</font></strong><font style="vertical-align: inherit;"> :</font></span>
                            <font style="vertical-align: inherit;"> June 18, 2019</font>
                        </div>
                        <div class="col-sm-3 col-md-3 col-xs-12 no-padding"> 
                            <span><strong><font style="vertical-align: inherit;">Condition</font></strong><font style="vertical-align: inherit;"> :</font></span>
                            <font style="vertical-align: inherit;"> Used</font>
                        </div>
                        <div class="col-sm-3 col-md-3 col-xs-12 no-padding"> 
                            <span><strong><font style="vertical-align: inherit;">Bedroom</font></strong><font style="vertical-align: inherit;"> :</font></span>
                            <font style="vertical-align: inherit;"> 3 bedrooms</font>
                        </div>
                        <div class="col-sm-3 col-md-3 col-xs-12 no-padding"> 
                            <span><strong><font style="vertical-align: inherit;">Size (m2)</font></strong><font style="vertical-align: inherit;"> :</font></span>
                            <font style="vertical-align: inherit;"> 18</font>
                        </div>
                        <div class="col-sm-12 col-md-12 col-xs-12 no-padding"> 
                            <span><strong><font style="vertical-align: inherit;">Location</font></strong><font style="vertical-align: inherit;"> :</font></span>
                            <font style="vertical-align: inherit;"> 119/831 Ville Soi 5, Tambon Bang Kraso, Amphoe Mueang Nonthaburi, Chang Wat Nonthaburi 11000 Thailand</font>
                        </div>
                    </div>
                    <div class="desc-points">
                        <p><font style="vertical-align: inherit;">(Owner sells Due to move to a single house in the same village) 3 bedrooms with air conditioners, 3 air-conditioners, parquet floors, curtains, 3 bathrooms with water heater American Standard sanitary ware, 1 dressing room, 1 living room, 1 kitchen with counter, gas stove, HAFALE, hood, roof, 2-storey kitchen with ventilator, backyard, garage (2 car parking spaces in 1 house, 1 house in front of the village fence There is no house opposite the water, not flooding, away from the MRT Station, Government Center, Nonthaburi Province, 300 meters near The Mall Ngamwongwan, Pantip, Ngamwongwan, Lotus, Khae Rai, Central Rattanathibet. Esplanade Reynolds Big Wet Water Aerodrome. Chest HospitalPhranangklao Hospital Nonthavej Hospital can enter 2 ways (Soi Rattanathibet 18 and Tiwanon 27)</font>
                        </p>
                    </div>
                    <hr>
                    <!-- <google-map :name="name"></google-map> -->
                    <div>
                    <h2>Search and add a pin</h2>
                    <label>
                        <gmap-autocomplete
                        @place_changed="setPlace">
                        </gmap-autocomplete>
                        <button @click="addMarker">Add</button>
                    </label>
                    <br/>

                    </div>
                    <br>
                    <gmap-map
                    :center="center"
                    :zoom="8"
                    style="width:100%;  height: 400px;"
                    >
                        <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            @click="center=m.position"
                        ></gmap-marker>
                    </gmap-map>




                    <br>   
                    <div>
                        <b-nav tabs>
                            <b-nav-item active>Order</b-nav-item>
                        </b-nav>
                        <b-form inline>
                            <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"></b-input>
                            <b-input id="inline-form-input-username"></b-input>
                            <b-button variant="primary">Send</b-button>
                            <b-form-text id="password-help-block">
                                * Your phone number will be displayed for the author's post.
                            </b-form-text>
                        </b-form>
                    </div>
                    
                </div>
                <div class="col-md-4 col-xs-12 col-sm-12">
                    <div class="card">
                        <b-card no-body>
                            <b-tabs pills card>
                            <b-tab title="Bid statistics" active>
                                <div>

                                </div>
                            </b-tab>
                            <b-tab title="Highest Bidder"><b-card-text>No Bid</b-card-text></b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                    <br>
                    <b-card header="Safety tips for agreements">
                        <p class="card-text mt-2">1. Use a safe place to meet the seller</p>
                        <p class="card-text mt-2">2. Avoid cash transactions </p>
                        <p class="card-text mt-2">3. Beware of unrealistic offers</p>
                    </b-card>
                    <br>
                    <b-card header="Lastest Ads">
                        <div class="row">
                            <div class="col-sm-4">
                                <b-img src="/img/1-49-400x300.jpg" fluid alt="Fluid image"></b-img>
                            </div>
                            <div class="col-sm-8">
                                <p>asdfasdfasdfasdfasdf</p>
                                <p>asdfasdfasdfasdfasdf</p>
                                <p>asdfasdfasdfasdfasdf</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-4">
                                <b-img src="/img/1-48-400x300.jpg" fluid alt="Fluid image"></b-img>
                            </div>
                            <div class="col-sm-8">
                                <p>asdfasdfasdfasdfasdf</p>
                                <p>asdfasdfasdfasdfasdf</p>
                                <p>asdfasdfasdfasdfasdf</p>
                            </div>
                        </div>
                    </b-card>
                    <br>
                    <b-card header="Featured Ads">
                    </b-card>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    
    import Lingallery from 'lingallery';
    export default {
        data: function () {
            return {
                name: 'map',
                width: 600,
                height: 400,
                items: [{
                    src: '/img/1-49-400x300.jpg',
                    thumbnail: '/img/1-49-400x300.jpg',
                    caption: 'Some Caption'
                    },
                    {
                    src: '/img/1-49-313x234.jpg',
                    thumbnail: '/img/1-49-313x234.jpg'
                    }
                ],
                // default to Montreal to keep it simple
                // change this to whatever makes sense
                center: { lat: 15.8700, lng: 100.9925 },
                markers: [],
                places: [],
                currentPlace: null
            };
        },
        mounted: function () {
            this.geolocate();
        },
        methods: {
            // receives a place object via the autocomplete component
            setPlace(place) {
            this.currentPlace = place;
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({ position: marker });
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
            }
        },
        components: {
            
            Lingallery
        }

    }
</script>
<style scoped>
.modern-version-block-cat {
    background-color: #adb5bd;
    border-radius: 0;
    color: #fff;
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    height: 35px;
    letter-spacing: 0;
    line-height: 23px;
    overflow-wrap: normal;
    padding: 8px 10px;
    position: relative;
    text-transform: uppercase;
    transition: all .3s ease 0s;
    white-space: nowrap;
    margin-bottom: 10px;
}
.modern-version-block-cat::after {
    border-left: 0;
    border-right: 10px solid transparent;
    border-top: 10px solid #adb5bd;
    bottom: -9px;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    transition: all .3s ease 0s;
    width: 0;
}
.modern-version-block-tabs {
    margin-bottom: 20px;
}
.modern-version-block-tabs ul li {
    color: #999;
    display: inline-block;
    font-weight: 500;
    margin-right: 30px;
}
.modern-version .sidebar .widget {
    margin-bottom: 20px;
}
</style>