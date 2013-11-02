/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'base_index_01',
            type:'image',
            rect:['-1px','-1px','580px','580px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"base_index_01.png",'0px','0px']
         },
         {
            id:'base_index_02',
            type:'image',
            rect:['-1px','-1px','580px','580px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"base_index_02.png",'0px','0px']
         },
         {
            id:'base_index_03',
            type:'image',
            rect:['-1px','-1px','580px','580px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"base_index_03.png",'0px','0px'],
            transform:[[],['78']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_base_index_01}": [
            ["style", "top", '-1px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_base_index_03}": [
            ["style", "top", '-1px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_base_index_02}": [
            ["style", "top", '-1px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '360deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "width", '580px'],
            ["style", "height", '580px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 32000,
         autoPlay: true,
         timeline: [
            { id: "eid3", tween: [ "transform", "${_base_index_03}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 9379 },
            { id: "eid4", tween: [ "transform", "${_base_index_03}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 9379, duration: 2170 },
            { id: "eid8", tween: [ "transform", "${_base_index_03}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 11550, duration: 9379 },
            { id: "eid9", tween: [ "transform", "${_base_index_03}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 20929, duration: 11071 },
            { id: "eid7", tween: [ "transform", "${_base_index_02}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 16000 },
            { id: "eid10", tween: [ "transform", "${_base_index_02}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 16000, duration: 16000 },
            { id: "eid12", tween: [ "transform", "${_base_index_01}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 32000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-243826001");
