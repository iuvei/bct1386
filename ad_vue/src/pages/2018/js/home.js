var numTogp = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H'
},
    curNum = 0,
    gpTableData = {},
    firstDate = 14, lastDate = 28,
    gpStageScheduleData = {},
    round16Date = [30, 1, 2, 3];

function updateGroupTable(gpStage) {
    var gpCount = Object.keys(gpStage).length;
    for (var i = 0; i < gpCount; i++) {
        var teams = gpTableData[numTogp[i]];

        for (var j = 0; j < 4; j++) {
            // console.log(teams[j]);
            $('#nation-flag' + gpStage[i] + j).attr("src", "/brand/desktop/welcome/img/icon_group/icon_" + teams[j].tId + ".png");
            $('#teamName' + gpStage[i] + j).text(teams[j].teamName);
            $('#gf' + gpStage[i] + j).text(teams[j].gf);
            $('#pts' + gpStage[i] + j).text(teams[j].pts);
        }
    }
}

function appendGroupTable(gpStage) {
    var gpCount = Object.keys(gpStage).length, _html = "";

    for (var i = 0; i < gpCount; i++) {
        _html +=
            '           <div class="group-stage-inner">  ' +
            '             <div class="group-stage-table-container">  ' +
            '               <ul id="gp" class="group-stage-table-inner">  ' +
            '                 <li class="table-title">  ' +
            '                   <div class="title-group">  ' +
            '                     <span id="gp-title" class="gp-tilte">' + gpStage[i] + '</span>&nbspGROUP</div>  ' +
            '                   <div class="title-points-goals">分 | 球</div>  ' +
            '                 </li>  ' +
            '                 <li class="table-team">  ' +
            '                   <table id="wc-gp">  ' +
            '                     <tr>  ' +
            '                       <td>  ' +
            '                         <img id="nation-flag' + gpStage[i] + '0" class="nation-flag" src="" alt="center" />  ' +
            '                       </td>  ' +
            '                       <td id="teamName' + gpStage[i] + '0" class="gp-team-title">&nbsp</td>  ' +
            '                       <td id="pts' + gpStage[i] + '0" class="team-points">0</td>  ' +
            '                       <td id="gf' + gpStage[i] + '0" class="team-goals">0</td>  ' +
            '                     </tr>  ' +
            '                     <tr>  ' +
            '                       <td>  ' +
            '                         <img id="nation-flag' + gpStage[i] + '1" class="nation-flag" src="" alt="center" />  ' +
            '                       </td>  ' +
            '                       <td id="teamName' + gpStage[i] + '1" class="gp-team-title">&nbsp</td>  ' +
            '                       <td id="pts' + gpStage[i] + '1" class="team-points">0</td>  ' +
            '                       <td id="gf' + gpStage[i] + '1" class="team-goals">0</td>  ' +
            '                     </tr>  ' +
            '                     <tr>  ' +
            '                       <td>  ' +
            '                         <img id="nation-flag' + gpStage[i] + '2" class="nation-flag" src="" alt="center" />  ' +
            '                       </td>  ' +
            '                       <td id="teamName' + gpStage[i] + '2" class="gp-team-title">&nbsp</td>  ' +
            '                       <td id="pts' + gpStage[i] + '2" class="team-points">0</td>  ' +
            '                       <td id="gf' + gpStage[i] + '2" class="team-goals">0</td>  ' +
            '                     </tr>  ' +
            '                     <tr>  ' +
            '                       <td>  ' +
            '                         <img id="nation-flag' + gpStage[i] + '3" class="nation-flag" src="" alt="center" />  ' +
            '                       </td>  ' +
            '                       <td id="teamName' + gpStage[i] + '3" class="gp-team-title">&nbsp</td>  ' +
            '                       <td id="pts' + gpStage[i] + '3" class="team-points">0</td>  ' +
            '                       <td id="gf' + gpStage[i] + '3" class="team-goals">0</td>  ' +
            '                     </tr>  ' +
            '                   </table>  ' +
            '                 </li>  ' +
            '               </ul>  ' +
            '             </div>  ' +
            '             <div class="table-shadow"></div>  ' +
            '          </div>  ';
    }

    $('#group-stage').append(_html);
}

