const geolib = require('geolib');
const openflights = require('openflights-cached/iata');

const getDistance = (from, to) => {
  return geolib.getDistance({
    latitude: from.latitude,
    longitude: from.longitude
  }, {
    latitude: to.latitude,
    longitude: to.longitude
  });
};

module.exports = function () {
  let trips = [{
    date: '2003-11-02',
    from: 'LHR',
    to: 'SYD',
    via: ['BKK']
  }, {
    date: '2003-11-27',
    from: 'SYD',
    to: 'CNS'
  }, {
    date: '2003-11-30',
    from: 'CNS',
    to: 'SYD'
  }, {
    date: '2003-12-06',
    from: 'SYD',
    to: 'BHX',
    via: ['DXB']
  }, {
    date: '2005-12-12',
    from: 'LHR',
    to: 'SFO'
  }, {
    date: '2005-12-18',
    from: 'SFO',
    to: 'LHR'
  }, {
    date: '2006-02-07',
    from: 'LHR',
    to: 'SFO'
  }, {
    date: '2006-05-05',
    from: 'SFO',
    to: 'LHR'
  }, {
    date: '2006-06-26',
    from: 'LTN',
    to: 'CIA'
  }, {
    date: '2006-07-01',
    from: 'CIA',
    to: 'LTN'
  }, {
    date: '2006-10-03',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA']
  }, {
    date: '2006-11-05',
    from: 'SFO',
    to: 'JFK'
  }, {
    date: '2006-11-07',
    from: 'JFK',
    to: 'SFO'
  }, {
    date: '2006-12-23',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  }, {
    date: '2007-01-05',
    from: 'BHX',
    to: 'SFO',
    via: ['AMS']
  }, {
    date: '2007-01-19',
    from: 'SFO',
    to: 'LAS'
  }, {
    date: '2007-01-21',
    from: 'LAS',
    to: 'SFO'
  }, {
    date: '2007-03-10',
    from: 'SFO',
    to: 'AUS'
  }, {
    date: '2007-03-12',
    from: 'AUS',
    to: 'SFO'
  }, {
    date: '2007-04-13',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  }, {
    date: '2007-04-23',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA']
  }, {
    date: '2007-07-18',
    from: 'SFO',
    to: 'YUL'
  }, {
    date: '2007-07-22',
    from: 'YUL',
    to: 'SFO',
    via: ['LAX']
  }, {
    date: '2007-08-04',
    from: 'SFO',
    to: 'JFK'
  }, {
    date: '2007-08-08',
    from: 'JFK',
    to: 'SFO'
  }, {
    date: '2007-08-31',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  }, {
    date: '2007-09-10',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA']
  }, {
    date: '2007-11-22',
    from: 'SFO',
    to: 'LAX'
  }, {
    date: '2007-11-24',
    from: 'LAX',
    to: 'SFO'
  }, {
    date: '2007-12-17',
    from: 'SFO',
    to: 'BHX',
    via: ['DUB']
  }, {
    date: '2008-01-15',
    from: 'BHX',
    to: 'SFO',
    via: ['MUC']
  }, {
    date: '2008-02-03',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC']
  }, {
    date: '2008-03-06',
    from: 'BHX',
    to: 'AUS',
    via: ['EWR']
  }, {
    date: '2008-03-11',
    from: 'AUS',
    to: 'SJC',
    via: ['PHX']
  }, {
    date: '2008-03-22',
    from: 'ORD',
    to: 'BHX',
    via: ['EWR']
  }, {
    date: '2008-09-30',
    from: 'BHX',
    to: 'SEA',
    via: ['CPH']
  }, {
    date: '2008-10-10',
    from: 'SFO',
    to: 'ORD'
  }, {
    date: '2008-10-16',
    from: 'MDW',
    to: 'IAD'
  }, {
    date: '2008-10-21',
    from: 'IAD',
    to: 'BHX',
    via: ['MUC']
  }, {
    date: '2009-01-25',
    from: 'LHR',
    to: 'SFO'
  }, {
    date: '2009-02-05',
    from: 'SFO',
    to: 'LHR'
  }, {
    date: '2009-12-17',
    from: 'LHR',
    to: 'AKL',
    via: ['LAX']
  }, {
    date: '2009-12-29',
    from: 'WLG',
    to: 'SYD'
  }, {
    date: '2010-01-02',
    from: 'SYD',
    to: 'MEL'
  }, {
    date: '2010-01-07',
    from: 'MEL',
    to: 'LHR',
    via: ['DXB']
  }, {
    date: '2011-03-10',
    from: 'LHR',
    to: 'AUS',
    via: ['ATL']
  }, {
    date: '2010-11-08',
    from: {
      name: 'Port of Holyhead',
      city: 'Holyhead',
      country: 'United Kingdom',
      latitude: '53.309312',
      longitude: '-4.628937',
      type: 'port'
    },
    to: {
      name: 'Dublin Port',
      city: 'Dublin',
      country: 'Ireland',
      latitude: '53.345312',
      longitude: '-6.194312',
      type: 'port'
    }
  }, {
    date: '2010-11-14',
    from: {
      name: 'Dublin Port',
      city: 'Dublin',
      country: 'Ireland',
      latitude: '53.345312',
      longitude: '-6.194312',
      type: 'port'
    },
    to: {
      name: 'Port of Holyhead',
      city: 'Holyhead',
      country: 'United Kingdom',
      latitude: '53.309312',
      longitude: '-4.628937',
      type: 'port'
    }
  }, {
    date: '2011-03-15',
    from: 'AUS',
    to: 'SFO',
    via: ['LAS']
  }, {
    date: '2011-03-20',
    from: 'SFO',
    to: 'BSB',
    via: ['YYZ', 'GRU']
  }, {
    date: '2011-03-24',
    from: 'BSB',
    to: 'GRU'
  }, {
    date: '2011-03-29',
    from: 'GRU',
    to: 'LHR',
    via: ['AMS']
  }, {
    date: '2011-10-21',
    from: 'LHR',
    to: 'IAD',
    via: ['YUL']
  }, {
    date: '2011-10-25',
    from: 'IAD',
    to: 'YOW'
  }, {
    date: '2011-10-30',
    from: 'YYZ',
    to: 'YVR'
  }, {
    date: '2011-11-06',
    from: 'SFO',
    to: 'LHR',
    via: ['YYZ']
  }, {
    date: '2012-03-08',
    from: 'LHR',
    to: 'AUS',
    via: ['DFW']
  }, {
    date: '2012-03-20',
    from: 'SFO',
    to: 'LHR'
  }, {
    date: '2012-05-09',
    from: 'LGW',
    to: 'AMS'
  }, {
    date: '2012-05-16',
    from: 'LGW',
    to: 'CPH'
  }, {
    date: '2012-05-17',
    from: 'CPH',
    to: 'LGW'
  }, {
    date: '2012-06-02',
    from: {
      name: 'Poole Ferry Terminal',
      city: 'Poole',
      country: 'United Kingdom',
      latitude: '50.708062',
      longitude: '-1.995437',
      type: 'port'
    },
    to: {
      name: 'Guernsey Ferry Port',
      city: 'St. Peter Port',
      country: 'Guernsey',
      latitude: '49.457312',
      longitude: '-2.529062',
      type: 'port'
    }
  }, {
    date: '2012-06-05',
    from: {
      name: 'Guernsey Ferry Port',
      city: 'St. Peter Port',
      country: 'Guernsey',
      latitude: '49.457312',
      longitude: '-2.529062',
      type: 'port'
    },
    to: {
      name: 'Poole Ferry Terminal',
      city: 'Poole',
      country: 'United Kingdom',
      latitude: '50.708062',
      longitude: '-1.995437',
      type: 'port'
    }
  }, {
    date: '2012-09-12',
    from: 'LHR',
    to: 'PDX',
    via: ['ORD']
  }, {
    date: '2012-09-19',
    from: 'PDX',
    to: 'GRU',
    via: ['ORD']
  }, {
    date: '2012-09-28',
    from: 'GRU',
    to: 'LHR',
    via: ['FRA']
  }, {
    date: '2012-11-14',
    from: 'LGW',
    to: 'BFS'
  }, {
    date: '2012-11-17',
    from: 'BFS',
    to: 'LGW'
  }, {
    date: '2013-04-11',
    from: 'LHR',
    to: 'SFO'
  }, {
    date: '2013-04-20',
    from: 'SFO',
    to: 'LHR'
  }, {
    date: '2013-10-07',
    from: 'LGW',
    to: 'EWR'
  }, {
    date: '2013-10-13',
    from: 'EWR',
    to: 'LGW'
  }, {
    date: '2014-11-12',
    from: 'LGW',
    to: 'BFS'
  }, {
    date: '2014-11-15',
    from: 'BFS',
    to: 'LGW'
  }, {
    date: '2015-02-04',
    from: 'LGW',
    to: 'GRU',
    via: ['LIS']
  }, {
    date: '2015-02-22',
    from: 'GRU',
    to: 'SXF',
    via: ['LIS']
  }, {
    date: '2017-05-10',
    from: {
      name: 'Port of Holyhead',
      city: 'Holyhead',
      country: 'United Kingdom',
      latitude: '53.309312',
      longitude: '-4.628937',
      type: 'port'
    },
    to: {
      name: 'Dublin Port',
      city: 'Dublin',
      country: 'Ireland',
      latitude: '53.345312',
      longitude: '-6.194312',
      type: 'port'
    }
  }, {
    date: '2017-05-13',
    from: {
      name: 'Dublin Port',
      city: 'Dublin',
      country: 'Ireland',
      latitude: '53.345312',
      longitude: '-6.194312',
      type: 'port'
    },
    to: {
      name: 'Port of Holyhead',
      city: 'Holyhead',
      country: 'United Kingdom',
      latitude: '53.309312',
      longitude: '-4.628937',
      type: 'port'
    }
  }, {
    date: '2017-07-19',
    from: {
      name: 'Port of Newhaven',
      city: 'Newhaven',
      country: 'United Kingdom',
      latitude: '50.78961',
      longitude: '0.05437',
      type: 'port'
    },
    to: {
      name: 'Port of Dieppe',
      city: 'Dieppe',
      country: 'France',
      latitude: '49.933563',
      longitude: '1.088062',
      type: 'port'
    }
  }, {
    date: '2017-07-24',
    from: {
      name: 'Port of Dieppe',
      city: 'Dieppe',
      country: 'France',
      latitude: '49.933563',
      longitude: '1.088062',
      type: 'port'
    },
    to: {
      name: 'Port of Newhaven',
      city: 'Newhaven',
      country: 'United Kingdom',
      latitude: '50.78961',
      longitude: '0.05437',
      type: 'port'
    }
  }, {
    date: '2018-01-03',
    from: 'LHR',
    to: 'GRU'
  }, {
    date: '2018-01-14',
    from: 'GRU',
    to: 'LHR'
  }, {
    date: '2018-06-04',
    from: {
      name: 'Southampton Cruise Terminal',
      city: 'Southampton',
      country: 'United Kingdom',
      latitude: '50.900976',
      longitude: '-1.413975',
      type: 'port'
    },
    via: [{
      name: 'Haugesund',
      city: 'Haugesund',
      country: 'Norway',
      latitude: '59.446389',
      longitude: '5.298333',
      type: 'port'
    }, {
      name: 'Flåm',
      city: 'Flåm',
      country: 'Norway',
      latitude: '60.8633304',
      longitude: '7.1164061',
      type: 'port'
    }, {
      name: 'Ålesund',
      city: 'Ålesund',
      country: 'Norway',
      latitude: '62.470062',
      longitude: '6.153438',
      type: 'port'
    }, {
      name: 'Åndalsnes',
      city: 'Åndalsnes',
      country: 'Norway',
      latitude: '62.567563',
      longitude: '7.694312',
      type: 'port'
    }, {
      name: 'Trondheim',
      city: 'Trondheim',
      country: 'Norway',
      latitude: '63.440813',
      longitude: '10.399688',
      type: 'port'
    }, {
      name: 'Hellesylt',
      city: 'Hellesylt',
      country: 'Norway',
      latitude: '62.087438',
      longitude: '6.870312',
      type: 'port'
    }, {
      name: 'Geiranger',
      city: 'Geiranger',
      country: 'Norway',
      latitude: '62.102187',
      longitude: '7.204812',
      type: 'port'
    }, {
      name: 'Olden',
      city: 'Olden',
      country: 'Norway',
      latitude: '61.842687',
      longitude: '6.810688',
      type: 'port'
    }, {
      name: 'Strevanger',
      city: 'Strevanger',
      country: 'Norway',
      latitude: '58.972562',
      longitude: '5.729812',
      type: 'port'
    }],
    to: {
      name: 'Southampton Cruise Terminal',
      city: 'Southampton',
      country: 'United Kingdom',
      latitude: '50.900976',
      longitude: '-1.413975',
      type: 'port'
    }
  }, {
    date: '2018-11-15',
    from: 'LGW',
    to: 'KEF'
  }, {
    date: '2018-11-20',
    from: 'KEF',
    to: 'LGW'
  }];

  const emissions = {
    airport: 0.158,
    port: 0.4
  };

  const icons = {
    airport: 'plane',
    port: 'ferry',
    station: 'train'
  };

  // Calculate trips data
  trips = trips.map(trip => {
    const from = trip.from;
    const to = trip.to;
    const via = trip.via || [];
    const {type} = openflights[from] || from;

    let distance = 0;
    const stops = [from, ...via, to];
    const stopsData = [];

    stops.forEach((stop, index) => {
      const thisStop = openflights[stop] || stop;
      const nextStop = openflights[stops[index + 1]] || stops[index + 1];

      if (nextStop) {
        const legDistance = getDistance(thisStop, nextStop);
        distance += legDistance;
      }

      stopsData.push(thisStop);
    });

    distance = Math.ceil(distance / 1000);

    const co2 = Math.ceil(distance * emissions[type]);

    trip.stops = stopsData;
    trip.distance = distance;
    trip.co2 = co2;
    trip.icon = icons[type];

    return trip;
  });

  // Calculate totals
  const total = trips.reduce((acc, n) => {
    for (const prop in n) {
      if (Object.prototype.hasOwnProperty.call(acc, prop)) {
        acc[prop] += n[prop];
      } else {
        acc[prop] = n[prop];
      }
    }

    return acc;
  }, {});

  // Return data object
  return {
    trips,
    total: {
      trips: trips.length,
      distance: total.distance,
      co2: total.co2
    }
  };
};
