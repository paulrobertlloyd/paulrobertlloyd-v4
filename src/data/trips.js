const geolib = require('geolib');
const newbase60 = require('newbase60');
const places = require('./places')();

const getDistance = (from, to) => {
  return geolib.getDistance({
    latitude: from.geo.latitude,
    longitude: from.geo.longitude
  }, {
    latitude: to.geo.latitude,
    longitude: to.geo.longitude
  });
};

const getPlace = id => {
  return places.find(
    place => place.iata === id || place.address['plus-code'] === id
  );
};

module.exports = function () {
  let trips = [{
    date: '2003-11-02',
    from: 'LHR',
    to: 'SYD',
    via: ['BKK']
  },
  {
    date: '2003-11-27',
    from: 'SYD',
    to: 'CNS'
  },
  {
    date: '2003-11-30',
    from: 'CNS',
    to: 'SYD'
  },
  {
    date: '2003-12-06',
    from: 'SYD',
    to: 'BHX',
    via: ['DXB']
  },
  {
    date: '2005-12-12',
    from: 'LHR',
    to: 'SFO'
  },
  {
    date: '2005-12-18',
    from: 'SFO',
    to: 'LHR'
  },
  {
    date: '2006-02-07',
    from: 'LHR',
    to: 'SFO'
  },
  {
    date: '2006-05-05',
    from: 'SFO',
    to: 'LHR'
  },
  {
    date: '2006-06-26',
    from: 'LTN',
    to: 'CIA'
  },
  {
    date: '2006-06-29',
    from: 'XRJ',
    to: 'ZMS'
  },
  {
    date: '2006-06-29',
    from: 'ZMS',
    to: 'XRJ'
  },
  {
    date: '2006-07-01',
    from: 'CIA',
    to: 'LTN'
  },
  {
    date: '2006-10-03',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA']
  },
  {
    date: '2006-11-05',
    from: 'SFO',
    to: 'JFK'
  },
  {
    date: '2006-11-07',
    from: 'JFK',
    to: 'SFO'
  },
  {
    date: '2006-12-23',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  },
  {
    date: '2007-01-05',
    from: 'BHX',
    to: 'SFO',
    via: ['AMS']
  },
  {
    date: '2007-01-19',
    from: 'SFO',
    to: 'LAS'
  },
  {
    date: '2007-01-21',
    from: 'LAS',
    to: 'SFO'
  },
  {
    date: '2007-03-10',
    from: 'SFO',
    to: 'AUS'
  },
  {
    date: '2007-03-12',
    from: 'AUS',
    to: 'SFO'
  },
  {
    date: '2007-04-13',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  },
  {
    date: '2007-04-23',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA']
  },
  {
    date: '2007-07-18',
    from: 'SFO',
    to: 'YUL'
  },
  {
    date: '2007-07-22',
    from: 'YUL',
    to: 'SFO',
    via: ['LAX']
  },
  {
    date: '2007-08-04',
    from: 'SFO',
    to: 'JFK'
  },
  {
    date: '2007-08-08',
    from: 'JFK',
    to: 'SFO'
  },
  {
    date: '2007-08-31',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  },
  {
    date: '2007-09-10',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA']
  },
  {
    date: '2007-11-22',
    from: 'SFO',
    to: 'LAX'
  },
  {
    date: '2007-11-24',
    from: 'LAX',
    to: 'SFO'
  },
  {
    date: '2007-12-17',
    from: 'SFO',
    to: 'BHX',
    via: ['DUB']
  },
  {
    date: '2008-01-15',
    from: 'BHX',
    to: 'SFO',
    via: ['MUC']
  },
  {
    date: '2008-02-03',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  },
  {
    date: '2008-03-06',
    from: 'BHX',
    to: 'AUS',
    via: ['EWR']
  },
  {
    date: '2008-03-11',
    from: 'AUS',
    to: 'SJC',
    via: ['PHX']
  },
  {
    date: '2008-03-22',
    from: 'ORD',
    to: 'BHX',
    via: ['EWR']
  },
  {
    date: '2008-09-30',
    from: 'BHX',
    to: 'SEA',
    via: ['CPH']
  },
  {
    date: '2008-10-10',
    from: 'SFO',
    to: 'ORD'
  },
  {
    date: '2008-10-16',
    from: 'MDW',
    to: 'IAD'
  },
  {
    date: '2008-10-21',
    from: 'IAD',
    to: 'BHX',
    via: ['MUC']
  },
  {
    date: '2009-01-25',
    from: 'LHR',
    to: 'SFO'
  },
  {
    date: '2009-02-05',
    from: 'SFO',
    to: 'LHR'
  },
  {
    date: '2009-12-17',
    from: 'LHR',
    to: 'AKL',
    via: ['LAX']
  },
  {
    date: '2009-12-29',
    from: 'WLG',
    to: 'SYD'
  },
  {
    date: '2010-01-02',
    from: 'SYD',
    to: 'MEL'
  },
  {
    date: '2010-01-07',
    from: 'MEL',
    to: 'LHR',
    via: ['DXB']
  },
  {
    date: '2010-11-08',
    from: '9C5Q895C+PC',
    to: '9C5M8RW3+2G'
  },
  {
    date: '2010-11-14',
    from: '9C5M8RW3+2G',
    to: '9C5Q895C+PC'
  },
  {
    date: '2011-03-10',
    from: 'LHR',
    to: 'AUS',
    via: ['ATL']
  },
  {
    date: '2011-03-15',
    from: 'AUS',
    to: 'SFO',
    via: ['LAS']
  },
  {
    date: '2011-03-20',
    from: 'SFO',
    to: 'BSB',
    via: ['YYZ', 'GRU']
  },
  {
    date: '2011-03-24',
    from: 'BSB',
    to: 'GRU'
  },
  {
    date: '2011-03-29',
    from: 'GRU',
    to: 'LHR',
    via: ['AMS']
  },
  {
    date: '2011-10-21',
    from: 'LHR',
    to: 'IAD',
    via: ['YUL']
  },
  {
    date: '2011-10-25',
    from: 'IAD',
    to: 'YOW'
  },
  {
    date: '2011-10-30',
    from: 'YYZ',
    to: 'YVR'
  },
  {
    date: '2011-11-06',
    from: 'SFO',
    to: 'LHR',
    via: ['YYZ']
  },
  {
    date: '2012-03-08',
    from: 'LHR',
    to: 'AUS',
    via: ['DFW']
  },
  {
    date: '2012-03-20',
    from: 'SFO',
    to: 'LHR'
  },
  {
    date: '2012-05-09',
    from: 'LGW',
    to: 'AMS'
  },
  {
    date: '2012-05-16',
    from: 'LGW',
    to: 'CPH'
  },
  {
    date: '2012-05-17',
    from: 'CPH',
    to: 'LGW'
  },
  {
    date: '2012-06-02',
    from: '9C2WP253+6R',
    to: '8CXVFF4C+W9'
  },
  {
    date: '2012-06-05',
    from: '8CXVFF4C+W9',
    to: '9C2WP253+6R'
  },
  {
    date: '2012-09-12',
    from: 'LHR',
    to: 'PDX',
    via: ['ORD']
  },
  {
    date: '2012-09-19',
    from: 'PDX',
    to: 'GRU',
    via: ['ORD']
  },
  {
    date: '2012-09-28',
    from: 'GRU',
    to: 'LHR',
    via: ['FRA']
  },
  {
    date: '2012-11-14',
    from: 'LGW',
    to: 'BFS'
  },
  {
    date: '2012-11-17',
    from: 'BFS',
    to: 'LGW'
  },
  {
    date: '2013-04-11',
    from: 'LHR',
    to: 'SFO'
  },
  {
    date: '2013-04-20',
    from: 'SFO',
    to: 'LHR'
  },
  {
    date: '2013-10-07',
    from: 'LGW',
    to: 'EWR'
  },
  {
    date: '2013-10-13',
    from: 'EWR',
    to: 'LGW'
  },
  {
    date: '2014-11-12',
    from: 'LGW',
    to: 'BFS'
  },
  {
    date: '2014-11-15',
    from: 'BFS',
    to: 'LGW'
  },
  {
    date: '2015-02-04',
    from: 'LGW',
    to: 'GRU',
    via: ['LIS']
  },
  {
    date: '2015-02-22',
    from: 'GRU',
    to: 'SXF',
    via: ['LIS']
  },
  {
    date: '2017-05-10',
    from: '9C5Q895C+PC',
    to: '9C5M8RW3+2G'
  },
  {
    date: '2017-05-13',
    from: '9C5M8RW3+2G',
    to: '9C5Q895C+PC'
  },
  {
    date: '2017-07-19',
    from: '9F22Q3R3+4V',
    to: '8FX3W3MQ+F6'
  },
  {
    date: '2017-07-24',
    from: '8FX3W3MQ+F6',
    to: '9F22Q3R3+4V'
  },
  {
    date: '2018-01-03',
    from: 'LHR',
    to: 'GRU'
  },
  {
    date: '2018-01-14',
    from: 'GRU',
    to: 'LHR'
  },
  {
    date: '2018-02-07',
    from: '9C2XRVH5+GJ',
    via: ['ZEP', 'QQU'],
    to: 'ZGG'
  },
  {
    date: '2018-02-08',
    from: '9C7QVP6X+XG',
    to: '9C8PCG7G+2C'
  },
  {
    date: '2018-02-10',
    from: '9C8PCG6F+VH',
    to: '9C8PF7CV+7F'
  },
  {
    date: '2018-02-10',
    from: '9C8PF7CV+7F',
    to: '9C8PCG6F+VH'
  },
  {
    date: '2018-02-12',
    from: '9C8PCG7G+2C',
    via: ['9C7QVP6X+XG', 'ZGG', 'QQU', 'ZEP'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2018-02-17',
    from: '9C2XRVH5+GJ',
    via: ['ZEP', 'QQK', 'CBG'],
    to: '9F43J8G4+QJ'
  },
  {
    date: '2018-02-18',
    from: '9F43J8G4+QJ',
    via: ['CBG', 'QQK', 'ZEP'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2018-04-05',
    from: '9C2XRVH5+GJ',
    via: ['ZEP', 'QQS'],
    to: '9C4WJVJF+FW'
  },
  {
    date: '2018-04-06',
    from: '9C4WJVJF+FW',
    via: ['QQS'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2018-05-15',
    from: '9C2XRVH5+GJ',
    via: ['ZEP', 'QQP'],
    to: '9C2RPFH4+PH'
  },
  {
    date: '2018-05-17',
    from: '9C2RPFH4+PH',
    via: ['9C2P5HC4+67'],
    to: '9C2P5GWP+R9'
  },
  {
    date: '2018-05-20',
    from: '9C2P5GWP+R9',
    via: [
      '9C2P5HC4+67',
      '9C3XF25H+8C',
      '9C3XFR8H+3M',
      '9C2XRRPH+2H'
    ],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2018-06-04',
    from: '9C2WVHVX+CX',
    via: [
      '9FF7C764+CW',
      '9FG9V479+FH',
      '9FJ8F592+RV',
      '9FJ9HM9V+2P',
      '9FMGC9QW+8R',
      '9FJ83VPF+6H',
      '9FJ94623+VW',
      '9FH8RRV6+37',
      '9FC7XPFH+2W'
    ],
    to: '9C2WVHVX+CX'
  },
  {
    date: '2018-08-03',
    from: '9C2XRVH5+GJ',
    via: ['ZEP', 'QQU', 'QQN'],
    to: '9C4WH2M7+PQ'
  },
  {
    date: '2018-08-04',
    from: '9C4WH2M7+PQ',
    via: ['QQN', '9C5VQ74V+44'],
    to: '9C5VM93F+26'
  },
  {
    date: '2018-08-05',
    from: '9C5VM93F+26',
    via: ['9C5VFQQ5+24', 'QQY'],
    to: 'NCL'
  },
  {
    date: '2018-08-07',
    from: 'NCL',
    to: 'ZXE'
  },
  {
    date: '2018-08-10',
    from: 'ZXE',
    via: ['QQK', 'ZEP'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2018-09-21',
    from: '9C2XRVH5+GJ',
    via: ['ZEP', 'QQS', 'ZYR', 'QKL'],
    to: 'QPP'
  },
  {
    date: '2018-10-04',
    from: 'QPP',
    via: ['ZMB', 'ZGH'],
    to: 'XFP'
  },
  {
    date: '2018-10-07',
    from: 'XFP',
    via: ['ZGH'],
    to: 'ZMB'
  },
  {
    date: '2018-10-10',
    from: 'ZMB',
    via: ['QKL', 'ZYR', 'QQS'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2018-11-15',
    from: 'LGW',
    to: 'KEF'
  },
  {
    date: '2018-11-20',
    from: 'KEF',
    to: 'LGW'
  },
  {
    date: '2019-04-12',
    from: '9C2XRVH5+GJ',
    via: ['ZEP'],
    to: '9F3399PC+5W'
  },
  {
    date: '2019-04-14',
    from: '9F3399PC+5W',
    via: ['QDH', '9F22VH5G+5P', '9F22V2C6+6H'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2019-06-09',
    from: '9C2XRVH5+GJ',
    via: ['QQS', 'ZYR', 'XHN'],
    to: '9F27RPX4+V4'
  },
  {
    date: '2019-06-12',
    from: '9F27RPX4+V4',
    to: 'ZYA'
  },
  {
    date: '2019-06-16',
    from: 'ZYA',
    via: ['ZYR', 'QQS'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2019-09-01',
    from: '9C2XRVH5+GJ',
    via: ['QQS', 'XPG', 'XGB', '8CMW9639+67'],
    to: '8CCGQW92+47'
  },
  {
    date: '2019-09-08',
    from: '8CCGQW92+47',
    via: ['8CMW9639+67', 'XGB', 'XPG', 'QQS'],
    to: '9C2XRVH5+GJ'
  },
  {
    date: '2020-01-24',
    from: '9C2XRVH5+GJ',
    via: ['9C2XR9J5+9X', 'QQS', 'ZYR', 'QKL'],
    to: 'ZMB'
  },
  {
    date: '2020-01-25',
    from: 'ZMB',
    to: 'ZGH'
  },
  {
    date: '2020-01-28',
    from: 'ZGH',
    via: ['9F8M5Q57+47'],
    to: 'XEV'
  },
  {
    date: '2020-02-01',
    from: 'XEV',
    via: ['XWL'],
    to: 'XZO'
  },
  {
    date: '2020-02-05',
    from: 'XZO',
    via: ['XWL'],
    to: 'ZGH'
  },
  {
    date: '2020-02-06',
    from: 'ZGH',
    via: ['ZMB'],
    to: 'QKL'
  },
  {
    date: '2020-02-08',
    from: 'QKL',
    via: ['ZYR', 'QQS'],
    to: '9C2XRVH5+GJ'
  }];

  const emissions = {
    airport: 0.158,
    port: 0.4,
    station: 0.032
  };

  // Calculate trips data
  trips = trips.map((trip, index) => {
    const from = trip.from;
    const to = trip.to;
    const via = trip.via || [];

    let distance = 0;
    const stops = [from, ...via, to];
    const stopsData = [];

    stops.forEach((stop, index) => {
      const thisStop = getPlace(stop);
      let nextStop = stops[index + 1];
      if (nextStop) {
        nextStop = getPlace(nextStop);
        const legDistance = getDistance(thisStop, nextStop);
        distance += legDistance;
      }

      stopsData.push(thisStop);
    });

    distance = Math.ceil(distance / 1000);

    const fromPlace = getPlace(from);
    const toPlace = getPlace(to);
    const {type} = fromPlace || from;

    // Trip UID
    let counter = 1;
    const previousTrip = (trips[index - 1]);
    if (previousTrip && previousTrip.date === trip.date) {
      counter++;
    }

    const date = new Date(trip.date);
    const date60 = newbase60.DateToSxg(date); // eslint-disable-line new-cap
    trip.id = `${date60}${counter}`;

    // Trip metadata
    trip.stops = stopsData;
    trip.distance = distance;
    trip.co2 = Math.ceil(distance * emissions[type]);

    // Page metadata
    trip.title = `${fromPlace.address.locality}, ${fromPlace.address['country-name']}\n➔ ${toPlace.address.locality}, ${toPlace.address['country-name']}`;

    trip.summary = `A trip of ${trip.distance} km that emitted roughly ${trip.co2} kg of CO₂.`;

    // GeoJson
    const coordinates = [];
    stops.forEach(stop => {
      const {geo} = getPlace(stop);
      coordinates.push([geo.longitude, geo.latitude]);
    });

    trip.geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {
          stroke: '%23e02',
          'stroke-opacity': 0.5,
          'stroke-width': 4
        },
        geometry: {
          type: 'LineString',
          coordinates
        }
      }]
    };

    return trip;
  });

  return trips;
};
