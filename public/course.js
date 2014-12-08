  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
      console.log(response.authResponse.userID);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  function getID(){
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        return response.authResponse.userID;
    }
  })
  };

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '651796521604323',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

////////////////// FACEBOOK LOGIN STUFF///////////////////


var w = $(window).width(),
    h = $(window).height(),
    r = w*0.014,
    z = d3.scale.category10();
    dragEle = false,
    prevPos = 0,
    originPos = 0,
    dir = 1,
    currentIsRoot = 0;

// graph-related
var source;
var target;
var revAdj = [ [],   [],   [],   [ 601 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 45 ],   [ 47 ],   [ 51 ],   [ 48 ],   [ 49, 50, 52, 55 ],   [ 54 ],   [],   [],   [ 53 ],   [ 54 ],   [],   [],   [],   [],   [],   [ 60, 63, 64, 67, 68, 71, 73 ],   [ 70 ],   [],   [],   [],   [],   [],   [ 67 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 86, 92, 98 ],   [ 90, 91, 95, 96, 97 ],   [ 89, 90 ],   [ 89, 90, 95 ],   [],   [],   [],   [ 93, 94 ],   [ 95 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 104 ],   [ 105 ],   [ 106 ],   [ 107 ],   [ 108 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 305, 307 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 300, 339, 377, 404, 405, 414, 416, 421 ],   [ 301, 311, 314, 316, 318, 322 ],   [ 303, 312, 313, 315, 317, 319, 320 ],   [ 301, 310, 311, 314, 316, 318, 322, 326, 613 ],   [],   [ 306, 309 ],   [ 306, 309 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 328, 331, 336, 339, 346, 349 ],   [ 329, 330, 345, 350, 357 ],   [],   [ 344 ],   [ 330, 348, 353, 354, 356, 358 ],   [],   [ 349, 860 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 352, 355 ],   [],   [],   [ 350 ],   [],   [],   [],   [],   [],   [ 347 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 402, 403 ],   [ 398, 400 ],   [ 386 ],   [],   [ 418, 437, 441 ],   [],   [],   [],   [ 376, 394, 396 ],   [],   [ 388, 422 ],   [ 382 ],   [],   [],   [ 390, 415, 417 ],   [ 389, 417, 422 ],   [ 395, 420, 442 ],   [ 391, 392, 393, 412 ],   [ 392 ],   [],   [ 310 ],   [],   [ 415 ],   [],   [],   [],   [ 401, 429, 431, 432, 436 ],   [],   [ 401 ],   [ 423 ],   [ 424, 425, 431, 432 ],   [ 399 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 426 ],   [ 427, 428 ],   [],   [],   [ 430 ],   [],   [],   [ 433 ],   [],   [ 435 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 446 ],   [],   [ 453, 464, 465, 471 ],   [],   [],   [ 464 ],   [],   [],   [ 473 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 489 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 551 ],   [],   [ 552 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 599 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 603 ],   [ 604 ],   [ 331, 377, 384, 409, 606, 607, 609, 622, 825, 898, 913, 916 ],   [ 331, 377, 384, 409, 606, 607, 609, 622, 825, 898, 913, 916 ],   [ 70, 87, 88, 383, 410, 608, 610, 615, 616, 617, 621, 812 ],   [ 413, 611, 614, 615, 617, 618, 620, 621, 811, 813 ],   [ 399, 431, 614, 619, 620, 811, 818 ],   [ 302 ],   [ 320, 868, 893, 927 ],   [ 612 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 623, 627 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 644 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 669, 680 ],   [],   [ 679 ],   [ 686, 700 ],   [],   [],   [ 686 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 699 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 773 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 730, 732 ],   [],   [],   [],   [],   [],   [],   [ 749 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 815, 816, 817, 820 ],   [],   [ 819 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 826 ],   [],   [],   [],   [],   [ 849 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 854, 855, 856, 860 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 860 ],   [],   [],   [],   [ 875,     876,     877,     878,     879,     880,     881,     883,     884,     885,     886,     887,     888,     889,     890,     891,     892,     894 ],   [ 883, 884, 885, 886, 887, 888, 889, 891, 892, 894 ],   [ 883 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 899 ],   [ 372, 373, 809, 900 ],   [ 901 ],   [ 85, 381, 902 ],   [ 903 ],   [ 59, 61, 62, 65, 66, 69, 87, 88, 98, 811, 812, 813, 814, 818 ],   [],   [],   [],   [],   [],   [ 810 ],   [ 331, 825, 913, 916 ],   [ 333, 346, 864, 868, 883, 893, 927, 945 ],   [ 917, 927 ],   [ 333, 346, 868, 883, 893, 927 ],   [],   [],   [ 349 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 445 ],   [],   [],   [ 976 ],   [ 976 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 977 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 1019 ],   [ 1019 ],   [ 1019 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 1018 ],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [],   [ 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748 ],   [ 750, 751, 752 ] ];
var adjList = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [44], [], [45], [47], [48], [48], [46], [48], [52], [53, 49], [48], [], [], [], [898, 899, 902, 903, 900, 901], [59], [898, 899, 902, 903, 900, 901], [898, 899, 902, 903, 900, 901], [59], [59], [898, 899, 902, 903, 900, 901], [898, 899, 902, 903, 900, 901], [66, 59], [898, 899, 902, 903, 900, 901, 59], [604, 605, 898, 899, 902, 903, 900, 901], [606, 60], [898, 899, 902, 903, 900, 901, 59], [], [59], [], [], [], [], [], [], [], [], [], [], [], [898, 899, 900, 901], [85], [898, 899, 902, 903, 606, 900, 901], [898, 899, 902, 903, 606, 900, 901], [87, 88], [85, 87, 88, 86], [86], [85], [92], [92], [85, 88, 93, 86], [85, 86], [85, 86], [898, 899, 902, 903, 85, 900, 901], [], [], [], [], [], [103], [104], [105], [106], [107], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [299], [302, 300], [609], [301, 302], [], [162], [305, 162, 304], [162], [], [305, 162, 304], [302, 392], [302, 300], [301, 302], [301, 302], [302, 300], [301, 302], [302, 300], [301, 302], [302, 300], [301], [301, 302, 610], [], [302, 300], [], [], [], [302], [], [327], [328, 327], [331, 328, 327], [604, 605, 910, 327], [], [911, 913], [], [], [327], [], [], [299, 327], [], [], [], [], [330], [328, 327], [911, 913, 327], [355, 346], [331], [913, 327, 333, 916], [913, 328, 327, 349, 916], [], [346], [604, 605, 331, 910], [331], [346], [331], [328, 327], [604, 605, 331, 910], [], [], [], [], [], [], [], [], [], [], [], [], [], [604, 605, 898, 899], [604, 605, 898, 899], [], [], [380], [604, 605, 299], [], [], [], [898, 899, 900, 901], [604, 605, 383], [606], [604, 605], [], [374], [], [382], [387], [386], [389], [389, 390], [389], [380], [388], [380], [], [373], [608, 403], [373], [398, 400], [372], [604, 605, 372], [299], [299], [], [], [], [604, 605], [606], [], [389], [607], [299], [394, 386], [299], [386, 387], [376], [], [388], [299], [387, 382], [401], [402], [402], [425], [426], [426], [398], [429], [608, 398, 402], [398, 402], [432], [], [434], [398], [376], [], [], [], [376], [388], [], [], [954], [954, 445], [], [], [], [], [], [], [447], [], [], [], [], [], [], [], [], [], [], [447, 450], [447], [], [], [], [], [], [447], [], [453], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [549], [549, 551], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [574], [], [3], [], [602], [603], [], [604, 605], [604, 605], [606], [604, 605], [606], [607], [611], [302], [608, 607], [606, 607], [606], [606, 607], [607], [608], [608, 607], [606, 607], [604, 605], [622], [], [], [], [622], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [642], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [667], [], [], [], [], [], [], [], [], [], [669], [667], [], [], [], [], [], [673, 670], [], [], [], [], [], [], [], [], [], [], [], [], [687], [670], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [726], [], [726], [], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [1032], [733], [1033], [1033], [1033], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [711], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [604, 605, 898, 899], [909], [898, 899, 902, 903, 608, 900, 901, 607], [898, 899, 902, 903, 606, 900, 901], [898, 899, 902, 903, 900, 901, 607], [898, 899, 902, 903, 900, 901], [813], [813], [813], [898, 899, 902, 903, 608, 900, 901], [815], [813], [], [], [], [], [604, 605, 910], [825], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [830], [], [], [], [], [853], [853], [853], [], [], [], [853, 868, 333], [], [], [], [911], [], [], [], [911, 610, 913], [], [], [], [], [], [], [872], [872], [872], [872], [872], [872], [872], [], [872, 911, 873, 913, 874], [872, 873], [872, 873], [872, 873], [872, 873], [872, 873], [872, 873], [872], [872, 873], [872, 873], [911, 610, 913], [872, 873], [], [], [], [604, 605], [898], [899], [900], [901], [902], [], [], [], [], [], [], [], [], [], [604, 605, 910], [], [], [604, 605, 910], [912], [], [], [], [], [], [], [], [], [], [911, 610, 912, 913], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [911], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [957, 958], [971], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1010], [991, 992, 993], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var instructRevAdj = [[1038], [1038], [1039], [1039], [1039], [], [1041], [1042], [1043], [], [1043]];
var instructAdjList = [[], [], [], [], [1034, 1035], [1036, 1037, 1038], [], [1040], [1041], [1042, 1044], []];
var instructData = {"nodes": [{"code": "MATH-AD", "group": 5, "name": "Waive basic class", "cid": 1034}, {"code": "MATH-AD", "group": 5, "name": "TRY! Drag to the left to waive", "cid": 1035}, {"code": "ECON-AD", "group": 11, "name": "TRY! Push forward", "cid": 1036}, {"code": "ECON-AD", "group": 8, "name": "Pre-req", "cid": 1037}, {"code": "ECON-AD", "group": 8, "name": "Pre-req", "cid": 1038}, {"code": "ECON-AD", "group": 14, "name": "TRY! Move around advanced class", "cid": 1039}, {"code": "CS-AD", "group": 8, "name": "TRY! Double-click and delete/backspace", "cid": 1040}, {"code": "CS-AD", "group": 11, "name": "Remove class sequence", "cid": 1041}, {"code": "CS-AD", "group": 14, "name": "advanced", "cid": 1042}, {"code": "CS-AD", "group": 17, "name": "advanced", "cid": 1043}, {"code": "CS-AD", "group": 20, "name": "advanced", "cid": 1044}], "links": [{"source": 1038, "target": 1034, "value": 0}, {"source": 1038, "target": 1035, "value": 0}, {"source": 1039, "target": 1036, "value": 0}, {"source": 1039, "target": 1037, "value": 0}, {"source": 1039, "target": 1038, "value": 0}, {"source": 1041, "target": 1040, "value": 0}, {"source": 1042, "target": 1041, "value": 0}, {"source": 1043, "target": 1042, "value": 0}, {"source": 1043, "target": 1044, "value": 0}]};
var newComp = [];
var oldComp = [];
var visited = [];
var checkColumn = [];
var dictClassId = {};
var classType = {};
intializeState();



