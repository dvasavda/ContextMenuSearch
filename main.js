// Variables are set to 0; when options.HTML checked, variables become > 0
// 19 search engines

var googleContextMenuId = 0;
var wikipediaContextMenuId = 0;
var bingContextMenuID = 0;
var duckduckgoContextMenuID = 0;
var yahooContextMenuID = 0;
var baiduContextMenuID = 0;
var youtubeContextMenuID = 0;
var wolframAlphaContextMenuID = 0;
var yandexContextMenuID = 0;
var redditContextMenuID = 0;
var imdbContextMenuID = 0;
var dictionarydotcomContextMenuID = 0;
var thesaurusdotcomContextMenuID = 0;
var stackoverflowContextMenuID = 0;
var githubContextMenuID = 0;
var amazonContextMenuID = 0;
var ebayContextMenuID = 0;
var twitterContextMenuID = 0;
var facebookpeoplesearchContextMenuID = 0;

// Search engine function queries are initialized.
function searchGoogle(word) {
    var query = word.selectionText;

}

function searchWikipedia(word) {
    var query = word.selectionText;

}

function searchBing(word) {
    var query = word.selectionText;

}

function searchDuckDuckGo(word) {
    var query = word.selectionText;

}

function searchYahoo(word) {
    var query = word.selectionText;

}

function searchBaidu(word) {
    var query = word.selectionText;

}

function searchYouTube(word) {
    var query = word.selectionText;

}

function searchWolframAlpha(word) {
    var query = word.selectionText;

}

function searchYandex(word) {
    var query = word.selectionText;

}

function searchReddit(word) {
    var query = word.selectionText;

}

function searchIMDb(word) {
    var query = word.selectionText;

}

function searchDictionarydotcom(word) {
    var query = word.selectionText;

}

function searchThesaurusdotcom(word) {
    var query = word.selectionText;

}

function searchStackOverflow(word) {
    var query = word.selectionText;

}

function searchGithub(word) {
    var query = word.selectionText;

}

function searchAmazon(word) {
    var query = word.selectionText;

}

function searchEbay(word) {
    var query = word.selectionText;

}

function searchTwitter(word) {
    var query = word.selectionText;

}

function searchFacebookPeople(word) {
    var query = word.selectionText;

}

// Browser tab creations are initialized
function search(site,query){
    switch(site){
        case 'google':
            browser.tabs.create({url: "https://www.google.com/search?q=" + query});
            break;
        case 'wikipedia':
            browser.tabs.create({url: "https://wikipedia.org/wiki/" + query});
            break;
        case 'youtube':
            browser.tabs.create({url: "https://www.youtube.com/results?search_query=" + query});
            break;
        case 'bing':
            browser.tabs.create({url: "https://www.bing.com/search?q=" + query});
            break;
        case 'duckduckgo':
            browser.tabs.create({url: "https://duckduckgo.com/?q=" + query});
            break;
        case 'yahoo':
            browser.tabs.create({url: "https://search.yahoo.com/search;_ylc=?p=" + query});
            break;
        case 'baidu':
            browser.tabs.create({url: "http://www.baidu.com/s?ie=utf-8&tn=baidu&wd=" + query});
            break;
        case 'wolframalpha':
            browser.tabs.create({url: "http://www.wolframalpha.com/input/?i=" + query});
            break;
        case 'yandex':
            browser.tabs.create({url: "https://www.yandex.com/search/?&text=" + query});
            break;
        case 'reddit':
            browser.tabs.create({url: "https://www.reddit.com/search?q= " + query});
            break;
        case 'imdb':
            browser.tabs.create({url: "http://www.imdb.com/find?q=" + query});
            break;
        case 'dictionarydotcom':
            browser.tabs.create({url: "http://www.dictionary.com/browse/" + query});
            break;
        case 'thesaurusdotcom':
            browser.tabs.create({url: "http://www.thesaurus.com/browse/" + query});
            break;
        case 'stackoverflow':
            browser.tabs.create({url: "http://stackoverflow.com/search?q=" + query});
            break;
        case 'github':
            browser.tabs.create({url: "https://github.com/search?q=" + query});
            break;
        case 'amazon':
            browser.tabs.create({url: "https://www.amazon.com/s/url=search-alias&field-keywords=" + query});
            break;
        case 'ebay':
            browser.tabs.create({url: "http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2055845.m570.l1313.TR12.TRC2.A0.H0.Xhi.TRS0&_nkw=" + query});
            break;
        case 'twitter':
            browser.tabs.create({url: "https://twitter.com/search?q=" + query});
            break;
        case 'facebookpeoplesearch':
            browser.tabs.create({url: "https://www.facebook.com/public?query=" + query});
            break;
    }
}


