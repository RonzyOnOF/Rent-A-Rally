import camryImage from '../images/cars/camry-min.png';
import supra from '../images/cars/supra2-min.png';
import corolla from '../images/cars/corolla-min.png';
import civic from '../images/cars/civic-min.png';
import typeR from '../images/cars/typeR-min.png';
import forester from '../images/cars/subaruForest-min.png'
import impreza from '../images/cars/impreza.png';
import r35 from '../images/cars/r35-min.png';
import rogue from '../images/cars/nissanRogue-min.png';
import altima from '../images/cars/altima-min.png';
import m3 from '../images/cars/m3-min.png';
import cx5 from '../images/cars/cx5-min.png';
import tesla from '../images/cars/tesla-min.png';
import porsche from '../images/cars/porsche-min.png'
import acura from '../images/cars/acura-min.png'
import focus from '../images/cars/focus-min.png'
import sti from '../images/cars/sti-min.png'


export const inventory = [
    {
        make: 'Toyota',
        model: 'Camry',
        year: 2018,
        image: camryImage,
        cost: 25,
        transmission: 'automatic',
        drivetrain: 'FWD',
        sports: false
        
    },
    {
        make: 'Nissan',
        model: 'Altima',
        year: 2018,
        image: altima,
        cost: 30,
        transmission: 'automatic',
        drivetrain: 'FWD',
        sports: false
    },
    {
        make: 'Honda',
        model: 'Civic',
        year: 2020,
        image: civic,
        cost: 28,
        transmission: 'automatic',
        drivetrain: 'FWD',
        sports: false
    },
    {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        image: corolla,
        cost: 25,
        transmission: 'automatic',
        drivetrain: 'FWD',
        sports: false
    },
    {
        make: 'Honda',
        model: 'Type r',
        year: 2018,
        image: typeR,
        cost: 40,
        transmission: 'manual',
        drivetrain: 'FWD',
        sports: true
    },
    {
        make: 'Subaru',
        model: 'Forester',
        year: 2020,
        image: forester,
        cost: 35,
        transmission: 'automatic',
        drivetrain: 'AWD',
        sports: false
    },
    {
        make: 'Toyota',
        model: 'Supra',
        year: 2022,
        image: supra,
        cost: 50,
        transmission: 'automatic',
        drivetrain: 'RWD',
        sports: true
    },
    {
        make: 'Subaru',
        model: 'Impreza',
        year: 2018,
        image: impreza,
        cost: 30,
        transmission: 'automatic',
        drivetrain: 'AWD',
        sports: false
    },
    {
        make: 'Nissan',
        model: 'Rogue',
        year: 2020,
        image: rogue,
        cost: 35,
        transmission: 'automatic',
        drivetrain: 'AWD',
        sports: false
    },
    {
        make: 'Nissan',
        model: 'GTR R35',
        year: 2017,
        image: r35,
        cost: 55,
        transmission: 'automatic',
        drivetrain: 'AWD',
        sports: false
    }, 
    {
        make: 'BMW',
        model: 'M3',
        year: 2018,
        image: m3,
        cost: 55,
        transmission: 'automatic',
        drivetrain: 'RWD',
        sports: true
    },
    {
        make: 'Mazda',
        model: 'Cx-5',
        year: 2020,
        image: cx5,
        cost: 35,
        transmission: 'automatic',
        drivetrain: 'AWD',
        sports: false
    },
    {
        make: 'Tesla',
        model: 'Model 3',
        year: 2019,
        image: tesla,
        cost: 40,
        transmission: 'automatic',
        drivetrain: 'AWD',
        sports: false
    }, 
    {
        make: 'Porsche',
        model: 'Gt3rs',
        year: 2016,
        image: porsche,
        cost: 70,
        transmission: 'automatic',
        drivetrain: 'RWD',
        sports: true
    }, 
    {
        make: 'Acura',
        model: 'Ilx',
        year: 2016,
        image: acura,
        cost: 28,
        transmission: 'automatic',
        drivetrain: 'FWD',
        sports: false
    },
    {
        make: 'Ford',
        model: 'Focus ST',
        year: 2016,
        image: focus,
        cost: 35,
        transmission: 'manual',
        drivetrain: 'FWD',
        sports: true

    },
    {
        make: 'Subaru',
        model: 'WRX STI',
        year: 2020,
        image: sti,
        cost: 35,
        transmission: 'manual',
        drivetrain: 'AWD',
        sports: true
    }];
