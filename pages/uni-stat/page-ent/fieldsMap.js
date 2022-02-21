export default [{
	title: '受访页',
	field: 'url',
}, {
	title: '页面名称',
	field: 'title',
}, {
	title: '访问人数',
	field: 'access_users',
	tooltip: '访问过应用内任意页面的总用户数（去重）',
	value: 0
}, {
	title: '访问次数',
	field: 'access_times',
	tooltip: '访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问',
	value: 0
}, {
	title: '入口页次数',
	field: 'entry_count',
	tooltip: '作为访问会话第一个访问页面（即着陆页）的次数',
	value: 0
}, {
	title: '跳出率',
	field: 'bounce_rate',
	formatter: '%',
	tooltip: '只浏览一个页面便离开应用的次数占总启动次数的百分比',
	value: 0
}, {
	title: '次均停留时长',
	field: 'visitAvgTime',
	computed: 'access_time/access_times',
	formatter: ':',
	tooltip: '平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数',
	value: 0
}, {
	title: '人均停留时长 ',
	field: 'visitorAvgTime',
	computed: 'access_time/access_users',
	formatter: ':',
	tooltip: '平均每个用户停留在应用内的总时长，即应用停留总时长/访问人数',
	value: 0
}]
