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
    <div class="container">
      <form-wizard @on-complete="onComplete"
                        title=""
                       subtitle=""
                       :start-index="0"
                       color="#e67e22">
          <tab-content title="Advertising information" icon="ti-user">
            <label class="">Topic *</label>
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            <label class="">Categories * Choose the appropriate category for your ad. </label>
            
            <b-form-select id="maincategory" :plain="true" v-model="item2" @change="dipSubcategory(item2)">
                <option v-for="maincategorylist in maincategorylists" :key="maincategorylist['_id']" :value="maincategorylist['categoryname']">{{ maincategorylist['categoryname'] }}</option>
            </b-form-select>
                              
            <!-- <model-select :options="maincategorylists"
                                 v-model="item2"
                                 placeholder="select item2">
            </model-select> -->
          </tab-content>
          <tab-content title="Advertising details" icon="ti-settings">
            <label class="">Ad Type</label>
            <model-select :options="options2"
                                 v-model="item2"
                                 placeholder="select item2">
            </model-select>
            <label class="">Price Type</label>
            <model-select :options="options2"
                                 v-model="item2"
                                 placeholder="select item2">
            </model-select>
            <label class="">Price only</label>
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            <label class="">Youtube video links</label>
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            <label class="">Item condition</label>
            <model-select :options="options2"
                                 v-model="item2"
                                 placeholder="select item2">
            </model-select>
            <label class="">Product warranty</label>
            <model-select :options="options2"
                                 v-model="item2"
                                 placeholder="select item2">
            </model-select>
            <label class="">Click on the box below to add an ad image! Upload only jpg, png and jpeg files with a file size not exceeding 25MB.</label>
            <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="images"
                idUpload="myIdUpload"
                editUpload="myIdEdit"
                ></vue-upload-multiple-image>
            </div>
            <label class="">Tags  separated by commas(,)</label>
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            <div class="row">
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
              <div class="col-sm-3">
                <label class="">Form *</label>
                <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                </model-select>
              </div>
            </div>
            <b-form-group label="Accessories / ohter equipment">
              <b-form-checkbox
                v-for="option in options"
                v-model="selected"
                :key="option.value"
                :value="option.value"
                name="flavour-4a"
                inline
              >
                {{ option.text }}
              </b-form-checkbox>
            </b-form-group>
            <label class="">Ad Description Enter a long description</label>
            <vue-editor v-model="content"></vue-editor>
            <label class="">Order</label>
            <hr style="margin-top:0px; padding-top:0px;">
            <model-select :options="options2"
                                v-model="item2"
                                placeholder="select item2">
            </model-select>

          </tab-content>
          <tab-content title="User information" icon="ti-check">
            <div class="row">
              <div class="col-sm-6">
                <label class="">Your name</label>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
              </div>
              <div class="col-sm-6">
                <label class="">Mobile number</label>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
              </div>
            </div>
            <label class="">Address</label>
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            <br>
            <!-- <google-map :name="name"></google-map> -->
            <label class="">Drag the pin to pin the place.</label>
            <div class="row">
              <div class="col-sm-6">
                <label class="">Latitude</label>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
              </div>
              <div class="col-sm-6">
                <label class="">Longitude</label>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
              </div>
            </div>
            
          </tab-content>
      </form-wizard>
    </div>
</div>
</template>

<script>
  var Api_Base_Url = "http://127.0.0.1:8000/api";
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import { ModelSelect } from 'vue-search-select'
  import VueUploadMultipleImage from 'vue-upload-multiple-image'
  import { VueEditor } from "vue2-editor";
  
  import axios from 'axios'
  export default {
    components: {
      FormWizard,
      TabContent,
      ModelSelect,
      VueUploadMultipleImage,
      VueEditor
    },
    data () {
      return {
        name: 'map',
        content: "<h1>Some initial content</h1>",
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' },
          { text: 'Grape', value: 'grape' },
          { text: 'Grape', value: 'grape' },
          { text: 'Grape', value: 'grape' },
          { text: 'Grape', value: 'grape' },
          { text: 'Grape', value: 'grape' }
        ],
        options2: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' }
        ],
        item2: '',
        maincategorylists: [],
        subcategories:[]
      }
    },
    created: function() {
        let _this = this;
        var uri = Api_Base_Url + `/subcategory/getcategory`;
        this.$http.get(uri).then(res=>{
            this.maincategorylists = res.data;
        })
    },
    methods: {
      uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://gostore.gostore-api.test/api/items/upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    dataChange (data) {
      console.log(data)
    },
    limitExceeded(amount){
      console.log(amount)
    },
    onComplete: function(){
        alert('Yay. Done!');
    },
    dipSubcategory: function(data){
      let _this = this;
      var uri = Api_Base_Url + `/subcategory/getsubcategory/${data}`;
      this.$http.post(uri).then(res => {
          subcategories = res.data;
          this.$toastr.success('success', 'Successful update')
      }, err => {
          this.$toastr.error('warnning', 'saving user failed...')
      })
    }
  }
}
</script>
<style>
   .uploading-image{
     display:flex;
   }
 </style>