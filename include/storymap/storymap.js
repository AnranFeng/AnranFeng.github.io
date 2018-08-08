// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1995-",
      text: {
        headline: "The Storymap of Anran",
        text: "<p>Hello, stranger.<br> I am Anran. <br> Let's take a trip.</p>"
      },
      media: {
        url: "",
        credit: "",
        caption: ""
      }
    }, {
      date: "1995-2013",
      text: {
        headline: "EMEI, SICHUAN",
        text: "<p>In 1995, I was born in Emei, a little town of Sichuan. This mountainous town often appears in Chinese myths and legends, and the martial arts fictions. In such a place full of fairyland atmosphere, just like its name, I grew up.</p>"
      },
      location: {
        name: "Emei",
        lat: 29.5184,
        lon: 103.3261,
        zoom: 500,
        line: true
      },
      media: {
        url: "include/storymap/emei.JPG",
        type: "image",
        credit: "by Anran",
        caption: "Mt.Emei in the fog"
      }

    }, {
      date: "2013-2017",
      text: {
        headline: "NANJING UNIVERSITY",
        text: "<p>From 2013, I had 4 years in NJU, one of the oldest universities in China. I majored in Advertising in the School of Journalism and Communication, where I had a cherished memory.</p> "
      },
      location: {
        name: "Nanjing",
        lat: 32.05347,
        lon: 118.78035,
        zoom: 500,
        line: true
      },
      media: {
        url: "include/storymap/nanjing.jpeg",
        credit: "by Chenxin",
        caption: "Gulou campus, NJU"
      }

    }, {
      date: "2016",
      text: {
        headline: "NATIONAL CHENGCHI UNIVERSITY",
        text: "<p>In 2016, I attended a one-semester exchange programme to NCCU in Taiwan. I had a dream-like life here. During this period, I stepped on almost every places in this island. And it is just as warm and beautiful as it is in films.</p> "
      },
      location: {
        name: "taiwan",
        lat: 24.9854 ,
        lon: 121.5741,
        zoom:500,
        line: true
      },
      media: {
        url: "include/storymap/taiwan.JPG",
        credit: "Anonymous",
        caption: "A rainy day in NCCU"
      }
        
    }, {
      date: "2016",
      text: {
        headline: "JIANGSHU TV",
        text: "<p>In 2016 summer, back from Taiwan, I interned in JSTV, as a planning assistant of advertisement department. This is my first internship, from which I learned a lot.</p> "
      },
      location: {
        name: "jstv",
        lat: 32.0468555 ,
        lon: 118.7834957,
        zoom:500,
        line: true
      },
      media: {
        url: "include/storymap/jstv.JPG",
        credit: "by Anran",
        caption: "JSTV buliding"
      }
    }, {
      date: "2017",
      text: {
        headline: "SHANBAY.INC",
        text: "<p>In 2017 spring, I got my second internship in Shanbay, an internet corporate which already made a name for offering a well-known education App. The fresh experience I obtained here is quite different from the traditional media.</p> "
      },
      location: {
        name: "shanbay",
        lat: 32.0963208 ,
        lon: 118.8828083,
        zoom:500,
        line: true
      },
      media: {
        url: "include/storymap/shanbay.JPG",
        credit: "shanbay.inc",
        caption: "The workplace in Shanbay"
      }      
    }, {
      date: "2017-",
      text: {
        headline: "CHINESE UNIVERSITY OF HONG KONG",
        text: "<p>After graduated from NJU, I came to hong kong for future study. Now, at the Chinese University of Hong Kong, I am trying to finish my Master degree of Science in New Media. I believe it will be a tough but meaningful year.</p> "
      },
      location: {
        name: "cuhk",
        lat: 22.4160966 ,
        lon: 114.2096053,
        zoom:500,
        line: true
      },
      media: {
        url: "include/storymap/cuhk.JPG",
        credit: "cuhk",
        caption: "Pavilion of Harmony in CUHK"
      }   
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'mapbox:mapbox.run-bike-hike',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}