<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="12" lg="6">
        <div class="news">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image" />
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold dark-grey-text">26/02/2018</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</a>
                </mdb-col>
                <a>
                  <mdb-icon icon="angle-double-right" />
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="news">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Sample image" />
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold dark-grey-text">25/02/2018</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                </mdb-col>
                <a>
                  <mdb-icon icon="angle-double-right" />
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="news">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg" alt="Sample image" />
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold dark-grey-text">24/03/2018</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                </mdb-col>
                <a>
                  <mdb-icon icon="angle-double-right" />
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="mb-4">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                <a>
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold dark-grey-text">23/02/2018</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Duis aute irure dolor in reprehenderit in voluptate</a>
                </mdb-col>
                <a>
                  <mdb-icon icon="angle-double-right" />
                </a>
              </div>
            </mdb-col>
            </mdb-row>
          </div>
        </mdb-col>
      </mdb-row>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbView, mdbIcon, mdbMask } from 'mdbvue';
  export default {
    name: 'LastestadsPage',
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