// Functions which are linked to options.HTML - if engine select checkbox is
// select checkbox is checked, browser.contextMenus.create
// selected engine.

function enableGoogle() {
    var googleCheckbox = document.getElementById("google");
    if (googleCheckbox.checked) {
        googleContextMenuId = googleContextMenuId || browser.contextMenus.create({
                title: "Google",
                contexts: ["selection"],
                id: 'google'
            });
    }
    else {
        browser.contextMenus.remove(googleContextMenuId);
        googleContextMenuId = 0;
    }
}

function enableWikipedia() {
    var wikipediaCheckbox = document.getElementById("wikipedia");
    if (wikipediaCheckbox.checked) {
        wikipediaContextMenuId = wikipediaContextMenuId || browser.contextMenus.create({
                title: "Wikipedia",
                contexts: ["selection"],
                id: 'wikipedia'
            });
    }
    else {
        browser.contextMenus.remove(wikipediaContextMenuId);
        wikipediaContextMenuId = 0;
    }
}

function enableBing() {
    var bingCheckbox = document.getElementById("bing");
    if (bingCheckbox.checked) {
        bingContextMenuID = bingContextMenuID || browser.contextMenus.create({
                title: "Bing",
                contexts: ["selection"],
                id: 'bing'
            });
    } else {
        browser.contextMenus.remove(bingContextMenuID);
        bingContextMenuID = 0;
    }
}

function enableDuckDuckGo() {
    var duckduckgoCheckbox = document.getElementById("duckduckgo");
    if (duckduckgoCheckbox.checked) {
        duckduckgoContextMenuID = duckduckgoContextMenuID || browser.contextMenus.create({
                title: "DuckDuckGo",
                contexts: ["selection"],
                id: 'duckduckgo'
            });
    } else {
        browser.contextMenus.remove(duckduckgoContextMenuID);
        duckduckgoContextMenuID = 0;
    }
}

function enableYahoo() {
    var yahooCheckbox = document.getElementById("yahoo");
    if (yahooCheckbox.checked) {
        yahooContextMenuID = yahooContextMenuID || browser.contextMenus.create({
                title: "Yahoo",
                contexts: ["selection"],
                id: 'yahoo'
            });
    } else {
        browser.contextMenus.remove(yahooContextMenuID);
        yahooContextMenuID = 0;
    }
}

function enableBaidu() {
    var baiduCheckbox = document.getElementById("baidu");
    if (baiduCheckbox.checked) {
        baiduContextMenuID = baiduContextMenuID || browser.contextMenus.create({
                title: "Baidu",
                contexts: ["selection"],
                id: 'baidu'
            });
    } else {
        browser.contextMenus.remove(baiduContextMenuID);
        baiduContextMenuID = 0;
    }
}

function enableYoutube() {
    var youtubeCheckbox = document.getElementById("youtube");
    if (youtubeCheckbox.checked) {
        youtubeContextMenuID = youtubeContextMenuID || browser.contextMenus.create({
                title: "Youtube",
                contexts: ["selection"],
                id: 'youtube'
            });
    } else {
        browser.contextMenus.remove(youtubeContextMenuID);
        youtubeContextMenuID = 0;
    }
}

function enableWolframAlpha() {
    var wolframAlphaCheckbox = document.getElementById("wolframalpha");
    if (wolframAlphaCheckbox.checked) {
        wolframAlphaContextMenuID = wolframAlphaContextMenuID || browser.contextMenus.create({
                title: "WolframAlpha",
                contexts: ["selection"],
                id: 'wolframalpha'
            });
    } else {
        browser.contextMenus.remove(wolframAlphaContextMenuID);
        wolframAlphaContextMenuID = 0;
    }
}

function enableYandex() {
    var yandexCheckbox = document.getElementById("yandex");
    if (yandexCheckbox.checked) {
        yandexContextMenuID = yandexContextMenuID || browser.contextMenus.create({
                title: "Yandex",
                contexts: ["selection"],
                id: 'yandex'
            });
    } else {
        browser.contextMenus.remove(yandexContextMenuID);
        yandexContextMenuID = 0;
    }
}

function enableReddit() {
    var redditCheckbox = document.getElementById("reddit");
    if (redditCheckbox.checked) {
        redditContextMenuID = redditContextMenuID || browser.contextMenus.create({
                title: "Reddit",
                contexts: ["selection"],
                id: 'reddit'
            });
    } else {
        browser.contextMenus.remove(redditContextMenuID);
        redditContextMenuID = 0;
    }
}

