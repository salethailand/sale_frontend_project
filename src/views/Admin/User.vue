<template>
<div class="animated animation-container">
    <b-card class="content">
        <b-card-header id="bbb">
            <a><i class="fa fa-pencil" @click="HandleRightPanel()" style=" margin-left:100%"></i></a>
        </b-card-header>
        <b-card-body>
          <v-client-table :columns="columns" :data="data" :options="options" :theme="theme" id="dataTable" class="table">
            <div slot="password" slot-scope="props" class="text-center">
                ...........
                <input type="hidden" :value="props.row.password"/>
            </div>
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
            <b-form-group v-bind:label="'username'" label-for="basicUsername" :label-cols="3" :horizontal="true">
                <b-form-input id="basicUsername" type="text" v-model="formData.username" autocomplete="name" placeholder="Username"></b-form-input>
            </b-form-group>
             <b-form-group description="Please enter work email" v-bind:label="'email'" label-for="basicemail" :label-cols="3" :horizontal="true">
                <b-form-input id="basicemail" type="text" v-model="formData.email" placeholder="email">
                </b-form-input>
            </b-form-group>
            <b-form-group v-bind:label="'surname'" label-for="basicSurname" :label-cols="3" :horizontal="true">
                <b-form-input id="basicSurname" type="text" v-model="formData.surname" autocomplete="name" placeholder="Surname"></b-form-input>
            </b-form-group>
            <b-form-group v-bind:label="'password'" label-for="basicPassword" :label-cols="3" :horizontal="true">
                <b-form-input id="basicPassword" type="password" v-model="formData.password" autocomplete="name" placeholder="Password"></b-form-input>
            </b-form-group>
            <b-form-group v-bind:label="'usertype'" label-for="basicRole" :label-cols="3" :horizontal="true">
                <b-form-select id="basicRole" :plain="true" :options="['admin', 'superuser', 'tech1','tech2', 'tech3']" v-model="formData.usertype"></b-form-select>
            </b-form-group>
            <b-form-group v-bind:label="'pakage'" label-for="basicHomepage" :label-cols="3" :horizontal="true">
                <b-form-select id="basichome" :plain="true" :options="['Home','Projects', 'Project code from preferred']" v-model="formData.pakage"></b-form-select>
            </b-form-group>
            <b-form-group v-bind:label="'the character'" label-for="basicHomepage" :label-cols="3" :horizontal="true">
                <b-form-select id="basichome" :plain="true" :options="['Home','Projects', 'Project code from preferred']" v-model="formData.thecharacter"></b-form-select>
            </b-form-group>
            <!-- <b-form-group v-bind:label="'preferred'" label-for="basicPreferred" :label-cols="3" :horizontal="true">
                <multiselect v-model="selectedProjects" :options="projects" :multiple="true" label="label" track-by="value"></multiselect>
            </b-form-group> -->
            <b-form-group v-bind:label="'subject'" label-for="basicName" :label-cols="3" :horizontal="true">
                <b-form-input id="basicName" type="text" v-model="formData.subject" autocomplete="name" placeholder="Name"></b-form-input>
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
            CreateisDisabled : false,
            UpdateisDisabled:true,
            projects: [],
            selectedProjects: [],
            isEdit: false,
            formData: {
                userid: "",
                username: "",
                email: "",
                surname: "",
                password: "",
                usertype: "",
                pakage: "",
                thecharacter: "",
                subject: ""
            },
            isOpen: 0,
            columns: ["username", "email", "surname", "password", "usertype", "pakage", "thecharacter", "subject", "action"],
            data: [],
            options: {
            headings: {
                username:"Username",
                email: "Email",
                surname: "FullName",
                password: "Password",
                usertype: "Usertype",
                pakage: "Pakage",
                thecharacter: "the character",
                subject: "subject",
                action: "Action"
            },
            sortable: ["userid"],
            filterable: ["surname", "username", "email", "password", "usertype", "pakage", "thecharacter", "subject"],
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
        var uri = Api_Base_Url + `/users`;
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
        saveForm() {
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
                userid: "",
                username: "",
                email: "",
                surname: "",
                password: "",
                usertype: "",
                pakage: "",
                thecharacter: "",
                subject: ""
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
        },
        createForm() {
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
