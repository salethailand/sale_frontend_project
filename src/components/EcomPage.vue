<template>
  <mdb-container>
    <section class="text-center my-5">
        <mdb-carousel :interval="8000" showControls showIndicators multi slide>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Shoes</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Leather boots</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">69$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Jeans</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Slim jeans</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">99$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Shorts</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Denim shorts</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">49$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Shoes</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Leather boots</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">69$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Jeans</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Slim jeans</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">99$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Shorts</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Denim shorts</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">49$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Shoes</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Leather boots</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">69$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Jeans</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Slim jeans</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">99$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card narrow ecommerce class="mb-2">
                <mdb-view hover cascade>
                  <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg" alt="sample photo"/>
                  <a><mdb-mask overlay="white-slight" waves/></a>
                </mdb-view>
                <mdb-card-body cascade>
                  <a href="" class="text-muted">
                    <h5>Shorts</h5>
                  </a>
                  <mdb-card-title><strong><a href="">Denim shorts</a></strong></mdb-card-title>
                  <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left">49$</span>
                    <span class="float-right">
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Quick look
                          </div>
                          <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                      <a>
                        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                          <div class="tooltip">
                            Add to watchlist
                          </div>
                          <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                        </mdb-tooltip>
                      </a>
                    </span>
                  </mdb-card-footer>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
      </mdb-carousel>
    </section>
  </mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbCardText, mdbIcon,mdbTooltip, mdbView, mdbCarousel, mdbCarouselItem, mdbMask  } from 'mdbvue';
export default {
  name: 'EcomPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbCardText,
    mdbIcon,
    mdbTooltip,
    mdbView,
    mdbCarousel,
    mdbCarouselItem,
    mdbMask
    }
}
</script>