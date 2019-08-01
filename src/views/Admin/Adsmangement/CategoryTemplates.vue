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
            <b-form-group v-bind:label="'Name'" label-for="basicUsername" :label-cols="3" :horizontal="true">
                <b-form-input id="basicUsername" type="text" v-model="formData.name" autocomplete="name" placeholder="Name"></b-form-input>
            </b-form-group>
            <b-form-group v-bind:label="'Explanation'" label-for="basicemail" :label-cols="3" :horizontal="true">
                <b-form-input id="basicemail" type="text" v-model="formData.slug" placeholder="Slug">
                </b-form-input>
            </b-form-group>
            <b-form-group v-bind:label="'Slug'" label-for="basicSurname" :label-cols="3" :horizontal="true">
                <b-form-input id="basicSurname" type="text" v-model="formData.explanation" autocomplete="name" placeholder="explanation"></b-form-input>
            </b-form-group>
            <input type="button" @click="additemRow()"/>
            <button class="btn btn-primary btn-sm" @click="additemRow()">
               <i class="fa fa-plus"></i>Add New
            </button>
            <v-client-table :columns="itemcolumns" :data="formData.item" :options="itemoptions" :theme="theme" id="itemdataTable" >
                <div slot="fieldname" slot-scope="props">
                    <input :value="props.row.fieldname"/>
                </div>
                <div slot="selectoption" slot-scope="props">
                    <input :value="props.row.selectoption"/>
                </div>
                <div slot="values" slot-scope="props">
                    <input :value="props.row.values"/>
                </div>
                <div slot="action" slot-scope="props">
                    <div class="btn-group">
                        <button class="btn btn-warning btn-sm" @click="deleteitemRow(props.row, props.index)">
                            <i class="fa fa-trash" :style="{color: '#ffffff'}"></i>
                        </button>
                        <button class="btn btn-primary btn-sm" @click="edititemRow(props.row)">
                            <i class="fa fa-edit"></i> 
                        </button>
                    </div>
                </div>
            </v-client-table>
            <div slot="footer" id="footer">
                <b-row>
                        <b-button type="button" id="btnup" class="btn-block" size="sm" variant="primary"  :hidden="CreateisDisabled"  @click="createitemForm">{{'create'}}</b-button>
                        <b-button type="button" size="sm" id="btnsa" class="btn-block" variant="success" :hidden="UpdateisDisabled" @click="saveitemForm">{{'update'}}</b-button>
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
            isitemedit:false,
            itemcolumns: ["itemid", "fieldname", "selectoption", "values", "action"],
            itemoptions: {
                itemheadings: {
                    fieldname: "Fieldname",
                    selectoption: "Select Option",
                    values: "Values",
                    action: "Action"
                },
                filterable:false
            },
            CreateisDisabled : false,
            UpdateisDisabled:true,
            projects: [],
            selectedProjects: [],
            isEdit: false,
            formData: {
                templateid: "",
                name: "",
                explanation: "",
                slug: "",
                item: []
            },
            isOpen: 0,
            columns: ["name", "explanation", "slug", "number", "action"],
            data: [],
            options: {
            headings: {
                name:"Name",
                explanation: "Explanation",
                slug: "Slug",
                number: "Number",
                action: "Action"
            },
            filterable: ["name", "explanation", "slug"],
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
        var uri = Api_Base_Url + `/templates`;
            // this.selectedProjects.map(i =>{
            //     _this.formData.preferred = i.value
            // })
            // console.log(this.formData)
            
            this.axios.get(uri).then(res => {
                _this.data = res.data;
                this.$toastr.success('success', 'Successful update')
            }, err => {
                this.$toastr.error('warnning', 'saving user failed...')
        })

        // this.onChangeLanguage();
    },
    // mounted: function () {
    //     this.$root.$on('onChangeLanguage', () => {
    //         this.onChangeLanguage();
    //     })
    // },
    methods: {
        saveitemForm() {
            let _this = this;
            var uri = Api_Base_Url + `/users/update/${this.formData._id}`;
            this.$http.post(uri, this.formData).then(res => {
                if (res.data.code) {
                    var data = _this.data.map((row, idx) => {
                        if (row.userid == _this.formData._id) {
                            row = _this.formData;
                        }
                        return row;
                    })
                    _this.data = data;
                    this.$toastr.success('Successful update', 'success')
                }
            }, err => {
                this.$toastr.error('saving user failed...', 'warnning')
            })
        },
        HandleRightPanel() {
            this.formData = {
                templateid: "",
                name: "",
                explanation: "",
                slug: "",
                item: []
            },
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
            var uri = Api_Base_Url + `/users/delete/${row._id}`;
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
            this.formData.item.push [{
                fieldname: '',
                selectoption: '',
                values: ''
            }];
        },
        edititemRow() {
            
        },
        additemRow(){
            this.formData.item.push [{
                fieldname: '',
                selectoption: '',
                values: ''
            }]
        },
        createitemForm() {
            let _this = this;
            var uri = Api_Base_Url + `/users/create`;
            // this.selectedProjects.map(i =>{
            //     _this.formData.preferred = i.value
            // })
            // console.log(this.formData)
           
            this.axios.post(uri, this.formData).then(res => {
                _this.formData.userid = res.data[0]['_id'];
                _this.data.push(_this.formData);
                this.$toastr.success('success', 'Successful update')
            }, err => {
                this.$toastr.error('warnning', 'saving user failed...')
            })
        },
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