function isHighlightOfToday(num) {
    var currentDate = new Date(),
        month = currentDate.getMonth() + 1,
        day = currentDate.getDate();

    if (month === 6 && day >= 14 && day <= 28) {
        if (num === day) {
            return true;
        }
    } else { return false; }
}

function getScheduleTableData() {

    appendWeekSchedule();

    var rawData = {};
    $.get("/brand/common/wc_gpStage.json", null, function (res) {
        rawData = res;
        updateScheduleTable(numTogp, rawData);

    }).fail(function () {
        appendWeekSchedule();
    });
}

function teamNameWidthAdjust(homeLength, awayLength, date, match) {
    if (homeLength > 2 && homeLength < 4) {
        $('#homeName' + date + '-' + match).css("width", "50%");
    } else if (homeLength === 4) {
        $('#homeName' + date + '-' + match).css("width", "65%");
    } else if (homeLength > 4) {
        $('#homeName' + date + '-' + match).css("width", "80%");
    }

    if (awayLength > 2 && awayLength < 4) {
        $('#awayName' + date + '-' + match).css("width", "50%");
    } else if (awayLength === 4) {
        $('#awayName' + date + '-' + match).css("width", "65%");
    } else if (awayLength > 4) {
        $('#awayName' + date + '-' + match).css("width", "80%");
    }
}

function convertTimezone(time, offset) {
    var d = time;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * offset));
    return nd;
}

