$(document).ready(function () {
    data = [
        {
            // username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.
            // userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.
            screenshot_img: 'static/images/1.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            owleyes_img: 'static/images/cam1.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 1
            // userLocation: 'Pittsburgh, PA'
        },

        {
            // username: "Paul Irish",
            // userWebsite_href: 'http://paulirish.com',
            screenshot_img: 'static/images/2.jpg',
            owleyes_img: 'static/images/cam2.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 2
            // userLocation: 'San Francisco'

        },

        {
            // username: "Paul Irish",
            // userWebsite_href: 'http://paulirish.com',
            screenshot_img: 'static/images/3.jpg',
            owleyes_img: 'static/images/cam3.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 3
            // userLocation: 'San Francisco'

        },
        {
            // username: "Paul Irish",
            // userWebsite_href: 'http://paulirish.com',
            screenshot_img: 'static/images/4.jpg',
            owleyes_img: 'static/images/cam4.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 4
            // userLocation: 'San Francisco'

        },
        {
            // username: "Paul Irish",
            // userWebsite_href: 'http://paulirish.com',
            screenshot_img: 'static/images/5.jpg',
            owleyes_img: 'static/images/cam5.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 5
            // userLocation: 'San Francisco'

        },
        {
            // username: "Paul Irish",
            // userWebsite_href: 'http://paulirish.com',
            screenshot_img: 'static/images/6.jpg',
            owleyes_img: 'static/images/cam6.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 6
            // userLocation: 'San Francisco'

        }
    ];

    // MagnificPopup
    // var magnifPopup = function() {
    //   $('.image-popup').magnificPopup({
    // $.magnificPopup.open({
    //   autoFocusLast : false,
    //   type: 'inline',
    //   items: data,
    //   removalDelay: 300,
    //   mainClass: 'mfp-with-zoom',
    //   // fixedContentPos: false,
    //   midClick: false,
    //   gallery:{
    //     enabled:true,
    //     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    //     cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 
    //     tError: '<a href="%url%">The image</a> could not be loaded.', // Error message,
    //     tPrev: 'Previous (Left arrow key)', // title for left button
    //     tNext: 'Next (Right arrow key)', // title for right button
    //     tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    //   },
    //   image:{
    //     markup: '<div class="white-popup"><div class="mfp-close"></div>'+
    //     '<a class="mfp-userWebsite">'+
    //       '<div class="mfp-userAvatarUrl"></div>'+
    //       '<h2 class="mfp-username"></h2>'+
    //     '</a>'+
    //     '<div class="mfp-userLocation"></div>'+
    //   '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
    //       cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 
    //       tError: '<a href="%url%">The image</a> could not be loaded.', // Error message
    //       verticalFit: true
    //   },
    //   zoom: {
    //     enabled: true, // By default it's false, so don't forget to enable it

    //     duration: 300, // duration of the effect, in milliseconds
    //     easing: 'ease-in-out', // CSS transition easing function

    //     // The "opener" function should return the element from which popup will be zoomed in
    //     // and to which popup will be scaled down
    //     // By defailt it looks for an image tag:
    //     opener: function(openerElement) {
    //     // openerElement is the element on which popup was initialized, in this case its <a> tag
    //     // you don't need to add "opener" option if this code matches your needs, it's defailt one.
    //       return openerElement.is('img') ? openerElement : openerElement.find('img');
    //     }
    //   },
    //   callbacks:{
    //     elementParse: function(item) {
    //       // Function will fire for each target element
    //       // "item.el" is a target DOM element (if present)
    //       // "item.src" is a source that you may modify

    //       console.log('Parsing content. Item object that is being parsed:', item);
    //     },
    //   }

    // });

    // $.magnificPopup.open({ 
    //   midClick: false,
    //   autoFocusLast : false,
    //   key: 'my-popup', 
    //   items: data,
    //   type: 'inline',
    //   inline: {
    //     // Define markup. Class names should match key names.
    //     markup: '<div class="white-popup"><div class="mfp-close"></div>'+
    //               '<div class="mfp-screenshot"></div>'+
    //               '<div class="mfp-owleyes"></div>'+
    //             '<h2 class="mfp-count"></h2></div>'
    //   },
    //   gallery: {
    //     enabled: true,
    //     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    //     cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 
    //     tError: '<a href="%url%">The image</a> could not be loaded.', // Error message,
    //     tPrev: 'Previous (Left arrow key)', // title for left button
    //     tNext: 'Next (Right arrow key)', // title for right button
    //     tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    //   },
    //   callbacks: {
    //     markupParse: function(template, values, item) {
    //       // optionally apply your own logic - modify "template" element based on data in "values"
    //       // console.log('Parsing:', template, values, item);
    //     }
    //   }
    // });

    // $.magnificPopup.close(); // Close popup that is currently opened (shorthand)

    example_buggy_json = {
        midClick: false,
        autoFocusLast: false,
        key: 'my-popup',
        items: data,
        type: 'inline',
        inline: {
            // Define markup. Class names should match key names.
            markup: '<div class="white-popup"><div class="mfp-close"></div>' +
                '<div style="height: 100%;overflow: scroll;"><div class="mfp-screenshot"></div>' +
                '<div class="mfp-owleyes"></div></div>' +
                '<h2 class="mfp-count"></h2></div>'
        },
        gallery: {
            enabled: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
            tError: '<a href="%url%">The image</a> could not be loaded.', // Error message,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        callbacks: {
            markupParse: function (template, values, item) {
                // optionally apply your own logic - modify "template" element based on data in "values"
                // console.log('Parsing:', template, values, item);
            }
        }
    }

    example_clean_json = {
        midClick: false,
        autoFocusLast: false,
        key: 'my-popup',
        items: [{
            screenshot_img: 'static/images/7.jpg',
            owleyes_img: '', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
            count: 1
        },
            {
                // username: "Paul Irish",
                // userWebsite_href: 'http://paulirish.com',
                screenshot_img: 'static/images/8.jpg',
                owleyes_img: '', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
                count: 2
                // userLocation: 'San Francisco'

            }
        ],
        type: 'inline',
        inline: {
            // Define markup. Class names should match key names.
            markup: '<div class="white-popup"><div class="mfp-close"></div>' +
                '<div style="height: 100%;overflow: scroll;"><div class="mfp-screenshot"></div>' +
                '<div class="mfp-owleyes"></div></div>' +
                '<h2 class="mfp-count"></h2></div>'
        },
        gallery: {
            enabled: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
            tError: '<a href="%url%">The image</a> could not be loaded.', // Error message,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        callbacks: {
            markupParse: function (template, values, item) {
                // optionally apply your own logic - modify "template" element based on data in "values"
                // console.log('Parsing:', template, values, item);
            }
        }
    }

    buggy_json = {
        midClick: false,
        autoFocusLast: false,
        key: 'my-popup',
        items: [],
        type: 'inline',
        inline: {
            // Define markup. Class names should match key names.
            markup: '<div class="white-popup"><div class="mfp-close"></div>' +
                '<div style="height: 100%;overflow: scroll;"><div class="mfp-screenshot"></div>' +
                '<div class="mfp-owleyes"></div></div>' +
                '<h2 class="mfp-count"></h2></div>'
        },
        gallery: {
            enabled: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
            tError: '<a href="%url%">The image</a> could not be loaded.', // Error message,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        callbacks: {
            markupParse: function (template, values, item) {
                // optionally apply your own logic - modify "template" element based on data in "values"
                // console.log('Parsing:', template, values, item);
            }
        }
    }

    clean_json = {
        midClick: false,
        autoFocusLast: false,
        key: 'my-popup',
        items: [],
        type: 'inline',
        inline: {
            // Define markup. Class names should match key names.
            markup: '<div class="white-popup"><div class="mfp-close"></div>' +
                '<div style="height: 100%;overflow: scroll;"><div class="mfp-screenshot"></div>' +
                '<div class="mfp-owleyes"></div></div>' +
                '<h2 class="mfp-count"></h2></div>'
        },
        gallery: {
            enabled: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
            tError: '<a href="%url%">The image</a> could not be loaded.', // Error message,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        callbacks: {
            markupParse: function (template, values, item) {
            }
        }
    }

});