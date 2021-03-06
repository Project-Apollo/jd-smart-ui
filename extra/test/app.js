require(['./maindelux.js'],function(main){
  var gridItem = new JDUI.instance.GridItem({
        title: "模式选择",
        hook: ".grid-item-wrap",
        gridNum: '3',
        value: '0',
        map: [{
            icon: "&#xe681;",
            text: "模式1",
            value: "0"
        }, {
            icon: "&#xe67a;",
            text: "模式2",
            value: "1"
        }, {
            icon: "&#xe65f;",
            text: "模式3",
            value: "2"
        }, {
            icon: "&#xe665;",
            text: "模式4",
            value: "3"
        }, {
            icon: "&#xe67a;",
            text: "模式5",
            value: "4"
        }, {
            icon: "&#xe65f;",
            text: "模式6",
            value: "5"
        }, {
            icon: "&#xe665;",
            text: "模式7",
            value: "6"
        }, {
            icon: "&#xe665;",
            text: "模式8",
            value: "7"
        }, {
            icon: "&#xe665;",
            text: "模式8",
            value: "8"
        }, {
            icon: "&#xe665;",
            text: "模式8",
            value: "9"
        }],
        onTap: function(item, index, content) {
            pJD.setDeviceStatus({
                'WorkMode':{
                    "value": index.toString()
                }
            })
        }
    });

  main.init()
})