function updateScheduleTable(gpStage, sourceData) {
    var gpCount = Object.keys(gpStage).length,
        matches = [],
        matches16 = [];

    var groupStage = sourceData.groups
    for (var group in groupStage) {
        matches = matches.concat(groupStage[group].matches);
    }
    var round_16 = sourceData.knockout.round_16.matches;
    for (var i in round_16) {
        if (!!round_16[i].mId) {
            matches16 = matches16.concat(round_16[i]);
        }
    }

    matches.sort(function (a, b) {
        var x = new Date(a.date), y = new Date(b.date);
        return convertTimezone(x, -4) - convertTimezone(y, -4);
    });
    for (var h = firstDate; h <= lastDate; h++) {
        var matchCounter = 1;
        for (var i = 0; i < matches.length; i++) {

            var tempTimeZone = new Date(matches[i].date),
                eastAmericaTime = convertTimezone(tempTimeZone, -4);

            if (eastAmericaTime.getDate() == h) {
                $('#homeFlags' + h + '-' + matchCounter).removeClass('hidden');
                $('#homeGF' + h + '-' + matchCounter).removeClass('hidden');
                $('#awayFlags' + h + '-' + matchCounter).removeClass('hidden');
                $('#awayGF' + h + '-' + matchCounter).removeClass('hidden');
                $('#vs-text' + h + '-' + matchCounter).removeClass(' hidden');
                $('#verus-time' + h + '-' + matchCounter).removeClass(' hidden');

                $('#homeFlags' + h + '-' + matchCounter).css("background", "url(/brand/desktop/welcome/img/icon_schedule/icon_" + matches[i].home_team_id + ".png)");
                $('#awayFlags' + h + '-' + matchCounter).css("background", "url(/brand/desktop/welcome/img/icon_schedule/icon_" + matches[i].away_team_id + ".png)");

                var homeLength = matches[i].home_team.length,
                    awayLength = matches[i].away_team.length;

                teamNameWidthAdjust(homeLength, awayLength, h, matchCounter);

                $('#homeName' + h + '-' + matchCounter).text(matches[i].home_team);
                $('#awayName' + h + '-' + matchCounter).text(matches[i].away_team);

                var curTimeIn12 = eastAmericaTime.getHours() + ":" + eastAmericaTime.getMinutes(),
                    curTimeIn24 = moment(curTimeIn12, "h:mm A").format("HH:mm");

                $('#verus-time' + h + '-' + matchCounter).text(curTimeIn24);

                matchCounter++;
            }
        }
    }

    matches16.sort(function (a, b) {
        var x = new Date(a.date), y = new Date(b.date);
        return convertTimezone(x, -4) - convertTimezone(y, -4);
    });
    for (var j in round16Date) {
        // console.log(i, round16Date[i]);
        var h = round16Date[j];
        var matchCounter = 1;
        for (var i = 0; i < matches16.length; i++) {
            if (!matches16[i].mId) {
                continue;
            }

            var tempTimeZone = new Date(matches16[i].date),
                eastAmericaTime = convertTimezone(tempTimeZone, -4);

            if (eastAmericaTime.getDate() == h) {
                console.log('matches16 , ', i, matches16[i])
                console.log(eastAmericaTime.getDate(), h);
                $('#homeFlags' + h + '-' + matchCounter).removeClass('hidden');
                $('#homeGF' + h + '-' + matchCounter).removeClass('hidden');
                $('#awayFlags' + h + '-' + matchCounter).removeClass('hidden');
                $('#awayGF' + h + '-' + matchCounter).removeClass('hidden');
                $('#vs-text' + h + '-' + matchCounter).removeClass(' hidden');
                $('#verus-time' + h + '-' + matchCounter).removeClass(' hidden');

                $('#homeFlags' + h + '-' + matchCounter).css("background", "url(/brand/desktop/welcome/img/icon_schedule/icon_" + matches16[i].home_team_id + ".png)");
                $('#awayFlags' + h + '-' + matchCounter).css("background", "url(/brand/desktop/welcome/img/icon_schedule/icon_" + matches16[i].away_team_id + ".png)");

                var homeLength = matches16[i].home_team.length,
                    awayLength = matches16[i].away_team.length;

                teamNameWidthAdjust(homeLength, awayLength, h, matchCounter);

                $('#homeName' + h + '-' + matchCounter).text(matches16[i].home_team);
                $('#awayName' + h + '-' + matchCounter).text(matches16[i].away_team);

                var curTimeIn12 = eastAmericaTime.getHours() + ":" + eastAmericaTime.getMinutes(),
                    curTimeIn24 = moment(curTimeIn12, "h:mm A").format("HH:mm");

                $('#verus-time' + h + '-' + matchCounter).text(curTimeIn24);

                matchCounter++;
            }
        }
    }
}
function appendWeekSchedule() {
    var _html = "",
        week6 = {
            0: '四',
            1: '五',
            2: '六',
            3: '日',
            4: '一',
            5: '二',
            6: '三',
        },
        week7 = {
            0: '六',
            1: '日',
            2: '一',
            3: '二',
            4: '三',
            5: '四',
            6: '五',
        };

    for (var i = firstDate; i <= lastDate; i++) {
        var weekday = i % 7;
        _html +=
            '                 <div id="group-schedule-days-' + i + '" class="group-schedule-days-container">  ' +
            '                   <div class="group-schedule-days-inner">  ' +
            '                     <div id="matchWeek" class="week-title monday">星期' + week6[weekday] + '</div>  ' +
            '                     <div class="days-match-container">  ' +
            '                       <div id="matchDay' + i + '" class="day-title' + (isHighlightOfToday(i) ? " today-title" : "") + '">6月' + i + '日</div>  ' +
            '                       <div id="matchDayDetail' + i + '" class="days-detail-container">  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-1' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-1' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-1' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-1' + '" class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-1' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-1' + '" class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-1' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-1' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-2' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-2' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-2' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-2' + '"  class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-2' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-2' + '" class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-2' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-2' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-3' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-3' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-3' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-3' + '"  class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-3' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-3' + '" class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-3' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-3' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-4' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-4' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-4' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-4' + '"  class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-4' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-4' + '"  class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-4' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-4' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                       </div>  ' +
            '                     </div>  ' +
            '                   </div>  ' +
            '                </div>  ';
    }

    for (var j in round16Date) {
        var i = round16Date[j];
        var weekday, month;
        if (i === 30) {
            weekday = week6[i % 7];
            month = 6;
        } else {
            weekday = week7[i % 7];
            month = 7;
        }
        _html +=
            '                 <div id="group-schedule-days-' + i + '" class="group-schedule-days-container">  ' +
            '                   <div class="group-schedule-days-inner">  ' +
            '                     <div id="matchWeek" class="week-title monday">星期' + weekday + '</div>  ' +
            '                     <div class="days-match-container">  ' +
            '                       <div id="matchDay' + i + '" class="day-title' + (isHighlightOfToday(i) ? " today-title" : "") + '">' + month + '月' + i + '日</div>  ' +
            '                       <div id="matchDayDetail' + i + '" class="days-detail-container">  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-1' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-1' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-1' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-1' + '" class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-1' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-1' + '" class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-1' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-1' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-2' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-2' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-2' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-2' + '"  class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-2' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-2' + '" class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-2' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-2' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-3' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-3' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-3' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-3' + '"  class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-3' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-3' + '" class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-3' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-3' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                         <div class="days-match-detail">  ' +
            '                           <div class="home-team-container">  ' +
            '                             <div id="homeFlags' + i + '-4' + '" class="home-team-flag hidden"></div>  ' +
            '                             <div id="homeGF' + i + '-4' + '" class="home-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                           <div class="team-detail-container">  ' +
            '                             <div class="team-detail-inner">  ' +
            '                               <div class="home-verus-away-container">  ' +
            '                                 <div class="home-verus-away-text">  ' +
            '                                   <div id="homeName' + i + '-4' + '" class="home-team-name"></div>  ' +
            '                                   <div id="vs-text' + i + '-4' + '"  class="vs-text hidden"> VS </div>  ' +
            '                                   <div id="awayName' + i + '-4' + '" class="away-team-name"></div>  ' +
            '                                 </div>  ' +
            '                               </div>  ' +
            '                               <div id="verus-time' + i + '-4' + '"  class="verus-time hidden"></div>  ' +
            '                             </div>  ' +
            '                           </div>  ' +
            '                           <div class="away-team-container">  ' +
            '                             <div id="awayFlags' + i + '-4' + '" class="away-team-flag hidden"></div>  ' +
            '                             <div id="awayGF' + i + '-4' + '" class="away-team-gf gf-hidden">0</div>  ' +
            '                           </div>  ' +
            '                         </div>  ' +
            '                       </div>  ' +
            '                     </div>  ' +
            '                   </div>  ' +
            '                </div>  ';
    }

    $('#group-schedule-weekdays').append(_html);

}
var lastWidth = 0;

