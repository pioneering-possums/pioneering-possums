NavBar = {

  model: {

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBar.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      navbar: {
        class: ctrl.css.navbar
      },
      backBtn: {
        class: ctrl.css.backBtn,
        onclick: function() {
          // console.log(globalModel.backStack[globalModel.backStack.length-1])
          // var route = globalModel.backStack.pop() || '/'
          // m.route(route)
          window.history.back()
        }
      },
      title: {
        class: ctrl.css.title
      },
      menuBtn: {
        class: ctrl.css.menuBtn,
        onclick: m.route.bind(null, '/options')
      }
    }
    return m('div.navbar', attr.navbar, [
      m('div.backBtn', attr.backBtn, [
        m('div.center', '<')
      ]),
      m('div.titleBtn', attr.title, [
        m('div.center', getTitle())
      ]),
      m('div.menuBtn', attr.menuBtn, [
        m('div.center', '=')
      ])
    ])

  },

//
  styles: {
    navbar: {
      'width': '100%',
      'height': '10%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray'
    },
    backBtn: {
      //'outline': '1px solid gray',
      'background-color': '#e43114',
      'width': '12.5%',
      'display': 'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 22px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    },
    title: {
      //'outline': '1px solid gray',
      'background-color': '#e43114',
      'width': '75%',
      'display':'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 22px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    },
    menuBtn: {
      //'outline': '1px solid gray',
      'background-color': '#e43114',
      'width': '12.5%',
      'display': 'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 22px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}



function getTitle() {
 // return m.route()
  if(m.route() === '/'){
    return 'Home'
  } else if(m.route() === '/questLog'){
    return 'Available Quests'
  } else if(m.route() === '/questLogActive'){
    return 'Active Quests'
  } else if(m.route().split('').splice(0,9).join('') === '/taskLog/'){
    return m.route().split('').splice(9).join('') 
  } else if(m.route().split('').splice(0,10).join('') === '/taskItem/'){
    return m.route().split('').splice(10).join('')
  } else if(m.route().split('').splice(0,8).join('') === '/options'){
    return 'Menu'
  }
  
  
}