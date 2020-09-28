<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__row">
          <a href="" class="header__logo"></a>
          <div class="header__menu menu">
            <div class="menu__icon icon-menu">
              <span></span>
            </div>
            <nav class="menu__body">
              <ul class="menu__list">
                <li><a href="" class="menu__link"></a></li>
                <li><a href="" class="menu__link"></a></li>
                <li><a href="" class="menu__link"></a></li>
                <li><a href="" class="menu__link"></a></li>
                <li><a href="" class="menu__link"></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <main class="page">
      <div class="container">
        <div class="three-block">
          <h1 class="three-block__title">Квартиры</h1>
          <div class="three-block__row">
            <div v-for="appartment in appartmentList" :key="appartment.id" class="three-block__column">
              <div class="three-block__item">
                <div class="three-block__image">
                  <img :src="require(`../assets/images/${appartment.attributes.photo}`)" />
                  <button
                    :class="{ 'three-block__btn three-block__btn-active': appartment.liked }"
                    class="three-block__btn"
                    @click="likeTheAppartment(appartment.id)"
                  ></button>
                </div>
                <div class="three-block__text">
                  {{ appartment.attributes.title }}
                  <br />
                  {{
                    `Адрес: ${appartment.attributes.address.city}, ${appartment.attributes.address.street}, ${appartment.attributes.address.house}, ${appartment.attributes.address.room}`
                  }}
                  <br />
                  {{
                    `Агент: ${appartment.relationships.attributes.last_name} ${appartment.relationships.attributes.first_name} ${appartment.relationships.attributes.middle_name}`
                  }}
                  <br />
                  {{ `Площадь: ${appartment.attributes.area} ${appartment.attributes.unit}` }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer__row">
          <div class="footer__text"></div>
          <div class="footer__text"></div>
          <div class="footer__text"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { nprogressMixin } from "@/mixins";

export default {
  name: "Appartments",
  mixins: [nprogressMixin],
  computed: {
    ...mapState(["appartmentList"])
  },
  methods: {
    ...mapMutations(["likeTheAppartmentMutation"]),
    likeTheAppartment(appartmentId) {
      this.likeTheAppartmentMutation(appartmentId);
    }
  }
};
</script>
