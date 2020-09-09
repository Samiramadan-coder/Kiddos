import Home from '../components/Home.vue'
import Quote from '../components/Pages/Quote.vue'
import About from '../components/pages/About.vue'
import Teacher from '../components/pages/Teacher.vue'
import Courses from '../components/pages/Courses.vue'
import Pricing from '../components/pages/Pricing.vue'
import Blog from '../components/pages/Blog.vue'
import Control from '../components/ControlPage/Control.vue'
import LogIn from '../components/ControlPage/LogIn.vue'

export const routes = [
	{
		path: '',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/teacher',
		name: 'teacher',
		component: Teacher
	},
	{
		path: '/courses',
		name: 'courses',
		component: Courses
	},
	{
		path: '/pricing',
		name: 'pricing',
		component: Pricing
	},
	{
		path: '/blog',
		name: 'blog',
		component: Blog
	},
	{
		path: '/login',
		name: 'login',
		component: LogIn
	},
	{
		path: '/control',
		name: 'control',
		component: Control
	},
	{
		path: '/quote',
		name: 'quote',
		component: Quote
	}
];



