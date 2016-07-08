import { MusicSheetAPI } from "opensheetmusicdisplay";

let osmd: MusicSheetAPI = new MusicSheetAPI();
setupCanvas();

function setupCanvas() {
	let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);
    osmd.setCanvas(canvas);
    osmd.setWidth(800);
    loadMusicXML("node_modules/opensheetmusicdisplay/test/data/MuzioClementi_SonatinaOpus36No1_part1.xml");
};

function loadMusicXML(url: string) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
	   switch (xhttp.readyState) {
	      case 0 : // UNINITIALIZED
	      case 1 : // LOADING
	      case 2 : // LOADED
	      case 3 : // INTERACTIVE
	      break;
	      case 4 : // COMPLETED
	      	osmd.load(xhttp.responseXML);
	      	break;
	      default:
	      	throw("Error loading MusicXML.");
	   }
	}
   xhttp.open("GET", url, true);
   xhttp.send();
 }