function enableImdb() {
    var imdbCheckbox = document.getElementById("imdb");
    if (imdbCheckbox.checked) {
        imdbContextMenuID = imdbContextMenuID || browser.contextMenus.create({
                title: "IMDb",
                contexts: ["selection"],
                id: 'imdb'
            });
    } else {
        browser.contextMenus.remove(imdbContextMenuID);
        imdbContextMenuID = 0;
    }
}

function enableDictionarydotcom() {
    var dictionarydotcomCheckbox = document.getElementById("dictionarydotcom");
    if (dictionarydotcomCheckbox.checked) {
        dictionarydotcomContextMenuID = dictionarydotcomContextMenuID || browser.contextMenus.create({
                title: "Dictionary.com",
                contexts: ["selection"],
                id: 'dictionarydotcom'
            });
    } else {
        browser.contextMenus.remove(dictionarydotcomContextMenuID);
        dictionarydotcomContextMenuID = 0;
    }
}

function enableThesaurusdotcom() {
    var thesaurusdotcomCheckbox = document.getElementById("thesaurusdotcom");
    if (thesaurusdotcomCheckbox.checked) {
        thesaurusdotcomContextMenuID = thesaurusdotcomContextMenuID || browser.contextMenus.create({
                title: "Thesaurus.com",
                contexts: ["selection"],
                id: 'thesaurusdotcom'
            });
    } else {
        browser.contextMenus.remove(thesaurusdotcomContextMenuID);
        thesaurusdotcomContextMenuID = 0;
    }
}

function enableStackOverflow() {
    var stackoverflowCheckbox = document.getElementById("stackoverflow");
    if (stackoverflowCheckbox.checked) {
        stackoverflowContextMenuID = stackoverflowContextMenuID || browser.contextMenus.create({
                title: "StackOverflow",
                contexts: ["selection"],
                id: 'stackoverflow'
            });
    } else {
        browser.contextMenus.remove(stackoverflowContextMenuID);
        stackoverflowContextMenuID = 0;
    }
}

function enableGitHub() {
    var githubCheckbox = document.getElementById("github");
    if (githubCheckbox.checked) {
        githubContextMenuID = githubContextMenuID || browser.contextMenus.create({
                title: "Github",
                contexts: ["selection"],
                id: 'github'
            });
    } else {
        browser.contextMenus.remove(googleContextMenuID);
        googleContextMenuId = 0;
    }
}

function enableAmazon() {
    var amazonCheckbox = document.getElementById("amazon");
    if (amazonCheckbox.checked) {
        amazonContextMenuID = amazonContextMenuID || browser.contextMenus.create({
                title: "Amazon",
                contexts: ["selection"],
                id: 'amazon'
            });
    } else {
        browser.contextMenus.remove(amazonContextMenuID);
        amazonContextMenuID = 0;
    }
}

function enableEbay() {
    var ebayCheckbox = document.getElementById("ebay");
    if (googleCheckbox.checked) {
        ebayContextMenuID = ebayContextMenuID || browser.contextMenus.create({
                title: "EBay",
                contexts: ["selection"],
                id: 'ebay'
            });
    } else {
        browser.contextMenus.remove(ebayContextMenuID);
        ebayContextMenuID = 0;
    }
}

function enableTwitter() {
    var twitterCheckbox = document.getElementById("twitter");
    if (twitterCheckbox.checked) {
        twitterContextMenuID = twitterContextMenuID || browser.contextMenus.create({
                title: "Twitter",
                contexts: ["selection"],
                id: 'twitter'
            });
    } else {
        browser.contextMenus.remove(twitterContextMenuID);
        console.log('Twitter remove');
        twitterContextMenuID = 0;
        console.log('Twitter set 0');
    }
}

function enableFacebookPeopleSearch() {
    var facebookpeoplesearchCheckbox = document.getElementById("facebookpeoplesearch");
    if (facebookpeoplesearchCheckbox.checked) {
        facebookpeoplesearchContextMenuID = facebookpeoplesearchContextMenuID || browser.contextMenus.create({
                title: "Facebook People Search",
                contexts: ["selection"],
                id: 'facebookpeoplesearch'
            });
    } else {
        browser.contextMenus.remove(facebookpeoplesearchContextMenuID);
        facebookpeoplesearchContextMenuID = 0;
    }
}

function wireContextMenus(){
    browser.contextMenus.onClicked.addListener(function(info, tab) {
        search(info.menuItemId, info.selectionText);
    });
}

