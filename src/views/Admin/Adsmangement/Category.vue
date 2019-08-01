<template>
<div class="animated animation-container">
    <b-card class="content">
        <b-card-header id="bbb">
            <a><i class="fa fa-pencil" @click="HandleRightPanel()" style=" margin-left:100%"></i></a>
        </b-card-header>
        <b-card-body>
          <v-client-table :columns="columns" :data="data" :options="options" :theme="theme" id="dataTable" class="table">
            <div slot="action" slot-scope="props">
                <div class="btn-group">
                    <button class="btn btn-warning btn-sm" @click="deleteRow(props.row, props.index)">
                        <i class="fa fa-trash" :style="{color: '#ffffff'}"></i>
                    </button>
                    <button class="btn btn-primary btn-sm" @click="editRow(props.row)">
                        <i class="fa fa-edit"></i>
                    </button>
                </div>
            </div>
          </v-client-table>
        </b-card-body>
    </b-card>
    <b-card id="sec" class="right-panel" :class="isOpen == 1 ? 'open' : ''">
        <b-form>
            <b-form-group v-bind:label="'Category Name'" label-for="categoryname" :label-cols="3">
                <b-form-input id="categoryname" type="text" v-model="formData.categoryname" placeholder="Category Name"></b-form-input>
            </b-form-group>
            <b-form-group v-bind:label="'Main Category'" label-for="maincategory" :label-cols="3">
                <b-form-select id="maincategory" :plain="true" v-model="formData.maincategory">
                    <option v-for="maincategorylist in maincategorylists" :key="maincategorylist['_id']" :value="maincategorylist['categoryname']">{{ maincategorylist['categoryname'] }}</option>
                </b-form-select>
            </b-form-group>
            <div slot="footer" id="footer">
                <b-row>
                    <b-button type="button" id="btnup" class="btn-block" size="sm" variant="primary"  :hidden="CreateisDisabled"  @click="createForm">{{'create'}}</b-button>
                    <b-button type="button" size="sm" id="btnsa" class="btn-block" variant="success" :hidden="UpdateisDisabled" @click="saveForm">{{'update'}}</b-button>
                </b-row>
            </div>
        </b-form>
    </b-card>
</div>
</template>

<script>
var Api_Base_Url = "http://127.0.0.1:8000/api";
import Multiselect from 'vue-multiselect'
export default {
    name: "DataTable",
    components: {
      Multiselect
    },
    data(){
        return{
            maincategorylists: [],
            CreateisDisabled : false,
            UpdateisDisabled:true,
            projects: [],
            selectedProjects: [],
            isEdit: false,
            formData: {
                categoryname: "",
                maincategory: "",
            },
            isOpen: 0,
            columns: ["categoryid", "categoryname", "maincategory", "action"],
            data: [],
            options: {
                headings: {
                    categoryname:"Category Name",
                    maincategory: "Main Category",
                    action: "Action"
                },
                sortable: ["categoryid"],
                filterable: ["categoryid", "categoryname", "maincategory"],
                pagination: {
                    chunk: 5,
                    edge: false,
                    nav: "scroll"
                }
            },
            theme: "bootstrap4",
            template: "default"
        }
        
    },
    created: function() {
        let _this = this;
        var uri = Api_Base_Url + `/subcategory`;
        this.$http.get(uri).then(res => {
            _this.data = res.data;
            this.$toastr.success('success', 'Successful update')
        }, err => {
            this.$toastr.error('warnning', 'saving user failed...')
        })
        uri = Api_Base_Url + `/subcategory/getcategory`;
        this.$http.get(uri).then(res=>{
            this.maincategorylists = res.data;
        })
    },
    // mounted: function () {
    //     this.$root.$on('onChangeLanguage', () => {
    //         this.onChangeLanguage();
    //     })
    // },
    methods: {
        saveForm() {
            let _this = this;
            var uri = Api_Base_Url + `/subcategory/update/${_this.formData._id}`;
            this.$http.post(uri, _this.formData).then(res => {
                var data = _this.data.map((row, idx) => {
                    if (row._id == _this.formData._id) {
                        row = _this.formData;
                    }
                    return row;
                })
                _this.data = data;
                this.$toastr.success('Successful update', 'success')
            }, err => {
                this.$toastr.error('saving user failed...', 'warnning')
            })
        },
        HandleRightPanel() {
            this.formData = {
                categoryid: "",
                categoryname: "",
                maincategory: ""
            }
            var uri = Api_Base_Url + `/subcategory/getcategory`;
            this.$http.get(uri).then(res=>{
                this.maincategorylists = res.data;
            })
            this.CreateisDisabled = false;
            this.UpdateisDisabled = true;
            let _this = this
            switch (this.isOpen) {
                case 0:
                    _this.isOpen = 1;
                    break;
                case 1:
                    _this.isOpen = 2;
                    break;
            }
        },
        deleteRow(row, idx) {
            let _this = this;
            var uri = Api_Base_Url + `/subcategory/delete/${row._id}`;
            this.$http.delete(uri).then(res => {
                _this.data.splice(idx-1, 1);
                this.$toastr.success('success', 'Successful delete')
            }, err => {
                this.$toastr.error('Removing user failed...', 'warnning')
            })
        },
        editRow(row) {
            this.CreateisDisabled = true;
            this.UpdateisDisabled = false;
            this.isOpen = true;
            this.formData = row;
        },
        createForm() {
            let _this = this;
            var uri = Api_Base_Url + `/subcategory/create`;
            this.$http.post(uri, this.formData).then(res => {
                _this.formData._id = res.data['_id'];
                _this.data.push(_this.formData);
                this.$toastr.success('success', 'Successful update')
            }, err => {
                this.$toastr.error('warnning', 'saving user failed...')
            })
        },
        // onChangeLanguage() {
        //     this.options.headings.username = this.$ml.get('username')
        //     this.options.headings.surname = this.$ml.get('surname')
        //     this.options.headings.iduser = this.$ml.get('userid')
        //     this.options.headings.name = this.$ml.get('name')
        //     this.options.headings.username = this.$ml.get('username')
        //     this.options.headings.email = this.$ml.get("email")
        //     this.options.headings.password = this.$ml.get("password")
        //     this.options.headings.role = this.$ml.get("role")
        //     this.options.headings.preferred = this.$ml.get("preferred")
        //     this.options.headings.homepage = this.$ml.get("homepage")
        //     this.options.headings.action = this.$ml.get("action")
        // }

    },
      
};
</script>

<style>
.usertable td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
