var Cylon = require('cylon');
var _ = require('lodash')

Cylon.api('http',{
ssl:false
});

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
  },

  devices: {
    relay: { driver: 'relay', pin: 7, type: 'open' }
  },
  work: function(my) {
    // every((1).second(), my.relay.toggle);
  }
}).start()


// console.log('Functions:', _.functionsIn(robot))

