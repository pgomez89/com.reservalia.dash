import React, { Component, PropTypes } from 'react';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';
import Filter from '../../components/Filter';

const propTypes = {};

//Para pruebas.
const data = [
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
    }
];

class AvailabilityBox extends Component {
    render() {
        return (
            <div className="AvailabilityBox" id="page-wrapper">
                <h1>Disponibilidad</h1>
                <hr />
                <div className="row tool-bar">
                    <div className="col-lg-7">
                        <SearchBoxDate />
                    </div>
                    <div className="col-lg-5">
                        <Filter />
                    </div>
                </div>
                <Table data={data}/>
            </div>
        );
    }
}

AvailabilityBox.propTypes = propTypes;
export default AvailabilityBox;
