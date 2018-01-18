import Vue from 'vue';

var app2  = new Vue({
	el: '#app',
	data: {
		message: 'Live long and prosper'
	}
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true //set to false to hide
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Create Project' },
      { text: 'Add packages' },
			{ text: 'Build everything' },
			{ text: 'Have fun learning' }
    ]
  }
})