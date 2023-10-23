import { series } from './data.js';
var seriesTbody = document.getElementById('series-info');
var averageSeasonElm = document.getElementById("average-seasons");
var seriesCardElm = document.getElementById("series-cards");
renderSeriesInTable(series);
averageSeasonElm.innerHTML = "Average number of seasons: ".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series en la tabla...');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.className = "clickable-element";
        trElement.innerHTML = "<th class=\"firstnum\" scope=\"row\">".concat(serie.num, "</th>\n                           <td class=\"seriesname\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener("click", function () { showSeriesCard(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
function showSeriesCard(serie) {
    console.log('Mostrando detalles de serie...');
    seriesCardElm.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                            <img src=\"".concat(serie.picture, "\" class=\"card-img-top\">\n                            <div class=\"card-body\">\n                              <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                              <p class=\"card-text\">").concat(serie.description, "</p>\n                            </div>\n                            <div class=\"card-body\">\n                              <a href=\"").concat(serie.link, "\" class=\"card-link\" target=\"_blank\">").concat(serie.link, "</a>\n                            </div>\n                          </div>");
}