function convertToAdjMat(adjList){
  var row;
  var mat = [];
  var n = revAdj.length;
  for (var i = 0; i < n; i++) {
    row = [];
    for (var j = 0; j < n; i++) {
      row.push(Infinity);
    };
    mat.push(row);
  };

  for (var i = 0; i < adjList.length; i++) {
    for (var j = 0; j < adjList[i].length; i++) {
      mat[i][adjList[i][j]] = -1;
    };
  };
  return mat;
}

function floyd(m){
  var V = m.length;
  for (var k = 0; k < V; k++) 
    for (var i = 0; i < V; i++)
      for (var j = 0; j < V; j++)
        m[i][j] = Math.min(m[i][j], m[i][k] + m[k][j]);
  return m;
}

    // delete one node
    function deleteNode(whichClass){

      var subRevAdj = getSubRevAdj();
      var whichNode = -1;
      for (var i = 0; i < subRevAdj.length; i++) {
        if (subRevAdj[i].cid == whichClass) whichNode = i;
      };

      var arrayDelete = [];
      dfs(whichNode);

      function dfs(root){
        for (var i = 0; i < subRevAdj[root].child.length; i++) {
          dfs(subRevAdj[root].child[i].index); 
        }
        arrayDelete.push(subRevAdj[root].cid);
      }

      newCompMinusDelete(arrayDelete);
      clearNodeEdge();
      cleanState();
      putInfo(-1);

    }

    function binSearch(a,b,array,target){
      if (a==b) return array[a] == target ? a: -1;
      var mid = ((a+b)/2) | 0;
      if (array[mid] < target) return binSearch(mid+1,b,array,target);
      else return binSearch(a,mid,array,target);
    }

    function newCompMinusDelete(nodesToDelete){
      var remainComp = [];
      for (var i = 0; i < newComp.length; i++) {
        if( $.inArray(newComp[i],nodesToDelete) == -1)remainComp.push(newComp[i]);
      }
      oldComp = newComp;
      newComp = remainComp;
    }

    // initialize visit for getConnecetedComp
    function intializeState(){
      visited = [];
      for (var i = 0; i < revAdj.length; i++) {
        visited.push(-1);
      };
    }

    function cleanState(){
      visited = visited.map(function(d){
        if (d == Infinity) return Infinity;
        else return -1;
      });
    }

    // get subgraph that include this class
    function getConnectedComp(classIndex){

      if (visited[classIndex] != -1) return;
      var thisChild = adjList[classIndex];

      for (var i = 0; i < thisChild.length; i++) {
          getConnectedComp(thisChild[i]);
          visited[thisChild[i]] = 1;
      }
      if ($.inArray(classIndex,newComp) < 0) newComp.push(classIndex);

    }

    // construct json object from the subgraph (newComp)
    function getObj(){
      var numNodes = 0;
      var thisLinks = [];

      for (var i = 0; i < newComp.length; i++) {
        for (var j = 0; j < revAdj[newComp[i]].length; j++) {
          var thisIndex = $.inArray(revAdj[newComp[i]][j],newComp);
          if (thisIndex > 0 ){
            thisLinks.push({"source": numNodes+thisIndex , "target": numNodes+i}); 
          }
        }
      }
      return thisLinks;
    }

    function getSubRevAdj(){
      var subRevAdj = node.data().map(function(d) {return {cid: d.cid, child: []};});
      for (var i = 0; i < link.data().length; i++) {
        subRevAdj[(link.data()[i].target.index)].child.push({cid: link.data()[i].source.cid, index: link.data()[i].source.index});
      }
      return subRevAdj;
    }

    // Drag and click
    function dragstarted(d) {
      source = [];
      target = [];
      for (var i = 0; i < link.data().length; i++) {
        var thisLink = link.data()[i];
        source.push(thisLink.source.group);
        target.push(thisLink.target.group);
      }
      currentIsRoot = isBasicClass(d.index);
      originPos = d.x;
    }

    function dragged(d) {
      dragEle = true;
      d.group = whichBox(d);
      dir = 1;
      if (prevPos > d.x) dir = -1;
      prevPos = d.x;
      if (dir == -1) updateLeft();
      else update();
      // var valid = update();
      this.classList.add("dragging");
    }

    function updateLeft(){
        var valid = 1;
        var thisLink;
        for (var i = 0; i < link.data().length; i++) {
          thisLink = link.data()[i];

          if (thisLink.source.group <= thisLink.target.group) {
            console.log("group equal");
            console.log(i+thisLink.target.name);
            thisLink.target.group = thisLink.source.group-1;
          }
          if (thisLink.target.group <= 0){
            valid = 0;
          }
        }
        // if we are not deleting it - not the basic class..
        if (currentIsRoot === 0){
          // put it back to previous place
          if ((valid == 0) && (source.length == link.data().length)){
            for (var i = 0; i < link.data().length; i++) {
              var thisLink = link.data()[i];
              // console.log(thisLink);
              thisLink.source.group = source[i];
              thisLink.target.group = target[i];
            }
          }
        }
      return;

    }

    function update(){

      var valid = 1;
      for (var i = 0; i < link.data().length; i++) {
        var thisLink = link.data()[i];
        if (thisLink.source.group <= thisLink.target.group) thisLink.source.group = thisLink.target.group+1;
        if (thisLink.source.group >= (numSemester/2)*3+1){
          valid = 0;
        }
      }
      if ((valid == 0) && (source.length == link.data().length)){
        console.log("invalidd");
        for (var i = 0; i < link.data().length; i++) {
          var thisLink = link.data()[i];
          // console.log(thisLink);
          thisLink.source.group = source[i];
          thisLink.target.group = target[i];
        }
      }
      else if (((valid == 0) && (source.length != link.data().length))){
        // adding of new edges to exceed
        console.log("cannot add more");
        cleanState();
        newComp = oldComp;
        clearNodeEdge();
        putInfo(-1);

      }

      return valid;
      

    }

    function dragended(d) {
      if (dragEle) dragEle = false;
      this.classList.remove("dragging");
      for (var i = 0; i < node[0].length; i++) {
        node[0][i].classList.remove("bounded");
      };

      if (d.group == 0){
        if (!disConnect(d.index)){
          d.group = 1;
        }
      }

      dir = 1;
      if (originPos > d.x) dir = -1;
      originPos = d.x;
      console.log("end")
      if (dir == -1) {
        console.log("updateleft");
        updateLeft();
      }
      else update();
      force.resume();
    }

    //Check state classes
    function isDraggable(ele){
      if (ele.classList.contains("dragging")) return true;
      else return false;
    }

    function isBounded(ele){
      if (ele.classList.contains("bounded")) return true;
      else return false;
    }

    function whichBox(d){
      if (d.x - offSet < 0) return 0;
      return (1+ (( (d.x-offSet)/boxTri)|0));
    }

    // Get names and index
    function getNames(){
      for (var i = 0; i < allData.nodes.length; i++) {
        dictClassId[allData.nodes[i].code+" "+allData.nodes[i].name] = allData.nodes[i].cid;
      };
      return Object.keys(dictClassId);
    }


    // Clear before adding
    function clearNodeEdge(){
      link = svg.selectAll("line")
      .data([])
      .exit()
      .remove();

      gnodes = svg.selectAll("g.gnode")
      .data([])
      .exit()
      .remove();
    }

    function isBasicClass(indexNode){

      var subRevAdj = getSubRevAdj();
      var root = 1;
      for (var i = 0; i < subRevAdj.length; i++) {
        for (var j = 0; j < subRevAdj[i].child.length; j++) {
          if (subRevAdj[indexNode].cid == subRevAdj[i].child[j].cid)
            root = 0;
        }
      }
      return root;
    }

    // disconnect()
    function disConnect(indexNode){
      // check if can be waved
      // no edges depend on it
      var subRevAdj = getSubRevAdj();
      var root = 1;
      for (var i = 0; i < subRevAdj.length; i++) {
        for (var j = 0; j < subRevAdj[i].child.length; j++) {
          if (subRevAdj[indexNode].cid == subRevAdj[i].child[j].cid)
            root = 0;
        }
      }
      if (root == 1){

        newCompMinusDelete([subRevAdj[indexNode].cid]);
        clearNodeEdge();
        // intializeState()
        visited[[subRevAdj[indexNode].cid]] = Infinity;
        putInfo(-1);
        return true;

      }
      else{
        return false;
      }


    }

    // Put the class
    function putInfo(classIndex){

      oldComp = newComp.map(function(d){return d;});
      if (classIndex != -1){
        getConnectedComp(classIndex);
      }
      var thisLinks = getObj();
      var thisNodes = [];

      for (var i = 0; i < newComp.length; i++) {
        var thisNode = allData.nodes[newComp[i]];
        thisNodes.push(thisNode);
        if (classType.hasOwnProperty(thisNode.code.split("-")[0])){
          thisNode.classTypeIndex = classType[thisNode.code.split("-")[0]];
        }
        else{
          thisNode.classTypeIndex = Object.keys(classType).length+1;
          classType[thisNode.code.split("-")[0]] = thisNode.classTypeIndex;
        }

      };



      var json = {"nodes": thisNodes, "links": thisLinks};


      var svgLink  = svg.append("svg:defs")
        .append("linearGradient")                
        .attr("id", "line-gradient")            
        .attr("x1", "0%").attr("y1", "0%")         
        .attr("x2", "100%").attr("y2", "0%")        
        .selectAll("stop")                      
        .data([                             
            {offset: "0%", color: "rgba(32,32,32,1)"},       
            {offset: "100%", color: "rgba(32,32,32,0.1)"},   
        ])                  
        .enter().append("stop")         
        .attr("offset", function(d) { return d.offset; })   
        .attr("stop-color", function(d) { return d.color; }); 

      link = svg.selectAll("line")
      .data(json.links)
      .enter().append("svg:line")
      .attr("stroke", "url(#line-gradient)")
      .attr("stroke-width", "2px");

      gnodes = svg.selectAll("g.gnode")
      .data(json.nodes)
      .enter()
      .append("g")
      .classed('gnode', true);

      var specializedIndex = getSpecialized();
      for (var i = 0; i < specializedIndex.length; i++) {
        gnodes.data()[specializedIndex[i]].classTypeIndex*= -1;
      };

      node = gnodes.append("circle")
      .attr("class", "node")
      .attr("r", r - .75)
      .style("fill", function(d) {
        if  (d.classTypeIndex<0 ) return z(-1+d.classTypeIndex*-1);
        else return z(-1+d.classTypeIndex); 
      })
      .style("stroke", function(d) {
        if (d.classTypeIndex<0 ) return d3.rgb(z(-1+d.classTypeIndex*-1)).darker();
        else return d3.rgb(z(-1+d.classTypeIndex)).darker();
      })
      .style("stroke-width", function(d){
        if  (d.classTypeIndex<0 ) return "5px";
        else return "";
      })
      .call(force.drag)
      .on("dblclick", function(d) { 
        if (isBounded(this)) this.classList.remove("bounded");
        else {
          this.classList.add("bounded");
          $(".bounded")
          .attr("id", d.cid);
        }
      });

      gnodes.append("text")
      .text(function(d) {
        return d.name;
      });


      force
      .nodes(json.nodes)
      .links(json.links)
      .on("tick", tick)
      .start();
    }

    // Compress the graph
    function compress(){
      for (var i = 0; i < node.data().length; i++) node.data()[i].group = 1;
      force.start();
      update();
    }

    function getSubAdjMat(){
      var n = node.data().length;
      var row;
      var mat = [];
      for (var i = 0; i < n; i++) {
        row = [];
        for (var j = 0; j < n; j++) {
          row.push(Infinity);
        }
        mat.push(row);
      }

      var allLinks = link.data();
      for (var i = 0; i < allLinks.length; i++) {
        mat[allLinks[i].source.index][allLinks[i].target.index] = 1;
      }

      for (var i = 0; i < mat.length; i++) {
        console.log(mat[i]);
      };
    }

    function getSpecialized(){

      var checkRoots = gnodes.data().map(function(d){return 0;});
      var theseLinks = link.data();
      for (var i = 0; i < theseLinks.length; i++) {
        checkRoots[theseLinks[i].target]++;
      }
      checkRoots = checkRoots.map(function(d,i) {
        if (d===0) return i;
        else return - 1;
        })
        .filter(function(d) {
          return d != -1;});
      return checkRoots;

    }


    function tick(e) {
    

      //check how many in a column
      checkColumn = checkColumn.map(function(){return 0;});
      var countNodes = checkColumn.map(function(){return 0;});
      var theseNodes = node.data();
      for (var i = 0; i < theseNodes.length; i++) {
        checkColumn[theseNodes[i].group-1]++; 
      }


      var kx = 1 * e.alpha, ky = .2 * e.alpha;

      // for x direction
      for (var i = 0; i < theseNodes.length; i++) {
        var d = theseNodes[i];
        d.x += ( offSet +boxTri*(d.group-1) + (boxTri/2) - d.x) * kx;

      };
      var theseLinks = link.data();
      var countEdgeIn = node.data().map(function(d){return 0;});
      for (var i = 0; i < theseLinks.length; i++) {
        var mult = 3;
        var sign = ((countEdgeIn[theseLinks[i].source.index]++) %2);
        if (sign != 0) mult*=-1;
        mult *= ((countEdgeIn[theseLinks[i].source.index]/2)|0)+1;
        theseLinks[i].target.y += (theseLinks[i].source.y +mult*r - theseLinks[i].target.y) *ky;
      };


      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) {
          d.x = Math.max( r, Math.min(offSet + w*widthCov - r, d.x)); 
          $(this.nextSibling).attr("x",d.x+ r/2);
        return d.x;
        }
      )
      .attr("cy", function(d) { 
          d.y = Math.max(r, Math.min(h - r, d.y)); 
          $(this.nextSibling).attr("y",d.y);
          return  d.y;

        });

      link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    }

    // initializing 
    var outerSVG = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

    var verColumnsCon = outerSVG.append("g");
    var svg = outerSVG.append("svg:g");

    // Dragging funcitonalities
    var force = d3.layout.force()
    .gravity(0)
    .charge(0)
    .linkStrength(0)
    .alpha(30);

    var drag = force.drag()
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended);

    // Create columns for the semesters
    var widthCov = 0.7;
    var numSemester = 16;
    var boxWidth = (w*widthCov)/numSemester;
    var boxTri = ((w*widthCov)/(numSemester/2)/3);
    var offSet = w*(1-widthCov)/2;

    // Create struct for count number
    for (var i = 0; i < numSemester; i++) {
      checkColumn.push[0];
    };

    svg.append("svg:rect")
    .attr("width", widthCov*w)
    .attr("height",h)
    .attr("x", offSet)
    .style("stroke", "#000");

    for (var i = 1; i < numSemester; i++) {
        var columns = verColumnsCon
        .append("svg:line")
        .attr("id","semSep")
        .attr("x1", offSet+i*boxWidth)
        .attr("x2", offSet+i*boxWidth)
        .attr("y1", 0)
        .attr("y2", h);
        if (i%2 == 1)   columns.style("stroke-dasharray", ("3, 3"));
        else  columns.style("stroke", "#000");
    }

    for (var i = 0; i < numSemester; i++) {
        var textString = "";
        if (i%4 < 2) textString = "FA";
        else textString = "SP";
        if (i%2 ==1) textString += "2";
        else textString += "1";
        var textSem = verColumnsCon.append("svg:text")
        .text(textString)
        .attr("x", offSet+i*boxWidth + boxWidth/2)
        .attr("y", h*0.05)
        .attr("fill", "rgba(32,32,32,.3)")
        .style("text-anchor" ,"middle");
    }

    // add text
    verColumnsCon.append("svg:text")
    .text("Drag class here to waive <-")
    .attr("x", offSet/2)
    .attr("y", h/2)
    .attr("fill", "rgba(32,32,32,.3)")
    .style("text-anchor" ,"middle");

    var fourYears = ["Freshman", "Sophomore", "Junior", "Senior"];
    for (var i = 0; i < 4; i++) {
      verColumnsCon.append("svg:text")
      .text(fourYears[i])
      .attr("x", offSet + (boxWidth*4)*i + (boxWidth*2))
      .attr("y", h*0.9)
      .attr("fill", "rgba(32,32,32,.3)")
      .style("text-anchor" ,"middle");
    }

    var link, gnodes, node;
    var allData;
    var graph;



    d3.json("data.json", function(jsonData) {
    allData = jsonData;
    
    loadClass();
    // console.log("load this");
    // console.log(loadedData);
    // var theseClasses = loadedData.myclasses;
    // console.log(theseClasses);
    // newComp = theseClasses;


   
    $("#searchClass").autocomplete({
        source: getNames(),
        multiple: true,
        mustMatch: false,

    });

    
    });

        // Overrides the default autocomplete filter function to search for matched on atleast 1 word in each of the input term's words
    // $.ui.autocomplete.filter = function (array, terms) {
    //     arrayOfTerms = terms.split(" ");
    //     var term = $.map(arrayOfTerms, function (tm) {
    //          return $.ui.autocomplete.escapeRegex(tm);
    //     }).join('|');
    //    var matcher = new RegExp("\\b" + term, "i");
    //     return $.grep(array, function (value) {
    //        return matcher.test(value.label || value.value || value);
    //     });
    // };

    function saveClass(major, myclasses, wavedclasses){


      var userID = getID();
      // userID = "10152600780793409";
      obj = {
        _id: userID,
        major: [],
        myclasses: newComp,
        wavedclasses: []
      };
      console.log(obj);
      $.ajax({
        url: '/saveClass',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        error: function(resp){
          console.log("Oh no in client...");
          console.log(resp);
        },
        success: function(resp){
          console.log('WooHoo!');
          console.log(resp);
        }
      });

    };

    function updateClass(major, myclasses, wavedclasses){
      // var userID = "10152600780793406";
      // userID = "10152600780793409";
      // var userID = getID();
      var userID = "10152600780793406";

      var obj = {
        _id: userID,
        major: [],
        myclasses: newComp,
        wavedclasses: []
      };
      console.log(obj);
      $.ajax({
        url: '/updateClass',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        error: function(resp){
          console.log("Oh no in client...");
          console.log(resp);
        },
        success: function(resp){
          console.log('WooHoo!');
          console.log(resp);
        }
      });

    };

    function loadClass(){
      var userID = "10152600780793405";

      allData.nodes = (allData.nodes).concat(instructData.nodes);
      allData.links = (allData.links).concat(instructData.links);
      revAdj = revAdj.concat(instructRevAdj);
      adjList = adjList.concat(instructAdjList);

      // var userID = getID();
      console.log("sendAjax");
      $.ajax({
        url: '/loadClass/'+userID,
        type: 'GET',
        dataType: 'json',
        error: function(resp){
          console.log(resp);
          alert("Oh No! Try a refresh?");
        },
        success: function(resp){
          console.log(resp.error);
          if (resp.error === "not_found"){
            newComp = [1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043];
          }
          else{
            newComp = resp.myclasses;
          }
          putInfo(-1);
          force.start();
          update();
        }
      });

    };





    $(document).ready(function(){
      //<option value="v1">First option, index 0</option> 


    $("#submitButton").click(function (e) {
      var whichClass = parseInt($('#select-list2').val());

      var className = $('#searchClass').val();
      var whichClass = dictClassId[className];
      console.log(className);
      console.log(whichClass);
      clearNodeEdge();

      putInfo(whichClass);
      force.start();
      update();

    });

    $('#searchClass').attr('size', ((offSet/6)|0)-3 );

    $('#compress').click(function (){
      compress();
    });

    $(document).on("keydown", function(e){

      // delete
      if (e.keyCode == 8) {
        if ($('.bounded').length > 0){
          e.preventDefault();
          var classToDelete = $('.bounded').attr("id");
          deleteNode(classToDelete);
        }
      }

      if (e.keyCode == 13){
        if ($('#searchClass').is(':focus')){
          var className = $('#searchClass').val();

          if (className != ""){
            var whichClass = dictClassId[className];
            clearNodeEdge();
            putInfo(whichClass);
            force.start();
            update();
          }

        }
      }

    });

 
      
    });

