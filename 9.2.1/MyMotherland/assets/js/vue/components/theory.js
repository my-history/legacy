Vue.component('navigation', {
	data: function () {
		return {
			logoSrc: '../assets/images/37/logo.png',
			navTitle: 'Я и моя Родина',
			navStatusIsActive: false,
			navStatusActiveClass: 'is-active',
			navigationListItems: [{
					text: 'Главная',
					link: '',
					icon: 'IconPack--home',

				},
				{
					text: 'Известные личности',
					link: '',
					icon: 'IconPack--users',

				},
				{
					text: 'Важные даты',
					link: '',
					icon: 'IconPack--calendar',

				},
				{
					text: 'Улицы края',
					link: '',
					icon: 'IconPack--city',

				},
				{
					text: 'Великая война',
					link: '',
					icon: 'IconPack--swords',

				},
				{
					text: 'Тест',
					link: '',
					icon: 'IconPack--question',

				},
				{
					text: 'О проекте',
					link: '',
					icon: 'IconPack--info',

				},
				{
					text: 'Благодарности',
					link: '',
					icon: 'IconPack--handshake',

				},
				{
					text: 'Источники',
					link: '',
					icon: 'IconPack--books',

				}
			]
		}
	},
	template: '<div><div class="Header Header--themeIvanovo"><div class="Header-logo"> <img alt="logo" :src="logoSrc"></div><div class="Header-title">{{ navTitle }}</div><div class="Header-navigationTrigger" data-script-role="navTrigger" onclick="showMenu()"> <i class="fal fa-bars"></i></div></div><ul class="Navigation" data-script-role="nav"><div class="Navigation-closeButton" onclick="hideMenu()"><div class="fal fa-times"></div></div><li class="Navigation-item" v-for="items in navigationListItems"> <a :href="items.link" class="Navigation-link IconPack Navigation--menuLink" :class="items.icon"> {{ items.text }} </a></li><p class="Navigation-copyrightText">Использование материалов сайта допустимо в случая, не нарушающих условия Лицензии с предварительным уведомлением автора материала о намерении использовать его работу в собственных целях любым доступным способом</p></ul></div>'
})

Vue.component('card', {
	data: function() {
		return {

		}
	},
	props: ['imgsrc', 'title', 'desc', 'link'],
	template: '<div><div class="Card col-4_xs-12_md-4_sm-12-center"><img :src="imgsrc" class="Card-image"><div class="Card-text"><div class="Card-title">{{ title }}</div><div class="Card-description">{{ desc }}</div><a :href="link" class="Card-button Card--themeIvanovo">Перейти</a></div></div></div>'
})

Vue.component('grid', {
	template: '<div class="Grid"><slot></slot></div>'
})

var vm = new Vue({
	el: '#app',
	data: {}

})
