<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
    
    <mdb-row>
      <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="/img/2019-Mercedes-Benz-C-class1-400x300.jpg" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <p>July 17, 2018 0 Comments</p>
        <h6 class="font-weight-bold mb-3">
          <strong>2019 Mercedes-Benz C-class Sedan: Design and technology from bigger brothers</strong>
        </h6>
        <p class="dark-grey-text">Mercedes-Benz is moving in a new design direction ...</p>
      </mdb-col>
      <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="/img/39921184170_d11cb5791f_b-400x300.jpg" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <p>July 14, 2018 0 Comments</p>
        <h6 class="font-weight-bold mb-3">
          <strong>New design of the Toyota Corolla in 2019 (2019)</strong>
        </h6>
        <p class="dark-grey-text">In the year 2019 Corolla hatchback Toyota has been authorized</p>
      </mdb-col>
      <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="/img/2019_Toyota_Corolla_Hatchback_SE_front_4.2.18-400x300.jpg" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <p>July 14, 2018 0 Comments</p>
        <h6 class="font-weight-bold mb-3">
          <strong>New Toyota Corolla 2019 Review</strong>
        </h6>
        <p class="dark-grey-text">New Toyota Corolla Hangback Model in 2019 is a market model ...</p>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbMask, mdbView} from 'mdbvue';
  export default {
    name: 'BlogPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbMask,
      mdbView
    }
  }
</script>