<template>
    <header class="header-global">
        <base-nav transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/SALE-THAILAND.COM- LOGO.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://127.0.0.1:8080">
                        <img src="img/SALE-THAILAND.COM- LOGO-blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <!-- <router-link slot="brand" class="navbar-brand mr-lg-5" to="/vehicle"> -->
                        <a slot="title" href="/vehicle" class="nav-link" data-toggle="dropdown" role="button">
                            <i class="ni ni-collection d-lg-none"></i>
                            <span class="nav-link-inner--text">VEHICLES</span>
                        </a>    
                    <!-- </router-link> -->
                    <router-link to="/vehiclecar" class="dropdown-item">CAR</router-link>
                    <router-link to="/vehiclemotor" class="dropdown-item">MOTORCYCLE</router-link>
                    <router-link to="/vehicletrucks" class="dropdown-item">TRUCKS AND BUSES</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="/realestate" class="nav-link" data-toggle="dropdown" role="button" style="width: max-content;">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">REAL ESTATE</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">OFFICE</router-link>
                    <router-link to="/profile" class="dropdown-item">LAND FOR RENT</router-link>
                    <router-link to="/login" class="dropdown-item">BUSSINESS FOR RENT</router-link>
                    <router-link to="/register" class="dropdown-item">FARM</router-link>
                    <router-link to="/register" class="dropdown-item">APARTMENT/HOUSE/CONDO FOR RENT</router-link>
                    <router-link to="/register" class="dropdown-item">APARTMENT/HOUSE/CONDO FOR SALE</router-link>
                    <router-link to="/register" class="dropdown-item">SHARE HOUSE/APARTMENT</router-link>
                    <router-link to="/register" class="dropdown-item">BUSINESS FOR SELL</router-link>
                    <router-link to="/register" class="dropdown-item">LAND FOR SELL</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                   <a slot="title" href="/job" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">JOB</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">BANKING/FINANCE</router-link>
                    <router-link to="/profile" class="dropdown-item">SALES/MARKETING</router-link>
                    <router-link to="/login" class="dropdown-item">SERVICE JOBS</router-link>
                    <router-link to="/login" class="dropdown-item">HOTEL JOBS</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                   <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button" style="width: max-content;">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">SECOND HAND</span>
                    </a>  
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                   <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">ANIMALS/PETS</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">BIRDS</router-link>
                    <router-link to="/profile" class="dropdown-item">FISHES</router-link>
                    <router-link to="/login" class="dropdown-item">DOGS</router-link>
                    <router-link to="/login" class="dropdown-item">CATS</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                   <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">ELECTRONICS</span>
                    </a>  
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                   <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">SERVICES</span>
                    </a>  
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                   <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">FASHOIN</span>
                    </a>  
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center" style="margin-left:150px;">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon login" href="/Login" rel="noopener"
                       data-toggle="tooltip" style="width: max-content;">
                        <i class="fa fa-sign-in"></i> Login |
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon login" href="/SignUp"
                       rel="noopener" data-toggle="tooltip" style="width: max-content;margin-left: -15px;">
                        <i class="fa fa-registered"></i>  Register
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="/NewAdWizard" rel="noopener"
                       class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                        <i class="fa fa-cloud-download mr-2"></i>
                        </span>
                        <span class="">Post an AD</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.nav-link-inner--text {
    color :white;
}
.nav-item .login {
    color: white!important;
}

</style>