function scheduleUpToDate() {
    var currentDate = new Date(),
        today = currentDate.getDate(),
        weekContainer = $('#group-schedule-weekdays');

    lastWidth = (26 - firstDate) * 190 * -1
    weekContainer.css('margin-left', lastWidth + 'px');
}

function scheduleSlider(_current) {
    var weekContainer = $('#group-schedule-weekdays'),
        leftWidth = -190, rightWidth = 190;

    if (_current == "next" && lastWidth > -(190 * 12)) {
        lastWidth += leftWidth;
        weekContainer.css("margin-left", lastWidth + "px");
    } else if (_current == "next" && lastWidth == -(190 * 12)) {
        return;
        // lastWidth = 0;
        // weekContainer.css("margin-left", lastWidth + "px");
    }

    if (_current == "prev" && lastWidth < 0) {
        lastWidth += rightWidth;
        weekContainer.css("margin-left", lastWidth + "px");
    }
    // } else if (_current == "prev" && lastWidth >= 0) {
    //     return;
    //     // lastWidth = 0;
    //     // weekContainer.css("margin-left", lastWidth + "px");
    // }
}

function appendFooter(footer) {
    parent.scrollTo(0, 0);
    $('body').append(footer || parent.footerCache);
    // parent.changeHeight(document.body.offsetHeight);
}

