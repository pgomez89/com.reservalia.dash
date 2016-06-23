import { CHANGE_FILTER , CHANGE_PAGE_NUMBER, SELECT_SHOW_ROWS} from '../constants/ActionTypes';

let itemsPerPage = 10;
let items =100;
let pages = Math.ceil(items / itemsPerPage);

const initialState = {
    data: [
        {
            id: "245530",
            host: "www.serenabuzios.com.ar",
            sinDisponibilidad: "61",
            total: "1013"
        },
        {
            id: "263748",
            host: "www.rochesterbariloche.com.ar",
            sinDisponibilidad: "52",
            total: "446"
        },
        {
            id: "265830",
            host: "www.hotelcasamayamexico.com",
            sinDisponibilidad: "45",
            total: "253"
        },
        {
            id: "331131",
            host: "www.hotelmonserratba.com",
            sinDisponibilidad: "41",
            total: "557"
        },
        {
            id: "228626",
            host: "www.reservashotelmarbella.com",
            sinDisponibilidad: "36",
            total: "438"
        },
        {
            id: "310438",
            host: "www.altoandinohotel.com",
            sinDisponibilidad: "34",
            total: "351"
        },
        {
            id: "592141",
            host: "www.hotelriobranco.net",
            sinDisponibilidad: "34",
            total: "365"
        },
        {
            id: "241545",
            host: "www.rochesterclassic.com.ar",
            sinDisponibilidad: "33",
            total: "825"
        },
        {
            id: "331453",
            host: "www.hotelpatagoniaplaza.com.ar",
            sinDisponibilidad: "33",
            total: "389"
        },
        {
            id: "354448",
            host: "www.hotellapasion.com",
            sinDisponibilidad: "33",
            total: "418"
        },
        {
            id: "310546",
            host: "www.hostaldelbosque.com.ar",
            sinDisponibilidad: "32",
            total: "238"
        },
        {
            id: "401471",
            host: "www.hercuscopacabana.com",
            sinDisponibilidad: "31",
            total: "165"
        },
        {
            id: "359752",
            host: "www.tierragauchahostel1.com.ar",
            sinDisponibilidad: "30",
            total: "162"
        },
        {
            id: "610284",
            host: "www.confortel.com.br",
            sinDisponibilidad: "27",
            total: "198"
        },
        {
            id: "704824",
            host: "www.hostalcasaescallon.com",
            sinDisponibilidad: "27",
            total: "86"
        },
        {
            id: "310495",
            host: "www.albatroshotel.com.ar",
            sinDisponibilidad: "26",
            total: "435"
        },
        {
            id: "291301",
            host: "www.sanremomardelplata.com.ar",
            sinDisponibilidad: "25",
            total: "520"
        },
        {
            id: "351011",
            host: "www.rochesterm.com.ar",
            sinDisponibilidad: "21",
            total: "242"
        },
        {
            id: "352128",
            host: "www.pousadasolevida.com.br",
            sinDisponibilidad: "21",
            total: "17"
        },
        {
            id: "240698",
            host: "www.rochesterconcept.com.ar",
            sinDisponibilidad: "19",
            total: "489"
        },
        {
            id: "241835",
            host: "www.apartcongreso.com.ar",
            sinDisponibilidad: "17",
            total: "385"
        },
        {
            id: "312456",
            host: "www.sanremocarilo.com.ar",
            sinDisponibilidad: "17",
            total: "434"
        },
        {
            id: "312537",
            host: "www.rochestercalafate.com.ar",
            sinDisponibilidad: "17",
            total: "315"
        },
        {
            id: "481909",
            host: "www.hotel-esmeralda.com.ar",
            sinDisponibilidad: "17",
            total: "291"
        },
        {
            id: "330817",
            host: "www.laslengashotel.com.ar",
            sinDisponibilidad: "16",
            total: "269"
        },
        {
            id: "352091",
            host: "www.petithotelsimicapitan.com",
            sinDisponibilidad: "16",
            total: "134"
        },
        {
            id: "805924",
            host: "www.tierragauchahostel3.com.ar",
            sinDisponibilidad: "16",
            total: "102"
        },
        {
            id: "241487",
            host: "www.sanremobuenosaires.com.ar",
            sinDisponibilidad: "15",
            total: "354"
        },
        {
            id: "361161",
            host: "www.delosandeshotel.com.ar",
            sinDisponibilidad: "15",
            total: "210"
        },
        {
            id: "592143",
            host: "www.savillehotel.com.br",
            sinDisponibilidad: "15",
            total: "186"
        },
        {
            id: "855241",
            host: "www.suitesbeiramar.com.br",
            sinDisponibilidad: "15",
            total: "30"
        },
        {
            id: "242050",
            host: "www.regente.com",
            sinDisponibilidad: "14",
            total: "446"
        },
        {
            id: "331184",
            host: "www.hotel-plaza.com.ar",
            sinDisponibilidad: "14",
            total: "445"
        },
        {
            id: "480630",
            host: "www.pousadasitiodopicapau.com.br",
            sinDisponibilidad: "13",
            total: "223"
        },
        {
            id: "487914",
            host: "www.pousadaecojerimagia.com.br",
            sinDisponibilidad: "13",
            total: "46"
        },
        {
            id: "350983",
            host: "www.altosdelsolmerlo.com.ar",
            sinDisponibilidad: "12",
            total: "95"
        },
        {
            id: "363849",
            host: "www.tierragauchahostel2.com.ar",
            sinDisponibilidad: "12",
            total: "84"
        },
        {
            id: "437248",
            host: "www.hotelintermonti.com.ar",
            sinDisponibilidad: "12",
            total: "109"
        },
        {
            id: "241453",
            host: "www.hrluxor-hotel-buenos-aires.com",
            sinDisponibilidad: "11",
            total: "335"
        },
        {
            id: "363376",
            host: "www.casaejidomexico.com",
            sinDisponibilidad: "11",
            total: "48"
        },
        {
            id: "505622",
            host: "www.pathwaysanandres.com",
            sinDisponibilidad: "11",
            total: "38"
        },
        {
            id: "355437",
            host: "www.hotelbremen.com",
            sinDisponibilidad: "10",
            total: "200"
        },
        {
            id: "316770",
            host: "www.sanremovillagesell.com.ar",
            sinDisponibilidad: "9",
            total: "318"
        },
        {
            id: "344922",
            host: "www.hotelcostadelmarmexico.com",
            sinDisponibilidad: "9",
            total: "107"
        },
        {
            id: "345438",
            host: "345438.reservalia.com",
            sinDisponibilidad: "9",
            total: "73"
        },
        {
            id: "346358",
            host: "www.sanremosanbernardo.com.ar",
            sinDisponibilidad: "9",
            total: "199"
        },
        {
            id: "355083",
            host: "www.pousadavidaboa.com.br",
            sinDisponibilidad: "9",
            total: "97"
        },
        {
            id: "362298",
            host: "www.corsarios.com.br",
            sinDisponibilidad: "9",
            total: "98"
        },
        {
            id: "340486",
            host: "www.hotelcuatroreyes.com",
            sinDisponibilidad: "8",
            total: "287"
        },
        {
            id: "345173",
            host: "www.edificiopiccaluga.com",
            sinDisponibilidad: "8",
            total: "29"
        },
        {
            id: "347896",
            host: "www.hotelportobacana.com.br",
            sinDisponibilidad: "8",
            total: "112"
        },
        {
            id: "359738",
            host: "www.postadecarilo.com.ar",
            sinDisponibilidad: "8",
            total: "54"
        },
        {
            id: "361443",
            host: "www.tangoinnclub.com",
            sinDisponibilidad: "8",
            total: "50"
        },
        {
            id: "555617",
            host: "www.casalagaleria.com",
            sinDisponibilidad: "8",
            total: "53"
        },
        {
            id: "846917",
            host: "www.babelcity.com.ar",
            sinDisponibilidad: "8",
            total: "239"
        },
        {
            id: "254043",
            host: "www.hotelfranciatuc.com.ar",
            sinDisponibilidad: "7",
            total: "86"
        },
        {
            id: "307200",
            host: "www.dividivipraiahotel.com.br",
            sinDisponibilidad: "7",
            total: "32"
        },
        {
            id: "310382",
            host: "www.costaushuaia.com",
            sinDisponibilidad: "7",
            total: "83"
        },
        {
            id: "346093",
            host: "www.alahmarhotel.com.br",
            sinDisponibilidad: "7",
            total: "207"
        },
        {
            id: "346361",
            host: "www.sanremomardeajo.com.ar",
            sinDisponibilidad: "7",
            total: "65"
        },
        {
            id: "354109",
            host: "www.posadadelasnubes.com.ar",
            sinDisponibilidad: "7",
            total: "103"
        },
        {
            id: "359074",
            host: "www.hotelrecifemonte.com.br",
            sinDisponibilidad: "7",
            total: "110"
        },
        {
            id: "361810",
            host: "www.hotelpioneros.com",
            sinDisponibilidad: "7",
            total: "65"
        },
        {
            id: "593449",
            host: "www.enseadadoscoraishotel.com.br",
            sinDisponibilidad: "7",
            total: "84"
        },
        {
            id: "804311",
            host: "www.elsecretohotel.com",
            sinDisponibilidad: "7",
            total: "47"
        },
        {
            id: "210258",
            host: "www.sanremopinamar.com.ar",
            sinDisponibilidad: "6",
            total: "68"
        },
        {
            id: "307397",
            host: "www.costadoatlantico.com.br",
            sinDisponibilidad: "6",
            total: "81"
        },
        {
            id: "331268",
            host: "www.bahiaredondahotel.com",
            sinDisponibilidad: "6",
            total: "103"
        },
        {
            id: "343932",
            host: "www.hotelcartagenapremium.co",
            sinDisponibilidad: "6",
            total: "170"
        },
        {
            id: "344511",
            host: "www.imperialpalacehotel.tur.br",
            sinDisponibilidad: "6",
            total: "96"
        },
        {
            id: "351176",
            host: "www.valeexpresshotel.com.br",
            sinDisponibilidad: "6",
            total: "24"
        },
        {
            id: "358980",
            host: "www.hercuslapa.com",
            sinDisponibilidad: "6",
            total: "115"
        },
        {
            id: "360951",
            host: "www.costacariloapart.com.ar",
            sinDisponibilidad: "6",
            total: "30"
        },
        {
            id: "372414",
            host: "www.modena.com.br",
            sinDisponibilidad: "6",
            total: "41"
        },
        {
            id: "487080",
            host: "www.aparthotelrobertomonteiro.com.br",
            sinDisponibilidad: "6",
            total: "68"
        },
        {
            id: "551231",
            host: "www.mundai.com.br",
            sinDisponibilidad: "6",
            total: "13"
        },
        {
            id: "577610",
            host: "www.hotelvienasrl.com.ar",
            sinDisponibilidad: "6",
            total: "77"
        },
        {
            id: "584216",
            host: "www.pampulhagreenhostel.com",
            sinDisponibilidad: "6",
            total: "24"
        },
        {
            id: "643132",
            host: "www.parchedealex.com",
            sinDisponibilidad: "6",
            total: "9"
        },
        {
            id: "660441",
            host: "www.portovenere.com.ar",
            sinDisponibilidad: "6",
            total: "30"
        },
        {
            id: "224544",
            host: "www.hotelcarmen.net",
            sinDisponibilidad: "5",
            total: "62"
        },
        {
            id: "228641",
            host: "www.ourobrancopraiahotel.com.br",
            sinDisponibilidad: "5",
            total: "211"
        },
        {
            id: "258796",
            host: "www.antuquelen.com.ar",
            sinDisponibilidad: "5",
            total: "38"
        },
        {
            id: "264743",
            host: "www.hotelcasadecampo.com",
            sinDisponibilidad: "5",
            total: "80"
        },
        {
            id: "353985",
            host: "www.hotelplazacentral.com.ar",
            sinDisponibilidad: "5",
            total: "156"
        },
        {
            id: "363287",
            host: "www.hercussantateresa.com",
            sinDisponibilidad: "5",
            total: "64"
        },
        {
            id: "258034",
            host: "www.altodapraiahotel.com.br",
            sinDisponibilidad: "4",
            total: "59"
        },
        {
            id: "331115",
            host: "www.hotelrex.com.ar",
            sinDisponibilidad: "4",
            total: "75"
        },
        {
            id: "346347",
            host: "www.sanremosanclemente.com.ar",
            sinDisponibilidad: "4",
            total: "176"
        },
        {
            id: "347879",
            host: "www.hotelbahiabacana.com.br",
            sinDisponibilidad: "4",
            total: "19"
        },
        {
            id: "351162",
            host: "www.onigrathotel.com.br",
            sinDisponibilidad: "4",
            total: "17"
        },
        {
            id: "351453",
            host: "www.vancouverhotel.com.br",
            sinDisponibilidad: "4",
            total: "81"
        },
        {
            id: "355595",
            host: "www.hoteltropicanas.com.br",
            sinDisponibilidad: "4",
            total: "91"
        },
        {
            id: "362337",
            host: "www.pousadatuiuiu.com.br",
            sinDisponibilidad: "4",
            total: "35"
        },
        {
            id: "370119",
            host: "www.trianonresidence.com",
            sinDisponibilidad: "4",
            total: "150"
        },
        {
            id: "458391",
            host: "www.chalezinhos.com.br",
            sinDisponibilidad: "4",
            total: "66"
        },
        {
            id: "487674",
            host: "www.hotelgaia.com.br",
            sinDisponibilidad: "4",
            total: "37"
        },
        {
            id: "495935",
            host: "www.mariposasdemindo.com",
            sinDisponibilidad: "4",
            total: "11"
        },
        {
            id: "650339",
            host: "www.hoteltaybo.com",
            sinDisponibilidad: "4",
            total: "48"
        },
        {
            id: "709214",
            host: "www.hotelarenaspinamar.com.ar",
            sinDisponibilidad: "4",
            total: "110"
        },
        {
            id: "799857",
            host: "www.hotelcarillos.com",
            sinDisponibilidad: "4",
            total: "11"
        },
        {
            id: "223762",
            host: "www.osterinsel.cl",
            sinDisponibilidad: "3",
            total: "13"
        },
        {
            id: "263611",
            host: "www.7lagos-bariloche.com",
            sinDisponibilidad: "3",
            total: "68"
        },
        {
            id: "291242",
            host: "www.aparthotelmaison.com.ar",
            sinDisponibilidad: "3",
            total: "167"
        },
        {
            id: "344845",
            host: "www.galeriashotel.com.ar",
            sinDisponibilidad: "3",
            total: "158"
        },
        {
            id: "346255",
            host: "www.granadaparkhotel.com.br",
            sinDisponibilidad: "3",
            total: "49"
        },
        {
            id: "354920",
            host: "www.colombiaathome.com.co",
            sinDisponibilidad: "3",
            total: "41"
        },
        {
            id: "356128",
            host: "www.sheyllasplace.com",
            sinDisponibilidad: "3",
            total: "18"
        },
        {
            id: "363157",
            host: "www.pousadanovilhadeouro.com.br",
            sinDisponibilidad: "3",
            total: "86"
        },
        {
            id: "364090",
            host: "www.bambooflat.com",
            sinDisponibilidad: "3",
            total: "90"
        },
        {
            id: "481646",
            host: "www.hotelconquistadores.com.co",
            sinDisponibilidad: "3",
            total: "15"
        },
        {
            id: "483093",
            host: "www.hotelnormandiefoz.com.br",
            sinDisponibilidad: "3",
            total: "119"
        },
        {
            id: "485053",
            host: "www.modernistashotel.com",
            sinDisponibilidad: "3",
            total: "12"
        },
        {
            id: "608668",
            host: "www.laposadadelulu.com",
            sinDisponibilidad: "3",
            total: "22"
        },
        {
            id: "643135",
            host: "www.hakunamatataecohostel.com",
            sinDisponibilidad: "3"
        },
        {
            id: "687792",
            host: "www.hostalhakunamatatabeach.com",
            sinDisponibilidad: "3",
            total: "2"
        },
        {
            id: "694829",
            host: "www.algecirashotel.com.ar",
            sinDisponibilidad: "3",
            total: "88"
        },
        {
            id: "800402",
            host: "www.villasoldiamante.com",
            sinDisponibilidad: "3",
            total: "11"
        },
        {
            id: "843992",
            host: "843992.reservalia.com",
            sinDisponibilidad: "3",
            total: "65"
        },
        {
            id: "242538",
            host: "www.sudamerikahostel.com.ar",
            sinDisponibilidad: "2",
            total: "88"
        },
        {
            id: "246739",
            host: "www.posadabosquecarilo.com.ar",
            sinDisponibilidad: "2",
            total: "54"
        },
        {
            id: "263658",
            host: "www.kentonpalacebrc.com.ar",
            sinDisponibilidad: "2",
            total: "27"
        },
        {
            id: "278732",
            host: "www.hotelbertaina.com.ar",
            sinDisponibilidad: "2",
            total: "45"
        },
        {
            id: "285424",
            host: "www.sanremosantateresita.com",
            sinDisponibilidad: "2",
            total: "132"
        },
        {
            id: "310407",
            host: "www.hosteriachalp.com.ar",
            sinDisponibilidad: "2",
            total: "31"
        },
        {
            id: "345560",
            host: "www.pousadapipabichopreguica.com.br",
            sinDisponibilidad: "2",
            total: "21"
        },
        {
            id: "351860",
            host: "www.hotelstelares.com",
            sinDisponibilidad: "2",
            total: "36"
        },
        {
            id: "353301",
            host: "www.wineapartsmendoza.com",
            sinDisponibilidad: "2",
            total: "12"
        },
        {
            id: "355519",
            host: "www.hoteltheplace.com.ar",
            sinDisponibilidad: "2",
            total: "16"
        },
        {
            id: "362205",
            host: "www.cariloprincess.com.ar",
            sinDisponibilidad: "2",
            total: "54"
        },
        {
            id: "365238",
            host: "www.hostalelgrial.com",
            sinDisponibilidad: "2",
            total: "43"
        },
        {
            id: "369000",
            host: "www.haciendahotelcancun.com",
            sinDisponibilidad: "2",
            total: "74"
        },
        {
            id: "485462",
            host: "www.hotelsantarosa.com",
            sinDisponibilidad: "2",
            total: "65"
        },
        {
            id: "487497",
            host: "www.hotelparadisela33.com.co",
            sinDisponibilidad: "2",
            total: "6"
        },
        {
            id: "600220",
            host: "www.hostalblancaestela.com",
            sinDisponibilidad: "2",
            total: "7"
        },
        {
            id: "623283",
            host: "www.ferraripalacehotel.com.br",
            sinDisponibilidad: "2",
            total: "29"
        },
        {
            id: "687029",
            host: "www.lacasadelpatio.com",
            sinDisponibilidad: "2",
            total: "19"
        },
        {
            id: "818578",
            host: "www.enseadaaeroportohotel.com.br",
            sinDisponibilidad: "2",
            total: "47"
        },
        {
            id: "830364",
            host: "www.hotelgomesfreire.com.br",
            sinDisponibilidad: "2",
            total: "24"
        },
        {
            id: "833219",
            host: "www.pousadavidaboapraia.com.br",
            sinDisponibilidad: "2",
            total: "17"
        },
        {
            id: "844007",
            host: "www.yourhomeawayfromhome.co",
            sinDisponibilidad: "2",
            total: "21"
        },
        {
            id: "850381",
            host: "www.alfahotelbauru.com.br",
            sinDisponibilidad: "2",
            total: "26"
        },
        {
            id: "205567",
            host: "www.tabajaraflat.com.br",
            sinDisponibilidad: "1",
            total: "45"
        },
        {
            id: "211000",
            host: "www.hotelfantilli.com.ar",
            sinDisponibilidad: "1",
            total: "16"
        },
        {
            id: "263762",
            host: "www.nahuelhuapihotel.com.ar",
            sinDisponibilidad: "1"
        },
        {
            id: "345434",
            host: "www.athenasaparthotel.com.br",
            sinDisponibilidad: "1",
            total: "48"
        },
        {
            id: "345493",
            host: "www.praiasolhotel.com.br",
            sinDisponibilidad: "1",
            total: "62"
        },
        {
            id: "345584",
            host: "www.parada47apart.com",
            sinDisponibilidad: "1",
            total: "6"
        },
        {
            id: "353652",
            host: "www.torredelrelojhotel.com",
            sinDisponibilidad: "1",
            total: "29"
        },
        {
            id: "354587",
            host: "www.hotelsipan.com",
            sinDisponibilidad: "1",
            total: "43"
        },
        {
            id: "355349",
            host: "www.hotel-regional.com",
            sinDisponibilidad: "1",
            total: "32"
        },
        {
            id: "355391",
            host: "www.pousadarecantodegeriba.com.br",
            sinDisponibilidad: "1",
            total: "33"
        },
        {
            id: "356123",
            host: "www.hotelvialcenter.com.ar",
            sinDisponibilidad: "1",
            total: "17"
        },
        {
            id: "357825",
            host: "www.hotelh21cali.com",
            sinDisponibilidad: "1",
            total: "41"
        },
        {
            id: "360979",
            host: "www.bisontepalace.com",
            sinDisponibilidad: "1",
            total: "52"
        },
        {
            id: "362126",
            host: "www.residencevilaeuropa.com",
            sinDisponibilidad: "1",
            total: "19"
        },
        {
            id: "370063",
            host: "www.windsorcalihotel.com",
            sinDisponibilidad: "1"
        },
        {
            id: "373986",
            host: "www.pousadaleporage.com.br",
            sinDisponibilidad: "1",
            total: "31"
        },
        {
            id: "481713",
            host: "www.bisontelibertad.com",
            sinDisponibilidad: "1",
            total: "67"
        },
        {
            id: "483002",
            host: "www.lapostadelpilar.com",
            sinDisponibilidad: "1",
            total: "47"
        },
        {
            id: "483179",
            host: "www.hotelbahiaplaza.co",
            sinDisponibilidad: "1",
            total: "47"
        },
        {
            id: "485549",
            host: "www.delreyhostal.com",
            sinDisponibilidad: "1",
            total: "11"
        },
        {
            id: "486246",
            host: "www.hotelparadisebulerias.com.co",
            sinDisponibilidad: "1",
            total: "25"
        },
        {
            id: "486257",
            host: "www.hotelparadiselleras.com.co",
            sinDisponibilidad: "1",
            total: "25"
        },
        {
            id: "486829",
            host: "www.salvadormarhotel.com.br",
            sinDisponibilidad: "1",
            total: "55"
        },
        {
            id: "491055",
            host: "www.depalmalodge.com",
            sinDisponibilidad: "1",
            total: "43"
        },
        {
            id: "491482",
            host: "www.zentenoapartments.cl",
            sinDisponibilidad: "1",
            total: "43"
        },
        {
            id: "503326",
            host: "www.viacaldasresort.com.br",
            sinDisponibilidad: "1",
            total: "16"
        },
        {
            id: "539195",
            host: "www.hotelbocaiuva.com.br",
            sinDisponibilidad: "1",
            total: "5"
        },
        {
            id: "546446",
            host: "www.hotelalterra.com",
            sinDisponibilidad: "1",
            total: "17"
        },
        {
            id: "588448",
            host: "www.casarivieramaya1.com",
            sinDisponibilidad: "1",
            total: "10"
        },
        {
            id: "616799",
            host: "www.apartamentosantamarta1.com",
            sinDisponibilidad: "1"
        },
        {
            id: "653947",
            host: "www.hotelbavariapy.com",
            sinDisponibilidad: "1",
            total: "25"
        },
        {
            id: "658453",
            host: "www.lexusapart.com.br",
            sinDisponibilidad: "1",
            total: "11"
        },
        {
            id: "679868",
            host: "www.hotelrevienspinamar.com.ar",
            sinDisponibilidad: "1",
            total: "40"
        },
        {
            id: "692058",
            host: "www.kallpahotel.pe",
            sinDisponibilidad: "1",
            total: "48"
        },
        {
            id: "712940",
            host: "www.rinconadadelsolmexico.com",
            sinDisponibilidad: "1",
            total: "2"
        },
        {
            id: "790124",
            host: "www.hoteldeconto.com.br",
            sinDisponibilidad: "1",
            total: "72"
        },
        {
            id: "796666",
            host: "796666.reservalia.com",
            sinDisponibilidad: "1"
        },
        {
            id: "833869",
            host: "www.theelementshotel.com",
            sinDisponibilidad: "1",
            total: "36"
        },
        {
            id: "840168",
            host: "www.hotelcasafalleri.com",
            sinDisponibilidad: "1",
            total: "38"
        },
        {
            id: "845358",
            host: "www.pousadaestreladapraia.com.br",
            sinDisponibilidad: "1",
            total: "8"
        },
        {
            id: "848456",
            host: "www.cabanaskernayel.cl",
            sinDisponibilidad: "1",
            total: "16"
        },
        {
            id: "854952",
            host: "www.hotelbermudas.com.ar",
            sinDisponibilidad: "1",
            total: "7"
        },
        {
            id: "866128",
            host: "www.hotelcaneydelariari.com",
            sinDisponibilidad: "1",
            total: "15"
        },
        {
            id: "875347",
            host: "www.mardebombinhas.com.br",
            sinDisponibilidad: "1",
            total: "29"
        }
    ],
    visibleData: [
        {
            id: "245530",
            host: "www.serenabuzios.com.ar",
            sinDisponibilidad: "61",
            total: "1013"
        },
        {
            id: "263748",
            host: "www.rochesterbariloche.com.ar",
            sinDisponibilidad: "52",
            total: "446"
        },
        {
            id: "265830",
            host: "www.hotelcasamayamexico.com",
            sinDisponibilidad: "45",
            total: "253"
        },
        {
            id: "331131",
            host: "www.hotelmonserratba.com",
            sinDisponibilidad: "41",
            total: "557"
        },
        {
            id: "228626",
            host: "www.reservashotelmarbella.com",
            sinDisponibilidad: "36",
            total: "438"
        },
        {
            id: "310438",
            host: "www.altoandinohotel.com",
            sinDisponibilidad: "34",
            total: "351"
        },
        {
            id: "592141",
            host: "www.hotelriobranco.net",
            sinDisponibilidad: "34",
            total: "365"
        },
        {
            id: "241545",
            host: "www.rochesterclassic.com.ar",
            sinDisponibilidad: "33",
            total: "825"
        },
        {
            id: "331453",
            host: "www.hotelpatagoniaplaza.com.ar",
            sinDisponibilidad: "33",
            total: "389"
        },
        {
            id: "354448",
            host: "www.hotellapasion.com",
            sinDisponibilidad: "33",
            total: "418"
        },
        {
            id: "310546",
            host: "www.hostaldelbosque.com.ar",
            sinDisponibilidad: "32",
            total: "238"
        },
        {
            id: "401471",
            host: "www.hercuscopacabana.com",
            sinDisponibilidad: "31",
            total: "165"
        },
        {
            id: "359752",
            host: "www.tierragauchahostel1.com.ar",
            sinDisponibilidad: "30",
            total: "162"
        },
        {
            id: "610284",
            host: "www.confortel.com.br",
            sinDisponibilidad: "27",
            total: "198"
        },
        {
            id: "704824",
            host: "www.hostalcasaescallon.com",
            sinDisponibilidad: "27",
            total: "86"
        },
        {
            id: "310495",
            host: "www.albatroshotel.com.ar",
            sinDisponibilidad: "26",
            total: "435"
        },
        {
            id: "291301",
            host: "www.sanremomardelplata.com.ar",
            sinDisponibilidad: "25",
            total: "520"
        },
        {
            id: "351011",
            host: "www.rochesterm.com.ar",
            sinDisponibilidad: "21",
            total: "242"
        },
        {
            id: "352128",
            host: "www.pousadasolevida.com.br",
            sinDisponibilidad: "21",
            total: "17"
        },
        {
            id: "240698",
            host: "www.rochesterconcept.com.ar",
            sinDisponibilidad: "19",
            total: "489"
        },
        {
            id: "241835",
            host: "www.apartcongreso.com.ar",
            sinDisponibilidad: "17",
            total: "385"
        },
        {
            id: "312456",
            host: "www.sanremocarilo.com.ar",
            sinDisponibilidad: "17",
            total: "434"
        },
        {
            id: "312537",
            host: "www.rochestercalafate.com.ar",
            sinDisponibilidad: "17",
            total: "315"
        },
        {
            id: "481909",
            host: "www.hotel-esmeralda.com.ar",
            sinDisponibilidad: "17",
            total: "291"
        },
        {
            id: "330817",
            host: "www.laslengashotel.com.ar",
            sinDisponibilidad: "16",
            total: "269"
        },
        {
            id: "352091",
            host: "www.petithotelsimicapitan.com",
            sinDisponibilidad: "16",
            total: "134"
        },
        {
            id: "805924",
            host: "www.tierragauchahostel3.com.ar",
            sinDisponibilidad: "16",
            total: "102"
        },
        {
            id: "241487",
            host: "www.sanremobuenosaires.com.ar",
            sinDisponibilidad: "15",
            total: "354"
        },
        {
            id: "361161",
            host: "www.delosandeshotel.com.ar",
            sinDisponibilidad: "15",
            total: "210"
        },
        {
            id: "592143",
            host: "www.savillehotel.com.br",
            sinDisponibilidad: "15",
            total: "186"
        },
        {
            id: "855241",
            host: "www.suitesbeiramar.com.br",
            sinDisponibilidad: "15",
            total: "30"
        },
        {
            id: "242050",
            host: "www.regente.com",
            sinDisponibilidad: "14",
            total: "446"
        },
        {
            id: "331184",
            host: "www.hotel-plaza.com.ar",
            sinDisponibilidad: "14",
            total: "445"
        },
        {
            id: "480630",
            host: "www.pousadasitiodopicapau.com.br",
            sinDisponibilidad: "13",
            total: "223"
        },
        {
            id: "487914",
            host: "www.pousadaecojerimagia.com.br",
            sinDisponibilidad: "13",
            total: "46"
        },
        {
            id: "350983",
            host: "www.altosdelsolmerlo.com.ar",
            sinDisponibilidad: "12",
            total: "95"
        },
        {
            id: "363849",
            host: "www.tierragauchahostel2.com.ar",
            sinDisponibilidad: "12",
            total: "84"
        },
        {
            id: "437248",
            host: "www.hotelintermonti.com.ar",
            sinDisponibilidad: "12",
            total: "109"
        },
        {
            id: "241453",
            host: "www.hrluxor-hotel-buenos-aires.com",
            sinDisponibilidad: "11",
            total: "335"
        },
        {
            id: "363376",
            host: "www.casaejidomexico.com",
            sinDisponibilidad: "11",
            total: "48"
        },
        {
            id: "505622",
            host: "www.pathwaysanandres.com",
            sinDisponibilidad: "11",
            total: "38"
        },
        {
            id: "355437",
            host: "www.hotelbremen.com",
            sinDisponibilidad: "10",
            total: "200"
        },
        {
            id: "316770",
            host: "www.sanremovillagesell.com.ar",
            sinDisponibilidad: "9",
            total: "318"
        },
        {
            id: "344922",
            host: "www.hotelcostadelmarmexico.com",
            sinDisponibilidad: "9",
            total: "107"
        },
        {
            id: "345438",
            host: "345438.reservalia.com",
            sinDisponibilidad: "9",
            total: "73"
        },
        {
            id: "346358",
            host: "www.sanremosanbernardo.com.ar",
            sinDisponibilidad: "9",
            total: "199"
        },
        {
            id: "355083",
            host: "www.pousadavidaboa.com.br",
            sinDisponibilidad: "9",
            total: "97"
        },
        {
            id: "362298",
            host: "www.corsarios.com.br",
            sinDisponibilidad: "9",
            total: "98"
        },
        {
            id: "340486",
            host: "www.hotelcuatroreyes.com",
            sinDisponibilidad: "8",
            total: "287"
        },
        {
            id: "345173",
            host: "www.edificiopiccaluga.com",
            sinDisponibilidad: "8",
            total: "29"
        },
        {
            id: "347896",
            host: "www.hotelportobacana.com.br",
            sinDisponibilidad: "8",
            total: "112"
        },
        {
            id: "359738",
            host: "www.postadecarilo.com.ar",
            sinDisponibilidad: "8",
            total: "54"
        },
        {
            id: "361443",
            host: "www.tangoinnclub.com",
            sinDisponibilidad: "8",
            total: "50"
        },
        {
            id: "555617",
            host: "www.casalagaleria.com",
            sinDisponibilidad: "8",
            total: "53"
        },
        {
            id: "846917",
            host: "www.babelcity.com.ar",
            sinDisponibilidad: "8",
            total: "239"
        },
        {
            id: "254043",
            host: "www.hotelfranciatuc.com.ar",
            sinDisponibilidad: "7",
            total: "86"
        },
        {
            id: "307200",
            host: "www.dividivipraiahotel.com.br",
            sinDisponibilidad: "7",
            total: "32"
        },
        {
            id: "310382",
            host: "www.costaushuaia.com",
            sinDisponibilidad: "7",
            total: "83"
        },
        {
            id: "346093",
            host: "www.alahmarhotel.com.br",
            sinDisponibilidad: "7",
            total: "207"
        },
        {
            id: "346361",
            host: "www.sanremomardeajo.com.ar",
            sinDisponibilidad: "7",
            total: "65"
        },
        {
            id: "354109",
            host: "www.posadadelasnubes.com.ar",
            sinDisponibilidad: "7",
            total: "103"
        },
        {
            id: "359074",
            host: "www.hotelrecifemonte.com.br",
            sinDisponibilidad: "7",
            total: "110"
        },
        {
            id: "361810",
            host: "www.hotelpioneros.com",
            sinDisponibilidad: "7",
            total: "65"
        },
        {
            id: "593449",
            host: "www.enseadadoscoraishotel.com.br",
            sinDisponibilidad: "7",
            total: "84"
        },
        {
            id: "804311",
            host: "www.elsecretohotel.com",
            sinDisponibilidad: "7",
            total: "47"
        },
        {
            id: "210258",
            host: "www.sanremopinamar.com.ar",
            sinDisponibilidad: "6",
            total: "68"
        },
        {
            id: "307397",
            host: "www.costadoatlantico.com.br",
            sinDisponibilidad: "6",
            total: "81"
        },
        {
            id: "331268",
            host: "www.bahiaredondahotel.com",
            sinDisponibilidad: "6",
            total: "103"
        },
        {
            id: "343932",
            host: "www.hotelcartagenapremium.co",
            sinDisponibilidad: "6",
            total: "170"
        },
        {
            id: "344511",
            host: "www.imperialpalacehotel.tur.br",
            sinDisponibilidad: "6",
            total: "96"
        },
        {
            id: "351176",
            host: "www.valeexpresshotel.com.br",
            sinDisponibilidad: "6",
            total: "24"
        },
        {
            id: "358980",
            host: "www.hercuslapa.com",
            sinDisponibilidad: "6",
            total: "115"
        },
        {
            id: "360951",
            host: "www.costacariloapart.com.ar",
            sinDisponibilidad: "6",
            total: "30"
        },
        {
            id: "372414",
            host: "www.modena.com.br",
            sinDisponibilidad: "6",
            total: "41"
        },
        {
            id: "487080",
            host: "www.aparthotelrobertomonteiro.com.br",
            sinDisponibilidad: "6",
            total: "68"
        },
        {
            id: "551231",
            host: "www.mundai.com.br",
            sinDisponibilidad: "6",
            total: "13"
        },
        {
            id: "577610",
            host: "www.hotelvienasrl.com.ar",
            sinDisponibilidad: "6",
            total: "77"
        },
        {
            id: "584216",
            host: "www.pampulhagreenhostel.com",
            sinDisponibilidad: "6",
            total: "24"
        },
        {
            id: "643132",
            host: "www.parchedealex.com",
            sinDisponibilidad: "6",
            total: "9"
        },
        {
            id: "660441",
            host: "www.portovenere.com.ar",
            sinDisponibilidad: "6",
            total: "30"
        },
        {
            id: "224544",
            host: "www.hotelcarmen.net",
            sinDisponibilidad: "5",
            total: "62"
        },
        {
            id: "228641",
            host: "www.ourobrancopraiahotel.com.br",
            sinDisponibilidad: "5",
            total: "211"
        },
        {
            id: "258796",
            host: "www.antuquelen.com.ar",
            sinDisponibilidad: "5",
            total: "38"
        },
        {
            id: "264743",
            host: "www.hotelcasadecampo.com",
            sinDisponibilidad: "5",
            total: "80"
        },
        {
            id: "353985",
            host: "www.hotelplazacentral.com.ar",
            sinDisponibilidad: "5",
            total: "156"
        },
        {
            id: "363287",
            host: "www.hercussantateresa.com",
            sinDisponibilidad: "5",
            total: "64"
        },
        {
            id: "258034",
            host: "www.altodapraiahotel.com.br",
            sinDisponibilidad: "4",
            total: "59"
        },
        {
            id: "331115",
            host: "www.hotelrex.com.ar",
            sinDisponibilidad: "4",
            total: "75"
        },
        {
            id: "346347",
            host: "www.sanremosanclemente.com.ar",
            sinDisponibilidad: "4",
            total: "176"
        },
        {
            id: "347879",
            host: "www.hotelbahiabacana.com.br",
            sinDisponibilidad: "4",
            total: "19"
        },
        {
            id: "351162",
            host: "www.onigrathotel.com.br",
            sinDisponibilidad: "4",
            total: "17"
        },
        {
            id: "351453",
            host: "www.vancouverhotel.com.br",
            sinDisponibilidad: "4",
            total: "81"
        },
        {
            id: "355595",
            host: "www.hoteltropicanas.com.br",
            sinDisponibilidad: "4",
            total: "91"
        },
        {
            id: "362337",
            host: "www.pousadatuiuiu.com.br",
            sinDisponibilidad: "4",
            total: "35"
        },
        {
            id: "370119",
            host: "www.trianonresidence.com",
            sinDisponibilidad: "4",
            total: "150"
        },
        {
            id: "458391",
            host: "www.chalezinhos.com.br",
            sinDisponibilidad: "4",
            total: "66"
        },
        {
            id: "487674",
            host: "www.hotelgaia.com.br",
            sinDisponibilidad: "4",
            total: "37"
        },
        {
            id: "495935",
            host: "www.mariposasdemindo.com",
            sinDisponibilidad: "4",
            total: "11"
        },
        {
            id: "650339",
            host: "www.hoteltaybo.com",
            sinDisponibilidad: "4",
            total: "48"
        },
        {
            id: "709214",
            host: "www.hotelarenaspinamar.com.ar",
            sinDisponibilidad: "4",
            total: "110"
        },
        {
            id: "799857",
            host: "www.hotelcarillos.com",
            sinDisponibilidad: "4",
            total: "11"
        },
        {
            id: "223762",
            host: "www.osterinsel.cl",
            sinDisponibilidad: "3",
            total: "13"
        },
        {
            id: "263611",
            host: "www.7lagos-bariloche.com",
            sinDisponibilidad: "3",
            total: "68"
        },
        {
            id: "291242",
            host: "www.aparthotelmaison.com.ar",
            sinDisponibilidad: "3",
            total: "167"
        },
        {
            id: "344845",
            host: "www.galeriashotel.com.ar",
            sinDisponibilidad: "3",
            total: "158"
        },
        {
            id: "346255",
            host: "www.granadaparkhotel.com.br",
            sinDisponibilidad: "3",
            total: "49"
        },
        {
            id: "354920",
            host: "www.colombiaathome.com.co",
            sinDisponibilidad: "3",
            total: "41"
        },
        {
            id: "356128",
            host: "www.sheyllasplace.com",
            sinDisponibilidad: "3",
            total: "18"
        },
        {
            id: "363157",
            host: "www.pousadanovilhadeouro.com.br",
            sinDisponibilidad: "3",
            total: "86"
        },
        {
            id: "364090",
            host: "www.bambooflat.com",
            sinDisponibilidad: "3",
            total: "90"
        },
        {
            id: "481646",
            host: "www.hotelconquistadores.com.co",
            sinDisponibilidad: "3",
            total: "15"
        },
        {
            id: "483093",
            host: "www.hotelnormandiefoz.com.br",
            sinDisponibilidad: "3",
            total: "119"
        },
        {
            id: "485053",
            host: "www.modernistashotel.com",
            sinDisponibilidad: "3",
            total: "12"
        },
        {
            id: "608668",
            host: "www.laposadadelulu.com",
            sinDisponibilidad: "3",
            total: "22"
        },
        {
            id: "643135",
            host: "www.hakunamatataecohostel.com",
            sinDisponibilidad: "3"
        },
        {
            id: "687792",
            host: "www.hostalhakunamatatabeach.com",
            sinDisponibilidad: "3",
            total: "2"
        },
        {
            id: "694829",
            host: "www.algecirashotel.com.ar",
            sinDisponibilidad: "3",
            total: "88"
        },
        {
            id: "800402",
            host: "www.villasoldiamante.com",
            sinDisponibilidad: "3",
            total: "11"
        },
        {
            id: "843992",
            host: "843992.reservalia.com",
            sinDisponibilidad: "3",
            total: "65"
        },
        {
            id: "242538",
            host: "www.sudamerikahostel.com.ar",
            sinDisponibilidad: "2",
            total: "88"
        },
        {
            id: "246739",
            host: "www.posadabosquecarilo.com.ar",
            sinDisponibilidad: "2",
            total: "54"
        },
        {
            id: "263658",
            host: "www.kentonpalacebrc.com.ar",
            sinDisponibilidad: "2",
            total: "27"
        },
        {
            id: "278732",
            host: "www.hotelbertaina.com.ar",
            sinDisponibilidad: "2",
            total: "45"
        },
        {
            id: "285424",
            host: "www.sanremosantateresita.com",
            sinDisponibilidad: "2",
            total: "132"
        },
        {
            id: "310407",
            host: "www.hosteriachalp.com.ar",
            sinDisponibilidad: "2",
            total: "31"
        },
        {
            id: "345560",
            host: "www.pousadapipabichopreguica.com.br",
            sinDisponibilidad: "2",
            total: "21"
        },
        {
            id: "351860",
            host: "www.hotelstelares.com",
            sinDisponibilidad: "2",
            total: "36"
        },
        {
            id: "353301",
            host: "www.wineapartsmendoza.com",
            sinDisponibilidad: "2",
            total: "12"
        },
        {
            id: "355519",
            host: "www.hoteltheplace.com.ar",
            sinDisponibilidad: "2",
            total: "16"
        },
        {
            id: "362205",
            host: "www.cariloprincess.com.ar",
            sinDisponibilidad: "2",
            total: "54"
        },
        {
            id: "365238",
            host: "www.hostalelgrial.com",
            sinDisponibilidad: "2",
            total: "43"
        },
        {
            id: "369000",
            host: "www.haciendahotelcancun.com",
            sinDisponibilidad: "2",
            total: "74"
        },
        {
            id: "485462",
            host: "www.hotelsantarosa.com",
            sinDisponibilidad: "2",
            total: "65"
        },
        {
            id: "487497",
            host: "www.hotelparadisela33.com.co",
            sinDisponibilidad: "2",
            total: "6"
        },
        {
            id: "600220",
            host: "www.hostalblancaestela.com",
            sinDisponibilidad: "2",
            total: "7"
        },
        {
            id: "623283",
            host: "www.ferraripalacehotel.com.br",
            sinDisponibilidad: "2",
            total: "29"
        },
        {
            id: "687029",
            host: "www.lacasadelpatio.com",
            sinDisponibilidad: "2",
            total: "19"
        },
        {
            id: "818578",
            host: "www.enseadaaeroportohotel.com.br",
            sinDisponibilidad: "2",
            total: "47"
        },
        {
            id: "830364",
            host: "www.hotelgomesfreire.com.br",
            sinDisponibilidad: "2",
            total: "24"
        },
        {
            id: "833219",
            host: "www.pousadavidaboapraia.com.br",
            sinDisponibilidad: "2",
            total: "17"
        },
        {
            id: "844007",
            host: "www.yourhomeawayfromhome.co",
            sinDisponibilidad: "2",
            total: "21"
        },
        {
            id: "850381",
            host: "www.alfahotelbauru.com.br",
            sinDisponibilidad: "2",
            total: "26"
        },
        {
            id: "205567",
            host: "www.tabajaraflat.com.br",
            sinDisponibilidad: "1",
            total: "45"
        },
        {
            id: "211000",
            host: "www.hotelfantilli.com.ar",
            sinDisponibilidad: "1",
            total: "16"
        },
        {
            id: "263762",
            host: "www.nahuelhuapihotel.com.ar",
            sinDisponibilidad: "1"
        },
        {
            id: "345434",
            host: "www.athenasaparthotel.com.br",
            sinDisponibilidad: "1",
            total: "48"
        },
        {
            id: "345493",
            host: "www.praiasolhotel.com.br",
            sinDisponibilidad: "1",
            total: "62"
        },
        {
            id: "345584",
            host: "www.parada47apart.com",
            sinDisponibilidad: "1",
            total: "6"
        },
        {
            id: "353652",
            host: "www.torredelrelojhotel.com",
            sinDisponibilidad: "1",
            total: "29"
        },
        {
            id: "354587",
            host: "www.hotelsipan.com",
            sinDisponibilidad: "1",
            total: "43"
        },
        {
            id: "355349",
            host: "www.hotel-regional.com",
            sinDisponibilidad: "1",
            total: "32"
        },
        {
            id: "355391",
            host: "www.pousadarecantodegeriba.com.br",
            sinDisponibilidad: "1",
            total: "33"
        },
        {
            id: "356123",
            host: "www.hotelvialcenter.com.ar",
            sinDisponibilidad: "1",
            total: "17"
        },
        {
            id: "357825",
            host: "www.hotelh21cali.com",
            sinDisponibilidad: "1",
            total: "41"
        },
        {
            id: "360979",
            host: "www.bisontepalace.com",
            sinDisponibilidad: "1",
            total: "52"
        },
        {
            id: "362126",
            host: "www.residencevilaeuropa.com",
            sinDisponibilidad: "1",
            total: "19"
        },
        {
            id: "370063",
            host: "www.windsorcalihotel.com",
            sinDisponibilidad: "1"
        },
        {
            id: "373986",
            host: "www.pousadaleporage.com.br",
            sinDisponibilidad: "1",
            total: "31"
        },
        {
            id: "481713",
            host: "www.bisontelibertad.com",
            sinDisponibilidad: "1",
            total: "67"
        },
        {
            id: "483002",
            host: "www.lapostadelpilar.com",
            sinDisponibilidad: "1",
            total: "47"
        },
        {
            id: "483179",
            host: "www.hotelbahiaplaza.co",
            sinDisponibilidad: "1",
            total: "47"
        },
        {
            id: "485549",
            host: "www.delreyhostal.com",
            sinDisponibilidad: "1",
            total: "11"
        },
        {
            id: "486246",
            host: "www.hotelparadisebulerias.com.co",
            sinDisponibilidad: "1",
            total: "25"
        },
        {
            id: "486257",
            host: "www.hotelparadiselleras.com.co",
            sinDisponibilidad: "1",
            total: "25"
        },
        {
            id: "486829",
            host: "www.salvadormarhotel.com.br",
            sinDisponibilidad: "1",
            total: "55"
        },
        {
            id: "491055",
            host: "www.depalmalodge.com",
            sinDisponibilidad: "1",
            total: "43"
        },
        {
            id: "491482",
            host: "www.zentenoapartments.cl",
            sinDisponibilidad: "1",
            total: "43"
        },
        {
            id: "503326",
            host: "www.viacaldasresort.com.br",
            sinDisponibilidad: "1",
            total: "16"
        },
        {
            id: "539195",
            host: "www.hotelbocaiuva.com.br",
            sinDisponibilidad: "1",
            total: "5"
        },
        {
            id: "546446",
            host: "www.hotelalterra.com",
            sinDisponibilidad: "1",
            total: "17"
        },
        {
            id: "588448",
            host: "www.casarivieramaya1.com",
            sinDisponibilidad: "1",
            total: "10"
        },
        {
            id: "616799",
            host: "www.apartamentosantamarta1.com",
            sinDisponibilidad: "1"
        },
        {
            id: "653947",
            host: "www.hotelbavariapy.com",
            sinDisponibilidad: "1",
            total: "25"
        },
        {
            id: "658453",
            host: "www.lexusapart.com.br",
            sinDisponibilidad: "1",
            total: "11"
        },
        {
            id: "679868",
            host: "www.hotelrevienspinamar.com.ar",
            sinDisponibilidad: "1",
            total: "40"
        },
        {
            id: "692058",
            host: "www.kallpahotel.pe",
            sinDisponibilidad: "1",
            total: "48"
        },
        {
            id: "712940",
            host: "www.rinconadadelsolmexico.com",
            sinDisponibilidad: "1",
            total: "2"
        },
        {
            id: "790124",
            host: "www.hoteldeconto.com.br",
            sinDisponibilidad: "1",
            total: "72"
        },
        {
            id: "796666",
            host: "796666.reservalia.com",
            sinDisponibilidad: "1"
        },
        {
            id: "833869",
            host: "www.theelementshotel.com",
            sinDisponibilidad: "1",
            total: "36"
        },
        {
            id: "840168",
            host: "www.hotelcasafalleri.com",
            sinDisponibilidad: "1",
            total: "38"
        },
        {
            id: "845358",
            host: "www.pousadaestreladapraia.com.br",
            sinDisponibilidad: "1",
            total: "8"
        },
        {
            id: "848456",
            host: "www.cabanaskernayel.cl",
            sinDisponibilidad: "1",
            total: "16"
        },
        {
            id: "854952",
            host: "www.hotelbermudas.com.ar",
            sinDisponibilidad: "1",
            total: "7"
        },
        {
            id: "866128",
            host: "www.hotelcaneydelariari.com",
            sinDisponibilidad: "1",
            total: "15"
        },
        {
            id: "875347",
            host: "www.mardebombinhas.com.br",
            sinDisponibilidad: "1",
            total: "29"
        }
    ],
    pagination: {
        items,//cantidad de item de this.state.data
        itemsPerPage,//se obtiene de ShowPages
        pages,//se obtiene de la division de item/itemsPerPage
        actualPage: 1
    },
    filter: ''
};



