var NewsListing = (function(Handlebars, moment){
    var listing = {},
        rendered = false,
        templates = null,
        $defer = null,
        curCat = null,
        curMonth = null,
        catAll = 'sports,racing,poker',
        limit = null,
        $el, $btnAll, $btnSport, $btnGaming,
        $btnPoker, $ddVal, $ddFilter, $list;

    $defer = $.get('news-list-templates.html', function(r){
        var $html = $('<html>').append(r);
        var newsRegionTemplates = $html.find('#news-region').html(),
            newsItemTemplates = $html.find('#news-item').html();
        templates = {
            newsRegion: Handlebars.compile(newsRegionTemplates),
            newsItem: Handlebars.compile(newsItemTemplates)
        };
    });

    function loading() {
        $el.addClass('loading');
    }

    function endLoading() {
        $el.removeClass('loading');
    }

    function listNews(cat, hard) {
        if (curCat === cat && !hard) return;
        curCat = cat;

        $el.find('#btn-news-' +  curCat)
            .addClass('active')
            .siblings().removeClass('active');

        var $val = $ddFilter.find('a[data-value="' + curMonth + '"]');
        if ($val.length < 0) curMonth = moment().format('YYYYMM');
        $ddVal.html($val.html());

        // loading();
        var keyword = (curCat === '' ? catAll : curCat);




        $.get('/brand/desktop/welcome/config.json?w=32', function(data){
          // Filter categories
  				if(curCat !== '') {
  					data = data.filter(function(item){
  						return item.categories.indexOf(curCat) > -1
  					});
  				}

  				// Empty the list
  				$list.empty();

          if (data.length <= 0) {
              $list.html('<div style="text-align:center;">没有结果。</div>');
              return;
          }

  				var i = 0, c = Math.min(data.length, limit);

  				for (; i<c; i++) {
  						$list.append(templates.newsItem(data[i]));
  				}

        });

    }

    function listAll() {
        listNews('all');
    }

    function listSport() {
        listNews('sports');
    }

    function listLiveCasino() {
        listNews('livecasino');
    }

    function listCasino() {
        listNews('casino');
    }

    function listLottery() {
        listNews('lottery');
    }

    function listHistory() {
        listNews('history');
    }

    function attachEvent() {
        $btnAll.click(function(){
            listAll();
        });
        $btnSport.click(function(){
            listSport();
        });
        $btnLiveCasino.click(function(){
            listLiveCasino();
        });
        $btnCasino.click(function(){
            listCasino();
        });
        $btnLottery.click(function(){
            listLottery();
        });
        $btnHistory.click(function(){
            listHistory();
        });

				/*
        $ddFilter.find('a').click(function(){
            var val = $(this).data('value');
            curMonth = val;
            window.location = '/news.html#' + listing.getParams();
            listNews(curCat, true);
        });
				*/
    }

    function getTimeRange() {
        var from = moment('20170101'),
            to = moment(),
            newsDateRange = [];
        for (var i = to.get('year'); i >= from.get('year'); i--) {
            var maxMonth = (i === to.get('year')) ? to.get('month') : 11;
            for (var j = maxMonth; j >= 0; j--) {
                var m = moment();
                m.set('year', i);
                m.set('month', j);
                newsDateRange.push({
                    value: m.format('YYYYMM'),
                    title: m.format('M月YYYY')
                })
            }
        }
        return newsDateRange;
    }

    listing.render = function($container, defaultCat, defaultMonth, lmt) {
        if (!templates) {
            $defer.done(function(){
                listing.render($container, defaultCat, defaultMonth, lmt);
            });
            return;
        }

        if (rendered) return;
        rendered = true;

        defaultCat = defaultCat || 'all';
        curMonth = defaultMonth || moment().format('YYYYMM');
        limit = lmt || 9999999;
        $el = $(templates.newsRegion({newsDateRange: getTimeRange()}));
        $btnAll = $el.find('#btn-news-all');
        $btnSport = $el.find('#btn-news-sports');
        $btnLiveCasino = $el.find('#btn-news-livecasino');
        $btnCasino = $el.find('#btn-news-casino');
        $btnLottery = $el.find('#btn-news-lottery');
        $btnHistory = $el.find('#btn-news-history');
        $ddVal = $el.find('#news-dd-value');
        $ddFilter = $el.find('#news-dd-filter');
        $list = $el.find('#news-list-container');
        $container.append($el);
        attachEvent();
        listNews(defaultCat);
    }

    listing.listNews = function() {
        listAll();
    }

    listing.isRendered = function() {
        return rendered;
    }

    listing.getParams = function() {
        return 'month=' + curMonth + '&keyword=' + curCat;
    }

    return listing;
})(Handlebars, moment);
