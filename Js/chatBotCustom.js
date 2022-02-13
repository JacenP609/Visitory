
const search = ({
    data
  }) => {
    var jsn = JSON.parse(data);
    var res = "[";
    for (var element of jsn) {
      var keys = Object.keys(element);
  
          // step 1: WHEN
      // search data within a certain period of time
      if (keys.indexOf('lastVisitTime')) {
        // timestamp (front-end) @@@@@
        // id: when
        var value = element["lasVisitTime"];
        if(value<document.getElementById("when")){
          break;
        }
      } else 
        continue;
  
      // step 2: WHERE
      // check if 'url' contains user input (where)
      if (keys.indexOf('url')) {
        // var url = element.url.split(/&|\?/);
        // if (!url[0].indexOf(document.getElementById('where')))
        //    continue; // 'where' not found
      } else
        continue;
  
      // step 3: KEYWORD
      // check if 'title' contains user input (keyword)
      if (keys.indexOf('title')) {
        // var keywords = document.getElementById('key').value;
        // var flag = new Boolean(0);
        // keywords.forEach(e => {
        //   if (!element.title.indexOf(e)) {
        //     flag = new Boolean(true);
        //     break;
        //   }
        // });
  
        if (flag)
          continue;
      } else
        continue;
  
      // all pass
      var comma = ", ";
      res = res.concat(comma.concat(JSON.stringify(element)));
    }
  
    res = res.concat(']').replace(/^\[,\s*/, "["); // remove first comma
    document.getElementById("content").innerText = res;
  };