$(document).ready(function () {
    NewsListing.render($('#news-container'), 'all', null);
    $('#news-readmore').click(function (e) {
        e.preventDefault();
        window.location = '/news.html#' + NewsListing.getParams();
    });

    getScheduleTableData();
    scheduleUpToDate();

    $.get("/info/wc/getWcInfo", null, function (res) {
        gpTableData = res.wcGpRecords;
        appendGroupTable(numTogp);
    }).done(function () {
        updateGroupTable(numTogp);
    }).fail(function () {
        appendGroupTable(numTogp);
    });

    $.get('/brand/desktop/welcome/footer.html?tt=' + Date.now())
        .then(function (res) {
            appendFooter(res.replace(/{{brand_name}}/g, parent.AccountService.getSystemSetting().WEB_TITLE));
        });

    // document.getElementsByClassName("S-IOSAPK-0217")[0].addEventListener('click', function () {
    //     var video=parent.document.getElementsByClassName('popUpVideo')[0];
    //     $(video).show();
    //     $(video).find('video').get(0).play();
    // } );

    updateWcLive();
});

var pt = 1;
var mId;
var isLive = false;
function updateWcLive() {
    pt = 1;
    $.post('/odds2/d/getodds', { sid: 1, pt: pt, ubt: 'am', pn: 0, sb: 2, dc: null, pid: 202 })
        .then(function (res) {
            isLive = true;
            var live = res['i-ot'];
            if (Array.isArray(live.egs)) {
                for (var j in live.egs) {
                    var league = live.egs[j];
                    if (league.c.k === 27609 && Array.isArray(league.es)) {
                        for (var i in league.es) {
                            if (league.es[i].pci.ctid === 0) {
                                updateDetail(league.es[i].i, true);
                                return;
                            }
                        }
                    }
                }
            }

            isLive = false;
            var nonLive = res['n-ot'];
            if (Array.isArray(nonLive.egs)) {
                for (var j in nonLive.egs) {
                    var league = nonLive.egs[j];
                    if (league.c.k === 27609 && Array.isArray(league.es)) {
                        for (var i in league.es) {
                            if (league.es[i].pci.ctid === 0) {
                                updateDetail(league.es[i].i, false);
                                return;
                            }
                        }
                    }
                }
            }

            // search in today
            pt = 2;
            $.post('/odds2/d/getodds', { sid: 1, pt: pt, ubt: 'am', pn: 0, sb: 2, dc: null, pid: 202 })
                .then(function (res) {
                    nonLive = res['n-ot'];
                    if (Array.isArray(nonLive.egs)) {
                        for (var j in nonLive.egs) {
                            var league = nonLive.egs[j];
                            if (league.c.k === 27609 && Array.isArray(league.es)) {
                                for (var i in league.es) {
                                    if (league.es[i].pci.ctid === 0) {
                                        updateDetail(league.es[i].i, false);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                });
        });
}

var countryId = {
    0: 'russia',
    1: 'saudi_arabia',
    2: 'egypt',
    3: 'uruguay',
    4: 'portugal',
    5: 'spain',
    6: 'morocco',
    7: 'Iran',
    8: 'france',
    9: 'australia',
    10: 'peru',
    11: 'denmark',
    12: 'argentina',
    13: 'iceland',
    14: 'croatia',
    15: 'nigeria',
    16: 'brazil',
    17: 'switzerland',
    18: 'costa_rica',
    19: 'serbia',
    20: 'germany',
    21: 'mexico',
    22: 'sweden',
    23: 'korea',
    24: 'belgium',
    25: 'panama',
    26: 'tunisia',
    27: 'england',
    28: 'poland',
    29: 'senegal',
    30: 'colombia',
    31: 'japan',
};
var teamName = ['俄罗斯', '沙特阿拉伯', '埃及', '乌拉圭', '葡萄牙', '西班牙', '摩洛哥', '伊朗', '法国', '澳大利亚', '秘鲁', '丹麦', '阿根廷', '冰岛', '克罗地亚', '尼日利亚', '巴西', '瑞士', '哥斯达黎加', '塞尔维亚', '德国', '墨西哥', '瑞典', '韩国', '比利时', '巴拿马', '突尼斯', '英格兰', '波兰', '塞内加尔', '哥伦比亚', '日本'];

var nthMatchDate = {
    '14 / 06': 1,
    '15 / 06': 2,
    '16 / 06': 3,
    '17 / 06': 4,
    '18 / 06': 5,
    '19 / 06': 6,
    '20 / 06': 7,
    '21 / 06': 8,
    '22 / 06': 9,
    '23 / 06': 10,
    '24 / 06': 11,
    '25 / 06': 12,
    '26 / 06': 13,
    '27 / 06': 14,
    '28 / 06': 15,
    '29 / 06': 16,
};
var nthRound16Date = {
    '30 / 06': 1,
    '01 / 07': 2,
    '02 / 07': 3,
    '03 / 07': 4,
};
var isHalf = false;
var runningTime = 0;
var runningTimer,
    flagImgPath = "/brand/desktop/welcome/img/recommend_icon_";
var liveDataTimer;
function updateDetail(info, isLive) {
    mId = info[16];
    $('#home-team').text(info[0]);
    $('#away-team').text(info[1]);
    // $('#match-day').text('第' + (nthMatchDate[info[4]] || 1) + '个比賽日');

    var tId = teamName.indexOf(info[0]);
    $('#home-team-img').attr("src", flagImgPath + countryId[tId] + '.png');
    $('#away-team-img').attr("src", flagImgPath + countryId[teamName.indexOf(info[1])] + '.png');

    if (isLive) {
        if (!!nthMatchDate[info[4]]) {
            $('#match-group').text('正在进行 小組賽' + numTogp[Math.floor(tId / 4)] + '组分组赛');
        } else {
            $('#match-group').text('正在进行 16強比赛');
        }
        $('#match-result').text(info[10] + ' - ' + info[11]);
        if (info[10] !== info[11]) {
            $('.pos-bar__mask').width(((info[10] * 100) / ((info[11] * 1) + (info[10] * 1))) + '%');
        }

        if (info[12] === '') {
            $('#match-time').text(info[4] + ' / 18 - 正在进行');
        } else if (info[12] === '半场') {
            isHalf = true;
            clearTimeout(runningTimer);
            updateRunningTime();
        } else {
            isHalf = false;

            var times = info[5].split(':');
            var newRunningTime = parseInt(times[0], 10) * 60 + parseInt(times[1], 10);
            if (Math.abs(newRunningTime - runningTime) > 6) {
                // if diff is too large
                runningTime = newRunningTime;

                clearTimeout(runningTimer);
                updateRunningTime(runningTime, info[12]);
                runningTimer = setTimeout(function () { updateRunningTime(runningTime, info[12]); }, 1000);
            }
        }
        liveDataTimer = setTimeout(updateWcLive, 30000);
    } else {
        if (!!nthMatchDate[info[4]]) {
            $('#match-group').text('即将进行 小組賽' + numTogp[Math.floor(tId / 4)] + '組');
        } else {
            $('#match-group').text('即将进行 16強比赛');
        }
        $('#match-result').text(' VS ');
        $('#match-time').text(info[4] + ' / 18 - 即将开赛'); // info[4]: "DD / MM"

        var startTime = info[5].replace(':', '');
        for (var i in [0, 1, 2, 3]) {
            $('#inplay-time' + i).text(startTime[i]);
        }
    }
}

function updateRunningTime(runningTime, section) {
    if (isHalf) {
        $('#match-time').text('半场 45:00');
    } else {
        var minutes = Math.floor(runningTime / 60) + '';
        if (minutes.length === 1) {
            minutes = '0' + minutes;
        }

        var seconds = (runningTime % 60) + '';
        if (seconds.length === 1) {
            seconds = '0' + seconds;
        }
        $('#match-time').text(section + ' ' + minutes + ':' + seconds);
        runningTime = runningTime + 1;
    }
    clearTimeout(runningTimer);
    runningTimer = setTimeout(function () { updateRunningTime(runningTime, section); }, 1000);
}