export default function availability(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                visibleData: getVisibleData(state.data, action.text, state.pagination.actualPage, state.pagination.itemsPerPage),
                pagination: {...state.pagination,pages: Math.ceil(state.pagination.items/action.cantRows), actualPage: 1},
                filter: action.text
            };
        case CHANGE_PAGE_NUMBER:
            return {
                ...state,
                visibleData: getVisibleData(state.data, state.filter, action.numberPage, state.pagination.itemsPerPage ),
                pagination: {...state.pagination, actualPage: action.numberPage}
            };
        case SELECT_SHOW_ROWS:
            return {
                ...state,
                visibleData: getVisibleData(state.data, state.filter, state.pagination.actualPage, action.cantRows ),
                pagination: {...state.pagination, itemsPerPage: action.cantRows, pages: Math.ceil(state.pagination.items/action.cantRows)}
            };
        default:
            return state;
    }
}

const getVisibleData = (data, filter, actualPage, itemsPerPage) => {
    filter = filter.toLowerCase();

    var result = data.filter(obj => {
        return obj.id.includes(filter) || obj.host.includes(filter) ? true : false;
    }).slice(itemsPerPage * (actualPage - 1), itemsPerPage + (itemsPerPage * (actualPage - 1)));

    return result.length ? result : [{result: 'No matching records found'}];
};