// BELOW IS SAVE/RESTORE OPTIONS TO/FROM STORAGE
// Save options from HTML to browser.storage
function saveOptions() {
    var googleChecked = document.getElementById("google").checked;
    var wikipediaChecked = document.getElementById("wikipedia").checked;
    var bingChecked = document.getElementById("bing").checked;
    var duckduckgoChecked = document.getElementById("duckduckgo").checked;
    var yahooChecked = document.getElementById("yahoo").checked;
    var baiduChecked = document.getElementById("baidu").checked;
    var youtubeChecked = document.getElementById("youtube").checked;
    var wolframalphaChecked = document.getElementById("wolframalpha").checked;
    var yandexChecked = document.getElementById("yandex").checked;
    var redditChecked = document.getElementById("reddit").checked;
    var imdbChecked = document.getElementById("imdb").checked;
    var dictionarydotcomChecked = document.getElementById("dictionarydotcom").checked;
    var thesaurusdotcomChecked = document.getElementById("thesaurusdotcom").checked;
    var stackoverflowChecked = document.getElementById("stackoverflow").checked;
    var githubChecked = document.getElementById("github").checked;
    var amazonChecked = document.getElementById("amazon").checked;
    var ebayChecked = document.getElementById("ebay").checked;
    var twitterChecked = document.getElementById("twitter").checked;
    console.log('Twitter saved');
    var facebookpeoplesearchChecked = document.getElementById("facebookpeoplesearch").checked;

    // Tell chrome to sync these options
    localStorage.setItem("contextMenuSearch", JSON.stringify({
        googleChecked: googleChecked,
        wikipediaChecked: wikipediaChecked,
        bingChecked: bingChecked,
        duckduckgoChecked: duckduckgoChecked,
        yahooChecked: yahooChecked,
        baiduChecked: baiduChecked,
        youtubeChecked: youtubeChecked,
        wolframalphaChecked: wolframalphaChecked,
        yandexChecked: yandexChecked,
        redditChecked: redditChecked,
        imdbChecked: imdbChecked,
        dictionarydotcomChecked: dictionarydotcomChecked,
        thesaurusdotcomChecked: thesaurusdotcomChecked,
        stackoverflowChecked: stackoverflowChecked,
        githubChecked: githubChecked,
        amazonChecked: amazonChecked,
        ebayChecked: ebayChecked,
        twitterChecked: twitterChecked,
        facebookpeoplesearchChecked: facebookpeoplesearchChecked
    }));


    var status = document.getElementById('status');
    status.innerHTML = 'Options Saved';

}



function getLocalStorageItem(key) {
    if (typeof(Storage) !== "undefined") {
        var item = JSON.parse(localStorage.getItem(key));
        return item || null;

    } else
        console.log('Web storage not supported');

}

function restoreOptions() {
    var item = getLocalStorageItem('contextMenuSearch');
    if (item) {
        document.getElementById("google").checked = item.googleChecked;
        document.getElementById("wikipedia").checked = item.wikipediaChecked;
        document.getElementById("bing").checked = item.bingChecked;
        document.getElementById("duckduckgo").checked = item.duckduckgoChecked;
        document.getElementById("yahoo").checked = item.yahooChecked;
        document.getElementById("baidu").checked = item.baiduChecked;
        document.getElementById("youtube").checked = item.youtubeChecked;
        document.getElementById("wolframalpha").checked = item.wolframalphaChecked;
        document.getElementById("yandex").checked = item.yandexChecked;
        document.getElementById("reddit").checked = item.redditChecked;
        document.getElementById("imdb").checked = item.imdbChecked;
        document.getElementById("dictionarydotcom").checked = item.dictionarydotcomChecked;
        document.getElementById("thesaurusdotcom").checked = item.thesaurusdotcomChecked;
        document.getElementById("stackoverflow").checked = item.stackoverflowChecked;
        document.getElementById("github").checked = item.githubChecked;
        document.getElementById("amazon").checked = item.amazonChecked;
        document.getElementById("ebay").checked = item.ebayChecked;
        document.getElementById("twitter").checked = item.twitterChecked;
        console.log('Twitter restored');
        document.getElementById("facebookpeoplesearch").checked = item.facebookpeoplesearchChecked;
    }
}

