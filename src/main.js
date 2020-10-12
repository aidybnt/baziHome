import Vue from 'vue'
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'

const {Solar, Lunar, HolidayUtil} = require('lunar-javascript')
Object.defineProperty(Vue.prototype, 'Solar', {value: Solar});
Object.defineProperty(Vue.prototype, 'Lunar', {value: Lunar});
Object.defineProperty(Vue.prototype, 'HolidayUtil', {value: HolidayUtil});


// const {_} = require('lodash')
// Object.defineProperty(Vue.prototype, '_', {value: _});

// eslint-disable-next-line no-unused-vars
// var debounce = require('lodash/debounce')
// import debounce from "lodash/debounce"
// var debounce = require('lodash/debounce')

// Object.defineProperty(Vue.prototype, 'debounce', {value: debounce});
// Vue.prototype.debounce = debounce


//全局引入elementUI
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

//按需引入elementUI
import {
  Pagination,
  // Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  Menu,
  // Submenu,
  MenuItem,
  // MenuItemGroup,
  Input,
  // InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  // ButtonGroup,
  Table,
  TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  // Tree,
  // Alert,
  // Slider,
  Icon,
  Row,
  Col,
  Upload,
  // Progress,
  // Spinner,
  // Badge,
  Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  Collapse,
  CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  // Timeline,
  // TimelineItem,
  Link,
  Divider,
  // Image,
  // Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
  Loading,
  // MessageBox,
  Message,
  // Notification,
  Drawer,
  Avatar,
} from 'element-ui';

Vue.use(Avatar);
Vue.use(Drawer);
Vue.use(Pagination);
// Vue.use(Dialog);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
Vue.use(Menu);
// Vue.use(Submenu);
Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
Vue.use(Input);
// Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
// Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
// Vue.use(DatePicker);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
// Vue.use(Tree);
// Vue.use(Alert);
// Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
// Vue.use(Progress);
// Vue.use(Spinner);
// Vue.use(Badge);
Vue.use(Card);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
// Vue.use(Timeline);
// Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
// Vue.use(Image);
// Vue.use(Calendar);
// Vue.use(Backtop);
// Vue.use(PageHeader);
// Vue.use(CascaderPanel);
//
Vue.use(Loading.directive);
//
Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

//表示开发环境提示
Vue.config.productionTip = true

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    next()
  }

  //判断页面是否有权访问
  if (to.meta.requireAuth) {
    if (localStorage.access_token != null) {
      next()
    } else {
      next({
        path: '/',
        redirect: {name: 'Index'}
      })
    }
  } else {
    next()
  }

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
