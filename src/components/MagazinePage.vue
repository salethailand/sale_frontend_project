<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold my-5 text-center">Most Visited</h2>
    <!-- <p class="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p> -->
    <mdb-row>
      <mdb-col lg="6" md="12">
        <div class="news">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="/img/house-e1526549946669.png" alt="Sample image"/>
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light"/>
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <!-- <p class="font-weight-bold dark-grey-text">19/08/2018</p> -->
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Real estate</a>
                </mdb-col>
                <!-- <a><mdb-icon icon="angle-double-right"/></a> -->
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="news">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg" alt="Sample image"/>
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light"/>
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold dark-grey-text">18/08/2018</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                </mdb-col>
                <a><mdb-icon icon="angle-double-right"/></a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="mb-4">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image"/>
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light"/>
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold dark-grey-text">17/08/2018</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Voluptatem accusantium doloremque</a>
                </mdb-col>
                <a><mdb-icon icon="angle-double-right"/></a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbView, mdbIcon, mdbMask} from 'mdbvue';
  export default {
    name: 'MagazinePage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbView,
      mdbIcon,
      mdbMask
    }
  }
</script>
<style scoped>
.news {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1.5rem;
}
</style>