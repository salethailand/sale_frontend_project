import Badge from "../components/Badge";
import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseDropdown from "../components/BaseDropdown";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseInput from "../components/BaseInput";
import BasePagination from "../components/BasePagination";
import BaseProgress from "../components/BaseProgress";
import BaseRadio from "../components/BaseRadio";
import BaseSlider from "../components/BaseSlider";
import BaseSwitch from "../components/BaseSwitch";
import Card from "../components/Card";
import Icon from "../components/Icon";
import BlogPage from "../components/BlogPage";
import CarouselPage from "../components/CarouselPage";
import MagazinePage from "../components/MagazinePage";
import AlladsPage from "../components/AlladsPage";
import LastestadsPage from "../components/LastestadsPage";
import EcomPage from "../components/EcomPage";


import BaseNav from "../components/BaseNav";
import BaseTable from "../components/BaseTable";
import BaseHeader from "../components/BaseHeader";
import StatsCard from "../components/StatsCard";
import Modal from "../components/Modal";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
    Vue.component(BlogPage.name, BlogPage);
    Vue.component(CarouselPage.name, CarouselPage);
    Vue.component(MagazinePage.name, MagazinePage);
    Vue.component(AlladsPage.name, AlladsPage);
    Vue.component(LastestadsPage.name, LastestadsPage);
    Vue.component(EcomPage.name, EcomPage);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Modal.name, Modal);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
    Vue.component(BaseTable.name, BaseTable);
  }
};
