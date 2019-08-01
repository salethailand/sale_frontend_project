<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="/img/1-52-400x300.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <p class="dark-grey-text">MIN BURI DISTRICT, BANGKOK, THAILAND</p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="danger">Danger</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="/img/1-52-400x300.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <p class="dark-grey-text">MIN BURI DISTRICT, BANGKOK, THAILAND</p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="danger">Danger</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="/img/1-52-400x300.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <p class="dark-grey-text">MIN BURI DISTRICT, BANGKOK, THAILAND</p>
        <p>by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
        <mdb-btn color="danger">Danger</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-2" />
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbMask,mdbView, mdbBtn } from 'mdbvue';
  export default {
    name: 'AlladsPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbMask,
      mdbView,
      mdbBtn
    }
  }
</script>