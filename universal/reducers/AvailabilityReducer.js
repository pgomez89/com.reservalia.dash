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
        }
    ],
    pagination: {
        items : 79,//cantidad de item de this.state.data
        itemsForPage: 10,//se obtiene de ShowPages
        pages: 8,//se obtiene de la division de item/itemsForPage
        actualPage: 1
    },
    filter: ''
};

export default function availability(state = initialState, action) {
    switch (action.type){
        default:
            return state;
    }
}