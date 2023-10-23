import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series-info')!;
const averageSeasonElm: HTMLElement = document.getElementById("average-seasons")!;
let seriesCardElm: HTMLElement = document.getElementById("series-cards")!;

renderSeriesInTable(series);

averageSeasonElm.innerHTML = `Average number of seasons: ${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series en la tabla...');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.className = "clickable-element";
    trElement.innerHTML = `<th class="firstnum" scope="row">${serie.num}</th>
                           <td class="seriesname">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;

    trElement.addEventListener("click", () => { showSeriesCard(serie); });
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return totalSeasons / series.length;
}

function showSeriesCard(serie: Serie): void {
  console.log('Mostrando detalles de serie...');
  seriesCardElm.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${serie.picture}" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">${serie.name}</h5>
                              <p class="card-text">${serie.description}</p>
                            </div>
                            <div class="card-body">
                              <a href="${serie.link}" class="card-link" target="_blank">${serie.link}</a>
                            </div>
                          </div>`;
}