// When checkbox is changed, enableSearchEngine()
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wiring listeners');
 
    if (googleContextMenuId === 0) {
        document.querySelector('input#google').addEventListener('change', enableGoogle);
    }
    if (wikipediaContextMenuId === 0) {
        document.querySelector('input#wikipedia').addEventListener('change', enableWikipedia);
    }
    if (bingContextMenuID === 0) {
        document.querySelector('input#bing').addEventListener('change', enableBing);
    }
    if (duckduckgoContextMenuID === 0) {
        document.querySelector('input#duckduckgo').addEventListener('change', enableDuckDuckGo);
    }
    if (yahooContextMenuID === 0) {
        document.querySelector('input#yahoo').addEventListener('change', enableYahoo);
    }
    if (baiduContextMenuID === 0) {
        document.querySelector('input#baidu').addEventListener('change', enableBaidu);
    }
    if (youtubeContextMenuID === 0) {
        document.querySelector('input#youtube').addEventListener('change', enableYoutube);
    }
    if (wolframAlphaContextMenuID === 0) {
        document.querySelector('input#wolframalpha').addEventListener('change', enableWolframAlpha);
    }
    if (yandexContextMenuID === 0) {
        document.querySelector('input#yandex').addEventListener('change', enableYandex);
    }
    if (redditContextMenuID === 0) {
        document.querySelector('input#reddit').addEventListener('change', enableReddit);
    }
    if (imdbContextMenuID === 0) {
        document.querySelector('input#imdb').addEventListener('change', enableImdb);
    }
    if (dictionarydotcomContextMenuID === 0) {
        document.querySelector('input#dictionarydotcom').addEventListener('change', enableDictionarydotcom);
    }
    if (thesaurusdotcomContextMenuID === 0) {
        document.querySelector('input#thesaurusdotcom').addEventListener('change', enableThesaurusdotcom);
    }
    if (stackoverflowContextMenuID === 0) {
        document.querySelector('input#stackoverflow').addEventListener('change', enableStackOverflow);
    }
    if (githubContextMenuID === 0) {
        document.querySelector('input#github').addEventListener('change', enableGitHub);
    }
    if (amazonContextMenuID === 0) {
        document.querySelector('input#amazon').addEventListener('change', enableAmazon);
    }
    if (ebayContextMenuID === 0) {
        document.querySelector('input#ebay').addEventListener('change', enableEbay);
    }
    if (twitterContextMenuID === 0) {
        document.querySelector('input#twitter').addEventListener('change', enableTwitter);
        console.log('Twitter querySelector input#change');
    }
    if (facebookpeoplesearchContextMenuID === 0) {
        document.querySelector('input#facebookpeoplesearch').addEventListener('change', enableFacebookPeopleSearch);
    }


    document.getElementById('save').addEventListener('click', saveOptions);

    console.log('Listeners setup successfully');

    restoreOptions(); //Read from local storage

    wireContextMenus(); //Wire-up context menus

});





function callback() {
    if (browser.runtime.lastError) {
        console.log(browser.runtime.lastError.message);
    } else {
        // Tab exists
    }
}



window.onunload = function(e) {
    saveOptions();
};


window.onload = function(e) {
    if (localStorage['contextMenuSearch']) {
        restoreOptions();
        enableGoogle();
        enableWikipedia();
        enableBing();
        enableDuckDuckGo();
        enableYahoo();
        enableBaidu();
        enableYoutube();
        enableWolframAlpha();
        enableYandex();
        enableReddit();
        enableImdb();
        enableDictionarydotcom();
        enableThesaurusdotcom();
        enableStackOverflow();
        enableGitHub();
        enableAmazon();
        enableEbay();
        enableTwitter();
        console.log('Twitter enabled onLoad');
        enableFacebookPeopleSearch();
    }
    else {
        var ins = document.getElementsByTagName('input');
        for (var i=0; i<ins.length; i++) 
            {
            if (ins[i].getAttribute('type') == 'checkbox') 
                {
                ins[i].checked = false;
                }
            }
        }
};



// Add listener so when the browser starts up, extension will initialize. It will call all context menu creation functions as well as restore checkboxes



function handleStartup() {  //Read from local storage
    restoreOptions();
    enableGoogle();
    enableWikipedia();
    enableBing();
    enableDuckDuckGo();
    enableYahoo();
    enableBaidu();
    enableYoutube();
    enableWolframAlpha();
    enableYandex();
    enableReddit();
    enableImdb();
    enableDictionarydotcom();
    enableThesaurusdotcom();
    enableStackOverflow();
    enableGitHub();
    enableAmazon();
    enableEbay();
    enableTwitter();
    console.log('Twitter enabled on startup');
    enableFacebookPeopleSearch();
};

browser.runtime.onStartup.addListener(handleStartup);